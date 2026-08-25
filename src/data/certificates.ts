// ─────────────────────────────────────────────────────────────
// CERTIFICATES — add as many as you want, the gallery scales
// automatically. Categories power the filter buttons.
//
// 1. Put your certificate image/scan in src/assets/certificates/
// 2. Import it at the top of this file (this is what makes Vite
//    bundle it correctly for both `npm run dev` and `npm run build`)
// 3. Reference the imported variable in the `image` field below
// ─────────────────────────────────────────────────────────────

import aduHackathon from '../assets/certificates/adu-engineering-hackathon-2023.jpg'
import vexVrc from '../assets/certificates/vex-vrc-robotics-2023.jpg'
import scouts from '../assets/certificates/scouts-2023.jpg'
import academic283 from '../assets/certificates/academic-excellence-283-2023.jpg'
import academicA1 from '../assets/certificates/academic-excellence-a1-9-2023.jpg'

export type CertificateCategory = 'Programming' | 'AI / ML' | 'Web Development' | 'Education' | 'Other'

export interface Certificate {
  title: string
  organization: string
  date: string
  category: CertificateCategory
  image: string
  description: string
}

export const certificates: Certificate[] = [
  {
    title: 'Certificate of Participation — Engineering Hackathon',
    organization: 'Abu Dhabi University, College of Engineering',
    date: 'May 16, 2023',
    category: 'Other',
    image: aduHackathon,
    description:
      'Awarded for participating in the 2nd Annual College of Engineering Hackathon Competition at Abu Dhabi University.',
  },
  {
    title: 'VEX‑VRC Robotics Competition',
    organization: 'Emirates Schools Establishment',
    date: '2022–2023',
    category: 'Other',
    image: vexVrc,
    description:
      'Certificate of appreciation for participating in the VEX‑VRC robotics competition during the 2022–2023 school year.',
  },
  {
    title: 'Scouts Program',
    organization: 'Emirates Schools Establishment',
    date: '2022–2023',
    category: 'Other',
    image: scouts,
    description: 'Certificate of appreciation for participation in the school Scouts program, 2022–2023.',
  },
  {
    title: 'Academic Excellence Certificate',
    organization: 'Emirates Schools Establishment',
    date: '2022–2023',
    category: 'Education',
    image: academic283,
    description: 'Recognition for strong academic performance during the 2022–2023 school year.',
  },
  {
    title: 'Academic Excellence Certificate',
    organization: 'Emirates Schools Establishment',
    date: '2022–2023',
    category: 'Education',
    image: academicA1,
    description: 'Recognition for strong academic performance during the 2022–2023 school year.',
  },
]

export const certificateCategories: (CertificateCategory | 'All')[] = [
  'All',
  'Programming',
  'AI / ML',
  'Web Development',
  'Education',
  'Other',
]
