import { useRef, useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Mail, Send, ShieldCheck, Sparkles } from 'lucide-react'
import { GithubButton } from '@/components/ui/GithubButton'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusPill } from '@/components/ui/StatusPill'
import { site } from '@/config/site'

type FormValues = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const emptyValues: FormValues = { name: '', email: '', message: '' }

function buildMailto(values: FormValues) {
  const subject = encodeURIComponent(`AKSHI AI — message from ${values.name.trim()}`)
  const body = encodeURIComponent(`${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`)
  return `mailto:${site.contactEmail}?subject=${subject}&body=${body}`
}

function ContactForm() {
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }))
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }))
    }
  }

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {}

    if (values.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }

    if (values.message.trim().length < 10) {
      nextErrors.message = 'Please add a little more detail (at least 10 characters).'
    }

    return nextErrors
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      if (nextErrors.name) nameRef.current?.focus()
      else if (nextErrors.email) emailRef.current?.focus()
      else messageRef.current?.focus()
      return
    }

    setErrors({})
    window.location.href = buildMailto(values)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex min-h-[430px] flex-col items-center justify-center px-6 py-12 text-center">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <span className="absolute inset-0 rounded-full bg-cyan/10 blur-xl" aria-hidden="true" />
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-cyan/25 bg-cyan/[0.06] text-cyan">
            <Check className="h-6 w-6" />
          </span>
        </div>
        <p className="mt-6 font-mono text-[8px] uppercase tracking-[0.2em] text-cyan/60">Draft prepared</p>
        <h3 className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-mist">Your email is ready.</h3>
        <p className="mt-3 max-w-xs text-[11.5px] leading-relaxed text-silver/40">
          Your email app should now be open with a prepared message. Nothing has been sent automatically — you
          decide when to send it.
        </p>

        <div className="mt-6 flex flex-col items-center gap-3">
          <a
            href={buildMailto(values)}
            className="inline-flex items-center gap-2 rounded-lg border border-white/[0.12] bg-white/[0.03] px-4 py-2.5 text-[11px] text-silver/70 transition-colors hover:border-white/25 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Open the draft again
          </a>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false)
              setValues(emptyValues)
              window.setTimeout(() => nameRef.current?.focus(), 50)
            }}
            className="font-mono text-[8px] uppercase tracking-[0.16em] text-silver/30 transition-colors hover:text-white"
          >
            Write another message
          </button>
        </div>

        <p className="mt-8 font-mono text-[7px] uppercase leading-relaxed tracking-[0.12em] text-silver/18">
          This site has no message backend
          <br />
          The draft remains in your email client
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mono-label">Start a conversation</p>
          <h3 className="mt-2 font-display text-[22px] font-medium tracking-[-0.025em] text-mist">Collaborate with AKSHI</h3>
        </div>
        <StatusPill tone="development">Open</StatusPill>
      </div>

      <p className="mt-3 text-[11px] leading-relaxed text-silver/35">
        For research conversations, thoughtful feedback, or collaboration. This form prepares a message in your
        email app — nothing is sent from this page.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-silver/40">
            Your name <span className="text-cyan/50">*</span>
          </label>
          <input
            ref={nameRef}
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            className={`field ${errors.name ? 'field-error' : ''}`}
            placeholder="Ada Lovelace"
            maxLength={80}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-[10px] text-rose-300/80">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-2 block font-mono text-[8px] uppercase tracking-[0.16em] text-silver/40">
            Email <span className="text-cyan/50">*</span>
          </label>
          <input
            ref={emailRef}
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            className={`field ${errors.email ? 'field-error' : ''}`}
            placeholder="you@example.com"
            maxLength={120}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-[10px] text-rose-300/80">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="contact-message" className="block font-mono text-[8px] uppercase tracking-[0.16em] text-silver/40">
            Message <span className="text-cyan/50">*</span>
          </label>
          <span className="font-mono text-[7px] tracking-[0.1em] text-silver/18">{values.message.length} / 2000</span>
        </div>
        <textarea
          ref={messageRef}
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : 'contact-message-hint'}
          className={`field resize-none ${errors.message ? 'field-error' : ''}`}
          placeholder="What would you like to explore together?"
          maxLength={2000}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-1.5 text-[10px] text-rose-300/80">
            {errors.message}
          </p>
        ) : (
          <p id="contact-message-hint" className="mt-1.5 text-[9.5px] text-silver/22">
            Please avoid sharing sensitive information.
          </p>
        )}
      </div>

      <div className="mt-5 flex flex-col gap-3">
        <button type="submit" className="btn-primary group w-full">
          Open email draft
          <Send className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </button>
        <div className="flex items-start gap-2">
          <ShieldCheck className="mt-0.5 h-3 w-3 shrink-0 text-silver/22" aria-hidden="true" />
          <p className="text-[9px] leading-relaxed text-silver/22">
            There is no server-side form handler. Submitting prepares a draft in your own email client; no data is
            transmitted by this website.
          </p>
        </div>
      </div>
    </form>
  )
}

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative overflow-hidden section-pad">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-electric/[0.04] blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" aria-hidden="true" />

      <div className="container-page relative">
        <Reveal>
          <SectionHeading
            index="08"
            eyebrow="About AKSHI"
            title={
              <span id="about-heading">
                Built With Curiosity.
                <br />
                <span className="metal-text">Driven by Possibility.</span>
              </span>
            }
            description="AKSHI AI is an independent development project exploring practical, locally accessible intelligence — with a long horizon and an honest account of the present."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="max-w-xl text-[14px] leading-[1.85] text-silver/55">
                AKSHI is not being built as another cloud-first assistant. The ambition is an ecosystem that
                respects where knowledge lives, how memory is shaped, and who gets to decide. That means beginning
                with the difficult parts: local inference, persistent context, document grounding, and adaptation
                that can be observed.
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="relative mt-9 overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0A1220] to-[#06090F] p-6 md:p-7">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan/[0.05] blur-[45px]" aria-hidden="true" />
                <Sparkles className="h-4 w-4 text-cyan/45" aria-hidden="true" />
                <p className="mt-4 font-display text-[19px] leading-[1.45] tracking-[-0.02em] text-silver/80 md:text-[21px]">
                  “To build an AI ecosystem that is useful without being extractive: intelligent enough to matter,
                  local enough to trust, and honest about what it can do.”
                </p>
                <p className="mt-4 font-mono text-[7.5px] uppercase tracking-[0.18em] text-silver/22">Mission statement</p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-6 rounded-2xl border border-white/[0.08] bg-white/[0.015] p-5">
                <div className="flex items-center justify-between">
                  <span className="mono-label">Project status</span>
                  <span className="flex items-center gap-2">
                    <span className="status-dot text-cyan" />
                    <span className="font-mono text-[7.5px] uppercase tracking-[0.14em] text-cyan/60">Early development</span>
                  </span>
                </div>
                <dl className="mt-4 divide-y divide-white/[0.06]">
                  {[
                    ['Current phase', 'Foundation & early research'],
                    ['Availability', 'Not publicly available'],
                    ['This site', 'Concept preview'],
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between gap-6 py-3">
                      <dt className="font-mono text-[8px] uppercase tracking-[0.14em] text-silver/25">{label}</dt>
                      <dd className="text-right text-[10.5px] text-silver/50">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-7">
                <p className="mono-label">Collaboration</p>
                <p className="mt-3 max-w-md text-[11px] leading-relaxed text-silver/38">
                  If you are working on local inference, retrieval, evaluation, or responsible model development,
                  the door is open. Thoughtful questions are welcome too.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <a
                    href={`mailto:${site.contactEmail}`}
                    className="inline-flex items-center gap-2 text-sm text-silver/55 transition-colors hover:text-white"
                  >
                    <Mail className="h-4 w-4 text-cyan/50" aria-hidden="true" />
                    Email
                  </a>
                  <GithubButton variant="text" />
                  <a
                    href="#research"
                    className="group inline-flex items-center gap-1.5 text-[11px] text-silver/35 transition-colors hover:text-cyan"
                  >
                    Research notes
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div id="contact" className="glass-panel relative overflow-hidden rounded-2xl scroll-mt-28">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/35 to-transparent" aria-hidden="true" />
              <ContactForm />
            </div>
            <p className="mt-3 px-1 font-mono text-[7px] uppercase tracking-[0.12em] text-silver/18">
              Contact channel is configurable in the project source.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
