import { Search } from 'lucide-react'
import { BrandMark } from '@/components/brand/Logo'

/* All visuals are decorative abstractions — not screenshots of live features. */

export function LanguageVisual() {
  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_20%,rgba(40,123,255,0.16),transparent_65%)]" />
      <div className="absolute inset-0 bg-page-grid opacity-30" />

      <div className="absolute left-5 top-4 flex w-[calc(100%-40px)] items-center justify-between">
        <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-silver/30">Language / generation</span>
        <span className="font-mono text-[7px] tracking-[0.16em] text-cyan/50">L—01</span>
      </div>

      <div className="absolute left-6 top-[42px] w-[64%] rounded-lg border border-white/[0.08] bg-[#0A111C]/80 p-3 shadow-lg backdrop-blur-sm">
        <div className="mb-2 flex items-center gap-1.5">
          <span className="h-1 w-1 rounded-full bg-silver/30" />
          <span className="font-mono text-[6.5px] uppercase tracking-[0.16em] text-silver/30">Context</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-[86%] rounded-full bg-white/[0.11]" />
          <div className="h-1.5 w-[62%] rounded-full bg-white/[0.07]" />
        </div>
      </div>

      <div className="absolute bottom-[22px] right-5 w-[70%] rounded-lg border border-cyan/20 bg-[#081525]/90 p-3.5 shadow-[0_10px_40px_-15px_rgba(40,123,255,0.45)]">
        <div className="mb-2.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan/80" />
            <span className="font-mono text-[6.5px] uppercase tracking-[0.16em] text-cyan/60">AKSHI</span>
          </div>
          <span className="font-mono text-[6px] tracking-[0.12em] text-silver/20">SYNTHESIS</span>
        </div>
        <div className="space-y-1.5">
          <div className="h-1.5 w-full rounded-full bg-gradient-to-r from-cyan/45 via-white/20 to-white/5" />
          <div className="h-1.5 w-[72%] rounded-full bg-white/[0.12]" />
          <div className="flex items-center gap-1">
            <div className="h-1.5 w-[36%] rounded-full bg-white/[0.08]" />
            <span className="h-2.5 w-px animate-caret bg-cyan" />
          </div>
        </div>
      </div>

      <div className="absolute left-9 top-[98px] flex items-center gap-1.5">
        <span className="rounded border border-white/[0.08] bg-[#080D16] px-1.5 py-1 font-mono text-[6px] uppercase tracking-[0.12em] text-silver/30">intent</span>
        <span className="rounded border border-white/[0.06] bg-[#080D16] px-1.5 py-1 font-mono text-[6px] uppercase tracking-[0.12em] text-silver/20">context</span>
      </div>
    </div>
  )
}

export function MemoryVisual() {
  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_65%,rgba(81,216,255,0.11),transparent_60%)]" />
      <svg viewBox="0 0 360 180" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="memory-ring" x1="70" y1="60" x2="290" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8D1DF" stopOpacity="0.5" />
            <stop offset="0.5" stopColor="#287BFF" stopOpacity="0.25" />
            <stop offset="1" stopColor="#51D8FF" stopOpacity="0.45" />
          </linearGradient>
          <radialGradient id="memory-core" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#D8F8FF" />
            <stop offset="0.35" stopColor="#51D8FF" />
            <stop offset="1" stopColor="#287BFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g stroke="#C8D1DF" strokeOpacity="0.08">
          <circle cx="180" cy="96" r="62" strokeDasharray="1 7" />
          <circle cx="180" cy="96" r="39" />
        </g>

        <g className="animate-orbit-slow" style={{ transformOrigin: '180px 96px' }}>
          <ellipse cx="180" cy="96" rx="122" ry="43" transform="rotate(-13 180 96)" stroke="url(#memory-ring)" strokeDasharray="1 5" />
          <ellipse cx="180" cy="96" rx="85" ry="65" transform="rotate(25 180 96)" stroke="url(#memory-ring)" strokeOpacity="0.4" />
          <circle cx="299" cy="69" r="3" fill="#51D8FF" />
          <circle cx="67" cy="118" r="2" fill="#C8D1DF" fillOpacity="0.6" />
        </g>

        <circle cx="180" cy="96" r="27" fill="url(#memory-core)" fillOpacity="0.45" />
        <circle cx="180" cy="96" r="17" fill="#07101E" stroke="url(#memory-ring)" />
        <circle cx="180" cy="96" r="5" fill="#B9F2FF" />
        <circle cx="180" cy="96" r="24" stroke="#51D8FF" strokeOpacity="0.25" />

        <g stroke="#287BFF" strokeOpacity="0.18" strokeDasharray="1 4">
          <path d="M126 46h18" />
          <path d="M216 146h18" />
        </g>
        <circle cx="118" cy="46" r="1.5" fill="#51D8FF" fillOpacity="0.6" />
        <circle cx="240" cy="146" r="1.5" fill="#C8D1DF" fillOpacity="0.4" />
      </svg>

      <span className="absolute left-5 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-silver/30">Memory / continuity</span>
      <span className="absolute right-5 top-4 font-mono text-[7px] tracking-[0.16em] text-cyan/40">M—02</span>
      <div className="absolute bottom-4 left-5 rounded border border-white/[0.07] bg-[#070C15]/80 px-2 py-1 font-mono text-[6px] uppercase tracking-[0.14em] text-silver/30">Session context</div>
      <div className="absolute bottom-4 right-5 rounded border border-cyan/15 bg-cyan/[0.04] px-2 py-1 font-mono text-[6px] uppercase tracking-[0.14em] text-cyan/50">Persistent memory</div>
    </div>
  )
}

export function DocumentsVisual() {
  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(40,123,255,0.12),transparent_65%)]" />
      <div className="absolute inset-0 bg-page-grid opacity-20" />

      <span className="absolute left-5 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-silver/30">Documents / retrieval</span>
      <span className="absolute right-5 top-4 font-mono text-[7px] tracking-[0.16em] text-cyan/40">D—03</span>

      <div className="absolute left-1/2 top-[52%] h-[104px] w-[148px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 -rotate-[9deg] rounded-lg border border-white/[0.06] bg-[#080D16]" />
        <div className="absolute inset-0 rotate-[5deg] rounded-lg border border-white/[0.08] bg-[#090F1A]" />
        <div className="absolute inset-0 overflow-hidden rounded-lg border border-white/[0.13] bg-[#0A121F] p-3.5 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.9)]">
          <div className="flex items-center justify-between">
            <span className="h-1.5 w-7 rounded-full bg-electric/50" />
            <span className="font-mono text-[5px] tracking-[0.1em] text-silver/25">PDF</span>
          </div>
          <div className="mt-3 space-y-1.5">
            <div className="h-1 w-[88%] rounded-full bg-white/[0.14]" />
            <div className="h-1 w-full rounded-full bg-white/[0.08]" />
            <div className="h-1 w-[74%] rounded-full bg-white/[0.08]" />
            <div className="h-1 w-[92%] rounded-full bg-white/[0.06]" />
            <div className="h-1 w-[56%] rounded-full bg-white/[0.06]" />
          </div>
          <div className="absolute inset-x-0 top-0 h-px animate-[scanLine_4.5s_ease-in-out_infinite] bg-cyan/70 shadow-[0_0_14px_2px_rgba(81,216,255,0.35)]" />
        </div>

        <div className="absolute -bottom-3 -right-3 flex h-9 w-9 items-center justify-center rounded-full border border-cyan/25 bg-[#08111D] text-cyan/80 shadow-[0_0_24px_-6px_rgba(81,216,255,0.6)]">
          <Search className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="absolute bottom-3 left-5 flex gap-1.5">
        {['PDF', 'TXT', 'MD'].map((type) => (
          <span key={type} className="rounded border border-white/[0.07] bg-white/[0.02] px-1.5 py-0.5 font-mono text-[5.5px] tracking-[0.12em] text-silver/25">
            {type}
          </span>
        ))}
      </div>
      <span className="absolute bottom-3 right-5 font-mono text-[6px] uppercase tracking-[0.14em] text-cyan/35">Cited sources</span>
    </div>
  )
}

export function OfflineVisual() {
  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(81,216,255,0.13),transparent_55%)]" />
      <svg viewBox="0 0 360 180" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="offline-ring" x1="90" y1="30" x2="270" y2="150" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8D1DF" stopOpacity="0.35" />
            <stop offset="0.55" stopColor="#287BFF" stopOpacity="0.4" />
            <stop offset="1" stopColor="#51D8FF" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <circle cx="180" cy="92" r="62" stroke="url(#offline-ring)" strokeOpacity="0.3" strokeDasharray="1 6" />
        <circle cx="180" cy="92" r="46" stroke="url(#offline-ring)" strokeOpacity="0.45" />
        <g stroke="#51D8FF" strokeOpacity="0.22" strokeDasharray="2 5">
          <path d="M180 92H296" />
          <path d="M180 92H64" />
          <path d="M180 92V34" />
        </g>
        <circle cx="296" cy="92" r="2.5" fill="#51D8FF" fillOpacity="0.8" />
        <circle cx="64" cy="92" r="2" fill="#C8D1DF" fillOpacity="0.35" />
        <circle cx="180" cy="34" r="2" fill="#C8D1DF" fillOpacity="0.35" />
        <circle cx="180" cy="92" r="33" stroke="#287BFF" strokeOpacity="0.12" />
      </svg>

      <div className="absolute left-1/2 top-[92px] -translate-x-1/2 -translate-y-1/2">
        <div className="relative flex h-[74px] w-[74px] items-center justify-center rounded-2xl border border-white/[0.14] bg-[#070D17]/95 shadow-[0_0_50px_-10px_rgba(40,123,255,0.65)]">
          <span className="absolute inset-[6px] rounded-xl border border-white/[0.06]" />
          <BrandMark className="h-9 w-9" />
          <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 rounded border border-cyan/20 bg-[#071019] px-1.5 py-0.5 font-mono text-[5px] uppercase tracking-[0.14em] text-cyan/70">
            On-device
          </span>
        </div>
      </div>

      <span className="absolute left-5 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-silver/30">Offline / inference</span>
      <span className="absolute right-5 top-4 font-mono text-[7px] tracking-[0.16em] text-cyan/40">O—04</span>
      <span className="absolute left-[14%] top-[72px] font-mono text-[5.5px] uppercase tracking-[0.12em] text-silver/25">Local runtime</span>
      <span className="absolute right-[14%] top-[72px] font-mono text-[5.5px] uppercase tracking-[0.12em] text-cyan/40">No round trip</span>
      <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[5.5px] uppercase tracking-[0.18em] text-silver/22">Network optional by design</span>
    </div>
  )
}

export function AdaptationVisual() {
  const sliders = [
    { label: 'Scope', position: '42%' },
    { label: 'Evaluation', position: '68%' },
    { label: 'Version', position: '30%' },
  ]

  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_70%,rgba(40,123,255,0.12),transparent_65%)]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-page-grid opacity-25 mask-radial" />

      <span className="absolute left-5 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-silver/30">Adaptation / control</span>
      <span className="absolute right-5 top-4 font-mono text-[7px] tracking-[0.16em] text-cyan/40">A—05</span>

      <div className="absolute inset-x-8 top-[48px] space-y-4">
        {sliders.map((slider, index) => (
          <div key={slider.label}>
            <div className="mb-1.5 flex items-center justify-between">
              <span className="font-mono text-[6px] uppercase tracking-[0.14em] text-silver/30">{slider.label}</span>
              <span className="font-mono text-[5.5px] text-silver/20">0{index + 1}</span>
            </div>
            <div className="relative h-[3px] w-full rounded-full bg-white/[0.08]">
              <div className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-electric/60 to-cyan/60" style={{ width: slider.position }} />
              <span
                className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border border-cyan/60 bg-[#07101C] shadow-[0_0_10px_rgba(81,216,255,0.45)] transition-transform duration-700 group-hover:translate-x-1"
                style={{ left: `calc(${slider.position} - 5px)` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-5 flex items-center gap-2">
        <span className="status-dot text-cyan/60" />
        <span className="font-mono text-[5.5px] uppercase tracking-[0.14em] text-silver/25">Bounded experiments</span>
      </div>
      <span className="absolute bottom-4 right-5 font-mono text-[5.5px] uppercase tracking-[0.14em] text-cyan/30">Evaluation gated</span>
    </div>
  )
}

export function MultimodalVisual() {
  const bars = [14, 26, 10, 34, 20, 42, 30, 18, 38, 24, 12, 32, 22, 40, 16, 28]

  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(81,216,255,0.1),transparent_62%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,rgba(139,92,246,0.08),transparent_62%)]" />

      <span className="absolute left-5 top-4 font-mono text-[7px] uppercase tracking-[0.2em] text-silver/30">Multimodal / horizon</span>
      <span className="absolute right-5 top-4 font-mono text-[7px] tracking-[0.16em] text-cyan/40">X—06</span>

      <div className="absolute left-5 top-[52px] h-[82px] w-[92px] overflow-hidden rounded-lg border border-white/[0.1] bg-[#08101B]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(81,216,255,0.4),transparent_35%),radial-gradient(circle_at_65%_60%,rgba(40,123,255,0.35),transparent_45%),linear-gradient(135deg,#0A1424,#070A11)]" />
        <div className="absolute inset-0 bg-page-grid opacity-25" />
        <div className="absolute inset-x-0 top-0 h-px animate-[scanLine_5s_ease-in-out_infinite] bg-cyan/50" />
        <span className="absolute bottom-1.5 left-2 font-mono text-[5px] uppercase tracking-[0.12em] text-white/40">Vision</span>
      </div>

      <div className="absolute bottom-[30px] right-5 flex h-[58px] w-[calc(100%-130px)] items-center justify-between gap-[3px] rounded-lg border border-white/[0.07] bg-white/[0.02] px-3">
        {bars.map((height, index) => (
          <span
            key={index}
            className="w-[2px] rounded-full bg-gradient-to-t from-electric/40 to-cyan/80"
            style={{
              height: `${height}px`,
              animation: `waveform 2.4s ease-in-out ${index * 0.12}s infinite`,
              transformOrigin: 'center',
            }}
          />
        ))}
      </div>

      <div className="absolute left-5 top-[142px] flex -translate-y-1/2 gap-1.5">
        <span className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[5px] uppercase tracking-[0.12em] text-silver/25">Audio</span>
        <span className="rounded border border-white/[0.07] px-1.5 py-0.5 font-mono text-[5px] uppercase tracking-[0.12em] text-silver/25">Voice</span>
      </div>
      <span className="absolute bottom-3 right-5 font-mono text-[5.5px] uppercase tracking-[0.14em] text-violet-200/30">Future research</span>
    </div>
  )
}
