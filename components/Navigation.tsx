'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Cpu } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Commercialization', href: '/commercialization' },
  { label: 'Milestones', href: '/milestones' },
  { label: 'Documents', href: '/documents' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-shadow duration-300',
        scrolled ? 'shadow-lg shadow-primary/20' : 'shadow-none'
      )}
      style={{ background: 'var(--nav-bg)' }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Go to homepage">
          <span className="flex items-center justify-center w-8 h-8 rounded-md bg-accent/20 border border-accent/40 group-hover:bg-accent/30 transition-colors">
            <Cpu className="w-4 h-4 text-accent" aria-hidden />
          </span>
          <div className="flex flex-col leading-none">
            <span className="text-xs font-semibold text-white/60 tracking-widest uppercase">Group 25-26J-497</span>
            <span className="text-sm font-bold text-white tracking-tight">AutoNav Platform</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-md bg-white/15"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden lg:hidden border-t border-white/10"
            style={{ background: 'var(--nav-bg)' }}
          >
            <ul className="flex flex-col px-4 pb-4 pt-2 gap-1" role="list">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'block px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                        isActive
                          ? 'bg-white/15 text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
