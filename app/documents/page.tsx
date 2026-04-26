'use client'

import { motion } from 'framer-motion'
import { FileText, Download, Calendar, Tag } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: 'easeOut' },
  }),
}

type Document = {
  title: string
  description: string
  category: string
  date: string
  file: string
  version?: string
}

const categories = ['All', 'Proposals', 'Progress', 'Final', 'Research']

const documents: Document[] = [
  {
    title: 'Project Charter',
    description: 'Official project initiation document outlining scope, objectives, stakeholders, and success criteria for the research capstone.',
    category: 'Proposals',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
    version: 'v1.0',
  },
  {
    title: 'Project Proposal',
    description: 'Detailed research proposal covering the problem statement, literature review, proposed methodology, and feasibility analysis.',
    category: 'Proposals',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
    version: 'v1.0',
  },
  {
    title: 'TAP Presentation Slides',
    description: 'Slides used during the Topic Approval Presentation to introduce the project concept to the evaluation panel.',
    category: 'Progress',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
  },
  {
    title: 'Progress Report 1',
    description: 'First formal progress report documenting early implementation decisions, architecture diagrams, and updated project timelines.',
    category: 'Progress',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
    version: 'v1.0',
  },
  {
    title: 'Progress Presentation 1 (PP1) Slides',
    description: 'Presentation deck for the first formal progress review session.',
    category: 'Progress',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
  },
  {
    title: 'Research Paper',
    description: 'Peer-reviewed research paper submitted for the formal research publication component of the capstone.',
    category: 'Research',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
    version: 'v1.0',
  },
  {
    title: 'Progress Report 2',
    description: 'Second progress report covering near-complete implementation, integration test results, and updated research findings.',
    category: 'Progress',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
    version: 'v1.0',
  },
  {
    title: 'Final Document',
    description: 'Comprehensive final project documentation including complete system design, implementation details, results, and conclusions.',
    category: 'Final',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
    version: 'v1.0',
  },
  {
    title: 'Final Presentation Slides',
    description: 'Presentation slides used during the final viva voce examination.',
    category: 'Final',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
  },
  {
    title: 'Project Poster',
    description: 'A3/A2 research poster summarising the project for display at the project exhibition.',
    category: 'Final',
    date: 'Placeholder Date',
    file: '/placeholder.pdf',
  },
]

const categoryColors: Record<string, string> = {
  Proposals: 'oklch(0.55 0.18 260)',
  Progress: 'oklch(0.55 0.18 195)',
  Final: 'oklch(0.55 0.2 155)',
  Research: 'oklch(0.58 0.2 45)',
}

import { useState } from 'react'

export default function DocumentsPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? documents : documents.filter((d) => d.category === active)

  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-10">
          <SectionHeader
            eyebrow="Research Outputs"
            title="Documents & Reports"
            description="All project documents are listed below. Download buttons link to placeholder PDF files — replace the files in the /public directory to update them."
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition-colors ${
                active === cat
                  ? 'bg-primary text-primary-foreground border-primary'
                  : 'bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Document Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((doc, i) => {
            const color = categoryColors[doc.category] ?? 'oklch(0.55 0.18 260)'
            return (
              <motion.div
                key={doc.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i % 4}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-5 flex flex-col hover:shadow-sm hover:border-accent/40 transition-all"
              >
                {/* Doc icon + meta */}
                <div className="flex items-start gap-3 mb-3">
                  <span
                    className="flex items-center justify-center w-9 h-9 rounded-lg shrink-0"
                    style={{ background: color + '22', border: `1px solid ${color}44` }}
                  >
                    <FileText className="w-4 h-4" style={{ color }} aria-hidden />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground leading-tight">{doc.title}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span
                        className="text-[10px] font-semibold px-1.5 py-0.5 rounded text-white"
                        style={{ background: color }}
                      >
                        {doc.category}
                      </span>
                      {doc.version && (
                        <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                          <Tag className="w-2.5 h-2.5" aria-hidden />
                          {doc.version}
                        </span>
                      )}
                      <span className="flex items-center gap-0.5 text-[10px] text-muted-foreground">
                        <Calendar className="w-2.5 h-2.5" aria-hidden />
                        {doc.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground font-serif leading-relaxed flex-1 mb-4">
                  {doc.description}
                </p>

                <a
                  href={doc.file}
                  download
                  className="inline-flex items-center justify-center gap-2 w-full bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors border border-border"
                  aria-label={`Download ${doc.title}`}
                >
                  <Download className="w-3.5 h-3.5" aria-hidden />
                  Download PDF
                </a>
              </motion.div>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground text-sm py-12">
            No documents in this category yet.
          </p>
        )}
      </div>
    </div>
  )
}
