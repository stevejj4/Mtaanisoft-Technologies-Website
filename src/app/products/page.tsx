import type { Metadata } from 'next'
import ProductsPage from '@/components/content/ProductsPage'

export const metadata: Metadata = { title: 'Products' }

export default function ProductsRoute() {
  return <ProductsPage />
}
