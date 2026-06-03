# Contributing to MIDIWeb Hub

Thanks for your interest in contributing to **MIDIWeb Hub** — the community-driven directory for WebMIDI websites.

We welcome contributions that help expand and improve the directory.

## What kind of submissions are welcome?

We’re looking for websites that use **WebMIDI** in a meaningful way, including things like:

- browser synths and instruments
- sequencers and drum machines
- MIDI monitors and utilities
- educational tools
- patch editors and librarians
- controller interfaces
- generative music tools
- interactive musical experiments

If it’s browser-based, musically interesting, and uses MIDI, it may be a good fit.

## How to add a site

1. Fork the repository:
   `https://github.com/5of12/midiweb-hub`

2. Add your site to the `src/data.ts` file using the format below:

```json
{
  id: 'your-site-id',
  name: 'Your Site Name',
  url: 'https://yoursite.com',
  tags: ['synth', 'webaudio'],
  description: 'A short description of your site.'
}
```

3. Commit your changes and push them to your fork

4. Open a Pull Request with a brief description of the site

## Submission guidelines

Please try to ensure that submissions are:

- genuinely relevant to WebMIDI
- publicly accessible
- stable and currently working
- clearly described
- tagged sensibly and consistently

## Style guidance

A few practical suggestions to keep the directory tidy:

- use a short, unique `id`
- prefer lowercase tags where possible
- keep descriptions concise and factual
- use the canonical site URL
- avoid excessive marketing language
- check that the link works before submitting

## Things we may decline

We may choose not to include submissions that are:

- unrelated to WebMIDI
- broken or inaccessible
- spammy, misleading, or deceptive
- duplicates of existing entries
- too lightly described to be useful

## Editing existing entries

Corrections and improvements are welcome too. If a site has changed URL, broken, expanded, or needs better tags or description, feel free to submit a Pull Request.

## Licensing

By contributing code to this repository, you agree that your code contributions will be licensed under the **MIT License**.

By contributing directory entries, descriptions, tags, or other content/data, you agree that those contributions will be licensed under **CC BY 4.0**.

See:

- [LICENSE](./LICENSE)
- [LICENSE-DATA](./LICENSE-DATA)

## Project ownership and independence

MIDIWeb Hub and MIDIWeb are independent projects created by **5of12**.

They are not affiliated with, endorsed by, sponsored by, or officially connected with **The MIDI Association**.

## Be decent

Please be respectful, constructive, and clear in contribution discussions. No drama goblins, no spam, no nonsense.

Thanks for helping grow the WebMIDI ecosystem.
