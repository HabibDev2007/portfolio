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
    name: 'Calculator',
    description:
      'A basic calculator app built to practice core programming logic and backend fundamentals — handling user input, performing arithmetic operations, and serving the interface through a Flask web app.',
    technologies: ['Python', 'Flask', 'Git'],
    image: '', // import from '../assets/projects/your-image.jpg' and reference it here
    githubUrl: 'https://github.com/HabibDev2007/Calculator.git',
    liveUrl: '', // [ADD LIVE DEMO LINK] — add this if the app is hosted somewhere, to show the "Live Demo" button
    status: 'Live',
  },
  {
    name: 'Personal Portfolio Website',
    description:
      'This site — a personal portfolio built to showcase my education, projects, certificates, and journey into software engineering. Built with a component-based architecture and content kept separate from the UI so it stays easy to update.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '',
    githubUrl: 'https://github.com/HabibDev2007/portfolio',
    liveUrl: 'https://portfolio-theta-umber-2tr08lexg1.vercel.app/',
    status: 'Live',
  },
]
