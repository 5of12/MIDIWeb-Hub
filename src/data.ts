import { Site } from './types';

export const initialSites: Site[] = [
  {
    id: 'sightread',
    name: 'SIGHTREAD',
    url: 'https://sightread.dev/',
    tags: ['sightread', 'chord', 'training', 'piano', 'record'],
    description: 'Plug in your keyboard and learn, right in your browser',
  },
  {
    id: 'mia',
    name: 'MIA',
    url: 'https://iammia.tiiny.site/MIA.html',
    tags: ['practice', 'chord', 'training', 'piano', 'guitar'],
    description: 'Musical Instrument Assistant - Responsive Music Workspace',
  },
  {
    id: 'hexatone',
    name: 'PLAINSOUND HEXATONE',
    url: 'https://hexatone.plainsound.org',
    tags: ['synth', 'webaudio', 'lumatone', 'isomorphic keyboard'],
    description:
      'A microtonal app for mapping keyboards and 2D controllers to custom tunings.',
  },
  {
    id: 'microtonal',
    name: 'microtonal',
    url: 'https://www.websynths.com/microtonal/',
    tags: ['synth', 'microtonal', 'keyboard'],
    description:
      'A microtonal web synthesizer with advanced tuning capabilities.',
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
    description:
      'A tool to monitor and analyze incoming MIDI messages in real-time.',
  },
  {
    id: 'midi-surf',
    name: 'MIDI Surf',
    url: 'https://midisurf.app',
    tags: ['controller', 'drum', 'performance'],
    description:
      'A flexible and powerful MIDI controller anywhere you have a browser!.',
  },
  {
    id: 'retrokits',
    name: 'RetroKits - Small, Smart Music Tools',
    url: 'https://retrokits.com',
    tags: ['hardware', 'sysex', 'utility', 'company'],
    description:
      'Small, Smart Music Tools with great MIDI hardware utility solutions.',
  },
  {
    id: 'ryoturia',
    name: 'ryoturia - ThreeJS Synth',
    url: 'https://ryoturia.netlify.app/',
    tags: ['synth', 'webaudio', '3d'],
    description:
      'An experimental 3D synthesizer built with Three.js and Web Audio API.',
  },
  {
    id: 'sound-fonts',
    name: 'Sound Fonts',
    url: 'https://chromatone.center/practice/synth/soundfont/',
    tags: ['synth', 'soundfont', 'playback'],
    description: 'A web-based soundfont player and synthesizer.',
  },
  {
    id: 'sr-training',
    name: 'Sight Reading Training',
    url: 'https://sightreading.training/',
    tags: ['training', 'piano', 'webaudio'],
    description:
      'a free way to practice sight reading by playing randomly generated sheet music',
  },
  {
    id: 'soundmondo',
    name: 'Soundmondo',
    url: 'https://soundmondo.yamahasynth.com/',
    tags: ['hardware', 'sysex', 'utility', 'company'],
    description:
      'Soundmondo is a social sound-sharing community for creating, sharing and exploring synthesizer sounds.',
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
    description:
      'Interactive demonstrations of the Tone.js Web Audio framework.',
  },
  {
    id: 'webmidijs',
    name: 'WebMidi.js',
    url: 'https://webmidijs.org',
    tags: ['utility', 'library', 'api'],
    description:
      'A JavaScript library that makes the Web MIDI API easier to use.',
  },
  {
    id: 'playtronica',
    name: 'Web Synths Collection',
    url: 'https://synth.playtronica.com',
    tags: ['synth', 'webaudio', 'collection'],
    description:
      'A curated collection of web-based synthesizers by Playtronica.',
  },
  {
    id: 'piano-projector',
    name: 'Piano Projector',
    url: 'https://pianoprojector.app',
    tags: ['keyboard'],
    description:
      'A versatile and easy-to-use on-screen virtual piano keyboard.',
  },
  {
    id: 'piano-trainer-studio',
    name: 'Piano Trainer Studio',
    url: 'https://pianotrainerstudio.com',
    tags: ['training', 'piano', 'midi', 'playback', 'webaudio'],
    description:
      'Interactive piano practice app with sheet music playback, MIDI input, and training modes for learning songs.',
  },
  {
    id: 'piano-ml',
    name: 'PianoML',
    url: 'https://pianoml.org',
    tags: [
      'piano',
      'score',
      'practice',
      'library',
      'omr',
      'scales',
      'sight-reading',
      'open-source',
    ],
    description:
      'A free, open-source web app to learn and practice piano with smart sheet music. Features a large and growing (12k+) personal music library enriched via MusicBrainz thesaurus and music21 musicological analysis (grade, tonality, composer, genre, hands, etc.). Offers interactive practice tools including looping, hand separation, real-time note correction, generated scales with instant MIDI feedback, and more. Supports MusicXML, MIDI, and PDF imports (with OMR).',
  },
  {
    id: 'chordboard',
    name: 'Chordboard',
    url: 'https://simoncoudeville.github.io/chordboard/',
    tags: ['chords', 'scales', 'midi', 'usb', 'keyboard'],
    description: 'Chordboard is a web-based chord pad app. Build and assign custom chords to a pad and play external gear over USB.'
  }
];

export const allTags = Array.from(
  new Set(initialSites.flatMap((site) => site.tags)),
).sort();
