import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Vision } from '@/components/sections/Vision'
import { Technology } from '@/components/sections/Technology'
import { Capabilities } from '@/components/sections/Capabilities'
import { Demo } from '@/components/sections/Demo'
import { Privacy } from '@/components/sections/Privacy'
import { Roadmap } from '@/components/sections/Roadmap'
import { Research } from '@/components/sections/Research'
import { About } from '@/components/sections/About'

function PageFrame() {
  return (
    <div
      className="pointer-events-none fixed inset-y-0 left-1/2 z-0 hidden w-full max-w-[1280px] -translate-x-1/2 justify-between px-10 lg:flex lg:px-12"
      aria-hidden="true"
    >
      <span className="h-full w-px bg-gradient-to-b from-transparent via-white/[0.035] to-transparent" />
      <span className="h-full w-px bg-gradient-to-b from-transparent via-white/[0.035] to-transparent" />
    </div>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-obsidian text-mist">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:border focus:border-cyan/40 focus:bg-[#07111C] focus:px-4 focus:py-3 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <div className="page-vignette" aria-hidden="true" />
      <div className="page-noise noise-overlay" aria-hidden="true" />
      <PageFrame />

      <Navbar />

      <main id="main" className="relative z-10">
        <Hero />
        <Vision />
        <Technology />
        <Capabilities />
        <Demo />
        <Privacy />
        <Roadmap />
        <Research />
        <About />
      </main>

      <Footer />
    </div>
  )
}
