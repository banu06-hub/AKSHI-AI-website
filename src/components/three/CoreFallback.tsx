const PARTICLES = [
  [86, 122], [127, 88], [171, 138], [214, 76], [258, 116], [326, 92], [382, 120], [438, 84], [491, 128],
  [118, 214], [74, 286], [146, 338], [96, 414], [172, 472], [244, 508], [322, 478], [404, 510], [478, 462],
  [528, 382], [552, 288], [512, 202], [444, 288], [384, 356], [302, 386], [224, 352], [196, 262], [282, 222],
  [352, 246], [414, 206], [468, 316], [338, 154], [240, 160], [558, 194], [42, 202], [74, 508], [522, 522],
]

const CONNECTIONS = [
  [86, 122, 196, 262], [127, 88, 240, 160], [171, 138, 282, 222], [214, 76, 338, 154],
  [258, 116, 352, 246], [326, 92, 414, 206], [382, 120, 468, 316], [438, 84, 512, 202],
  [491, 128, 552, 288], [118, 214, 74, 286], [146, 338, 96, 414], [172, 472, 244, 508],
  [322, 478, 404, 510], [478, 462, 528, 382], [512, 202, 444, 288], [384, 356, 302, 386],
  [224, 352, 196, 262], [282, 222, 352, 246], [414, 206, 384, 356], [338, 154, 240, 160],
]

/**
 * A fully static, dependency-free impression of the intelligence core.
 * Used while the 3D bundle loads, when WebGL is unavailable, and as the
 * reduced-motion presentation.
 */
export function CoreFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="absolute left-1/2 top-1/2 h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/20 blur-[100px]" />
      <div className="absolute left-1/2 top-1/2 h-[24%] w-[24%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/25 blur-[60px]" />

      <svg viewBox="0 0 600 600" className="relative h-full w-full max-w-[680px]" fill="none">
        <defs>
          <radialGradient id="fallback-core" cx="0.5" cy="0.42" r="0.55">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="0.18" stopColor="#D8FAFF" />
            <stop offset="0.4" stopColor="#51D8FF" />
            <stop offset="0.68" stopColor="#287BFF" />
            <stop offset="0.9" stopColor="#0F2B66" stopOpacity="0.6" />
            <stop offset="1" stopColor="#05070B" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="fallback-halo" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" stopColor="#287BFF" stopOpacity="0.32" />
            <stop offset="0.55" stopColor="#287BFF" stopOpacity="0.08" />
            <stop offset="1" stopColor="#287BFF" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="fallback-metal" x1="100" y1="100" x2="500" y2="520" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F7FB" />
            <stop offset="0.3" stopColor="#C8D1DF" />
            <stop offset="0.55" stopColor="#65758C" />
            <stop offset="0.8" stopColor="#DDE6F3" />
            <stop offset="1" stopColor="#79899F" />
          </linearGradient>
          <radialGradient id="fallback-vignette" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0.55" stopColor="#05070B" stopOpacity="0" />
            <stop offset="1" stopColor="#05070B" stopOpacity="0.9" />
          </radialGradient>
          <filter id="fallback-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle cx="300" cy="300" r="280" fill="url(#fallback-halo)" />

        <g stroke="#C8D1DF" strokeOpacity="0.14">
          <circle cx="300" cy="300" r="244" />
          <circle cx="300" cy="300" r="204" strokeDasharray="2 9" />
          <circle cx="300" cy="300" r="162" strokeOpacity="0.09" />
        </g>

        <g className="animate-orbit-slow" style={{ transformOrigin: '300px 300px' }}>
          <ellipse cx="300" cy="300" rx="262" ry="88" transform="rotate(-24 300 300)" stroke="url(#fallback-metal)" strokeOpacity="0.35" />
          <circle cx="534" cy="178" r="4" fill="#51D8FF" filter="url(#fallback-glow)" />
          <circle cx="66" cy="422" r="2.5" fill="#C8D1DF" fillOpacity="0.7" />
        </g>

        <g stroke="#287BFF" strokeOpacity="0.14">
          {CONNECTIONS.map(([x1, y1, x2, y2]) => (
            <line key={`${x1}-${y1}-${x2}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
        </g>

        {PARTICLES.map(([x, y], index) => (
          <circle
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            r={index % 7 === 0 ? 1.8 : 1.1}
            fill={index % 4 === 0 ? '#51D8FF' : '#8FB6E8'}
            fillOpacity={index % 5 === 0 ? 0.8 : 0.32}
          />
        ))}

        <g filter="url(#fallback-glow)">
          <circle cx="300" cy="300" r="108" fill="#287BFF" fillOpacity="0.13" />
          <circle cx="300" cy="300" r="86" fill="url(#fallback-core)" fillOpacity="0.5" />
          <circle cx="300" cy="300" r="49" fill="url(#fallback-core)" />
          <circle cx="300" cy="300" r="14" fill="#FFFFFF" />
        </g>

        <g stroke="url(#fallback-metal)">
          <ellipse cx="300" cy="300" rx="172" ry="58" transform="rotate(-24 300 300)" strokeOpacity="0.55" />
          <ellipse cx="300" cy="300" rx="192" ry="52" transform="rotate(34 300 300)" strokeOpacity="0.2" strokeDasharray="90 22 12 22" />
          <path d="M300 152a148 148 0 0 1 128 74" strokeWidth="1.1" strokeOpacity="0.6" />
          <path d="M300 448a148 148 0 0 1-128-74" strokeWidth="1.1" strokeOpacity="0.35" />
        </g>

        <g fill="url(#fallback-metal)">
          <path d="m452 196 9 5v10l-9 5-9-5v-10Z" fillOpacity="0.7" />
          <path d="m164 388 7 4v8l-7 4-7-4v-8Z" fillOpacity="0.45" />
          <path d="m412 430 6 3.5v7l-6 3.5-6-3.5v-7Z" fillOpacity="0.3" />
          <path d="m212 158 5 3v6l-5 3-5-3v-6Z" fillOpacity="0.55" />
        </g>

        <circle cx="300" cy="300" r="292" fill="url(#fallback-vignette)" />
      </svg>
    </div>
  )
}
