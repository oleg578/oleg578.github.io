import type { Project } from '../data/projects.ts'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href}
      className="group flex items-baseline justify-between gap-6 py-5"
    >
      <div className="min-w-0">
        <h3 className="text-base font-medium text-slate-900 underline-offset-4 group-hover:underline dark:text-slate-100">
          {project.name}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {project.description}
        </p>
      </div>
      <span className="shrink-0 text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">
        {project.category}
      </span>
    </a>
  )
}
