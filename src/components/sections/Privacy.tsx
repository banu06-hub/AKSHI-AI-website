import { Cpu, DatabaseZap, ShieldAlert, ShieldCheck } from 'lucide-react'
import { BrandMark } from '@/components/brand/Logo'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusPill } from '@/components/ui/StatusPill'

const commitments = [
  {
    icon: Cpu,
    title: 'Local by intention',
    text: 'Inference is being architected for on-device runtimes, so core interactions do not depend on a network round trip.',
    tag: 'Runtime design',
  },
  {
    icon: DatabaseZap,
    title: 'Memory you can inspect',
    text: 'The intended memory system is explicit: what is stored, why it was stored, and how to remove it.',
    tag: 'Memory design',
  },
  {
    icon: ShieldCheck,
    title: 'Data you control',
    text: 'No account or cloud upload is assumed. Any future synchronisation would be opt-in and clearly disclosed.',
    tag: 'Data design',
  },
]

function LocalDeviceIllustration() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#060A11] shadow-panel">
      <div className="pointer-events-none absolute inset-0 bg-page-grid opacity-40 mask-radial" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.11] blur-[80px]" aria-hidden="true" />

      <div className="relative flex items-center justify-between border-b border-white/[0.07] px-4 py-3.5 md:px-5">
        <div className="flex items-center gap-2.5">
          <span className="status-dot text-cyan" />
          <span className="font-mono text-[7.5px] uppercase tracking-[0.18em] text-silver/35">Local environment / concept</span>
        </div>
        <StatusPill tone="future">Design intent</StatusPill>
      </div>

      <div className="relative h-[430px] sm:h-[470px]">
        {/* Circuit / data-flow background */}
        <svg viewBox="0 0 520 470" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="privacy-line" x1="80" y1="80" x2="440" y2="390" gradientUnits="userSpaceOnUse">
              <stop stopColor="#C8D1DF" stopOpacity="0.3" />
              <stop offset="0.5" stopColor="#287BFF" stopOpacity="0.45" />
              <stop offset="1" stopColor="#51D8FF" stopOpacity="0.35" />
            </linearGradient>
            <radialGradient id="privacy-halo" cx="0.5" cy="0.5" r="0.5">
              <stop stopColor="#287BFF" stopOpacity="0.2" />
              <stop offset="1" stopColor="#287BFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="260" cy="245" r="185" fill="url(#privacy-halo)" opacity="0.6" />
          <g stroke="#C8D1DF" strokeOpacity="0.07">
            <circle cx="260" cy="245" r="190" strokeDasharray="1 8" />
            <circle cx="260" cy="245" r="150" />
            <ellipse cx="260" cy="245" rx="215" ry="100" transform="rotate(-17 260 245)" strokeOpacity="0.05" />
          </g>

          <g stroke="url(#privacy-line)" strokeWidth="1" strokeDasharray="2 5" className="animate-dash">
            <path d="M104 128H168Q188 128 188 148V187" />
            <path d="M418 132H368Q348 132 348 152V187" />
            <path d="M100 352H172Q192 352 192 332V303" />
            <path d="M420 346H370Q350 346 350 326V303" />
          </g>

          <g fill="#51D8FF">
            <circle cx="188" cy="191" r="2" fillOpacity="0.7" />
            <circle cx="348" cy="191" r="2" fillOpacity="0.7" />
            <circle cx="192" cy="299" r="2" fillOpacity="0.5" />
            <circle cx="350" cy="299" r="2" fillOpacity="0.5" />
          </g>

          <circle cx="104" cy="128" r="18" stroke="#C8D1DF" strokeOpacity="0.1" />
          <circle cx="418" cy="132" r="18" stroke="#C8D1DF" strokeOpacity="0.1" />
          <circle cx="100" cy="352" r="18" stroke="#C8D1DF" strokeOpacity="0.1" />
          <circle cx="420" cy="346" r="18" stroke="#C8D1DF" strokeOpacity="0.1" />
        </svg>

        {/* Floating labels */}
        <div className="absolute left-4 top-[76px] flex items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#080E17]/90 px-3 py-2 shadow-xl backdrop-blur-md sm:left-8">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.025]">
            <span className="h-2 w-2 rounded-sm border border-silver/40" aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-silver/50">Your documents</p>
            <p className="mt-0.5 font-mono text-[5.5px] uppercase tracking-[0.1em] text-silver/20">Local library</p>
          </div>
        </div>

        <div className="absolute right-4 top-[78px] flex items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#080E17]/90 px-3 py-2 shadow-xl backdrop-blur-md sm:right-8">
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.025]">
            <span className="h-2 w-2 rounded-full border border-cyan/40" aria-hidden="true" />
          </span>
          <div>
            <p className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-cyan/55">Your memory</p>
            <p className="mt-0.5 font-mono text-[5.5px] uppercase tracking-[0.1em] text-silver/20">Inspectable</p>
          </div>
        </div>

        <div className="absolute bottom-[62px] left-4 flex items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#080E17]/90 px-3 py-2 shadow-xl backdrop-blur-md sm:left-8">
          <ShieldCheck className="h-3.5 w-3.5 text-cyan/50" aria-hidden="true" />
          <p className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-silver/45">You stay in control</p>
        </div>

        <div className="absolute bottom-[62px] right-4 flex items-center gap-2.5 rounded-lg border border-white/[0.09] bg-[#080E17]/90 px-3 py-2 shadow-xl backdrop-blur-md sm:right-8">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan/60" aria-hidden="true" />
          <p className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-silver/45">Network optional</p>
        </div>

        {/* Device */}
        <div className="absolute left-1/2 top-1/2 w-[260px] -translate-x-1/2 -translate-y-1/2 sm:w-[310px]">
          <div className="relative rounded-t-2xl border border-white/[0.18] bg-gradient-to-b from-[#1A2434] via-[#0A101A] to-[#05080E] p-[7px] shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)]">
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/[0.09] bg-[#050A12]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(40,123,255,0.18),transparent_60%)]" />
              <div className="absolute inset-0 bg-page-grid opacity-20" />

              <div className="absolute inset-x-3 top-2.5 flex items-center justify-between">
                <span className="font-mono text-[5.5px] uppercase tracking-[0.16em] text-silver/30">AKSHI / LOCAL</span>
                <span className="flex items-center gap-1">
                  <span className="h-1 w-1 rounded-full bg-cyan/70" aria-hidden="true" />
                  <span className="font-mono text-[5px] uppercase tracking-[0.12em] text-cyan/40">On-device</span>
                </span>
              </div>

              <div className="absolute left-1/2 top-[46%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                <span className="absolute h-[92px] w-[92px] rounded-full border border-white/[0.07]" aria-hidden="true" />
                <span className="absolute h-[68px] w-[68px] animate-pulse-ring rounded-full border border-cyan/20" aria-hidden="true" />
                <span className="absolute h-[54px] w-[54px] rounded-full border border-electric/20 bg-electric/[0.06] blur-[1px]" aria-hidden="true" />
                <BrandMark className="relative h-10 w-10" />
              </div>

              <div className="absolute inset-x-4 bottom-2.5 flex items-center justify-between border-t border-white/[0.06] pt-2">
                {['Memory', 'Context', 'Docs'].map((label) => (
                  <span key={label} className="font-mono text-[5px] uppercase tracking-[0.12em] text-silver/25">
                    {label}
                  </span>
                ))}
              </div>

              <div className="absolute inset-x-0 top-0 h-px animate-[scanLine_6s_ease-in-out_infinite] bg-cyan/30" />
            </div>
            <span className="absolute left-1/2 top-[3px] h-[2px] w-8 -translate-x-1/2 rounded-full bg-white/10" aria-hidden="true" />
          </div>
          <div className="mx-auto h-[9px] w-[112%] -translate-x-[5.35%] rounded-b-xl border border-t-0 border-white/[0.15] bg-gradient-to-b from-[#8A99AC]/25 to-[#2A3444]/10" />
          <div className="mx-auto mt-1 h-[3px] w-12 rounded-full bg-white/[0.08]" />
        </div>

        <div className="absolute inset-x-0 bottom-3 text-center">
          <p className="font-mono text-[6px] uppercase tracking-[0.18em] text-silver/18">Illustrative local architecture · not a live system</p>
        </div>
      </div>
    </div>
  )
}

export function Privacy() {
  return (
    <section id="privacy" aria-labelledby="privacy-heading" className="relative section-pad">
      <div className="pointer-events-none absolute left-0 top-1/4 h-[520px] w-[520px] rounded-full bg-cyan/[0.025] blur-[130px]" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                index="05"
                eyebrow="Privacy & Offline-First"
                title={
                  <span id="privacy-heading">
                    Your Intelligence.
                    <br />
                    <span className="metal-text">Your Environment.</span>
                  </span>
                }
                description="AKSHI is being designed around a different default: your device as the primary place where a completely offline AI model runs, your documents as the primary source of knowledge, and your memory as something you can see and shape."
              />
            </Reveal>

            <div className="mt-9 border-t border-white/[0.07]">
              {commitments.map((item, index) => {
                const Icon = item.icon
                return (
                  <Reveal key={item.title} delay={0.05 * index}>
                    <div className="group flex gap-4 border-b border-white/[0.06] py-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/[0.09] bg-white/[0.025] text-cyan/60 transition-colors duration-300 group-hover:border-cyan/25 group-hover:text-cyan">
                        <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-2.5">
                          <h3 className="text-[13.5px] font-medium text-silver/80">{item.title}</h3>
                          <span className="font-mono text-[6.5px] uppercase tracking-[0.14em] text-silver/22">{item.tag}</span>
                        </div>
                        <p className="mt-1.5 max-w-md text-[11.5px] leading-relaxed text-silver/38">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={0.12}>
              <div className="mt-6 flex gap-3 rounded-xl border border-amber-300/[0.14] bg-amber-300/[0.025] p-4">
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-200/50" aria-hidden="true" />
                <p className="text-[10.5px] leading-relaxed text-silver/38">
                  <span className="font-medium text-amber-100/60">Design intent, not a guarantee.</span> Offline
                  operation, privacy properties, and local data handling are goals under active development. They
                  have not yet been implemented end-to-end or independently verified.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <LocalDeviceIllustration />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
