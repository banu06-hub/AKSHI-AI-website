/**
 * Central project configuration.
 * Replace the placeholder URLs / e-mail address when the real channels exist.
 * Anything left as an empty string is rendered as an honest "coming soon" state
 * instead of a dead link.
 */
export const site = {
  name: 'AKSHI AI',
  wordmark: 'AKSHI',
  tagline: 'THINK • LEARN • ADAPT • EMPOWER',
  status: 'IN DEVELOPMENT',
  description:
    'An ambitious AI ecosystem exploring local intelligence, persistent memory, document understanding, and adaptive learning.',
  contactEmail: 'hello@akshi.ai',
  githubUrl: '',
  xUrl: '',
  linkedinUrl: '',
  location: 'Independent project · Built remotely',
  currentPhase: 'Foundation & early research',
} as const

export type NavLink = {
  label: string
  href: string
  sectionId: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'Technology', href: '#technology', sectionId: 'technology' },
  { label: 'Capabilities', href: '#capabilities', sectionId: 'capabilities' },
  { label: 'Research', href: '#research', sectionId: 'research' },
  { label: 'Roadmap', href: '#roadmap', sectionId: 'roadmap' },
  { label: 'About', href: '#about', sectionId: 'about' },
]

export const primaryNavCta = {
  label: 'Explore AKSHI',
  href: '#vision',
}
