import clsx from 'clsx'
import Container from '@components/Container'
import Reveal from '@components/common/Reveal'
import SectionTitle from '@components/common/SectionTitle'

const games = [
  {
    title: 'Persona 5 Royal',
    studio: 'P-Studio, published by Atlus',
    tone: 'bg-p5 text-paper',
    shadow: 'drop-shadow-[6px_6px_0_#e60012]',
    inspired:
      'The red and black palette, the ransom-note section titles, the calling-card project cards and the jagged cut-out shapes.',
  },
  {
    title: 'Persona 3 Reload',
    studio: 'Atlus',
    tone: 'bg-p3 text-ink',
    shadow: 'drop-shadow-[6px_6px_0_#3ad0ff]',
    inspired: 'The cyan and deep-blue accents and the angled section bands.',
  },
  {
    title: 'Zenless Zone Zero',
    studio: 'HoYoverse',
    tone: 'bg-zzz text-ink',
    shadow: 'drop-shadow-[6px_6px_0_#f6ff00]',
    inspired:
      'The halftone dots, hazard tape, scanlines and the glitch effect.',
  },
]

const Credits = () => {
  return (
    <Container>
      <section className="py-16 md:py-24">
        <SectionTitle>Credits</SectionTitle>
        <Reveal>
          <p className="mt-8 max-w-2xl text-lg text-paper/80">
            This site is a fan tribute. Its look is inspired by three games I
            love. The code, visuals, sound effects and music are all original.
            No game assets are used.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {games.map((game, index) => (
            <Reveal key={game.title} delay={index * 0.1}>
              <article className={game.shadow}>
                <div
                  className={clsx(
                    'clip-card bg-paper p-4 text-ink',
                    index % 2 ? 'rotate-1' : '-rotate-1'
                  )}
                >
                  <h3
                    className={clsx(
                      'inline-block -skew-x-12 px-2 font-display text-2xl uppercase tracking-wider',
                      game.tone
                    )}
                  >
                    {game.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/60">{game.studio}</p>
                  <p className="mt-3 text-ink/80">{game.inspired}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 max-w-2xl space-y-3 text-sm text-paper/60">
          <p>
            Built with React, Tailwind CSS, framer-motion and Decap CMS. Fonts:
            Anton and Rubik from Google Fonts.
          </p>
          <p>
            Persona is a trademark of Atlus and SEGA. Zenless Zone Zero is a
            trademark of HoYoverse. This site is unofficial and is not
            affiliated with or endorsed by them.
          </p>
        </Reveal>
      </section>
    </Container>
  )
}

export default Credits
