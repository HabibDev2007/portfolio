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
    institution: '[ADD YOUR HIGH SCHOOL NAME]',
    degree: 'High School Diploma (Secondary Education)',
    years: '[ADD YEARS ATTENDED]',
    location: 'Abu Dhabi, United Arab Emirates',
    description:
      'Completed secondary education in Abu Dhabi, where I began building practical programming skills and took part in technology competitions and hackathons alongside my coursework.',
  },
]
