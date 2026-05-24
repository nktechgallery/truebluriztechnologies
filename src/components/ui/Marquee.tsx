const items = [
  'Website Development',
  'Mobile App Development',
  'GST Billing Software',
  'Poster Design',
  'Catalogue Design',
  'Video Editing',
  'Lead Generation',
  'Google Ads',
  'Meta Ads',
  'SMM Services',
]

export default function Marquee() {
  const repeated = [...items, ...items, ...items]
  return (
    <div
      className="relative overflow-hidden py-4 border-y"
      style={{ background: 'var(--primary)', borderColor: 'var(--primary-dark)' }}
      aria-label="Services we offer"
    >
      <div className="absolute left-0 top-0 bottom-0 w-12 z-10" style={{ background: 'linear-gradient(to right, var(--primary), transparent)' }} />
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10" style={{ background: 'linear-gradient(to left, var(--primary), transparent)' }} />
      <div className="flex gap-10 whitespace-nowrap marquee-inner" style={{ willChange: 'transform' }}>
        {repeated.map((item, i) => (
          <span key={i} className="font-body font-semibold text-white text-sm tracking-wide flex items-center gap-10">
            {item}
            <span className="text-white/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
