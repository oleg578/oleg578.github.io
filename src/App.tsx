import Header from './components/Header.tsx'
import ProjectCard from './components/ProjectCard.tsx'
import { projects } from './data/projects.ts'
import { useTheme } from './hooks/useTheme.ts'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="page-bg text-slate-900 dark:text-slate-100">
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight">
            Software Engineer
          </h2>
          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Engineering projects, technical articles on Go and web development.
          </p>
        </section>
        <section
          className="divide-y divide-slate-200 dark:divide-slate-800"
          aria-label="Projects"
        >
          {projects.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </section>
      </main>
      <footer className="mx-auto max-w-3xl px-6 pb-12 text-sm text-slate-400 dark:text-slate-500">
        © {new Date().getFullYear()} Oleh Nahornyi
      </footer>
    </div>
  )
}
