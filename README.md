# MIDIWeb Hub
[<img width="1492" height="537" alt="MIDIWeb Hub Preview" src="https://github.com/user-attachments/assets/d3578c17-f100-40ec-90ae-d30864bea328" />](https://5of12.github.io/MIDIWeb-Hub/)

[MIDIWeb Hub](https://5of12.github.io/MIDIWeb-Hub/) is a curated, community-driven directory of websites that support **[WebMIDI](https://www.w3.org/TR/webmidi/)**.

It exists to help musicians, makers, educators, developers, and curious internet explorers discover the growing ecosystem of browser-based musical tools — from synths and sequencers to MIDI utilities, experiments, educational tools, and playful oddities!

MIDIWeb Hub is also a companion to **[MIDIWeb](https://midiweb.cc)**, a browser for Apple platforms designed to make it easier to explore WebMIDI on **iPhone, iPad, macOS, and visionOS**.

## Why make a directory of WebMIDI Sites!?

WebMIDI opens up a wonderful corner of the web: sites that can communicate directly with MIDI devices and software!

That means your browser can do more than just browse... It can become a synth editor, a sequencer, a controller surface, a musical playground, a teaching tool, or a bridge between hardware and online experiences.

MIDIWeb Hub exists to:

- help people discover useful WebMIDI websites
- make browser-based music tools easier to find and share
- celebrate the ecosystem of creative musical websites
- encourage more developers to build for the open web
  promote the movement towards [MIDI 2.0](https://midi.org/midi-2-0) and [WebMIDI 2.0](https://midi.org/new-midi-2-0-transports-ble-web-midi-and-transport-remote-management)
- support the broader MIDIWeb platform and community

## What is WebMIDI?

**WebMIDI** refers to the **Web MIDI API**, a web technology that allows websites to send and receive MIDI data using compatible browsers and devices.

In practical terms, that means a website can talk to synthesizers, MIDI controllers, drum machines, DAWs, and other MIDI-capable tools — all from within the browser.

WebMIDI makes it possible to build music tools that are easy to access, easy to share, and often require little or no installation.

## How do I view WebMIDI websites?

### On desktop

To use WebMIDI websites on desktop, you will generally need:

- a [**WebMIDI-capable browser**](https://webmidijs.org/docs/getting-started/)
- a connected MIDI device or MIDI software setup
- permission for the site to access MIDI devices when prompted

Depending on your setup, this may include physical USB or Bluetooth MIDI hardware, or virtual MIDI routing between apps.

### On iPhone, iPad and visionOS

WebMIDI support on Apple platforms has historically been limited.

If you want to explore WebMIDI websites on **iPhone, iPad, or Apple Vision Pro**, consider downloading **[MIDIWeb](https://midiweb.cc)** — a browser built for Web MIDI on Apple devices.

Learn more at **[midiweb.cc](https://midiweb.cc)**.

## What kind of sites belong here?

We’re interested in useful, interesting, (and working!) websites that use WebMIDI in some meaningful way, including:

- browser synths and instruments
- sequencers and drum machines
- MIDI monitors and diagnostic tools
- educational tools
- patch editors and librarians
- controller interfaces
- generative music tools
- interactive musical experiments

**If it’s musical, browser-based, and speaks MIDI, it probably belongs here!**

## Community-driven directory

This project is intended to be **community driven**.

We welcome contributions from the community! To add a new WebMIDI-capable website to the directory, please submit a Pull Request to our GitHub repository.

### Directory entry format

Add your site using the following format:

```json
{
  id: 'your-site-id',
  name: 'Your Site Name',
  url: 'https://yoursite.com',
  tags: ['synth', 'webaudio'],
  description: 'A short description of your site.'
}
```

## How to contribute

1. Fork the repository at **[github.com/5of12/midiweb-hub](https://github.com/5of12/midiweb-hub)**
2. Add your site to the `src/data.ts` file using the format above
3. Commit your changes and push to your fork
4. Open a Pull Request with a brief description of the site

For more details, please see **[CONTRIBUTING.md](./CONTRIBUTING.md)**.

## Submission guidelines

To keep the directory useful, please try to ensure submissions are:

- relevant to WebMIDI
- publicly accessible
- stable and working
- clearly described
- tagged sensibly and consistently

A few practical suggestions:

- use a short, unique `id`
- prefer lowercase tags where possible
- keep descriptions concise
- use the canonical site URL
- check that the link works before submitting

## About MIDIWeb Browser

**[MIDIWeb Browser](https://apps.apple.com/gb/app/midiweb-browser/id6757226617)** is an App for Apple platforms that helps users explore websites using WebMIDI.

If you are browsing on **iOS**, **iPadOS**, **macOS**, or **visionOS**, [MIDIWeb](https://apps.apple.com/gb/app/midiweb-browser/id6757226617) offers a dedicated way to access WebMIDI experiences on Apple devices.

Find out more at **[midiweb.cc](https://midiweb.cc)**.

## Sponsorship

MIDIWeb Hub may recognise supporters who help fund the MIDIWeb Browser and/or MIDIWeb Hub projects. Sponsorship does not guarantee inclusion, ranking, endorsement, or editorial preference. All listed sites must still be relevant to WebMIDI, browser-based music-making, music learning, or creative music technology.

## Independence and non-affiliation

**MIDIWeb Browser** and **MIDIWeb Hub** are independent projects created by **5of12**.

They are **not affiliated with, endorsed by, sponsored by, or officially connected with The MIDI Association**. Any references to MIDI, WebMIDI, MIDI standards, or related technologies are used for descriptive and informational purposes only.

## License

Unless otherwise stated:

- **Code** in this repository is licensed under the **MIT License** — see [LICENSE](./LICENSE)
- **Directory content/data** is licensed under **CC BY 4.0** — see [LICENSE-DATA](./LICENSE-DATA)

This means the site code is easy to reuse, while the curated directory data can be shared and adapted with attribution.

## Credits & Affiliation

MIDIWeb Hub Project originally created by [**5of12**](https://5of12.co.uk), 2026.
All sites referenced in MIDIWeb Hub are not associated with 5of12, unless otherwise stated.
© 5of12. All rights reserved.
