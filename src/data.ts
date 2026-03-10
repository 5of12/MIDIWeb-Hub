import { Site } from './types';

export const initialSites: Site[] = [
  {
    id: 'microtonal',
    name: 'microtonal',
    url: 'https://www.websynths.com/microtonal/',
    tags: ['synth', 'microtonal', 'keyboard'],
    description: 'A microtonal web synthesizer with advanced tuning capabilities.',
  },
  {
    id: 'midi-city',
    name: 'midi.city',
    url: 'https://midi.city',
    tags: ['synth', 'keyboard', 'playback', 'sequencer'],
    description: 'A collaborative online MIDI synthesizer and sequencer.',
  },
  {
    id: 'midi-monitor',
    name: 'MIDI Monitor',
    url: 'https://www.midimonitor.com',
    tags: ['utility', 'sysex', 'monitor'],
    description: 'A tool to monitor and analyze incoming MIDI messages in real-time.',
  },
  {
    id: 'midi-surf',
    name: 'MIDI Surf',
    url: 'https://midisurf.app',
    tags: ['controller', 'drum', 'performance'],
    description: 'A flexible and powerful MIDI controller anywhere you have a browser!.',
  },  
  {
    id: 'retrokits',
    name: 'RetroKits - Small, Smart Music Tools',
    url: 'https://retrokits.com',
    tags: ['hardware', 'sysex', 'utility', 'company'],
    description: 'Small, Smart Music Tools with great MIDI hardware utility solutions.',
  },  
  {
    id: 'ryoturia',
    name: 'ryoturia - ThreeJS Synth',
    url: 'https://ryoturia.netlify.app/',
    tags: ['synth', 'webaudio', '3d'],
    description: 'An experimental 3D synthesizer built with Three.js and Web Audio API.',
  },
  {
    id: 'sound-fonts',
    name: 'Sound Fonts',
    url: 'https://chromatone.center/practice/synth/soundfont/',
    tags: ['synth', 'soundfont', 'playback'],
    description: 'A web-based soundfont player and synthesizer.',
  },
  {
    id: 'studio-code',
    name: 'Studio Code Utilities',
    url: 'https://studiocode.dev/utilities/',
    tags: ['utility', 'sysex', 'tools'],
    description: 'A collection of utilities for MIDI developers and musicians.',
  },
  {
    id: 'synthesiamaniac',
    name: 'Synthesiamaniac MIDI',
    url: 'https://synthesiamaniac.com/downloads/',
    tags: ['playback', 'midi', 'library', 'playback'],
    description: 'A large collection of MIDI files and playback tools.',
  },
  {
    id: 'tonejs',
    name: 'Tone.js Demos',
    url: 'https://tonejs.github.io/demos',
    tags: ['webaudio', 'synth', 'drums', 'library'],
    description: 'Interactive demonstrations of the Tone.js Web Audio framework.',
  },
  {
    id: 'webmidijs',
    name: 'WebMidi.js',
    url: 'https://webmidijs.org',
    tags: ['utility', 'library', 'api'],
    description: 'A JavaScript library that makes the Web MIDI API easier to use.',
  },
  {
    id: 'playtronica',
    name: 'Web Synths Collection',
    url: 'https://synth.playtronica.com',
    tags: ['synth', 'webaudio', 'collection'],
    description: 'A curated collection of web-based synthesizers by Playtronica.',
  }
];

export const allTags = Array.from(
  new Set(initialSites.flatMap((site) => site.tags))
).sort();
