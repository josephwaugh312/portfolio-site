import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { SkipLink } from '@/components/skip-link'
import { ScrollProgress } from '@/components/scroll-progress'
import { PerformanceMonitor } from '@/components/performance-monitor'
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://josephwaugh.com'),
  title: {
    default: 'Joseph Waugh - Full Stack Developer',
    template: '%s | Joseph Waugh'
  },
  description: 'Full-stack developer specializing in React, Next.js, TypeScript, and Node.js. Building modern web applications with clean code and intuitive user experiences.',
  keywords: ['Joseph Waugh', 'portfolio', 'web developer', 'full stack', 'react', 'nextjs', 'typescript', 'javascript', 'frontend', 'backend'],
  authors: [{ name: 'Joseph Waugh', url: 'https://josephwaugh.com' }],
  creator: 'Joseph Waugh',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://josephwaugh.com',
    title: 'Joseph Waugh - Full Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and Node.js',
    siteName: 'Joseph Waugh',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Joseph Waugh - Full Stack Developer',
    description: 'Full-stack developer specializing in React, Next.js, TypeScript, and Node.js',
    images: ['/og-image.png'],
    creator: '@jojo60102'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://josephwaugh.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <head>
        {/* Critical inline CSS for immediate rendering */}
        <style dangerouslySetInnerHTML={{
          __html: `
            :root {
              --background: 0 0% 100%;
              --foreground: 222.2 84% 4.9%;
            }
            .dark {
              --background: 222.2 84% 4.9%;
              --foreground: 210 40% 98%;
            }
            html {
              height: 100%;
              width: 100%;
              zoom: 1 !important;
            }
            body {
              margin: 0;
              padding: 0;
              min-height: 100vh;
              width: 100%;
              zoom: 1 !important;
              background-color: hsl(var(--background));
              color: hsl(var(--foreground));
            }
            * {
              zoom: unset !important;
            }
          `
        }} />
        
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Browser compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Performance hints */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* EmailJS SDK */}
        <script
          type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                window.addEventListener('load', function() {
                  if (window.emailjs) {
                    window.emailjs.init('${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''}');
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          <PerformanceMonitor />
          <SkipLink />
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main id="main-content" className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}