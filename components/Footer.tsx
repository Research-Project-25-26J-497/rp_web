import Link from 'next/link'
import { Cpu } from 'lucide-react'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Milestones', href: '/milestones' },
  { label: 'Documents', href: '/documents' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer
      className="border-t border-border bg-primary text-primary-foreground"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-start gap-3">
            {/* <span className="mt-0.5 flex items-center justify-center w-8 h-8 rounded-md bg-accent/20 border border-accent/40 shrink-0">
              <Cpu className="w-4 h-4 text-accent" aria-hidden />
            </span>  */}
            <div>
              <p className="text-sm font-bold tracking-tight">M. A. N. T. I. S</p>
              <p className="text-xs text-primary-foreground/60 mt-0.5">Group 25-26J-497</p>
              <p className="text-xs text-primary-foreground/50 mt-1 max-w-xs leading-relaxed">
                Research Capstone — SLAM, Meta-RL &amp; Multi-Robot Collaboration
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/40">
          <p>&copy; {new Date().getFullYear()} Group 25-26J-497. All rights reserved.</p>
          <p>Built for academic research purposes.</p>
        </div>
      </div>
    </footer>
  )
}
