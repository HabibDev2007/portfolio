// ─────────────────────────────────────────────────────────────
// PROJECTS — add one entry per project.
// status: 'Live' | 'In Progress' | 'Archived'
// ─────────────────────────────────────────────────────────────

export interface Project {
  name: string
  description: string
  technologies: string[]
  image: string
  githubUrl: string
  liveUrl: string
  status: 'Live' | 'In Progress' | 'Archived'
}

export const projects: Project[] = [
  {
    name: '[ADD YOUR PROJECT HERE]',
    description:
      '[ADD A SHORT DESCRIPTION — what problem it solves, what you built, and what you learned while building it.]',
    technologies: ['Python', 'Flask', 'Machine Learning', 'LightGBM'],
    image: '', // import from '../assets/projects/your-image.jpg' and reference it here
    githubUrl: '[ADD GITHUB LINK]',
    liveUrl: '',
    status: 'In Progress',
  },
  {
    name: '[ADD ANOTHER PROJECT HERE]',
    description: '[ADD A SHORT DESCRIPTION OF THIS PROJECT]',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    image: '',
    githubUrl: '[ADD GITHUB LINK]',
    liveUrl: '',
    status: 'Archived',
  },
]
