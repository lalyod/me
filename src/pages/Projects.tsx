import { useState } from 'react'
import clsx from 'clsx'
import Container from '@components/Container'
import Reveal from '@components/common/Reveal'
import SectionTitle from '@components/common/SectionTitle'
import ProjectCard from '@components/ProjectCard'
import { projects } from '../content'

const tags = ['All', ...new Set(projects.flatMap((project) => project.tags))]

const Projects = () => {
  const [active, setActive] = useState<string>('All')
  const shown =
    active === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(active))

  return (
    <Container>
      <section className="py-16 md:py-24">
        <SectionTitle>Projects</SectionTitle>
        <Reveal className="mt-8" delay={0.2}>
          <div
            role="group"
            aria-label="Filter projects"
            className="flex flex-wrap gap-3"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                aria-pressed={tag === active}
                onClick={() => setActive(tag)}
                className={clsx(
                  '-skew-x-12 cursor-pointer border-2 px-4 py-1 font-display uppercase tracking-wider transition-colors',
                  tag === active
                    ? 'border-paper bg-p5 text-paper'
                    : 'border-paper/40 text-paper/70 hover:border-p3 hover:text-p3'
                )}
              >
                {tag}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((project, index) => (
            <ProjectCard key={project.title + index} project={project} index={index} />
          ))}
        </div>
      </section>
    </Container>
  )
}

export default Projects
