import React from 'react';
import { X, Github, Copy, Check } from 'lucide-react';

interface SubmitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SubmitModal({ isOpen, onClose }: SubmitModalProps) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const prTemplate = `{
  id: 'your-site-id',
  name: 'Your Site Name',
  url: 'https://yoursite.com',
  tags: ['synth', 'webaudio'],
  description: 'A short description of your site.'
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prTemplate);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-2xl max-h-full flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-describedby="modal-description"
        aria-labelledby="modal-title"
      >
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-zinc-800 shrink-0">
          <h2 id="modal-title" className="text-xl font-bold text-zinc-100 flex items-center gap-2">
            <Github className="w-6 h-6 text-emerald-500" aria-hidden="true" />
            Submit a New Site
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-lg transition-colors"
            aria-label="Close modal"
            type="button"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
        
        <div className="p-4 sm:p-6 space-y-6 text-zinc-300 overflow-y-auto">
          <p id="modal-description">
            We welcome contributions from the community! 👋 To add a new WebMIDI site to the directory, please submit a Pull Request to our GitHub repository.
          </p>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-zinc-100">How to contribute:</h3>
            <ol className="list-decimal list-inside space-y-3 text-sm">
              <li>Fork the repository at <a href="https://github.com/5of12/MIDIWeb-Hub" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">github.com/5of12/MIDIWeb-Hub</a></li>
              <li>Add your site to the <code className="px-1.5 py-0.5 bg-zinc-800 text-emerald-300 rounded">src/data.ts</code> file using the format below.</li>
              <li>Run <code className="px-1.5 py-0.5 bg-zinc-800 text-emerald-300 rounded">npm run format:data</code> to prettify the data!</li>
              <li>Commit your changes and push your fork.</li>
              <li>Open a Pull Request with a brief description of the site.</li>
            </ol>
          </div>
          
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-2 bg-zinc-950 border border-zinc-800 border-b-0 rounded-t-lg">
              <span className="text-xs font-mono text-zinc-500">Site Object Format</span>
              <button 
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors"
                type="button"
                aria-label={
                  copied
                    ? 'Site object format copied to clipboard'
                    : 'Copy site object format to clipboard'
                }
              >
                {copied ? (
                  <Check
                    className="w-3.5 h-3.5 text-emerald-500"
                    aria-hidden="true"
                  />
                ) : (
                  <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                )}
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="p-4 bg-black border border-zinc-800 rounded-b-lg overflow-x-auto text-sm font-mono text-emerald-400">
              <code>{prTemplate}</code>
            </pre>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 bg-zinc-950/50 border-t border-zinc-800 flex justify-end shrink-0">
          <a 
            href="https://github.com/5of12/MIDIWeb-Hub" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold rounded-lg transition-colors flex items-center gap-2"
            aria-label="Go to the MIDIWeb Hub GitHub repository, opens in a new tab"
          >
            <Github className="w-5 h-5" aria-hidden="true" />
            Go to Repository
          </a>
        </div>
      </div>
    </div>
  );
}
