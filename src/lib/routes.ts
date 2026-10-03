export type Page =
  | 'about'
  | 'services'
  | 'projects'
  | 'client-projects'
  | 'innovations'
  | 'products'
  | 'careers'
  | 'contact'
  | 'blogs'
  | 'privacy'
  | 'terms'

export const pathByPage: Record<Page, string> = {
  about: '/',
  services: '/services',
  projects: '/projects',
  'client-projects': '/projects/clients',
  innovations: '/projects/innovations',
  products: '/products',
  careers: '/careers',
  contact: '/contact',
  blogs: '/blogs',
  privacy: '/privacy',
  terms: '/terms',
}

const pageByPath: Record<string, Page> = {
  '/': 'about',
  '/about': 'about',
  '/services': 'services',
  '/projects': 'projects',
  '/projects/clients': 'client-projects',
  '/projects/innovations': 'innovations',
  '/products': 'products',
  '/careers': 'careers',
  '/contact': 'contact',
  '/blogs': 'blogs',
  '/privacy': 'privacy',
  '/terms': 'terms',
}

export function pageFromPath(pathname: string): Page {
  return pageByPath[pathname] ?? 'about'
}
