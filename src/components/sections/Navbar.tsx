'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import Image from "next/image";
const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
      style={{ willChange: 'transform' }}
    >
      <nav className="section-container flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" aria-label="True Bluriz Technologies Home">
         <div
  className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
  style={{ background: 'var(--primary)' }}
>
  <Image
    src="/logo.png"
    alt="Logo"
    width={40}
    height={40}
    className="w-full h-full object-contain"
    priority
  />
</div>
          <div className="leading-none">
            <div className="font-heading text-base font-bold tracking-tight" style={{ color: 'var(--text)' }}>
              True Bluriz
            </div>
            <div className="text-xs font-mono tracking-widest uppercase" style={{ color: 'var(--primary)', fontSize: '0.6rem' }}>
              Technologies
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors relative group"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  style={{ background: 'var(--primary)' }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+919025003542"
            className="flex items-center gap-1.5 text-sm font-medium transition-colors"
            style={{ color: 'var(--text-muted)' }}
          >
            <Phone size={13} />
            +91 90250 03542
          </a>
          <a href="#contact" className="btn-primary text-sm py-2.5 px-5">
            Get Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 rounded-lg transition-colors"
          style={{ color: 'var(--text)' }}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(250,250,248,0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid var(--border)' }}
      >
        <div className="section-container py-6 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 px-4 rounded-xl text-sm font-medium transition-colors"
              style={{ color: 'var(--text-muted)' }}
            >
              {link.label}
            </a>
          ))}
          <div className="border-t mt-3 pt-4" style={{ borderColor: 'var(--border)' }}>
            <a
              href="tel:+919025003542"
              className="flex items-center gap-2 py-3 px-4 text-sm font-medium"
              style={{ color: 'var(--primary)' }}
            >
              <Phone size={14} />
              +91 90250 03542
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full justify-center text-sm">
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
