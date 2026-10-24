import { ArrowUp, Mail } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { GithubButton } from '@/components/ui/GithubButton'
import { navLinks, site } from '@/config/site'

const projectLinks = [
  { label: 'The Vision', href: '#vision' },
  { label: 'AI Preview', href: '#demo' },
  { label: 'Privacy & Offline', href: '#privacy' },
  { label: 'Collaboration', href: '#contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#04060A]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full bg-electric/[0.05] blur-[100px]" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid gap-12 py-16 md:py-20 lg:grid-cols-[1.35fr_0.65fr_0.65fr_0.85fr]">
          <div>
            <Logo markClassName="h-11 w-11" showTagline />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-silver/50">
              An independent AI development project exploring practical, locally accessible intelligence.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-cyan/15 bg-cyan/[0.04] px-3 py-1.5">
              <span className="status-dot text-cyan" />
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-cyan/80">In development</span>
            </div>
          </div>

          <div>
            <p className="mono-label">Explore</p>
            <ul className="mt-5 space-y-3">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-silver/55 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label">Project</p>
            <ul className="mt-5 space-y-3">
              {projectLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-silver/55 transition-colors duration-300 hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label">Connect</p>
            <div className="mt-5 flex flex-col items-start gap-3">
              <GithubButton variant="text" />
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex items-center gap-2 text-sm text-silver/55 transition-colors duration-300 hover:text-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact
              </a>
            </div>
            <p className="mt-6 max-w-[220px] text-xs leading-relaxed text-silver/30">
              Repository and public contact channels will be added as the project develops.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 border-t border-white/[0.06] py-7 text-silver/35 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em]">
            © {year} AKSHI AI · All rights reserved
          </p>
          <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-silver/25">{site.tagline}</p>
          <div className="flex items-center gap-5">
            <a href="#privacy" className="font-mono text-[9px] uppercase tracking-[0.14em] transition-colors hover:text-white">
              Privacy
            </a>
            <a href="#about" className="font-mono text-[9px] uppercase tracking-[0.14em] transition-colors hover:text-white">
              Project info
            </a>
            <a
              href="#home"
              aria-label="Back to top"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-silver/45 transition-colors hover:border-white/25 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        <div className="pointer-events-none select-none overflow-hidden pb-2" aria-hidden="true">
          <p className="translate-y-[16%] text-center font-display text-[22vw] font-semibold leading-[0.72] tracking-[-0.07em] text-white/[0.022]">
            AKSHI
          </p>
        </div>
      </div>
    </footer>
  )
}
