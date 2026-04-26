'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const slides = [
  {
    src: '/carousel-1.jpg',
    alt: 'Autonomous robot navigating indoor environment with SLAM overlay',
    caption: 'Real-time SLAM Navigation',
  },
  {
    src: '/carousel-2.jpg',
    alt: '3D LiDAR point cloud visualization on screen',
    caption: '3D LiDAR Point Cloud Visualization',
  },
  {
    src: '/carousel-3.jpg',
    alt: 'Multi-robot collaboration in Gazebo ROS2 simulation',
    caption: 'Multi-Robot Collaboration — Gazebo / ROS2',
  },
  {
    src: '/carousel-4.jpg',
    alt: 'Physical robot prototype with LiDAR sensor in lab',
    caption: 'Hardware Prototype',
  },
]

const INTERVAL = 5000

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (next: number) => {
      setDirection(next > index ? 1 : -1)
      setIndex(next)
    },
    [index]
  )

  const prev = () => go((index - 1 + slides.length) % slides.length)
  const next = useCallback(() => go((index + 1) % slides.length), [go, index])

  useEffect(() => {
    if (paused) return
    const id = setTimeout(next, INTERVAL)
    return () => clearTimeout(id)
  }, [index, paused, next])

  const variants = {
    enter: (d: number) => ({ x: d * 80, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d * -80, opacity: 0 }),
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl bg-primary"
      style={{ aspectRatio: '16/7' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Project showcase"
    >
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 80vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-4 left-6 right-16">
            <span className="inline-block bg-accent/90 text-accent-foreground text-xs font-semibold px-2.5 py-1 rounded-md tracking-wide">
              {slides[index].caption}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 flex gap-1.5" role="tablist" aria-label="Slide indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              i === index ? 'bg-accent w-5' : 'bg-white/50 hover:bg-white/80'
            )}
          />
        ))}
      </div>
    </div>
  )
}
