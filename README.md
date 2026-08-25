# Akramjonzoda Habibulloh — Portfolio

A premium, dark-first developer portfolio built with **React, TypeScript, Tailwind CSS, and Framer Motion**.

Design direction: a "blueprint / engineering schematic" aesthetic — corner-bracket cards, a hairline grid, and a typing-terminal hero — instead of a generic template. Data is fully separated from components so the site can be updated without touching any UI code.

---

## 1. How to run it

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`). The page hot-reloads as you edit.

To build for production:

```bash
npm run build
npm run preview   # preview the production build locally
```

---

## 2. Where to add your certificates

Edit **`src/data/certificates.ts`**. For each new certificate:

1. Put the image in `src/assets/certificates/`.
2. Add an import line at the top of the file:
   ```ts
   import myCertificate from '../assets/certificates/my-certificate.jpg'
   ```
3. Add an entry to the array using that imported variable:
   ```ts
   {
     title: "Python Certificate",
     organization: "Organization Name",
     date: "2026",
     category: "Programming", // 'Programming' | 'AI / ML' | 'Web Development' | 'Education' | 'Other'
     image: myCertificate,
     description: "What this certificate represents.",
   }
   ```

**Important:** always `import` the image file rather than writing its path as a plain string (e.g. `'/src/assets/...'`). Vite only bundles images that are actually imported in code — a plain string path works in `npm run dev` but silently breaks once you run `npm run build` or deploy, because the `src/` folder isn't part of the production output. Importing the file is what makes the image show up correctly everywhere.

Add as many certificates as you like — the grid, filters, and modal all scale automatically (works cleanly well past 20 certificates).

---

## 3. Where to add your photos

Edit **`src/data/gallery.ts`** the same way: put the image in `src/assets/photos/`, import it at the top of the file, then reference the imported variable in `src`.

```ts
import hackathonPhoto from '../assets/photos/hackathon.jpg'

export const gallery: GalleryPhoto[] = [
  { src: hackathonPhoto, caption: "Hackathon 2026" },
]
```

The same rule applies to your hero/profile photo in `src/data/profile.ts` (`avatarUrl`) — always import, never a plain path string.

---

## 4. Where to add your projects

Edit **`src/data/projects.ts`**:

```ts
{
  name: "Project Name",
  description: "What it does and what you learned.",
  technologies: ["Python", "Flask"],
  image: "/src/assets/projects/project.jpg", // optional
  githubUrl: "https://github.com/you/project",
  liveUrl: "", // optional, leave empty to hide the Live Demo button
  status: "Live", // 'Live' | 'In Progress' | 'Archived'
}
```

---

## 5. Where to change your biography

- **`src/data/profile.ts`** — your name, title, tagline, location, current status, motto, and the `bio` paragraphs (rewrite these in your own words).
- **`src/data/timeline.ts`** — the year-by-year "My Journey" entries shown in the About section.
- **`src/data/education.ts`** — your school/university entries.
- **`src/data/experience.ts`** — internships or jobs.
- **`src/data/skills.ts`** — your skill categories and items.
- **`src/data/goals.ts`** — the list shown in "What's Next?"

Every placeholder is written as `[ADD ...]` so they're easy to find — search the `src/data` folder for `[ADD` to find everything left to personalize.

---

## 6. Where to add your social links

Edit **`social`** in `src/data/profile.ts`:

```ts
export const social = {
  github: 'https://github.com/your-username',
  linkedin: 'https://linkedin.com/in/your-username',
  instagram: 'https://instagram.com/your-username',
  email: 'you@example.com',
}
```

These automatically populate the hero, the contact section, and the footer.

---

## 7. How to deploy it

The site is a static build, so any static host works. Two easy options:

**Vercel** (recommended, zero config for Vite)
1. Push this project to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo.
3. Framework preset: Vite. Click Deploy.

**Netlify**
1. Push to GitHub.
2. Go to [netlify.com](https://netlify.com) → Add new site → import the repo.
3. Build command: `npm run build`, publish directory: `dist`.

Both auto-redeploy whenever you push new commits — so updating your live site is just editing a data file and pushing.

---

## Project structure

```text
src/
  components/   All UI components (Navbar, Hero, About, Education, Achievements, ...)
  data/         Every piece of editable content lives here — no content in components
  hooks/        useTheme (dark/light), useActiveSection (nav highlighting)
  assets/       certificates/, projects/, photos/ — put your image files here
```

## Notable details

- **Theme**: dark by default, toggle in the navbar, persisted in `localStorage`.
- **Custom cursor**: enabled only on devices with a fine pointer (desktop) and respects `prefers-reduced-motion`.
- **Easter egg**: press `g` then `h` anywhere on the page to jump back to the top.
- **Accessibility**: semantic headings, visible focus states via default browser outlines on interactive elements, and reduced-motion support in `index.css`.
