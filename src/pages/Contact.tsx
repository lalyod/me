import { FormEvent, useState } from 'react'
import Container from '@components/Container'
import Reveal from '@components/common/Reveal'
import SectionTitle from '@components/common/SectionTitle'
import { buttonClasses } from '@components/common/buttonClasses'

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
const email = import.meta.env.VITE_CONTACT_EMAIL

type Status = 'idle' | 'sending' | 'sent' | 'error'

const field =
  'mt-1 w-full border-2 border-ink bg-paper px-3 py-2 text-ink outline-none focus:border-p5 focus:shadow-[4px_4px_0_#e60012]'
const label = 'font-display text-lg uppercase tracking-wider'

const Contact = () => {
  const [status, setStatus] = useState<Status>('idle')

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!endpoint) return
    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: { Accept: 'application/json' },
      })
      setStatus(res.ok ? 'sent' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <Container>
      <section className="py-16 md:py-24">
        <SectionTitle>Contact</SectionTitle>

        <Reveal className="mx-auto mt-12 max-w-2xl drop-shadow-[8px_8px_0_#e60012]">
          <div className="clip-card -rotate-1 bg-paper p-4 text-ink md:p-6">
            <div className="flex items-center justify-between font-display uppercase tracking-wider">
              <span className="-skew-x-12 bg-p5 px-2 text-paper">No.01</span>
              <span className="text-sm text-ink/60">Calling Card</span>
            </div>
            <h2 className="mt-4 font-display text-4xl uppercase leading-none md:text-6xl">
              Send me a <span className="text-p5">message</span>
            </h2>
            <div className="halftone mt-4 h-4 text-ink/30" />

            {status === 'sent' ? (
              <p
                role="status"
                className="mt-8 -rotate-2 border-4 border-p5 p-4 text-center font-display text-3xl uppercase text-p5"
              >
                Message delivered
              </p>
            ) : !endpoint ? (
              <p className="mt-8 text-ink/70">
                The form isn't connected yet. Set VITE_CONTACT_ENDPOINT.
              </p>
            ) : (
              <form onSubmit={submit} className="mt-6 space-y-4">
                <label className="block">
                  <span className={label}>Name</span>
                  <input name="name" required className={field} />
                </label>
                <label className="block">
                  <span className={label}>Your email</span>
                  <input name="email" type="email" required className={field} />
                </label>
                <label className="block">
                  <span className={label}>Message</span>
                  <textarea name="message" rows={5} required className={field} />
                </label>
                {/* honeypot: bots fill it, people never see it */}
                <input
                  name="_gotcha"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden
                  className="hidden"
                />
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className={buttonClasses('primary')}
                  >
                    {status === 'sending' ? 'Sending...' : 'Send'}
                  </button>
                  {status === 'error' && (
                    <p role="alert" className="text-p5">
                      Could not send. Please try again.
                    </p>
                  )}
                </div>
              </form>
            )}

            {email && (
              <p className="mt-6 text-sm text-ink/70">
                Or write to{' '}
                <a href={`mailto:${email}`} className="text-p5 underline">
                  {email}
                </a>
              </p>
            )}
          </div>
        </Reveal>
      </section>
    </Container>
  )
}

export default Contact
