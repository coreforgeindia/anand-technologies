'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight, Clock, Tag, ArrowRight, ArrowLeft } from 'lucide-react'
import { resourceArticles } from '@/lib/data'

type Article = (typeof resourceArticles)[0]

const categoryColors: Record<string, { bg: string; text: string }> = {
  'RF Guides': { bg: '#E0F9F9', text: '#00B8B8' },
  'Application Notes': { bg: '#DBEAFE', text: '#1A7AC4' },
  'Technical Blogs': { bg: '#EDE9FE', text: '#5B21B6' },
}

export default function ArticlePage({ article }: { article: Article }) {
  const catColor = categoryColors[article.category] || categoryColors['Technical Blogs']
  const related = resourceArticles.filter((a) => a.slug !== article.slug).slice(0, 2)

  const renderMarkdown = (content: string) => {
    const lines = content.trim().split('\n')
    const elements: React.ReactNode[] = []
    let i = 0

    while (i < lines.length) {
      const line = lines[i]

      if (line.startsWith('## ')) {
        elements.push(<h2 key={i} className="text-2xl font-bold text-[#0A0A0A] mt-10 mb-4">{line.slice(3)}</h2>)
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={i} className="text-lg font-bold text-[#0A0A0A] mt-6 mb-3">{line.slice(4)}</h3>)
      } else if (line.startsWith('**') && line.endsWith('**') && line.includes(':')) {
        const text = line.replace(/\*\*/g, '')
        const [bold, ...rest] = text.split(':')
        elements.push(
          <p key={i} className="text-sm text-[#2A2A2A] mb-2 leading-relaxed">
            <strong className="font-semibold">{bold}:</strong>{rest.join(':')}
          </p>
        )
      } else if (line.startsWith('- ')) {
        const listItems: string[] = []
        while (i < lines.length && lines[i].startsWith('- ')) {
          listItems.push(lines[i].slice(2))
          i++
        }
        elements.push(
          <ul key={`list-${i}`} className="list-none space-y-2 my-4 pl-0">
            {listItems.map((item, j) => (
              <li key={j} className="flex items-start gap-2.5 text-sm text-[#2A2A2A] leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#00B8B8' }} />
                <span dangerouslySetInnerHTML={{
                  __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                }} />
              </li>
            ))}
          </ul>
        )
        continue
      } else if (line.startsWith('| ')) {
        const tableLines: string[] = []
        while (i < lines.length && lines[i].startsWith('|')) {
          tableLines.push(lines[i])
          i++
        }
        const headers = tableLines[0].split('|').filter(Boolean).map(s => s.trim())
        const rows = tableLines.slice(2).map(row => row.split('|').filter(Boolean).map(s => s.trim()))
        elements.push(
          <div key={`table-${i}`} className="my-6 overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#F5F7F8]">
                  {headers.map((h, j) => (
                    <th key={j} className="px-4 py-3 text-left font-semibold text-[#0A0A0A]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, j) => (
                  <tr key={j} className={j % 2 === 0 ? 'bg-white' : 'bg-[#F5F7F8]/50'}>
                    {row.map((cell, k) => (
                      <td key={k} className="px-4 py-3 text-[#2A2A2A]">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
        continue
      } else if (line.trim() !== '') {
        const processedLine = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        elements.push(
          <p key={i} className="text-base text-[#2A2A2A] leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        )
      }
      i++
    }
    return elements
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <Link href="/" className="hover:text-[#00B8B8]">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/resources" className="hover:text-[#00B8B8]">Resources</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#0A0A0A] line-clamp-1">{article.title}</span>
          </div>
        </div>
      </section>

      {/* Article */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold"
                  style={{ background: catColor.bg, color: catColor.text }}
                >
                  <Tag className="w-3 h-3" />
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-[#6B7280]">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
                <span className="text-xs text-[#6B7280]">{article.date}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-[#0A0A0A] leading-tight mb-5">
                {article.title}
              </h1>
              <p className="text-xl text-[#6B7280] leading-relaxed mb-10 pb-8 border-b border-gray-100">
                {article.excerpt}
              </p>

              <div className="prose-custom">
                {renderMarkdown(article.content)}
              </div>

              {/* Author */}
              <div className="mt-12 pt-8 border-t border-gray-100 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: '#00B8B8' }}>
                  AT
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0A0A0A]">Anand Technologies Engineering Team</div>
                  <div className="text-xs text-[#6B7280] mt-0.5">
                    Published by our RF and microwave engineering team. For technical queries, contact us at{' '}
                    <a href="mailto:engineering@anandtech.in" className="text-[#00B8B8] hover:underline">
                      engineering@anandtech.in
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-[#E0F9F9] rounded-2xl">
                <h3 className="text-base font-bold text-[#0A0A0A] mb-2">
                  Need a custom RF component for your application?
                </h3>
                <p className="text-sm text-[#2A2A2A] mb-4">
                  Our engineering team will review your specification and respond within 24 hours.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90"
                  style={{ background: '#00B8B8' }}
                >
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <Link href="/resources" className="inline-flex items-center gap-2 text-sm text-[#6B7280] hover:text-[#00B8B8] mt-8">
                <ArrowLeft className="w-4 h-4" /> Back to Resources
              </Link>
            </motion.article>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-[#F5F7F8] rounded-2xl p-5 border border-gray-100">
                <h3 className="text-sm font-bold text-[#0A0A0A] mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {related.map((rel) => (
                    <Link key={rel.slug} href={`/resources/${rel.slug}`} className="group block">
                      <h4 className="text-sm font-semibold text-[#2A2A2A] group-hover:text-[#00B8B8] transition-colors leading-snug mb-1">
                        {rel.title}
                      </h4>
                      <span className="text-xs text-[#6B7280]">{rel.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-[#0A0A0A] rounded-2xl p-5 text-white">
                <h3 className="text-sm font-bold mb-3">Explore Our Products</h3>
                <p className="text-xs text-[#6B7280] mb-4">
                  Find the right RF component for your application in our full product catalog.
                </p>
                <Link
                  href="/products"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white rounded-xl hover:opacity-90 transition-all"
                  style={{ background: '#00B8B8' }}
                >
                  Browse Products <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </>
  )
}
