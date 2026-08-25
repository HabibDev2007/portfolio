// ─────────────────────────────────────────────────────────────
// GALLERY — personal photos.
// 1. Put image files in src/assets/photos/
// 2. Import them at the top of this file (required so Vite
//    bundles them correctly for both dev and production builds)
// 3. Reference the imported variable in `src` below
// ─────────────────────────────────────────────────────────────

import aiHackGroup from '../assets/photos/ai-hack-ccc-group.jpg'
import hackathonDesks from '../assets/photos/hackathon-desks.jpg'
import aiHackathonBanner from '../assets/photos/ai-hackathon-banner.jpg'
import friendsHeadphones from '../assets/photos/friends-headphones.jpg'

export interface GalleryPhoto {
  src: string
  caption: string
}

export const gallery: GalleryPhoto[] = [
  { src: aiHackGroup, caption: 'AI Hack CCC — IT Park Dushanbe' },
  { src: hackathonDesks, caption: 'AI Hack CCC — team workspace' },
  { src: aiHackathonBanner, caption: '"AI Hackathon: Code. Create. Conquer"' },
  { src: friendsHeadphones, caption: 'With a friend' },
]
