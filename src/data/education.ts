// ─────────────────────────────────────────────────────────────
// EDUCATION — add one entry per institution.
// ─────────────────────────────────────────────────────────────

export interface EducationEntry {
  institution: string
  degree: string
  years: string
  location: string
  description: string
}

export const education: EducationEntry[] = [
  {
    institution: 'University of Genoa',
    degree: 'B.Sc. Computer Engineering',
    years: '2026 — Present',
    location: 'Genoa, Italy',
    description:
      'Studying the foundations of computer engineering: algorithms, systems, and software design, with a growing focus on building real projects alongside coursework.',
  },
  {
    institution: 'Dushanbe Innovation Institute',
    degree: 'Bachelor Degree',
    years: '2025-2026',
    location: 'Tajikistan, Dushanbe',
    description:
      'Completed 1st year in Bachelor Degree in Dushanbe, where I began building practical programming skills and took part in technology competitions and hackathons alongside my coursework.',
  },
]
