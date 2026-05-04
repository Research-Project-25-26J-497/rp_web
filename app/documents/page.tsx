'use client'

import { motion } from 'framer-motion'
import { FileText, Download, Calendar, Tag } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import { useState } from 'react'

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
  date?: string
  file: string
  version?: string
}

// Added 'Checklists' to categories
const categories = ['All', 'Proposals', 'Presentation', 'Final', 'Research', 'Checklists']

const documents: Document[] = [
  {
    title: 'Project Charter',
    description: 'Official project initiation document outlining scope, objectives, stakeholders, and success criteria for the research capstone.',
    category: 'Proposals',
    file: '/TAF_25-26J-497.pdf',
    version: 'v1.0',
  },
  {
    title: 'Project Proposal - Mithila',
    description: 'Detailed research proposal covering the problem statement, literature review, proposed methodology, and feasibility analysis.',
    category: 'Proposals',
    file: '/25-26J-497_IT22899224 - draft.pdf',
    version: 'v1.0',
  },
  {
    title: 'Project Proposal - Hirusha',
    description: 'Detailed research proposal covering the problem statement, literature review, proposed methodology, and feasibility analysis.',
    category: 'Proposals',
    file: '/25-26J-497_IT22311290 - draft.pdf',
    version: 'v1.0',
  },
  {
    title: 'Project Proposal - Sithum',
    description: 'Detailed research proposal covering the problem statement, literature review, proposed methodology, and feasibility analysis.',
    category: 'Proposals',
    file: '/25-26J-497_IT22305282 - draft.pdf',
    version: 'v1.0',
  },
  {
    title: 'Project Proposal - Reshan',
    description: 'Detailed research proposal covering the problem statement, literature review, proposed methodology, and feasibility analysis.',
    category: 'Proposals',
    file: '/25-26J-497_IT22349606 - draft.pdf',
    version: 'v1.0',
  },
  {
    title: 'Progress Presentation 1 (PP1) Slides',
    description: 'Presentation deck for the first formal progress review session.',
    category: 'Presentation',
    file: '/PP1_25-26J-497 - PP1.pdf',
  },
  {
    title: 'Progress Presentation 2 (PP2) Slides',
    description: 'Presentation deck for the second formal progress review session.',
    category: 'Presentation',
    file: '/PP1_25-26J-497 - PP2.pdf',
  },
  {
    title: 'Research Paper',
    description: 'Peer-reviewed research paper submitted for the formal research publication component of the capstone.',
    category: 'Research',
    file: '/research_paper.pdf',
    version: 'v1.0',
  },
  {
    title: 'Final Document',
    description: 'Comprehensive final project documentation including complete system design, implementation details, results, and conclusions.',
    category: 'Final',
    file: '/25-26J-497_Final_Thesis.pdf',
    version: 'v1.0',
  },
  // Added the new Checklist document here
  {
    title: '25-26J-497 Checklist1',
    description: 'Official checklist document for project tracking and requirements verification.',
    category: 'Checklists',
    file: '/25-26J-497_Checklist1.pdf',
    version: 'v1.0',
  }
]

const categoryColors: Record<string, string> = {
  Proposals: 'oklch(0.55 0.18 260)',
  Progress: 'oklch(0.55 0.18 195)',
  Final: 'oklch(0.55 0.2 155)',
  Research: 'oklch(0.58 0.2 45)',
  Checklists: 'oklch(0.60 0.17 110)', // Added a greenish-yellow color for Checklists
}

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