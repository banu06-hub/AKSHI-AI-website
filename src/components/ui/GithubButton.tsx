import { useState } from 'react'
import { Github } from 'lucide-react'
import { site } from '@/config/site'

type GithubButtonProps = {
  variant?: 'icon' | 'text'
  className?: string
}

/**
 * GitHub is not public yet. Rather than shipping a dead anchor, the placeholder
 * explains itself when activated. Once `site.githubUrl` is populated it becomes
 * a normal external link automatically.
 */
export function GithubButton({ variant = 'icon', className = '' }: GithubButtonProps) {
  const [open, setOpen] = useState(false)

  if (site.githubUrl) {
    return (
      <a
        href={site.githubUrl}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="AKSHI AI on GitHub"
        className={className}
      >
        <Github className="h-[17px] w-[17px]" aria-hidden="true" />
        {variant === 'text' && <span>GitHub</span>}
      </a>
    )
  }

  return (
    <span className={`relative inline-flex ${variant === 'icon' ? '' : 'w-full'}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label="GitHub repository — link coming soon"
        className={
          variant === 'icon'
            ? `inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.1] bg-white/[0.025] text-silver/60 transition-colors duration-300 hover:border-white/20 hover:text-white ${className}`
            : `inline-flex items-center gap-2 text-sm text-silver/55 transition-colors hover:text-white ${className}`
        }
      >
        <Github className="h-[17px] w-[17px]" aria-hidden="true" />
        {variant === 'text' && <span>GitHub</span>}
      </button>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute right-0 top-full z-50 mt-2 w-max max-w-[190px] rounded-lg border border-white/10 bg-[#0B1220]/95 px-3 py-2 text-left font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-silver/70 shadow-xl backdrop-blur-md transition-all duration-200 ${
          open ? 'translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0'
        }`}
      >
        Repository link
        <br />
        coming soon
      </span>
    </span>
  )
}
