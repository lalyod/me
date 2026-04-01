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
    <div className="py-20 space-y-15">
      <div className="text-center w-full">
        <h3 className="mb-2 text-3xl">Tech Stack</h3>
        <p className="text-zinc-600">
          Like i said i love to learn new things, so here is my tech stack that
          i have used
        </p>
      </div>

      <div className="overflow-hidden">
        <div className="flex items-center gap-10 marquee">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={`${logo.alt}-${index}`}
              src={logo.src}
              alt={logo.alt}
              className="h-15 w-15 min-w-[60px]"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
