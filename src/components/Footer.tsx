import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer className="border-t border-line/10 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="mono-label text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. {profile.motto}
        </p>
        <p className="mono-label text-xs text-muted">
          press <kbd className="rounded border border-line/15 px-1.5 py-0.5">g</kbd> then{' '}
          <kbd className="rounded border border-line/15 px-1.5 py-0.5">h</kbd> to jump home
        </p>
      </div>
    </footer>
  )
}
