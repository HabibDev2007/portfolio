// ─────────────────────────────────────────────────────────────
// SKILLS — grouped by category. Add/remove freely; no skill
// levels are implied, just what you've used.
// ─────────────────────────────────────────────────────────────

export interface SkillGroup {
  category: string
  items: string[]
}

export const skills: SkillGroup[] = [
  { category: 'Programming', items: ['Python', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Frameworks', items: ['Flask'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  { category: 'Data / AI', items: ['Machine Learning', 'LightGBM', 'Data Analysis'] },
]
