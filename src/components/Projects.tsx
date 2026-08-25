import { Github, ExternalLink, Code2 } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { projects } from '../data/projects'

const statusStyles: Record<string, string> = {
  Live: 'text-mint border-mint/30 bg-mint/10',
  'In Progress': 'text-amber border-amber/30 bg-amber/10',
  Archived: 'text-muted border-line/15 bg-surface2',
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          label="projects"
          title="Things I've built"
          description="A selection of projects — some finished, some still in progress. More are always in the pipeline."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bracket-card group flex h-full flex-col overflow-hidden rounded-xl transition-colors hover:border-signal/20">
                <div className="flex aspect-video items-center justify-center bg-surface2">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                  ) : (
                    <Code2 className="text-muted" size={32} />
                  )}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-semibold">{project.name}</h3>
                    <span
                      className={`mono-label shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] ${
                        statusStyles[project.status]
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-muted">{project.description}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="mono-label rounded-md border border-line/10 px-2 py-1 text-[11px] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={project.githubUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      data-cursor-hover
                      className="flex items-center gap-1.5 rounded-full border border-line/15 px-4 py-2 text-xs font-medium transition-colors hover:border-signal/40 hover:text-signal"
                    >
                      <Github size={13} /> Code
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor-hover
                        className="flex items-center gap-1.5 rounded-full bg-signal px-4 py-2 text-xs font-medium text-white"
                      >
                        <ExternalLink size={13} /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
