// ─────────────────────────────────────────────────────────────
// TIMELINE — "My Journey" entries shown in the About section.
// Add or edit entries freely; they render in the order listed.
// ─────────────────────────────────────────────────────────────

export interface TimelineEntry {
  year: string
  title: string
  description: string
}

export const timeline: TimelineEntry[] = [
  {
    year: '2021',
    title: 'First lines of code',
    description: 'Started developing my interest in technology and computers — curiosity turned into a habit.',
  },
  {
    year: '2022',
    title: 'Studying abroad',
    description: 'Continued my education abroad, adapting to a new environment while keeping technology close.',
  },
  {
    year: '2024',
    title: 'Finished high school',
    description: 'Completed high school and started preparing seriously for a future in engineering.',
  },
  {
    year: '2025',
    title: 'Began Computer Science',
    description: 'Started studying Computer Science — my first real, structured exposure to the field.',
  },
  {
    year: '2026',
    title: 'Accepted into Computer Engineering, Italy',
    description: 'Accepted to study Computer Engineering at the University of Genoa — a major step forward.',
  },
  {
    year: '2026',
    title: 'Building in public',
    description: 'Developing projects, gaining experience, and learning new technologies — one commit at a time.',
  },
]
