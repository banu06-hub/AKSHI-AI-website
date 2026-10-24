import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Logo } from '@/components/brand/Logo'
import { GithubButton } from '@/components/ui/GithubButton'
import { navLinks, primaryNavCta, site } from '@/config/site'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousFocus = useRef<HTMLElement | null>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const elements = navLinks
      .map((link) => document.getElementById(link.sectionId))
      .filter((element): element is HTMLElement => Boolean(element))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-42% 0px -52% 0px', threshold: 0 },
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = ''
      previousFocus.current?.focus?.()
      return
    }

    previousFocus.current = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-gradient-to-r from-electric via-cyan to-electric/0"
        style={{ scaleX: progress }}
      />

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/[0.07] bg-[rgba(5,7,11,0.82)] backdrop-blur-2xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-page">
          <div
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? 'h-[68px]' : 'h-[84px] md:h-[92px]'
            }`}
          >
            <Logo markClassName="h-9 w-9" onClick={closeMenu} />

            <nav className="hidden items-center gap-7 lg:flex xl:gap-9" aria-label="Primary navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  data-active={activeSection === link.sectionId}
                  aria-current={activeSection === link.sectionId ? 'page' : undefined}
                  className="nav-link text-[12px] font-medium tracking-[0.015em] text-silver/60 transition-colors duration-300 hover:text-white data-[active=true]:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <GithubButton className="hidden sm:inline-flex" />
              <a
                href={primaryNavCta.href}
                className="group hidden items-center gap-2 rounded-xl border border-white/15 bg-white/[0.055] px-4 py-2.5 text-[12px] font-semibold text-white shadow-inset-hairline backdrop-blur-md transition-all duration-300 hover:border-electric/50 hover:bg-electric/15 sm:inline-flex"
              >
                {primaryNavCta.label}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <button
                type="button"
                onClick={() => setMenuOpen((value) => !value)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.12] bg-white/[0.035] text-silver transition-colors hover:border-white/25 hover:text-white lg:hidden"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 h-full w-full cursor-default bg-[rgba(5,7,11,0.96)] backdrop-blur-2xl"
              onClick={closeMenu}
              tabIndex={-1}
            />

            <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-10 pt-28 md:px-10">
              <div className="pointer-events-none absolute inset-0 bg-page-grid opacity-40 mask-radial" aria-hidden="true" />
              <div className="pointer-events-none absolute right-[-20%] top-[15%] h-[340px] w-[340px] rounded-full bg-electric/10 blur-[100px]" aria-hidden="true" />

              <p className="mono-label relative">Navigation</p>
              <nav className="relative mt-7 flex flex-col" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    initial={reduce ? false : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + index * 0.045, duration: 0.4 }}
                    className="group flex items-center justify-between border-b border-white/[0.07] py-4"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-[9px] text-electric/60">0{index + 1}</span>
                      <span className="font-display text-2xl font-medium tracking-[-0.02em] text-mist transition-colors group-hover:text-cyan sm:text-3xl">
                        {link.label}
                      </span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-silver/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="relative mt-auto pt-10"
              >
                <a
                  href={primaryNavCta.href}
                  onClick={closeMenu}
                  className="btn-primary w-full"
                >
                  {primaryNavCta.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <div className="mt-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2.5">
                    <span className="status-dot text-cyan" />
                    <span className="mono-label text-silver/45">{site.status}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <GithubButton className="inline-flex" />
                    <a
                      href={`mailto:${site.contactEmail}`}
                      className="font-mono text-[9px] uppercase tracking-[0.16em] text-silver/45 transition-colors hover:text-white"
                    >
                      Contact
                    </a>
                  </div>
                </div>
                <p className="mt-8 font-display text-[22vw] leading-[0.7] tracking-[-0.06em] text-white/[0.025] sm:text-[16vw]" aria-hidden="true">
                  AKSHI
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
