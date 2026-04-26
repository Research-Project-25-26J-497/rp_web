'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
}

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FieldError = Partial<Record<keyof FormState, string>>

const contactDetails = [
  {
    icon: Mail,
    label: 'General Enquiries',
    value: 'it22899224J@my.sliit.lk',
    href: 'mailto:it22899224J@my.sliit.lk',
  },
  {
    icon: MapPin,
    label: 'Institution',
    value: 'Faculty of Computing, Sri Lanka Institute of Information Technology, Sri Lanka',
    href: '#',
  },
]

function validate(form: FormState): FieldError {
  const errors: FieldError = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.subject.trim()) errors.subject = 'Subject is required.'
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
  } else if (form.message.trim().length < 20) {
    errors.message = 'Message must be at least 20 characters.'
  }
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState<FieldError>({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    // Non-functional: just show success state
    setSubmitted(true)
  }

  return (
    <div className="py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="mb-12">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Contact Us"
            description="Have a question about the project, wish to collaborate, or need access to our research outputs? Reach out using the details below or fill in the contact form."
          />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left: Contact details */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <div className="bg-primary text-primary-foreground rounded-2xl p-7">
              <h2 className="font-bold text-base mb-5">Contact Information</h2>
              <ul className="flex flex-col gap-5">
                {contactDetails.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-accent" aria-hidden />
                    </span>
                    <div>
                      <p className="text-xs text-primary-foreground/60 font-semibold tracking-wide uppercase mb-0.5">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="text-sm text-primary-foreground hover:text-accent transition-colors leading-relaxed"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h2 className="font-bold text-sm text-foreground mb-3">Research Group</h2>
              <p className="text-xs text-muted-foreground font-serif leading-relaxed">
                Group 25-26J-497 is an active research capstone team. For academic collaboration,
                media enquiries, or access to research data, please contact us via email or use the
                form on this page.
              </p>
            </div>
          </motion.aside>

          {/* Right: Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="lg:col-span-3"
          >
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="font-bold text-base text-foreground mb-6">Send a Message</h2>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/15 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-accent" aria-hidden />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Message received!</p>
                    <p className="text-sm text-muted-foreground font-serif">
                      Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                    className="text-xs font-semibold text-accent hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  {/* Name + Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FieldWrapper label="Full Name" id="name" error={errors.name} required>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        className={inputClass(!!errors.name)}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                    </FieldWrapper>
                    <FieldWrapper label="Email Address" id="email" error={errors.email} required>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        className={inputClass(!!errors.email)}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                    </FieldWrapper>
                  </div>

                  {/* Subject */}
                  <FieldWrapper label="Subject" id="subject" error={errors.subject} required>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className={inputClass(!!errors.subject) + ' cursor-pointer'}
                      aria-invalid={!!errors.subject}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                    >
                      <option value="" disabled>Select a subject&hellip;</option>
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Research Collaboration">Research Collaboration</option>
                      <option value="Document Access">Document Access Request</option>
                      <option value="Technical Question">Technical Question</option>
                      <option value="Media / Press">Media / Press</option>
                      <option value="Other">Other</option>
                    </select>
                  </FieldWrapper>

                  {/* Message */}
                  <FieldWrapper label="Message" id="message" error={errors.message} required>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Write your message here (minimum 20 characters)..."
                      value={form.message}
                      onChange={handleChange}
                      className={inputClass(!!errors.message) + ' resize-none'}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                  </FieldWrapper>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-semibold text-sm px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" aria-hidden />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function inputClass(hasError: boolean) {
  return [
    'w-full rounded-lg border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground',
    'focus:outline-none focus:ring-2 transition-colors',
    hasError
      ? 'border-destructive focus:ring-destructive/30'
      : 'border-input focus:border-accent focus:ring-accent/30',
  ].join(' ')
}

function FieldWrapper({
  label,
  id,
  error,
  required,
  children,
}: {
  label: string
  id: string
  error?: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-foreground">
        {label}
        {required && <span className="text-destructive ml-0.5" aria-hidden>*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="flex items-center gap-1 text-xs text-destructive">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden />
          {error}
        </p>
      )}
    </div>
  )
}
