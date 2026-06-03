import React from 'react';
import { Site } from '../types';
import { ExternalLink, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

interface SiteRowProps {
  site: Site;
  status: 'loading' | 'up' | 'down';
  previewImageUrl?: string;
}

export function SiteRow({ site, status, previewImageUrl }: SiteRowProps) {
  const domain = new URL(site.url).hostname;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;

  return (
    <article
      className={`group relative flex flex-col sm:flex-row items-start sm:items-center p-4 bg-zinc-900 border rounded-xl transition-colors duration-300 gap-4 ${
      status === 'down'
        ? 'border-orange-500/50 bg-orange-500/5 hover:border-orange-500'
        : 'border-zinc-800 hover:border-emerald-500/50'
    }`}
      aria-describedby={`${site.id}-row-description`}
      aria-labelledby={`${site.id}-row-title`}
    >
      {previewImageUrl && (
        <img
          src={previewImageUrl}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          className="absolute inset-0 h-full w-full rounded-xl object-cover opacity-50 transition-opacity duration-700 group-hover:opacity-65"
        />
      )}
      <div
        className={`absolute inset-0 rounded-xl ${
          status === 'down'
            ? 'bg-orange-950/85'
            : 'bg-gradient-to-r from-zinc-950/90 via-zinc-950/75 to-zinc-950/55'
        } transition-colors duration-500`}
      />
      <div className="relative flex-shrink-0 w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700">
        <img 
          src={faviconUrl} 
          alt=""
          aria-hidden="true"
          className="w-8 h-8 object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1MjUyNWIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiAxNnYtNCIvPjxwYXRoIGQ9Ik0xMiA4aC4wMSIvPjwvc3ZnPg==';
          }}
        />
      </div>
      
      <div className="relative flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 id={`${site.id}-row-title`} className={`text-lg font-semibold transition-colors truncate ${
            status === 'down' ? 'text-orange-400 group-hover:text-orange-300' : 'text-zinc-100 group-hover:text-emerald-400'
          }`}>
            {site.name}
          </h3>
          {site.sponsor?.active && (
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-emerald-300">
              Supporter
            </span>
          )}
          {status === 'loading' && (
            <span
              className="flex-shrink-0 flex"
              aria-label={`${site.name} reachability is loading`}
            >
              <Loader2
                className="w-4 h-4 text-zinc-500 animate-spin"
                aria-hidden="true"
              />
            </span>
          )}
          {status === 'up' && (
            <span
              title="Site is reachable"
              className="flex-shrink-0 flex"
              aria-label={`${site.name} is reachable`}
            >
              <CheckCircle2
                className="w-4 h-4 text-emerald-500"
                aria-hidden="true"
              />
            </span>
          )}
          {status === 'down' && (
            <span
              title="Site may be unreachable"
              className="flex-shrink-0 flex"
              aria-label={`${site.name} may be unreachable`}
            >
              <AlertCircle
                className="w-4 h-4 text-orange-500"
                aria-hidden="true"
              />
            </span>
          )}
        </div>
        <p id={`${site.id}-row-description`} className="text-sm text-zinc-400 truncate">
          {site.description || 'A WebMIDI-capable website.'}
        </p>
      </div>
      
      <div className="relative flex flex-wrap gap-2 sm:w-1/3 justify-start sm:justify-end">
        {site.tags.map(tag => (
          <span key={tag} className="px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700">
            {tag}
          </span>
        ))}
      </div>
      
      <a 
        href={site.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`Visit ${site.name}`}
      >
        <span className="sr-only">Visit {site.name}</span>
      </a>
      
      <div className="relative hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 group-hover:text-emerald-400 group-hover:bg-emerald-400/10 transition-colors">
        <ExternalLink className="w-4 h-4" aria-hidden="true" />
      </div>
    </article>
  );
}
