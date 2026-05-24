'use client'

import { Phone, MessageCircle } from 'lucide-react'

const services = [
  'Website Development','Mobile App Development','Billing Software',
  'Poster Design','Catalogue Design','Video Editing','Lead Generation','SMM Services',
]

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer role="contentinfo" style={{ background: '#1a1714' }}>
      <div className="section-container py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white flex-shrink-0"
                style={{ background: 'var(--primary)', fontFamily: '"Playfair Display", Georgia, serif', fontSize: '0.9rem' }}
              >T3</div>
              <div className="leading-none">
                <div className="text-white font-bold" style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>True Bluriz</div>
                <div className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--primary)', fontSize: '0.6rem' }}>Technologies</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Smart solutions for your business needs. We build, design and grow your ideas with technology. Technology in your hands.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+919025003542" className="flex items-center gap-2 text-sm transition-opacity hover:opacity-100 opacity-60 text-white" aria-label="Call us">
                <Phone size={13} style={{ color: 'var(--primary)' }} />+91 90250 03542
              </a>
              <a href="https://wa.me/919025003542" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm transition-opacity hover:opacity-100 opacity-60 text-white" aria-label="WhatsApp us">
                <MessageCircle size={13} style={{ color: 'var(--primary)' }} />WhatsApp: +91 90250 03542
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-white mb-5">Services</h4>
            <ul className="flex flex-col gap-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-opacity hover:opacity-80 opacity-40 text-white">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase text-white mb-5">Company</h4>
            <ul className="flex flex-col gap-2.5">
              {[['Home','#home'],['Services','#services'],['Pricing','#pricing'],['Process','#process'],['Contact','#contact']].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm transition-opacity hover:opacity-80 opacity-40 text-white">{label}</a>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h4 className="text-xs font-mono tracking-widest uppercase text-white mb-3">Contact</h4>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Call or WhatsApp<br />+91 90250 03542<br />Available 24/7
                <br />Vellore - Tamil Nadu
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {year} True Bluriz Technologies. All rights reserved.
          </p>
          <p className="text-xs font-mono" style={{ color: 'rgba(255,255,255,0.25)' }}>
            Technology In Your Hands · Unstoppable
          </p>
        </div>
      </div>
    </footer>
  )
}
