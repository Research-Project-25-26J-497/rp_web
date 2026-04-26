import type { Metadata } from 'next'
import { Inter, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Group 25-26J-497 | Autonomous Indoor Navigation',
  description:
    'Platform for Autonomous Indoor Navigation using SLAM, Meta-RL and Multi-Robot Collaboration — Research Capstone Group 25-26J-497.',
  keywords: [
    'SLAM',
    'Meta-RL',
    'autonomous navigation',
    'multi-robot',
    'LiDAR',
    'ROS2',
    'robotics research',
  ],
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
