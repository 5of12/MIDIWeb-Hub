import React, { useState, useMemo, useEffect } from 'react';
import { LayoutGrid, List, Search, Plus, Github, Tag as TagIcon, EyeOff, Eye } from 'lucide-react';
import { initialSites, allTags } from './data';
import { SiteCard } from './components/SiteCard';
import { SiteRow } from './components/SiteRow';
import { SubmitModal } from './components/SubmitModal';
import { ViewMode } from './types';
import monologo from './monologo.svg';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hideUnreachable, setHideUnreachable] = useState(false);
  const [siteStatuses, setSiteStatuses] = useState<Record<string, 'loading' | 'up' | 'down'>>({});

  useEffect(() => {
    initialSites.forEach(async (site) => {
      setSiteStatuses(prev => ({ ...prev, [site.id]: 'loading' }));
      try {
        // Using no-cors mode allows us to ping the site without CORS errors.
        // It returns an opaque response (status 0), but if the domain is completely 
        // unreachable (e.g. DNS failure like our dead site example), fetch will throw an error.
        await fetch(site.url, { mode: 'no-cors', cache: 'no-store' });
        setSiteStatuses(prev => ({ ...prev, [site.id]: 'up' }));
      } catch (error) {
        setSiteStatuses(prev => ({ ...prev, [site.id]: 'down' }));
      }
    });
  }, []);

  const filteredSites = useMemo(() => {
    return initialSites.filter(site => {
      if (hideUnreachable && siteStatuses[site.id] === 'down') return false;

      const matchesSearch = site.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            site.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            site.url.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTags = selectedTags.length === 0 || 
                          selectedTags.every(tag => site.tags.includes(tag));
      
      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags, hideUnreachable, siteStatuses]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <img src={monologo} alt="" aria-hidden="true" className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-zinc-100">
                MIDIWeb Hub
              </h1>
              <p className="text-xs font-medium text-emerald-400 tracking-wide uppercase">
                WebMIDI-capable Sites
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://midiweb.cc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              About MIDIWeb
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-white text-zinc-900 font-semibold rounded-lg transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Submit Site</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 mb-6 leading-tight">
            Explore the best of <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">WebMIDI</span>
          </h2>
          <p className="text-lg text-zinc-400 leading-relaxed">
            A curated directory of synthesizers, utilities, and experiments that leverage the Web MIDI API directly in your browser. Connect your MIDI controller and start playing.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search sites, URLs, or descriptions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
            />
          </div>
          
          <div className="flex items-center gap-4 shrink-0">
            <button
              onClick={() => setHideUnreachable(!hideUnreachable)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl border transition-colors ${
                hideUnreachable 
                  ? 'bg-orange-500/10 border-orange-500/50 text-orange-400' 
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              {hideUnreachable ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
              <span className="text-sm font-medium">
                {hideUnreachable ? 'Show Unreachable' : 'Hide Unreachable'}
              </span>
            </button>

            <div className="flex items-center gap-2 bg-zinc-900 p-1 rounded-xl border border-zinc-800">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${viewMode === 'grid' ? 'bg-zinc-800 text-emerald-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                aria-label="Grid view"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg flex items-center gap-2 transition-colors ${viewMode === 'list' ? 'bg-zinc-800 text-emerald-400 shadow-sm' : 'text-zinc-500 hover:text-zinc-300'}`}
                aria-label="List view"
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-zinc-400">
            <TagIcon className="w-4 h-4" />
            <span>Filter by tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg border transition-all duration-200 ${
                    isSelected 
                      ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
                >
                  {tag}
                </button>
              );
            })}
            {selectedTags.length > 0 && (
              <button
                onClick={() => setSelectedTags([])}
                className="px-3 py-1.5 text-sm font-medium text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between text-sm text-zinc-500">
          <span>Showing {filteredSites.length} {filteredSites.length === 1 ? 'site' : 'sites'}</span>
        </div>

        {filteredSites.length === 0 ? (
          <div className="text-center py-24 bg-zinc-900/50 border border-zinc-800 border-dashed rounded-2xl">
            <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-zinc-500" />
            </div>
            <h3 className="text-xl font-semibold text-zinc-100 mb-2">No sites found</h3>
            <p className="text-zinc-400 max-w-md mx-auto">
              We couldn't find any sites matching your search criteria. Try adjusting your filters or search query.
            </p>
            <button 
              onClick={() => {
                setSearchQuery('');
                setSelectedTags([]);
              }}
              className="mt-6 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium rounded-lg transition-colors"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" 
              : "flex flex-col gap-4"
          }>
            {filteredSites.map(site => (
              viewMode === 'grid' 
                ? <SiteCard key={site.id} site={site} status={siteStatuses[site.id] || 'loading'} /> 
                : <SiteRow key={site.id} site={site} status={siteStatuses[site.id] || 'loading'} />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950 py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
              <img src={monologo} alt="" aria-hidden="true" className="w-4 h-4 invert" />
            </div>
            <span className="text-zinc-400 font-medium">MIDIWeb Hub</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/antiero/MIDIWeb-Hub" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://midiweb.cc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-zinc-300 transition-colors"
            >
              MIDIWeb.cc
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-zinc-900">
          <p className="text-xs text-zinc-600 leading-relaxed max-w-3xl">
            MIDIWeb and MIDIWeb Hub are created by 5of12. They are not affiliated with, endorsed by, sponsored by, or officially connected with The MIDI Association. Any references to MIDI, WebMIDI, MIDI standards, or related technologies are used for descriptive and informational purposes only.
          </p>
        </div>
      </footer>

      {/* Modal */}
      <SubmitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
