import { useEffect, useState } from 'react';

interface PreviewManifest {
  generatedAt?: string | null;
  previews?: Record<string, string>;
}

function withAppBase(path: string) {
  if (/^(https?:|data:|\/)/.test(path)) return path;

  const base = import.meta.env.BASE_URL || './';
  return `${base}${path.replace(/^\.?\//, '')}`;
}

function scheduleIdle(callback: () => void) {
  if (
    typeof window.requestIdleCallback === 'function' &&
    typeof window.cancelIdleCallback === 'function'
  ) {
    const idleId = window.requestIdleCallback(callback, { timeout: 1800 });
    return () => window.cancelIdleCallback(idleId);
  }

  const timeoutId = globalThis.setTimeout(callback, 400);
  return () => globalThis.clearTimeout(timeoutId);
}

export function useSitePreviews() {
  const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({});

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const cancelIdleTask = scheduleIdle(async () => {
      try {
        const response = await fetch(
          withAppBase('site-previews/manifest.json'),
          {
            cache: 'force-cache',
            signal: controller.signal,
          },
        );

        if (!response.ok) return;

        const manifest = (await response.json()) as PreviewManifest;
        const previews = manifest.previews ?? {};

        if (!isMounted) return;

        setPreviewUrls(
          Object.fromEntries(
            Object.entries(previews).map(([siteId, previewPath]) => [
              siteId,
              withAppBase(previewPath),
            ]),
          ),
        );
      } catch (error) {
        if (!controller.signal.aborted) {
          setPreviewUrls({});
        }
      }
    });

    return () => {
      isMounted = false;
      controller.abort();
      cancelIdleTask();
    };
  }, []);

  return previewUrls;
}
