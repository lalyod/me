import { FC } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Project } from '../content'

interface ProjectCardProps {
  project: Project
  index: number
}

// Calling-card style: tilted paper card on a hard red shadow.
const ProjectCard: FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.article
      className="group drop-shadow-[6px_6px_0_#e60012]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 3) * 0.1 }}
    >
      <div
        className={clsx(
          'clip-card bg-paper p-3 text-ink transition-transform duration-200 group-hover:-translate-y-1 group-hover:rotate-0',
          index % 2 ? 'rotate-1' : '-rotate-1'
        )}
      >
        <div className="flex items-center justify-between pb-2 font-display uppercase tracking-wider">
          <span className="-skew-x-12 bg-p5 px-2 text-paper">
            No.{String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-xs text-ink/60">Calling Card</span>
        </div>
        <div className="overflow-hidden">
          <img
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-110"
            src={project.thumbnail}
            alt={`${project.title} thumbnail`}
          />
        </div>
        <div className="px-1 pt-3 pb-2">
          <h3 className="line-clamp-2 font-display text-2xl uppercase">
            {project.title}
          </h3>
          <p className="mt-1 line-clamp-3 text-sm text-ink/70">
            {project.excerpt}
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li key={tag} className="bg-ink px-2 py-0.5 text-xs text-paper">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
