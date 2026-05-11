import React from 'react';
import { Site } from '../types';
import { ExternalLink, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

interface SiteCardProps {
  site: Site;
  status: 'loading' | 'up' | 'down';
}

export function SiteCard({ site, status }: SiteCardProps) {
  const domain = new URL(site.url).hostname;
  const faviconUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;

  return (
    <div className={`group relative flex flex-col bg-zinc-900 border rounded-xl overflow-hidden transition-colors duration-300 ${
      status === 'down' 
        ? 'border-orange-500/50 bg-orange-500/5 hover:border-orange-500' 
        : 'border-zinc-800 hover:border-emerald-500/50'
    }`}>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center overflow-hidden border border-zinc-700">
            <img 
              src={faviconUrl} 
              alt={`${site.name} icon`} 
              className="w-8 h-8 object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM1MjUyNWIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiAxNnYtNCIvPjxwYXRoIGQ9Ik0xMiA4aC4wMSIvPjwvc3ZnPg==';
              }}
            />
          </div>
          <div className="flex items-center space-x-2">
            {status === 'loading' && <Loader2 className="w-4 h-4 text-zinc-500 animate-spin" />}
            {status === 'up' && <span title="Site is reachable"><CheckCircle2 className="w-4 h-4 text-emerald-500" /></span>}
            {status === 'down' && <span title="Site may be unreachable"><AlertCircle className="w-4 h-4 text-orange-500" /></span>}
          </div>
        </div>
        
        <div className="mb-2 flex items-center gap-2">
          <h3 className={`text-lg font-semibold transition-colors ${
            status === 'down' ? 'text-orange-400 group-hover:text-orange-300' : 'text-zinc-100 group-hover:text-emerald-400'
          }`}>
            {site.name}
          </h3>
          {site.sponsor?.active && (
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-emerald-300">
              Supporter
            </span>
          )}
        </div>
        
        <p className="text-sm text-zinc-400 mb-4 line-clamp-2 flex-1">
          {site.description || 'A WebMIDI-capable website.'}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {site.tags.map(tag => (
            <span key={tag} className="px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-md border border-zinc-700">
              {tag}
            </span>
          ))}
        </div>
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
      
      <div className={`px-6 py-3 border-t flex items-center justify-between text-sm transition-colors ${
        status === 'down'
          ? 'bg-orange-500/10 border-orange-500/20 text-orange-500/70 group-hover:text-orange-400'
          : 'bg-zinc-950/50 border-zinc-800 text-zinc-500 group-hover:text-zinc-300'
      }`}>
        <span className="truncate pr-4">{domain}</span>
        <ExternalLink className="w-4 h-4 flex-shrink-0" />
      </div>
    </div>
  );
}
