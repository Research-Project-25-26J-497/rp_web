'use client'

import { motion } from 'framer-motion'
import { Cloud, Brain, Network, Database, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Carousel from '@/components/Carousel'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.55, ease: 'easeOut' },
  }),
}

const highlights = [
  {
    icon: Brain,
    title: 'Real-Time Adaptive Learning',
    body: 'Meta-RL agents adapt navigation policies on the fly from live LiDAR streams, handled by a cloud-based inference engine.',
  },
  {
    icon: Network,
    title: 'Decentralized Multi-Robot Collaboration',
    body: 'ROS2-bridged robots share 3D point cloud data via RESTful APIs and WebSockets — no single point of failure.',
  },
  {
    icon: Cloud,
    title: 'Live 3D Visualization',
    body: 'A Three.js / WebGL web interface renders SLAM-generated spatial maps in real time over a cloud-edge architecture.',
  },
  {
    icon: Database,
    title: 'Automated Training Data Generation',
    body: 'A FastAPI microservice hot-swaps 3D environments into headless ROS2 simulations to generate synthetic LiDAR datasets automatically.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-20 sm:py-28"
        style={{ background: 'var(--navy)' }}
      >
        {/* Subtle grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(oklch(0.72 0.16 205) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.16 205) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          aria-hidden
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="inline-block bg-accent/20 text-accent border border-accent/30 text-xs font-semibold px-3 py-1 rounded-full tracking-widest uppercase mb-6">
              Research Capstone &mdash; Group 25-26J-497
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white text-balance leading-[1.15] max-w-5xl"
          >
            Platform for Autonomous Indoor Navigation Using{' '}
            <span className="text-accent">SLAM</span>,{' '}
            <span className="text-accent">Meta-RL</span> and{' '}
            <span className="text-accent">Multi-Robot Collaboration</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-3xl text-base sm:text-lg text-white/70 leading-relaxed font-serif"
          >
            A cloud-edge multi-robot system that integrates real-time adaptive
            learning, decentralized collaboration, live 3D visualization, and
            automated training data generation — engineered to eliminate single
            points of failure and improve scalability for autonomous mobile robot
            fleets.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/architecture"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Architecture <ArrowRight className="w-4 h-4" aria-hidden />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Meet the Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Carousel */}
      <section className="py-14 bg-secondary/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="text-center text-xs font-semibold tracking-widest uppercase text-accent mb-5">
              Project Showcase
            </p>
            <Carousel />
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">
              System Overview
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-balance">
              Four Pillars of the Platform
            </h2>
            <p className="mt-3 text-muted-foreground font-serif max-w-2xl mx-auto leading-relaxed">
              Each subsystem is independently owned and developed, yet tightly
              integrated through a shared cloud-edge architecture.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md hover:border-accent/40 transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/8 border border-primary/10 mb-4">
                  <item.icon className="w-5 h-5 text-primary" aria-hidden />
                </div>
                <h3 className="font-semibold text-sm text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-serif">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-secondary/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-balance mb-3">
              Ready to Dive Deeper?
            </h2>
            <p className="text-muted-foreground font-serif mb-7 leading-relaxed">
              Explore the technical architecture, project milestones, and research
              documents — or get in touch with the team.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/documents"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
              >
                View Documents <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-card border border-border text-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-secondary transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
