import { Link } from 'react-router-dom'
import Container from '@components/Container'
import Reveal from '@components/common/Reveal'
import SectionTitle from '@components/common/SectionTitle'
import { buttonClasses } from '@components/common/buttonClasses'
import ProjectCard from '@components/ProjectCard'
import { projects } from '../../../content'

const Project = () => {
  return (
    <section className="relative isolate overflow-hidden py-20 md:py-28">
      <div className="halftone clip-slash absolute -left-24 bottom-0 -z-10 h-2/3 w-1/2 text-p5/30" />
      <Container>
        <SectionTitle>My Projects</SectionTitle>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard key={project.title + index} project={project} index={index} />
          ))}
        </div>
        <Reveal className="mt-14 flex justify-center">
          <Link to="/projects" className={buttonClasses('accent')}>
            All Projects
          </Link>
        </Reveal>
      </Container>
    </section>
  )
}

export default Project
