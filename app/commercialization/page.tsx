'use client'

import { motion } from 'framer-motion'
import {
  Rocket,
  DollarSign,
  CheckCircle,
  BarChart3,
  Users,
  Zap,
  ShieldCheck,
  Package,
  ArrowRight,
} from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

const valueProps = [
  {
    icon: Zap,
    title: 'Rapid Deployment',
    body: 'Reduce time-to-deployment for autonomous mobile robot fleets from months to days by leveraging pre-trained Meta-RL policies and synthetic training data.',
  },
  {
    icon: DollarSign,
    title: 'Lower Operational Cost',
    body: 'Eliminate expensive re-commissioning cycles. The adaptive engine adjusts to new environments without costly manual map rebuilds.',
  },
  {
    icon: ShieldCheck,
    title: 'No Single Point of Failure',
    body: 'Decentralised multi-robot collaboration means the fleet continues to operate even when individual robots or cloud nodes go offline.',
  },
  {
    icon: BarChart3,
    title: 'Scalability',
    body: 'A cloud-edge microservices architecture scales horizontally to support small pilot deployments and large enterprise AMR fleets alike.',
  },
  {
    icon: Users,
    title: 'Minimal Operator Expertise Required',
    body: 'Intuitive browser-based 3D visualisation and a simple REST/WebSocket API lower the barrier for non-specialist operators.',
  },
  {
    icon: Package,
    title: 'Plug-and-Play Integration',
    body: 'A ROS2-compatible robot integration plugin works with off-the-shelf LiDAR hardware, reducing custom development overhead.',
  },
]

const revenueStreams = [
  {
    label: 'SaaS Training Platform',
    description:
      'Subscription access to the cloud-hosted Meta-RL training environment, synthetic data pipeline, and visualisation dashboard.',
    tiers: ['Starter — small pilot fleets', 'Professional — mid-size operations', 'Enterprise — custom SLAs & support'],
    icon: Rocket,
  },
  {
    label: 'Per-Unit Robot Deployment',
    description:
      'Per-robot licensing for the onboard navigation inference plugin, billed monthly or annually per active robot unit.',
    tiers: ['Pay-as-you-go per robot', 'Volume discounts at 10+ units', 'Managed fleet options'],
    icon: Package,
  },
]

const targetMarkets = [
  'Warehouse & logistics automation',
  'Hospital & healthcare facilities',
  'Airport ground operations',
  'Smart retail & inventory management',
  'Research institutions & universities',
  'Defence & security applications',
]

export default function CommercializationPage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-14">
          <SectionHeader
            eyebrow="Go-to-Market Strategy"
            title="Commercialization"
            description="Our platform dramatically lowers the cost and complexity of deploying autonomous mobile robot fleets — opening enterprise-grade autonomy to organisations that previously couldn't afford it."
          />
        </motion.div>

        {/* Value Proposition */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
          <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
            <Rocket className="w-5 h-5 text-accent" aria-hidden />
            Value Proposition
          </h2>
          <p className="text-sm text-muted-foreground font-serif mb-7 leading-relaxed max-w-3xl">
            Autonomous mobile robot deployments traditionally require weeks of manual environment mapping,
            extensive operator training, and bespoke integrations. Our platform collapses that timeline
            and cost curve through four compounding advantages.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {valueProps.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl p-5 hover:border-accent/40 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/8 border border-primary/10">
                    <item.icon className="w-4 h-4 text-primary" aria-hidden />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground font-serif leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Revenue Model */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-16">
          <h2 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-accent" aria-hidden />
            Revenue Model
          </h2>
          <p className="text-sm text-muted-foreground font-serif mb-7 leading-relaxed max-w-3xl">
            Two complementary revenue streams — SaaS platform subscriptions and per-unit robot licensing —
            provide predictable recurring revenue while aligning incentives with customer success.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {revenueStreams.map((stream, i) => (
              <motion.div
                key={stream.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-xl overflow-hidden"
              >
                <div className="flex items-center gap-3 p-5 border-b border-border bg-secondary/50">
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary text-primary-foreground">
                    <stream.icon className="w-5 h-5" aria-hidden />
                  </span>
                  <h3 className="font-bold text-foreground">{stream.label}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-muted-foreground font-serif leading-relaxed mb-4">
                    {stream.description}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {stream.tiers.map((tier) => (
                      <li key={tier} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden />
                        <span className="text-foreground">{tier}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Target Markets */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground rounded-2xl p-8 sm:p-10"
        >
          <h2 className="text-lg font-bold mb-2 flex items-center gap-2">
            <Users className="w-5 h-5 text-accent" aria-hidden />
            Target Markets
          </h2>
          <p className="text-sm text-primary-foreground/70 font-serif mb-7 leading-relaxed max-w-2xl">
            Any industry deploying indoor mobile robots stands to benefit from faster map-free commissioning
            and reduced operational downtime.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {targetMarkets.map((market) => (
              <li key={market} className="flex items-center gap-2 text-sm">
                <ArrowRight className="w-4 h-4 text-accent shrink-0" aria-hidden />
                <span>{market}</span>
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </div>
  )
}
