// ─────────────────────────────────────────────────────────────
// EXPERIENCE — internships, jobs, or notable roles.
// ─────────────────────────────────────────────────────────────

export interface ExperienceEntry {
  organization: string
  position: string
  location: string
  dates: string
  description: string
  responsibilities: string[]
  technologies: string[]
}

export const experience: ExperienceEntry[] = [
  {
    organization: '[ADD ORGANIZATION NAME]',
    position: 'Technology / Innovation Internship',
    location: '[ADD LOCATION]',
    dates: '[ADD DATES]',
    description: '[ADD A SHORT DESCRIPTION OF THE ROLE]',
    responsibilities: ['[ADD A RESPONSIBILITY]', '[ADD ANOTHER RESPONSIBILITY]'],
    technologies: ['[ADD A TECHNOLOGY]'],
  },
]
