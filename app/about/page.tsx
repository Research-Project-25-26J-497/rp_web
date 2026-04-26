'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, Linkedin, Mail, User, GraduationCap } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

type Person = {
  name: string
  role: string
  module?: string
  avatar: string
  github?: string
  linkedin?: string
  email?: string
  bio: string
}

const members: Person[] = [
  {
    name: 'Thilochana J M',
    role: 'Group Member',
    module: 'Meta-RL & SLAM Adaptation Engine',
    avatar: '/mithila.jpeg',
    github: 'https://github.com/It22899224J',
    linkedin: 'https://www.linkedin.com/in/mithila-thilochana-b364362a0/',
    email: 'it22899224J@my.sliit.lk',
    bio: 'Responsible for the Meta-RL and SLAM obstacle-aware navigation engine, including the cloud-based inference server and the robot integration plugin for LiDAR data ingestion.',
  },
  {
    name: 'Jayarathne H C D',
    role: 'Group Member',
    module: '3D Mapping & Visualization Platform',
    avatar: '/hirusha.jpeg',
    github: 'https://github.com/Hirusha-Chamod',
    linkedin: 'https://www.linkedin.com/in/sithum-senanayake-b11249239/',
    email: 'it22311290@my.sliit.lk',
    bio: 'Leads the development of the Three.js and WebGL-based 3D visualisation platform for real-time rendering of SLAM-generated LiDAR point clouds over a cloud-edge architecture.',
  },
  {
    name: 'Senanayake S M A S N',
    role: 'Group Member',
    module: 'Multi-Robot Collaboration Framework',
    avatar: '/sithum.jpeg',
    github: 'https://github.com/sithum-senanayake',
    linkedin: 'https://www.linkedin.com/in/hirusha-chamod-954037259/',
    email: 'it22305282@my.sliit.lk',
    bio: 'Owns the multi-robot collaboration framework, implementing the ROS2 bridge, RESTful/WebSocket APIs, and Gazebo simulation environment for decentralised fleet coordination.',
  },
  {
    name: 'Gomis R J S',
    role: 'Group Member',
    module: 'Synthetic Data Generation',
    avatar: '/reshan.jpg',
    github: 'https://github.com/Reshan123',
    linkedin: 'https://www.linkedin.com/in/reshan-gomis-704b07248/',
    email: 'it22349606@my.sliit.lk',
    bio: 'Develops the isolated FastAPI microservice for automated synthetic LiDAR data generation, including dynamic environment hot-swapping in headless ROS2 simulations.',
  },
]

const supervisors: Person[] = [
  {
    name: 'Mr. Samadhi Rathnayake',
    role: 'Supervisor',
    avatar: '/samadhi.jpg',
    linkedin: 'https://www.linkedin.com/in/samadhi-chathuranga-rathnayake/',
    email: 'samadhi.r@sliit.lk',
    bio: 'Research supervisor providing academic guidance, technical mentorship, and evaluation oversight throughout the project lifecycle.',
  },
  {
    name: 'Mr. Amila Alexander',
    role: 'Co-Supervisor',
    avatar: '/avatar-placeholder.jpg',
    linkedin: '#',
    email: 'amila.al@sliit.lk',
    bio: 'Co-supervisor offering additional domain expertise and supporting the group with technical reviews and periodic progress assessments.',
  },
]

function PersonCard({ person, index }: { person: Person; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-md hover:border-accent/40 transition-all flex flex-col"
    >
      {/* Avatar */}
      <div className="relative h-60 bg-secondary/60 overflow-hidden">
        <Image
          src={person.avatar}
          alt={`Portrait of ${person.name}`}
          fill
          className=" object-cover"
          sizes="(max-width: 50px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-bold text-base text-foreground">{person.name}</h3>
          <p className="text-xs font-semibold text-accent mt-0.5">{person.role}</p>
          {person.module && (
            <p className="text-xs text-muted-foreground mt-1 leading-snug">{person.module}</p>
          )}
        </div>
        <p className="text-xs text-muted-foreground font-serif leading-relaxed flex-1 mb-4">
          {person.bio}
        </p>

        {/* Links */}
        <div className="flex items-center gap-2 flex-wrap">
          {person.email && (
            <a
              href={`mailto:${person.email}`}
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1 rounded-md border border-border hover:border-accent/50"
              aria-label={`Email ${person.name}`}
            >
              <Mail className="w-3.5 h-3.5" aria-hidden />
              Email
            </a>
          )}
          {person.github && (
            <a
              href={person.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1 rounded-md border border-border hover:border-accent/50"
              aria-label={`GitHub profile of ${person.name}`}
            >
              <Github className="w-3.5 h-3.5" aria-hidden />
              GitHub
            </a>
          )}
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-2.5 py-1 rounded-md border border-border hover:border-accent/50"
              aria-label={`LinkedIn profile of ${person.name}`}
            >
              <Linkedin className="w-3.5 h-3.5" aria-hidden />
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-14">
          <SectionHeader
            eyebrow="The Team"
            title="About Us"
            description="Group 25-26J-497 is a four-member research team supervised by two academic staff members at the Faculty of Computing."
          />
        </motion.div>

        {/* Group Members */}
        <section aria-labelledby="members-heading" className="mb-16">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="members-heading"
            className="flex items-center gap-2 text-base font-bold text-foreground mb-6"
          >
            <User className="w-4 h-4 text-accent" aria-hidden />
            Group Members
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.map((person, i) => (
              <PersonCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </section>

        {/* Supervisors */}
        <section aria-labelledby="supervisors-heading">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            id="supervisors-heading"
            className="flex items-center gap-2 text-base font-bold text-foreground mb-6"
          >
            <GraduationCap className="w-4 h-4 text-accent" aria-hidden />
            Supervisors
          </motion.h2>
          <div className="grid sm:grid-cols-2 max-w-2xl gap-6">
            {supervisors.map((person, i) => (
              <PersonCard key={person.name} person={person} index={i} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
