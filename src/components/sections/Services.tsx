'use client'

import { useEffect, useRef } from 'react'
import { ExternalLink, Globe, Smartphone, Receipt, Palette, Video, TrendingUp } from 'lucide-react'
import Image from "next/image";
const services = [
  {
  id: 'web',
  icon: Globe,
  image: '/website.png',
  title: 'Website Development',
  subtitle: 'Build Your Digital Identity',
  desc: 'Modern, responsive, fast websites that represent your business and drive results.',
  price: '₹5,000',
  unit: 'onwards',
  features: [
    'Responsive Design',
    'SEO Friendly',
    'Fast & Optimized',
    'Secure & Reliable',
    'Support Included'
  ],
  accent: '#2563eb',
  bgGradient: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
  wa: 'I want a website developed',
},
  {
    id: 'app',
    icon: Smartphone,
    image: '/app.png',
    title: 'Mobile App Development',
    subtitle: 'Ideas In Your Mind, Apps In Your Hands',
    desc: 'Powerful Android apps that drive your business forward and deliver real results.',
    price: '₹15,000',
    unit: 'onwards',
    features: ['Custom Android Apps', 'Fast & High Performance', 'Secure & Scalable', 'Support & Maintenance'],
    accent: '#16a34a',
    bgGradient: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
    wa: 'I want a mobile app developed',
  },
  {
    id: 'billing',
    icon: Receipt,
    image: '/billing.png',
    title: 'Billing Software',
    subtitle: 'Smart Billing. Stronger Business.',
    desc: 'GST billing software for Windows and Android. Invoicing, inventory and GST compliance effortless.',
    price: '₹199',
    unit: '/month or ₹1,999/year',
    features: ['GST Compliant', 'Android + Windows', 'Cloud Sync', 'AI Guided Inventory', 'Reports & Analytics'],
    accent: '#d97706',
    bgGradient: 'linear-gradient(135deg, #fffbeb, #fef3c7)',
    wa: 'I want the billing software',
  },
  {
    id: 'design',
    icon: Palette,
    image: '/poster.png',
    title: 'Poster & Catalogue Design',
    subtitle: 'Visuals That Speak, Designs That Impact!',
    desc: 'Creative posters, banners, social media designs, and professional catalogues that sell.',
    price: '₹100',
    unit: '/page (catalogue)',
    features: ['Creative & Unique', 'Fast Turnaround', 'Unlimited Revisions', 'Print Ready Files', 'All Formats'],
    accent: '#9333ea',
    bgGradient: 'linear-gradient(135deg, #faf5ff, #ede9fe)',
    wa: 'I want poster/catalogue design',
  },
  {
    id: 'video',
    icon: Video,
    image: '/editing.png',
    title: 'Video Editing',
    subtitle: 'Bringing Your Vision To Life!',
    desc: 'Professional editing for YouTube, Reels, Shorts, ads — all platforms, all aspect ratios.',
    price: 'Affordable',
    unit: 'contact for pricing',
    features: ['All Platforms', 'Color Grading', 'Motion Graphics', 'Sound Design', 'Subtitles & Captions'],
    accent: '#dc2626',
    bgGradient: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
    wa: 'I want video editing services',
  },
  {
    id: 'lead',
    icon: TrendingUp,
    image: '/lead.png',
    title: 'Lead Generation & SMM',
    subtitle: 'More Leads. More Clients. More Growth.',
    desc: 'Google Ads, Meta Ads, SMM services — connect with the right audience and convert leads.',
    price: '₹799',
    unit: '/successful client',
    features: ['Google Ads', 'Meta Ads', 'Profile Optimization', 'Content Creation', '100% Genuine Leads'],
    accent: '#0891b2',
    bgGradient: 'linear-gradient(135deg, #ecfeff, #cffafe)',
    wa: 'I want lead generation services',
  },
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef<HTMLElement>(null)
  const Icon = service.icon

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.style.transition = 'opacity 0.55s ease, transform 0.55s ease'
            el.style.opacity = '1'
            el.style.transform = 'translateY(0)'
          }, index * 80)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [index])

  return (
    <article ref={ref} className="card flex flex-col overflow-hidden group">
      {/* Icon area — CSS 3D float */}
      <div
        className="card-3d-wrap"
        style={{ height: 190, background: '#000', borderRadius: '16px 16px 0 0' }}
      >
       <div className="card-3d w-full h-full relative overflow-hidden">
  {service.image ? (
    <Image
      src={service.image}
      alt={service.title}
      fill
      className="object-contain"
      priority
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center">
      <Icon size={48} />
    </div>
  )}
</div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase mb-1" style={{ color: service.accent, opacity: 0.8 }}>
            {service.subtitle}
          </p>
          <h3 className="font-heading text-xl font-bold mb-2" style={{ color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>{service.desc}</p>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-2">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.accent }} />
              {f}
            </li>
          ))}
        </ul>

        {/* Price + CTA */}
        <div className="mt-auto pt-4 flex items-end justify-between gap-3" style={{ borderTop: '1px solid var(--border)' }}>
          <div>
            <div className="font-heading text-2xl font-bold" style={{ color: 'var(--text)', letterSpacing: '-0.02em' }}>
              {service.price}
            </div>
            <div className="text-xs font-mono mt-0.5" style={{ color: 'var(--text-light)' }}>{service.unit}</div>
          </div>
          <a
            href={`https://wa.me/919025003542?text=${encodeURIComponent(service.wa)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 px-4 flex-shrink-0"
            aria-label={`Get ${service.title}`}
          >
            Quote <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-24 sm:py-32 relative overflow-hidden" style={{ background: 'var(--bg)' }} aria-labelledby="services-heading">
      <div className="section-container relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-14">
          <div className="section-badge mx-auto w-fit">Our Software Solutions</div>
          <h2 id="services-heading" className="section-title mb-4">
            What We <span style={{
              backgroundImage: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>Build</span>
          </h2>
          <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            From websites to Android apps, billing software to digital marketing — we cover every technology need your business has.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
