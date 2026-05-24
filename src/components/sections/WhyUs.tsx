'use client'

import { useEffect, useRef } from 'react'
import { CheckCircle, Zap, Clock, HeadphonesIcon, Star, Award } from 'lucide-react'

const reasons = [
  { icon: CheckCircle, title: 'Simple & Easy Solutions', desc: 'We make complex technology simple and accessible for every business, big or small.' },
  { icon: Zap, title: 'Affordable Pricing', desc: 'Premium quality at prices that fit any budget — no hidden costs, ever.' },
  { icon: Clock, title: 'Fast Delivery', desc: 'Quick turnaround without compromising on quality, detail, or performance.' },
  { icon: HeadphonesIcon, title: 'Customer-Focused Support', desc: 'Dedicated support at every step, even after project delivery.' },
  { icon: Star, title: 'Reliable & Innovative', desc: 'Reliable solutions built with the latest technology and creative ideas.' },
]

const stats = [
  { value: '30+', label: 'Projects Completed' },
  { value: '20+', label: 'Happy Clients' },
  { value: '5+', label: 'Services Offered' },
  { value: '24/7', label: 'Customer Support' },
]

function AwardVisual() {
  return (
    <div className="relative flex flex-col items-center justify-center" style={{ height: 300 }}>
      <div className="card-3d-wrap" style={{ width: 260, height: 180 }}>
        <div
          className="card-3d rounded-3xl flex flex-col items-center justify-center gap-3"
          style={{
            background: 'linear-gradient(135deg, #fdf2f1, #fff)',
            border: '1px solid rgba(192,57,43,0.12)',
            boxShadow: '0 24px 48px rgba(192,57,43,0.10)',
          }}
        >
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'var(--primary)', boxShadow: '0 8px 24px rgba(192,57,43,0.3)' }}>
            <Award size={28} color="white" />
          </div>
          <div className="text-center">
            <div className="font-heading font-bold text-xl" style={{ color: 'var(--primary)' }}>UNSTOPPABLE</div>
            <div className="text-xs font-mono tracking-widest mt-1" style={{ color: 'var(--text-light)' }}>TRUE BLURIZ TECHNOLOGIES</div>
          </div>
        </div>
      </div>
      {stats.slice(0, 2).map((stat, i) => (
        <div
          key={stat.label}
          className="absolute card rounded-2xl px-4 py-3"
          style={{
            top: i === 0 ? 10 : undefined, bottom: i === 1 ? 10 : undefined,
            left: i === 0 ? 0 : undefined, right: i === 1 ? 0 : undefined,
            animation: `float3d ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`, minWidth: 110,
          }}
        >
          <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{stat.value}</div>
          <div className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-light)' }}>{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default function WhyUs() {
  const statsRef = useRef<HTMLDivElement>(null)
  const reasonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observe = (el: HTMLElement | null, delay = 0) => {
      if (!el) return
      el.style.opacity = '0'; el.style.transform = 'translateY(20px)'
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; el.style.opacity = '1'; el.style.transform = 'translateY(0)' }, delay)
          obs.disconnect()
        }
      }, { threshold: 0.1 })
      obs.observe(el)
      return () => obs.disconnect()
    }
    observe(statsRef.current)
    observe(reasonsRef.current, 100)
  }, [])

  return (
    <section id="portfolio" className="py-24 sm:py-32 relative overflow-hidden" style={{ background: 'var(--bg-alt)' }} aria-labelledby="whyus-heading">
      <div className="section-container relative z-10">
        <div ref={statsRef} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="card p-6 text-center">
              <div style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, color: 'var(--primary)' }}>{stat.value}</div>
              <div className="text-xs font-mono tracking-widest mt-2" style={{ color: 'var(--text-light)' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex items-center justify-center py-8 lg:py-0">
            <AwardVisual />
          </div>

          <div ref={reasonsRef}>
            <div className="section-badge">Why Choose Us</div>
            <h2 id="whyus-heading" className="section-title mb-3">
              Why{' '}
              <span style={{
                backgroundImage: 'linear-gradient(135deg, #e74c3c, #c0392b)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
              }}>True Bluriz?</span>
            </h2>
            <div className="divider mb-8" />

            <div className="flex flex-col gap-3">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="flex items-start gap-4 p-4 rounded-2xl transition-colors duration-200 hover:bg-white cursor-default"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}>
                    <reason.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm" style={{ color: 'var(--text)' }}>{reason.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
