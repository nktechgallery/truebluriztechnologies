'use client'

import { useEffect, useRef } from 'react'

const steps = [
  { num: '01', title: 'Discuss Your Idea', desc: 'Tell us about your project, goals, and requirements. We listen carefully and understand your vision.' },
  { num: '02', title: 'Plan & Design', desc: 'We create a detailed plan and design mockup tailored to your business needs and brand identity.' },
  { num: '03', title: 'Develop & Test', desc: 'Our team builds your solution with clean code, rigorous testing for performance and reliability.' },
  { num: '04', title: 'Launch & Support', desc: 'We deliver on time and provide ongoing support to ensure your product grows with your business.' },
]

export default function Process() {
  const headerRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observe = (el: HTMLElement | null, delay = 0) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
              el.style.opacity = '1'
              el.style.transform = 'translateY(0)'
            }, delay)
            observer.disconnect()
          }
        },
        { threshold: 0.1 }
      )
      observer.observe(el)
    }
    observe(headerRef.current)
    observe(stepsRef.current, 100)
  }, [])

  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden" style={{ background: 'var(--bg)' }} aria-labelledby="process-heading">
      <div className="section-container relative z-10">
        <div ref={headerRef} className="text-center mb-14">
          <div className="section-badge mx-auto w-fit">Our Development Process</div>
          <h2 id="process-heading" className="section-title mb-4">
            How We <span style={{
              backgroundImage: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>Work</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            A streamlined process that delivers results on time, every time.
          </p>
        </div>

        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line desktop */}
          <div
            className="hidden lg:block absolute h-px"
            style={{
              top: 28, left: '14%', right: '14%',
              background: 'linear-gradient(to right, transparent, var(--border-strong), var(--primary-subtle), var(--border-strong), transparent)'
            }}
          />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="card p-7 relative"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="step-num">{step.num}</span>
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                style={{ background: 'var(--primary-subtle)', border: '1px solid rgba(192,57,43,0.15)' }}
              >
                <span className="font-heading text-lg font-bold" style={{ color: 'var(--primary)' }}>{step.num}</span>
              </div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text)', fontSize: '1rem' }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
