// ─────────────────────────────────────────────────────────────
// PROFILE — your name, titles, bio and social links.
// This is the first file to edit when personalizing the site.
// ─────────────────────────────────────────────────────────────

import profileDeskPhoto from '../assets/photos/profile-desk.jpg'

export const profile = {
  name: 'Habibulloh Akramjonzoda',
  shortName: 'Habibulloh',
  title: 'Computer Engineering Student & Aspiring Software Engineer',
  tagline: 'Building my skills in software engineering, exploring technology, creating projects, and continuously pushing myself to become better.',
  location: 'Genoa, Italy',
  status: 'Preparing to study Computer Engineering at the University of Genoa', // shown as a "live status" line in the hero
  currentlyLearning: 'Currently Studying Computer Science',
  motto: 'Always learning. Always building.',
  resumeUrl: '', // [ADD LINK TO YOUR RESUME PDF] — leave empty to hide the button
  // To change this photo later: put a new image in src/assets/photos/,
  // import it above (like profileDeskPhoto), and use it here.
  avatarUrl: profileDeskPhoto,
}

export const social = {
  github: 'https://github.com/HabibDev2007',
  linkedin: 'https://www.linkedin.com/in/habibdev2007/',
  instagram: 'https://instagram.com/hablb_007',
  email: 'hh19811984@gmail.com',
}

// Bio paragraphs shown in the About section — write your story in your own words.
export const bio = [
  `I'm a Computer Science and Computer Engineering student with a growing focus on software development, AI, and web development. My path into technology has taken me across countries — I completed my secondary education in Abu Dhabi, where I first started building real programming skills alongside my studies.`,
  `Hackathons and competitions became a big part of how I learned: getting a team together, building something under time pressure, and figuring things out as I went. That hands-on experience taught me more than any single course could.`,
  `I also gained internship experience in technology and innovation, which gave me a first real look at how software gets built outside the classroom.
  I'm currently preparing to continue my studies in Computer Engineering at the University of Genoa in Italy — the next step in becoming a stronger, more capable engineer.`,
]
