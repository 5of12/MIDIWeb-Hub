import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium, type Browser, type Page } from 'playwright';
import { initialSites } from '../src/data';
import type { Site } from '../src/types';

const rootDir = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);
const previewDir = path.join(rootDir, 'public', 'site-previews');
const manifestPath = path.join(previewDir, 'manifest.json');
const concurrency = Number(process.env.PREVIEW_CONCURRENCY ?? 2);
const navigationTimeoutMs = Number(process.env.PREVIEW_TIMEOUT_MS ?? 18_000);

interface PreviewManifest {
  generatedAt: string;
  previews: Record<string, string>;
}

async function writeManifest(previews: Record<string, string>) {
  const manifest: PreviewManifest = {
    generatedAt: new Date().toISOString(),
    previews,
  };

  await mkdir(previewDir, { recursive: true });
  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
}

async function captureSitePreview(browser: Browser, site: Site) {
  const context = await browser.newContext({
    colorScheme: 'dark',
    deviceScaleFactor: 1,
    ignoreHTTPSErrors: true,
    reducedMotion: 'reduce',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36 MIDIWeb-Hub-PreviewBot/1.0',
    viewport: {
      height: 720,
      width: 1180,
    },
  });

  try {
    const page = await context.newPage();
    await page.goto(site.url, {
      timeout: navigationTimeoutMs,
      waitUntil: 'domcontentloaded',
    });
    await page.waitForLoadState('networkidle', { timeout: 4000 }).catch(() => {
      // A preview is still useful when a page keeps streaming assets.
    });

    await page.evaluate(() => {
      document
        .querySelectorAll('video')
        .forEach((video) => video.pause());
    });

    const fileName = `${site.id}.jpg`;
    const filePath = path.join(previewDir, fileName);

    await captureViewport(page, filePath);

    return `site-previews/${fileName}`;
  } finally {
    await context.close();
  }
}

async function captureViewport(page: Page, filePath: string) {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.screenshot({
        animations: 'disabled',
        caret: 'hide',
        fullPage: false,
        path: filePath,
        quality: 48,
        type: 'jpeg',
      });
      return;
    } catch (error) {
      if (attempt === 3) throw error;
      await page.waitForTimeout(750);
    }
  }
}

async function main() {
  await mkdir(previewDir, { recursive: true });

  let browser: Browser | undefined;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (error) {
    console.warn(
      '[previews] Chromium is not installed. Run `npx playwright install chromium` to generate site previews.',
    );
    await writeManifest({});
    return;
  }

  const previews: Record<string, string> = {};
  const queue = [...initialSites];

  async function worker() {
    while (queue.length > 0) {
      const site = queue.shift();
      if (!site) return;

      try {
        console.log(`[previews] Capturing ${site.name}`);
        previews[site.id] = await captureSitePreview(browser!, site);
      } catch (error) {
        const reason =
          error instanceof Error ? error.message.split('\n')[0] : String(error);
        console.warn(`[previews] Skipped ${site.name}: ${reason}`);
      }
    }
  }

  try {
    await Promise.all(
      Array.from(
        { length: Math.max(1, Math.min(concurrency, initialSites.length)) },
        () => worker(),
      ),
    );
  } finally {
    await browser.close();
  }

  await writeManifest(previews);
  console.log(
    `[previews] Wrote ${Object.keys(previews).length} preview entries to ${manifestPath}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
