import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/sonner'
import { APP_DESCRIPTION, APP_KEYWORDS, APP_NAME, APP_SITE_URL, APP_SLOGAN } from '@/lib/constants'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['500', '700', '900'],
})

export const metadata: Metadata = {
  title: {
    template: `%s | ${APP_NAME}`,
    default: `${APP_NAME} | ${APP_SLOGAN}`,
  },
  description: APP_DESCRIPTION,
  keywords: APP_KEYWORDS,
  metadataBase: new URL(APP_SITE_URL),
  alternates: { canonical: APP_SITE_URL },
  icons: {
    icon: [
      { url: '/star.png', sizes: '16x16', type: 'image/png' },
      { url: '/star.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/star.png',
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable}`}>
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
