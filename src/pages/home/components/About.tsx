import clsx from 'clsx'
import me from '../../../assets/images/me.jpg'
import Container from '@components/Container'
import Reveal from '@components/common/Reveal'
import SectionTitle from '@components/common/SectionTitle'

const About = () => {
  return (
    <section
      id="about"
      className="clip-band relative isolate overflow-hidden bg-p3-deep py-28 md:py-36"
    >
      <Container>
        <SectionTitle tone="p3">About Me</SectionTitle>
        <div className="mt-10 flex flex-col items-center gap-16 lg:flex-row lg:gap-12">
          <Reveal
            from="left"
            className="shrink-0 space-y-4 border-l-4 border-p3 bg-p3/10 p-5 backdrop-blur lg:w-1/2"
          >
            <p>
              Hi, I’m <b className="text-p3">Pradita Adiantama</b>, though some
              people also call me <b className="text-p3">Pradita</b>,{' '}
              <b className="text-p3">Adit</b>, or{' '}
              <b className="text-p3">Lyod</b>. I grew up in a small city in
              Indonesia, and one of my earliest memories is when my dad gave me
              my first Nokia phone in third grade. I started playing games on it
              and remember telling my friends,{' '}
              <i>
                “If I could make my own game, I would make it better than this.”
              </i>{' '}
              That little spark stuck with me.
            </p>
            <p>
              When I got to high school, I decided to follow that spark and
              studied{' '}
              <b className="text-p3">Computer and Network Engineering</b> to
              learn how to code. After graduation, I got the chance to create my
              first game with my teachers, called “
              <b className="text-p3">Si Jibi Belajar Pajak</b>”, which was an
              incredible learning experience.
            </p>
            <p>
              Today, I work as a{' '}
              <b className="text-p3">
                Fullstack Developer at PT. Fintek Digital Nusantara
              </b>
              , where I get to build digital solutions every day. Looking back,
              it all started with that simple Nokia game, and my passion for
              creating and improving things continues to drive me forward.
            </p>
          </Reveal>

          <Reveal
            from="right"
            className="flex shrink-0 items-center justify-center lg:w-1/2"
          >
            <div className="group relative h-80 w-72 perspective-[600px] drop-shadow-[0_0_24px_rgb(58_208_255/0.4)]">
              {/* Clock ring */}
              <svg
                viewBox="0 0 200 200"
                aria-hidden
                className="spin-slow absolute top-1/2 left-1/2 -z-10 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 text-p3/60"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="97"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                {Array.from({ length: 12 }, (_, i) => (
                  <line
                    key={i}
                    x1="100"
                    y1="4"
                    x2="100"
                    y2={i % 3 === 0 ? 22 : 13}
                    stroke="currentColor"
                    strokeWidth="2"
                    transform={`rotate(${i * 30} 100 100)`}
                  />
                ))}
              </svg>
              <div className="peer/tl z-10 w-1/2 h-1/2 absolute top-0 left-0" />
              <div className="peer/tr z-10 w-1/2 h-1/2 absolute top-0 right-0" />
              <div className="peer/bl z-10 w-1/2 h-1/2 absolute bottom-0 left-0" />
              <div className="peer/br z-10 w-1/2 h-1/2 absolute bottom-0 right-0" />
              <img
                src={me}
                alt="pradita-adiantama"
                className={clsx(
                  'transition-all duration-500 transform-3d rounded-md w-72 object-cover object-top h-80',
                  'peer-hover/tl:rotate-x-20 peer-hover/tl:-rotate-y-20',
                  'peer-hover/tr:rotate-x-20 peer-hover/tr:rotate-y-20',
                  'peer-hover/bl:-rotate-x-20 peer-hover/bl:-rotate-y-20',
                  'peer-hover/br:-rotate-x-20 peer-hover/br:rotate-y-20'
                )}
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default About
