import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { SITE_URL } from '@/lib/seo'

export type BreadcrumbItem = {
  label: string
  href?: string
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href ?? ''}`,
    })),
  }

  return (
    <>
      <nav aria-label="Breadcrumb" className="bg-white border-b border-gray-100">
        <ol className="max-w-7xl mx-auto px-4 md:px-8 py-5 flex flex-wrap items-center gap-2 text-sm text-[#6B7280]">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
              {index > 0 && <ChevronRight className="w-4 h-4" aria-hidden="true" />}
              {item.href && index < items.length - 1 ? (
                <Link href={item.href} className="hover:text-[#00B8B8] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={index === items.length - 1 ? 'text-[#0A0A0A] font-medium' : ''}
                  aria-current={index === items.length - 1 ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
    </>
  )
}
