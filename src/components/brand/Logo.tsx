import { useId } from 'react'

type BrandMarkProps = {
  className?: string
  title?: string
}

/**
 * AKSHI AI emblem: a metallic containment ring, an eye-like lens, and an
 * electric-blue intelligence core. No external asset required, so the mark
 * remains crisp at every size and works fully offline.
 */
export function BrandMark({ className = 'h-10 w-10', title = 'AKSHI AI emblem' }: BrandMarkProps) {
  const rawId = useId()
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, '')

  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={title}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`metal-${id}`} x1="6" y1="4" x2="43" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#F5F7FB" />
          <stop offset="0.34" stopColor="#C8D1DF" />
          <stop offset="0.58" stopColor="#74849A" />
          <stop offset="0.8" stopColor="#DCE5F2" />
          <stop offset="1" stopColor="#8797AC" />
        </linearGradient>
        <radialGradient id={`core-${id}`} cx="0.5" cy="0.42" r="0.58">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.26" stopColor="#C9F6FF" />
          <stop offset="0.56" stopColor="#51D8FF" />
          <stop offset="0.82" stopColor="#287BFF" />
          <stop offset="1" stopColor="#123A8F" stopOpacity="0.25" />
        </radialGradient>
        <radialGradient id={`halo-${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#287BFF" stopOpacity="0.42" />
          <stop offset="0.6" stopColor="#287BFF" stopOpacity="0.09" />
          <stop offset="1" stopColor="#287BFF" stopOpacity="0" />
        </radialGradient>
        <filter id={`glow-${id}`} x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <circle cx="24" cy="24" r="22" fill={`url(#halo-${id})`} />
      <path
        d="M24 2.9 41.4 13v22L24 45.1 6.6 35V13Z"
        stroke={`url(#metal-${id})`}
        strokeOpacity="0.5"
        strokeWidth="1"
      />
      <path
        d="M24 6.9 38.1 15v18L24 41.1 9.9 33V15Z"
        stroke={`url(#metal-${id})`}
        strokeOpacity="0.17"
        strokeWidth="0.7"
      />
      <path
        d="M8.9 24C12.3 17.9 17.6 14.6 24 14.6s11.7 3.3 15.1 9.4c-3.4 6.1-8.7 9.4-15.1 9.4S12.3 30.1 8.9 24Z"
        stroke={`url(#metal-${id})`}
        strokeWidth="1.05"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="15.6"
        ry="5.4"
        transform="rotate(-28 24 24)"
        stroke={`url(#metal-${id})`}
        strokeOpacity="0.35"
        strokeWidth="0.7"
      />
      <circle cx="13.6" cy="16.7" r="0.95" fill="#51D8FF" fillOpacity="0.9" />
      <circle cx="24" cy="24" r="6.6" fill="#287BFF" fillOpacity="0.24" filter={`url(#glow-${id})`} />
      <circle cx="24" cy="24" r="4.1" fill={`url(#core-${id})`} filter={`url(#glow-${id})`} />
      <circle cx="24" cy="24" r="1.25" fill="#FFFFFF" />
      <path d="M24 2.9v2.2M41.4 13l-1.9 1.1M41.4 35l-1.9-1.1M24 45.1v-2.2M6.6 35l1.9-1.1M6.6 13l1.9 1.1" stroke="#C8D1DF" strokeOpacity="0.45" strokeWidth="0.7" />
    </svg>
  )
}

type LogoProps = {
  className?: string
  markClassName?: string
  showTagline?: boolean
  onClick?: () => void
}

export function Logo({ className = '', markClassName = 'h-9 w-9', showTagline = false, onClick }: LogoProps) {
  return (
    <a
      href="#home"
      onClick={onClick}
      className={`group inline-flex items-center gap-3 rounded-sm ${className}`}
      aria-label="AKSHI AI — back to top"
    >
      <span className="relative inline-flex">
        <span className="absolute inset-0 rounded-full bg-electric/20 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-60" aria-hidden="true" />
        <BrandMark className={`relative ${markClassName}`} />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="font-display text-[17px] font-medium leading-none tracking-[0.22em] text-mist">
          AKSHI<span className="ml-1.5 text-cyan">AI</span>
        </span>
        {showTagline && (
          <span className="font-mono text-[7px] uppercase tracking-[0.24em] text-silver/40">Think · Learn · Adapt · Empower</span>
        )}
      </span>
    </a>
  )
}
