import Reveal from './Reveal'

interface SectionHeadingProps {
  index: string // e.g. "02"
  label: string // e.g. "about"
  title: string
  description?: string
}

export default function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mono-label mb-4 text-sm text-signal">
        <span className="text-muted">// {index}</span> — {label}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-muted sm:text-lg">{description}</p>}
    </Reveal>
  )
}
