'use client'

import { useEffect, useRef } from 'react'
import { Check, MessageCircle } from 'lucide-react'

const plans = [
  {
    title: 'Website',
    price: '₹5,000',
    period: 'one-time',
    highlight: false,
    features: ['Responsive Design','Up to 5 Pages','Contact Form','SEO Optimized','Fast Loading','Free Domain Guidance','1 Month Support'],
    wa: 'Website development starting 5000',
  },
  {
    title: 'True Bill',
    price: '₹199',
    period: 'per month',
    highlight: true,
    badge: 'Most Popular',
    features: ['GST Billing Software','Android + Windows','Inventory Management','Cloud Sync','AI Guided Inventory','Customer Management','24/7 Support'],
    wa: 'True Bill billing software',
  },
  {
    title: 'Mobile App',
    price: '₹15,000',
    period: 'one-time',
    highlight: false,
    features: ['Custom Android App','Firebase Backend','Admin Panel','Push Notifications','Google Play Ready','Secure & Scalable','3 Months Support'],
    wa: 'Mobile app development starting 15000',
  },
  {
    title: 'Lead Gen',
    price: '₹799',
    period: 'per client',
    highlight: false,
    features: ['Google & Meta Ads','Targeted Campaigns','Verified Active Leads','Real Estate / Education','Finance / Healthcare','Pay Only for Results','Dedicated Manager'],
    wa: 'Lead generation services',
  },
]

export default function Pricing() {
  const headerRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

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
        { threshold: 0.05 }
      )
      observer.observe(el)
    }
    observe(headerRef.current)
    observe(gridRef.current, 100)
  }, [])

  return (
    <section id="pricing" className="py-24 sm:py-32 relative" style={{ background: 'var(--bg-alt)' }} aria-labelledby="pricing-heading">
      <div className="section-container relative z-10">
        <div ref={headerRef} className="text-center mb-14">
          <div className="section-badge mx-auto w-fit">Affordable Pricing</div>
          <h2 id="pricing-heading" className="section-title mb-4">
            Simple <span style={{
              backgroundImage: 'linear-gradient(135deg, var(--primary-light), var(--primary))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
            }}>Pricing</span>
          </h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Transparent pricing with no hidden fees. Premium quality at affordable rates.
          </p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.title}
              className={`relative flex flex-col rounded-3xl overflow-hidden transition-all duration-300 ${
                plan.highlight ? 'plan-featured' : 'card'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {plan.badge && (
                <div
                  className="absolute top-0 left-0 right-0 py-1.5 text-center text-xs font-semibold tracking-widest uppercase"
                  style={{ background: 'rgba(255,255,255,0.2)', color: plan.highlight ? 'white' : 'var(--primary)' }}
                >
                  {plan.badge}
                </div>
              )}

              <div className={`p-6 flex flex-col flex-1 ${plan.badge ? 'pt-10' : ''}`}>
                <div className="mb-6">
                  <h3
                    className="font-heading text-xl font-bold mb-3"
                    style={{ color: plan.highlight ? 'white' : 'var(--text)' }}
                  >
                    {plan.title}
                  </h3>
                  <div
                    className="font-heading text-3xl font-bold"
                    style={{ color: plan.highlight ? 'white' : 'var(--text)', letterSpacing: '-0.02em' }}
                  >
                    {plan.price}
                  </div>
                  <div
                    className="text-xs font-mono tracking-widest mt-1"
                    style={{ color: plan.highlight ? 'rgba(255,255,255,0.6)' : 'var(--text-light)' }}
                  >
                    {plan.period}
                  </div>
                </div>

                <ul className="flex flex-col gap-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm"
                      style={{ color: plan.highlight ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)' }}
                    >
                      <Check
                        size={14}
                        style={{ color: plan.highlight ? 'white' : 'var(--primary)', flexShrink: 0 }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/919025003542?text=${encodeURIComponent('I am interested in: ' + plan.wa)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={plan.highlight
                    ? { background: 'white', color: 'var(--primary)' }
                    : { background: 'var(--primary)', color: 'white', boxShadow: '0 2px 8px rgba(192,57,43,0.25)' }
                  }
                  aria-label={`Get ${plan.title} plan`}
                >
                  <MessageCircle size={14} />
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
