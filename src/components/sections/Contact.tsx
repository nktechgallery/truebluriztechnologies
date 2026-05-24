'use client'

import { useEffect, useRef } from 'react'
import { Phone, MessageCircle, Globe, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react'

const contactMethods = [
  { icon: MessageCircle, label: 'WhatsApp', value: '+91 90250 03542', href: 'https://wa.me/919025003542', desc: 'Chat with us directly' },
  { icon: Phone, label: 'Phone', value: '+91 90250 03542', href: 'tel:+919025003542', desc: 'Call us anytime' },
  { icon: Globe, label: 'Website', value: 'truebluriztechnologies.com', href: '#', desc: 'Visit our website' },
]

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
]

const serviceLinks = [
  { label: 'Website Development', wa: 'I want website development' },
  { label: 'Mobile App Development', wa: 'I want mobile app development' },
  { label: 'Billing Software (True Bill)', wa: 'I want True Bill billing software' },
  { label: 'Poster / Catalogue Design', wa: 'I want poster or catalogue design' },
  { label: 'Video Editing', wa: 'I want video editing services' },
  { label: 'Lead Generation / SMM', wa: 'I want lead generation or SMM services' },
]

export default function Contact() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observe = (el: HTMLElement | null, dx = 0) => {
      if (!el) return
      el.style.opacity = '0'; el.style.transform = `translate(${dx}px, 10px)`
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.65s ease, transform 0.65s ease'
          el.style.opacity = '1'; el.style.transform = 'translate(0,0)'
          obs.disconnect()
        }
      }, { threshold: 0.1 })
      obs.observe(el)
    }
    observe(leftRef.current, -16)
    observe(rightRef.current, 16)
  }, [])

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden" style={{ background: 'var(--bg)' }} aria-labelledby="contact-heading">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <span style={{ fontFamily: '"Playfair Display", Georgia, serif', fontSize: 'clamp(80px, 18vw, 200px)', color: 'rgba(26,23,20,0.025)', letterSpacing: '-0.05em', lineHeight: 1, fontWeight: 900 }}>CONTACT</span>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left */}
          <div ref={leftRef}>
            <div className="section-badge">Get In Touch</div>
            <h2 id="contact-heading" className="section-title mb-4">
              Let&apos;s Build<br />
              <span style={{ backgroundImage: 'linear-gradient(135deg, #e74c3c, #c0392b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Something</span><br />
              Amazing
            </h2>
            <div className="divider mb-7" />
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: 'var(--text-muted)' }}>
              You have a vision. We have the skills. Together, we create success. We don&apos;t just complete projects — we build partnerships that grow your business.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 hover:border-red-200 hover:bg-red-50 border"
                  style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}
                  aria-label={`${method.label}: ${method.value}`}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--primary-subtle)', color: 'var(--primary)' }}>
                    <method.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs font-mono tracking-widest" style={{ color: 'var(--text-light)' }}>{method.desc}</div>
                    <div className="font-semibold text-sm" style={{ color: 'var(--text)' }}>{method.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-mono tracking-widest" style={{ color: 'var(--text-light)' }}>FOLLOW US</span>
              <div className="flex gap-2">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:border-red-300 hover:text-red-600 border"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-light)' }}>
                    <s.icon size={15} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right */}
          <div ref={rightRef} className="card p-7 sm:p-10">
            <h3 className="font-heading font-bold text-2xl mb-1" style={{ color: 'var(--text)' }}>Get a Free Quote</h3>
            <p className="text-sm font-mono mb-7" style={{ color: 'var(--text-light)' }}>We&apos;ll respond within 24 hours</p>

            <div className="flex flex-col gap-2 mb-7">
              {serviceLinks.map((service) => (
                <a
                  key={service.label}
                  href={`https://wa.me/919025003542?text=${encodeURIComponent(service.wa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-service-item group"
                  aria-label={service.label}
                >
                  <span className="text-sm font-medium">{service.label}</span>
                  <ArrowRight size={14} style={{ color: 'var(--primary)' }} />
                </a>
              ))}
            </div>

            <a
              href="https://wa.me/919025003542"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center text-sm"
              aria-label="WhatsApp True Bluriz Technologies now"
            >
              <MessageCircle size={16} />
              WhatsApp Now · +91 90250 03542
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
