'use client'

import { useEffect, useRef } from 'react'
import { Phone, MessageCircle, ChevronDown, ArrowRight } from 'lucide-react'

/* 
  3D image showcase — uses CSS perspective + keyframe float.
  In production, replace src with actual local image paths like /images/hero-dashboard.png
  These use a placeholder gradient so it works without assets.
*/
function HeroVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: 360 }}>
      {/* Main 3D card */}
      <div className="card-3d-wrap" style={{ width: 340, height: 260, maxWidth: '90vw' }}>
        <div className="card-3d rounded-2xl overflow-hidden" style={{ boxShadow: '0 32px 64px rgba(26,23,20,0.18), 0 0 0 1px var(--border)' }}>
          {/* Simulated dashboard screenshot — replace with <Image> from 'next/image' */}
          <div style={{
            width: '100%', height: '100%',
            background: 'linear-gradient(135deg, #1a1714 0%, #2d2622 100%)',
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Decorative UI elements inside the card */}
            <div style={{ padding: '20px 20px 0', display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              {['#e74c3c','#f39c12','#2ecc71'].map(c => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
              ))}
              <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.08)', marginLeft: 8, borderRadius: 4 }} />
            </div>
            <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[70, 90, 55, 80].map((w, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(192,57,43,0.3)', flexShrink: 0 }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
                    <div style={{ height: 8, width: `${w}%`, background: 'rgba(255,255,255,0.12)', borderRadius: 4 }} />
                    <div style={{ height: 6, width: `${w-20}%`, background: 'rgba(255,255,255,0.06)', borderRadius: 4 }} />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: 20, right: 20, background: 'var(--primary)', borderRadius: 8, padding: '8px 14px', fontSize: 11, color: 'white', fontWeight: 600 }}>
              View Project →
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge — top left */}
      <div className="absolute top-4 left-0 card rounded-2xl px-4 py-3 hidden sm:block"
        style={{ animation: 'float3d 4s ease-in-out infinite', animationDelay: '0.5s', minWidth: 130 }}>
        <div className="text-xs font-mono" style={{ color: 'var(--text-light)', marginBottom: 4 }}>Projects Done</div>
        <div className="font-heading text-2xl font-bold" style={{ color: 'var(--primary)' }}>30+</div>
      </div>

      {/* Floating badge — bottom right */}
      <div className="absolute bottom-4 right-0 card rounded-2xl px-4 py-3 hidden sm:block"
        style={{ animation: 'float3d 5s ease-in-out infinite', animationDelay: '1s', minWidth: 150 }}>
        <div className="text-xs font-mono" style={{ color: 'var(--text-light)', marginBottom: 4 }}>Happy Clients</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ display: 'flex' }}>
            {['#e74c3c','#3498db','#2ecc71','#f39c12'].map((c, i) => (
              <div key={i} style={{ width: 22, height: 22, borderRadius: '50%', background: c, border: '2px solid white', marginLeft: i ? -6 : 0 }} />
            ))}
          </div>
          <span className="font-heading text-lg font-bold" style={{ color: 'var(--text)' }}>20+</span>
        </div>
      </div>

      {/* Floating badge — right */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-2 card rounded-2xl px-3 py-2.5 hidden lg:block"
        style={{ animation: 'float3d 3.5s ease-in-out infinite', animationDelay: '1.5s' }}>
        <div className="text-xs font-mono" style={{ color: 'var(--text-light)', marginBottom: 2 }}>Support</div>
        <div className="font-heading text-lg font-bold" style={{ color: 'var(--primary)' }}>24/7</div>
      </div>
    </div>
  )
}

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const h1Ref = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const els = [badgeRef.current, h1Ref.current, subRef.current, ctaRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(20px)'
      el.style.transition = `opacity 0.6s ease, transform 0.6s ease`
      setTimeout(() => {
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 150 + i * 120)
    })
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
      aria-label="True Bluriz Technologies Hero"
    >
      {/* Subtle background texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          radial-gradient(ellipse at 65% 40%, rgba(192,57,43,0.06) 0%, transparent 55%),
          radial-gradient(ellipse at 10% 70%, rgba(192,57,43,0.04) 0%, transparent 45%)
        `
      }} />
      {/* Grid pattern */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(var(--border) 1px, transparent 1px),
          linear-gradient(90deg, var(--border) 1px, transparent 1px)
        `,
        backgroundSize: '64px 64px',
        opacity: 0.4,
      }} />

      <div className="section-container relative z-10 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center" style={{ minHeight: 'calc(100vh - 8rem)' }}>
          {/* Text Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div ref={badgeRef} className="section-badge w-fit">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary)' }} />
              Freelancer · Technology In Your Hands
            </div>

            <h1 ref={h1Ref} className="hero-headline mb-5">
              <span style={{ color: 'var(--text)', display: 'block' }}>UN</span>
              <span style={{
                display: 'block',
                backgroundImage: 'linear-gradient(135deg, var(--primary-light), var(--primary), var(--primary-dark))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>STOP</span>
              <span style={{ color: 'var(--text)', display: 'block' }}>PABLE</span>
            </h1>

            <div ref={subRef}>
              <div className="flex items-center gap-3 mb-5">
                <div className="divider" />
                <div>
                  <p className="text-base sm:text-lg font-semibold tracking-wide" style={{ color: 'var(--text)' }}>
                    Software Solutions
                  </p>
                  <p className="text-xs font-mono tracking-widest mt-0.5" style={{ color: 'var(--text-light)' }}>
                    True Bluriz Technologies
                  </p>
                </div>
              </div>

              <p className="text-base leading-relaxed max-w-lg mb-8" style={{ color: 'var(--text-muted)' }}>
                Smart solutions for your business needs. We build, design and grow your ideas with technology — websites, apps, billing software, and digital marketing.
              </p>
            </div>

            <div ref={ctaRef} className="flex flex-col xs:flex-row gap-3 mb-10">
              <a
                href="https://wa.me/919025003542"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="WhatsApp True Bluriz Technologies"
              >
                <MessageCircle size={16} />
                WhatsApp Us
              </a>
              <a href="tel:+919025003542" className="btn-outline" aria-label="Call True Bluriz Technologies">
                <Phone size={16} />
                Call Now
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
              {[
                { value: '30+', label: 'Projects Done' },
                { value: '20+', label: 'Happy Clients' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="stat-number">{stat.value}</div>
                  <div className="text-xs font-mono tracking-widest mt-0.5" style={{ color: 'var(--text-light)' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual — 3D CSS cards */}
          <div className="order-1 lg:order-2 relative flex items-center justify-center" style={{ minHeight: 360 }}>
            <HeroVisual />
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: 'var(--text-light)', animation: 'float3d 2s ease-in-out infinite' }}
        >
          <span className="text-xs font-mono tracking-widest">Scroll</span>
          <ChevronDown size={14} />
        </div>
      </div>
    </section>
  )
}
