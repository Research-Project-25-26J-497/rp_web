'use client'

import { motion } from 'framer-motion'
import { Brain, Globe, Network, FlaskConical, User, Tag, ChevronRight } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: 'easeOut' },
  }),
}

const modules = [
  {
    icon: Brain,
    color: 'oklch(0.55 0.18 260)',
    colorLight: 'oklch(0.94 0.04 260)',
    number: '01',
    title: 'Meta-RL & SLAM Obstacle Aware Adaptation Engine',
    owner: 'Thilochana J M',
    tags: ['Meta-RL', 'SLAM', 'LiDAR', 'Cloud Inference'],
    summary:
      'Combines Simultaneous Localisation and Mapping (SLAM) with a Meta-Reinforcement Learning (Meta-RL) engine to produce an obstacle-aware navigation policy that adapts on the fly to new environments without retraining from scratch.',
    features: [
      {
        label: 'Robot Integration Plugin',
        detail:
          'An onboard plugin ingests raw LiDAR scans, pre-processes point clouds, and packages them for transmission to the central inference server.',
      },
      {
        label: 'Cloud-Based Central Server',
        detail:
          'Receives sensor data from multiple robots, runs Meta-RL inference, and returns navigation commands over a low-latency API.',
      },
      {
        label: 'Remote Client Interface',
        detail:
          'Operators can monitor agent states, inspect SLAM maps, and override navigation targets from a browser-based dashboard.',
      },
      {
        label: 'Adaptive Policy Updates',
        detail:
          'The Meta-RL model uses in-context learning signals from live telemetry to refine its navigation policy during deployment.',
      },
    ],
  },
  {
    icon: Globe,
    color: 'oklch(0.55 0.18 195)',
    colorLight: 'oklch(0.94 0.05 195)',
    number: '02',
    title: '3D Mapping & Visualization Platform',
    owner: 'Jayarathne H C D',
    tags: ['Three.js', 'WebGL', 'Point Cloud', 'Real-Time'],
    summary:
      'A centralised web interface that streams SLAM-generated 3D LiDAR point clouds from the edge and renders them interactively in the browser using Three.js and WebGL over a cloud-edge pipeline.',
    features: [
      {
        label: 'Real-Time Spatial Rendering',
        detail:
          'WebGL shaders process millions of LiDAR points per second to produce smooth, interactive 3D maps with depth-based colouring.',
      },
      {
        label: 'Cloud-Edge Architecture',
        detail:
          'Processing is split between edge nodes (compression, filtering) and cloud servers (storage, streaming) to minimise latency.',
      },
      {
        label: 'Three.js Scene Graph',
        detail:
          'Robots, trajectory paths, and obstacle markers are represented as live scene-graph objects updated on every WebSocket frame.',
      },
      {
        label: 'Multi-Robot Overlay',
        detail:
          'Simultaneous feeds from all active robots are composited into a single unified map view with per-robot colour coding.',
      },
    ],
  },
  {
    icon: Network,
    color: 'oklch(0.55 0.2 155)',
    colorLight: 'oklch(0.94 0.05 155)',
    number: '03',
    title: 'Multi-Robot Collaboration Framework',
    owner: 'Senanayake S M A S N',
    tags: ['ROS2 Humble', 'WebSocket', 'REST API', 'Gazebo'],
    summary:
      'Enables a fleet of heterogeneous robots to share spatial knowledge in real time via a ROS2 bridge, eliminating centralised bottlenecks and supporting both simulated and physical deployments.',
    features: [
      {
        label: 'ROS2 Bridge',
        detail:
          'Converts ROS2 messages into JSON-serialised 3D point cloud arrays and publishes them over RESTful and WebSocket channels.',
      },
      {
        label: 'Decentralised Coordination',
        detail:
          'Each robot maintains a local map and periodically merges updates from peers, removing single points of failure.',
      },
      {
        label: 'Gazebo / ROS2 Humble Simulation',
        detail:
          'Full-fidelity simulations validate collaboration protocols before physical deployment, using photorealistic Gazebo environments.',
      },
      {
        label: 'RESTful & WebSocket APIs',
        detail:
          'Standardised HTTP endpoints handle task allocation and status queries; WebSockets push continuous telemetry to dashboards.',
      },
    ],
  },
  {
    icon: FlaskConical,
    color: 'oklch(0.58 0.2 45)',
    colorLight: 'oklch(0.96 0.04 45)',
    number: '04',
    title: 'Synthetic Data Generation',
    owner: 'Gomis R J S',
    tags: ['FastAPI', 'ROS2', 'LiDAR', 'Simulation'],
    summary:
      'An isolated FastAPI microservice that autonomously produces diverse, labelled LiDAR datasets by dynamically hot-swapping 3D environments inside running headless ROS2 simulations.',
    features: [
      {
        label: 'FastAPI Microservice',
        detail:
          'Exposes REST endpoints to trigger data-generation jobs, configure scene parameters, and retrieve completed datasets.',
      },
      {
        label: 'Dynamic Environment Hot-Swapping',
        detail:
          '3D world files are injected into a live Gazebo instance without restarting the simulation, enabling rapid scene cycling.',
      },
      {
        label: 'Headless ROS2 Nodes',
        detail:
          'Sensor and actuator nodes run without a GUI, allowing parallel generation jobs on CI/CD or cloud-batch infrastructure.',
      },
      {
        label: 'Automated LiDAR Data-Mining',
        detail:
          'Point clouds, odometry, and ground-truth annotations are captured and packaged into structured datasets for model training.',
      },
    ],
  },
]

export default function ArchitecturePage() {
  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-14"
        >
          <SectionHeader
            eyebrow="Technical Deep Dive"
            title="System Architecture & Core Modules"
            description="The platform comprises four independently owned subsystems, each responsible for a distinct layer of the cloud-edge autonomous navigation stack. Together they form a resilient, scalable system for indoor AMR fleets."
          />
        </motion.div>

        {/* Module Cards */}
        <div className="flex flex-col gap-10">
          {modules.map((mod, i) => (
            <motion.article
              key={mod.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              custom={i}
              viewport={{ once: true, margin: '-60px' }}
              className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 sm:p-8 border-b border-border"
                style={{ background: mod.colorLight }}
              >
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                  style={{ background: mod.color }}
                >
                  <mod.icon className="w-6 h-6 text-white" aria-hidden />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className="text-xs font-mono font-bold px-2 py-0.5 rounded"
                      style={{ background: mod.color, color: 'white' }}
                    >
                      Module {mod.number}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <User className="w-3 h-3" aria-hidden />
                      {mod.owner}
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-foreground text-balance">
                    {mod.title}
                  </h2>
                </div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:justify-end">
                  {mod.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full bg-white/70 text-foreground border border-border"
                    >
                      <Tag className="w-2.5 h-2.5" aria-hidden />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8">
                <p className="text-sm text-muted-foreground font-serif leading-relaxed mb-6">
                  {mod.summary}
                </p>
                <h3 className="text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                  Key Components
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {mod.features.map((f) => (
                    <div key={f.label} className="flex gap-3">
                      <ChevronRight
                        className="w-4 h-4 mt-0.5 shrink-0"
                        style={{ color: mod.color }}
                        aria-hidden
                      />
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          {f.label}
                        </p>
                        <p className="text-xs text-muted-foreground font-serif leading-relaxed mt-0.5">
                          {f.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
