'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Calendar, Star, ClipboardList } from 'lucide-react'
import { cn } from '@/lib/utils'
import SectionHeader from '@/components/SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const milestones = [
  {
    id: 'tap',
    phase: 'Phase 1',
    label: 'Topic Assessment Form (TAF)',
    date: '30th June 2025',
    description:
      'Initial presentation to the evaluation panel to gain formal approval for the research topic and project scope. Assessment details will be added here once confirmed.',
    deliverables: [
      'Research topic outline',
      'Preliminary literature review',
      'Problem statement and objectives',
      'Proposed methodology overview',
    ],
  },
  {
    id: 'pp',
    phase: 'Phase 1',
    label: 'Progress Presentation 1 (PP1)',
    date: '05th Jan 2026',
    description:
      'First formal progress review demonstrating early-stage implementation and system design decisions. Assessment details will be added here once confirmed.',
    deliverables: [
      'System architecture diagram',
      'Component interface specifications',
      'Initial prototype or proof-of-concept',
      'Updated project timeline',
    ],
  },
  {
    id: 'pp2',
    phase: 'Phase 2',
    label: 'Progress Presentation 2 (PP2)',
    date: '09th March 206',
    description:
      'Second progress review covering a near-complete implementation with integration testing results. Assessment details will be added here once confirmed.',
    deliverables: [
      'Integrated system demonstration',
      'Unit and integration test results',
      'Updated research findings',
      'Revised timeline to completion',
    ],
  },
  {
    id: 'research-paper',
    phase: 'Phase 1',
    label: 'Research Paper Submission',
    date: '08th May 2026',
    description:
      'Submission of a formal research paper summarising the theoretical framework, experimental setup, and preliminary results. Assessment details will be added here once confirmed.',
    deliverables: [
      'Literature review and related work',
      'Proposed system design',
      'Experimental methodology',
      'Preliminary results and analysis',
    ],
  },
  {
    id: 'final',
    phase: 'Phase 2',
    label: 'Final Presentation & Viva Voce',
    date: '03rd May 2026',
    description:
      'Comprehensive final presentation and oral defence of the completed research project before the examination panel. Assessment details will be added here once confirmed.',
    deliverables: [
      'Complete system demonstration',
      'Final research paper',
      'Project poster',
      'Oral defence (viva voce)',
    ],
  },
  {
    id: 'logbook',
    phase: 'Continuous',
    label: 'Logbook & Supervisor Evaluations',
    date: '03rd May 2026',
    description:
      'Ongoing assessment of individual contribution logs, weekly supervisor meetings, and formative feedback. Assessment details will be added here once confirmed.',
    deliverables: [
      'Weekly progress logbook entries',
      'Supervisor sign-off records',
      'Peer evaluation forms',
      'Individual contribution statements',
    ],
  },
]

const phaseColors: Record<string, string> = {
  'Phase 1': 'oklch(0.55 0.18 260)',
  'Phase 2': 'oklch(0.55 0.18 195)',
  Continuous: 'oklch(0.58 0.2 45)',
}

function AccordionItem({ item, index }: { item: (typeof milestones)[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const color = phaseColors[item.phase] ?? 'oklch(0.55 0.18 260)'

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center gap-4 p-5 text-left hover:bg-secondary/50 transition-colors"
      >
        {/* Phase badge */}
        <span
          className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full shrink-0 text-xs font-bold text-white"
          style={{ background: color }}
          aria-hidden
        >
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-0.5">
            <span
              className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full text-white"
              style={{ background: color }}
            >
              {item.phase}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" aria-hidden />
              {item.date}
            </span>
          </div>
          <p className="text-sm font-semibold text-foreground">{item.label}</p>
        </div>

        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-300',
            open && 'rotate-180'
          )}
          aria-hidden
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-border">
              <p className="text-sm text-muted-foreground font-serif leading-relaxed mb-4">
                {item.description}
              </p>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3 flex items-center gap-1.5">
                <ClipboardList className="w-3.5 h-3.5" aria-hidden />
                Expected Deliverables
              </h4>
              <ul className="grid sm:grid-cols-2 gap-2">
                {item.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: color }}
                      aria-hidden
                    />
                    <span className="text-foreground">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function MilestonesPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-12">
          <SectionHeader
            eyebrow="Project Timeline"
            title="Milestones & Assessments"
            description="All formal assessments for the research capstone are listed below. Click any item to expand the expected deliverables and assessment criteria. Dates and marks will be updated as they are confirmed."
          />
        </motion.div>

        {/* Phase legend */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {Object.entries(phaseColors).map(([phase, color]) => (
            <span key={phase} className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: color }}
                aria-hidden
              />
              {phase}
            </span>
          ))}
        </motion.div>

        <div className="flex flex-col gap-3">
          {milestones.map((item, i) => (
            <AccordionItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
