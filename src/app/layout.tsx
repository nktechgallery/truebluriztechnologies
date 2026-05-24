import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://truebluriztechnologies.com'),
  title: {
    default: 'True Bluriz Technologies | Unstoppable Software Solutions',
    template: '%s | True Bluriz Technologies',
  },
  description:
    'True Bluriz Technologies — Freelance software solutions: website development, mobile apps, billing software, poster design, catalogue design, video editing & lead generation.',
  keywords: [
    'True Bluriz Technologies', 'software solutions', 'website development',
    'mobile app development', 'billing software', 'GST billing', 'poster design',
    'video editing', 'lead generation', 'freelancer India', 'SMM services',
  ],
  authors: [{ name: 'True Bluriz Technologies' }],
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website', locale: 'en_IN',
    url: 'https://truebluriztechnologies.com',
    title: 'True Bluriz Technologies | Unstoppable Software Solutions',
    description: 'Smart solutions for your business needs.',
    siteName: 'True Bluriz Technologies',
  },
  alternates: { canonical: 'https://truebluriztechnologies.com' },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#fafaf8',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'True Bluriz Technologies',
              description: 'Freelance software solutions — websites, apps, billing software, design & marketing',
              telephone: '+919025003542',
              priceRange: '₹₹',
            }),
          }}
        />
      </head>
      <body style={{ fontFamily: "'DM Sans', system-ui, sans-serif", margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
