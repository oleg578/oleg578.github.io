import SystemClock from './SystemClock.tsx'
import ThemeToggle from './ThemeToggle.tsx'
import type { Theme } from '../hooks/useTheme.ts'

interface HeaderProps {
  theme: Theme
  onToggleTheme: () => void
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <a
          className="text-slate-900 transition-opacity hover:opacity-70 dark:text-slate-100"
          href="/"
        >
          <h1 className="text-base font-medium tracking-wide">Oleh Nahornyi</h1>
        </a>
        <SystemClock className="hidden text-sm tabular-nums text-slate-400 sm:block dark:text-slate-500" />
        <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
          <a
            className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
            href="https://github.com/oleg578/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-2.9 .3-5.2-1.4-5.2-3.7 0-2 2.3-3.7 5.2-3.7 2.9-.3 5.2 1.4 5.2 3.7zm-30.4-3.2c-.7 2 .7 4.3 3.1 5.2 2.3 .7 5-.3 5.6-2.3 .7-2-.7-4.3-3.1-5.2-2.3-.7-5 .3-5.6 2.3zm44.2-1.7c-2.9 .7-4.8 2.7-4.5 4.8 .3 2 2.9 3.1 5.9 2.4 2.9-.7 4.8-2.7 4.5-4.8-.3-2-3-3.1-5.9-2.4zM248 8C111 8 0 119 0 256c0 110.3 71.3 203.9 170.7 237.2 12.5 2.3 17.1-5.4 17.1-12v-44.1c-69.5 15.1-84.1-33.7-84.1-33.7-11.4-29-27.9-36.7-27.9-36.7-22.8-15.6 1.7-15.3 1.7-15.3 25.2 1.8 38.5 25.9 38.5 25.9 22.4 38.4 58.7 27.3 73 20.9 2.3-16.2 8.7-27.3 15.8-33.6-55.5-6.3-113.9-27.7-113.9-123.1 0-27.2 9.7-49.4 25.6-66.8-2.6-6.3-11.1-31.8 2.4-66.3 0 0 21-6.7 68.8 25.5 20-5.6 41.5-8.4 62.9-8.5 21.4 .1 42.9 2.9 62.9 8.5 47.8-32.2 68.8-25.5 68.8-25.5 13.5 34.5 5 60 2.4 66.3 15.9 17.4 25.6 39.6 25.6 66.8 0 95.6-58.5 116.7-114.1 122.9 8.9 7.7 16.8 22.9 16.8 46.1v68.3c0 6.7 4.6 14.4 17.1 12C424.7 459.9 496 366.3 496 256 496 119 385 8 248 8z" />
            </svg>
          </a>
          <a
            className="transition-colors hover:text-slate-900 dark:hover:text-slate-100"
            href="https://www.linkedin.com/in/oleh-nahornyi-b1524350/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="h-5 w-5"
              fill="currentColor"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.7C24.09 107.3 0 83.2 0 53.6A53.6 53.6 0 0 1 53.6 0a53.6 53.6 0 0 1 53.6 53.6c0 29.6-24.09 53.7-53.36 53.7zM447.8 448h-92.4V302.4c0-34.7-12.4-58.4-43.3-58.4-23.6 0-37.6 15.8-43.7 31.1-2.3 5.6-2.8 13.4-2.8 21.2V448h-92.5s1.2-241.1 0-266.1h92.4v37.7c12.3-19 34.3-46.1 83.5-46.1 60.9 0 106.7 39.7 106.7 125.2V448z" />
            </svg>
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  )
}
