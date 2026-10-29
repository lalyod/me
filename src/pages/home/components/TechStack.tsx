import PythonIcon from '../../../assets/svgs/python.svg'
import DockerIcon from '../../../assets/svgs/docker.svg'
import FlutterIcon from '../../../assets/svgs/flutter.svg'
import ReactIcon from '../../../assets/react.svg'
import SvelteIcon from '../../../assets/svgs/svelte.svg'
import GoIcon from '../../../assets/svgs/go.svg'
import TailwindIcon from '../../../assets/svgs/tailwind.svg'
import VueIcon from '../../../assets/svgs/vue.svg'
import LaravelIcon from '../../../assets/svgs/laravel.svg'
import MongoIcon from '../../../assets/svgs/mongodb.svg'
import Container from '@components/Container'
import Reveal from '@components/common/Reveal'
import SectionTitle from '@components/common/SectionTitle'

const TechStack = () => {
  const logos = [
    { src: FlutterIcon, alt: 'flutter' },
    { src: ReactIcon, alt: 'react' },
    { src: SvelteIcon, alt: 'svelte' },
    { src: GoIcon, alt: 'go' },
    { src: TailwindIcon, alt: 'tailwind' },
    { src: VueIcon, alt: 'vue' },
    { src: LaravelIcon, alt: 'laravel' },
    { src: MongoIcon, alt: 'mongodb' },
    { src: DockerIcon, alt: 'docker' },
    { src: PythonIcon, alt: 'python' },
  ]

  return (
    <section className="overflow-hidden py-20">
      <Container>
        <SectionTitle tone="zzz">Tech Stack</SectionTitle>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-paper/70">
            Like i said i love to learn new things, so here is my tech stack
            that i have used
          </p>
        </Reveal>
      </Container>

      <Reveal className="mt-12 -rotate-1 scale-105">
        <div className="hazard h-3" />
        <div className="scanlines overflow-hidden bg-zzz/10 py-4">
          {/* w-max so -50% is exactly one copy of the list; padding (not gap) keeps the loop seamless */}
          <div className="marquee flex w-max hover:[animation-play-state:paused]">
            {[...logos, ...logos].map((logo, index) => (
              <div key={`${logo.alt}-${index}`} className="shrink-0 px-5">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="clip-slash h-16 w-16 bg-paper p-2 transition-transform hover:scale-125"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="hazard h-3" />
      </Reveal>
    </section>
  )
}

export default TechStack
