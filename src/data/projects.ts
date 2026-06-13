export type ProjectCategory = 'Article' | 'App'

export interface Project {
  name: string
  description: string
  /** Path relative to the domain root, e.g. "/verbes/". */
  href: string
  category: ProjectCategory
}

// Mirrors the sub-projects listed in CLAUDE.md and the schema.org JSON-LD
// in index.html. Keep this in sync when adding/removing a sub-site.
export const projects: Project[] = [
  {
    name: 'Fetching MySQL data in Go',
    description:
      'Step-by-step tutorial showing how to connect Go applications to MariaDB/MySQL, execute queries, and handle results efficiently.',
    href: '/fetch-sql-data-in-go/',
    category: 'Article',
  },
  {
    name: 'FakeShop',
    description: 'A demo storefront UI exploring product listings and cart interactions.',
    href: '/fakeshop/',
    category: 'App',
  },
  {
    name: 'FakeData',
    description: 'A small tool for generating mock data for prototyping and testing.',
    href: '/fakedata/',
    category: 'App',
  },
  {
    name: 'FakeBookShop',
    description: 'A demo bookstore front end backed by sample book data.',
    href: '/fakebookshop/',
    category: 'App',
  },
  {
    name: 'iClock',
    description: 'A minimalist clock experiment.',
    href: '/iclock/',
    category: 'App',
  },
  {
    name: 'Verbes',
    description: 'A French verb conjugation practice app.',
    href: '/verbes/',
    category: 'App',
  },
  {
    name: 'Quiz',
    description: 'An interactive quiz application driven by JSON question sets.',
    href: '/quiz/',
    category: 'App',
  },
  {
    name: 'Ligne du temps',
    description: 'A timeline visualization experiment.',
    href: '/ligne_du_temps/',
    category: 'App',
  },
  {
    name: 'Promenade sentimentale',
    description: 'A small creative web experience.',
    href: '/promenade-sentimentale/',
    category: 'App',
  },
]
