import type React from 'react'
import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import {
  APP_DESCRIPTION,
  APP_NAME,
  APP_SLOGAN,
  APP_SITE_URL,
  APP_KEYWORDS,
} from '@/lib/constants'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} | ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  metadataBase: new URL(APP_SITE_URL),
  alternates: {
    canonical: APP_SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: APP_SITE_URL,
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [
      {
        url: `${APP_SITE_URL}/webstoryboy.png`,
        width: 1200,
        height: 630,
        alt: `${APP_NAME} 대표 이미지`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@webstoryboy',
    title: APP_NAME,
    description: APP_DESCRIPTION,
    images: [`${APP_SITE_URL}/webstoryboy.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`${poppins.variable}`}>
        <Toaster
          position='top-center'
          toastOptions={{
            classNames: {
              title: 'font-nanum font-bold',
              description: 'font-nanum text-xs',
            },
          }}
        />
        <ThemeProvider attribute='class'>{children}</ThemeProvider>
      </body>
    </html>
  )
}
