import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const siteUrl = 'https://gok.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'GOK | Full-Stack Engineer',
    template: '%s | GOK',
  },
  description:
    'Full-Stack Engineer building fast, intuitive products. Open to new opportunities.',
  keywords: ['Full-Stack Engineer', 'React', 'Next.js', 'TypeScript', 'Node.js', 'Portfolio'],
  authors: [{ name: 'GOK' }],
  creator: 'GOK',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'GOK Portfolio',
    title: 'GOK | Full-Stack Engineer',
    description:
      'Full-Stack Engineer building fast, intuitive products. Open to new opportunities.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GOK | Full-Stack Engineer',
    description:
      'Full-Stack Engineer building fast, intuitive products. Open to new opportunities.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
