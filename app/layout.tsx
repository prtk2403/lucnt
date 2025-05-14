// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

// Font configuration
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500'],
  display: 'swap',
  variable: '--font-accent',
});

// Main metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL('https://lucnt.space'),
  title: {
    template: '%s | lucnt.space',
    default: 'lucnt.space | Illuminate Your Social Presence',
  },
  description: 'AI-powered content management system that brings clarity and precision to your social media strategy, perfectly adapted for each unique platform.',
  keywords: [
    'social media management',
    'AI content',
    'content management system',
    'social media platform',
    'content creation',
    'platform-adaptive AI',
    'social media automation',
    'lucnt.space',
    'thread generator',
    'thread generator ai',
    'thread generator ai tool',
    'tweet generator ai tool',
  ],
  authors: [
    { name: 'Pratheek Nistala' }
  ],
  creator: 'lucnt.space',
  publisher: 'lucnt.space',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lucnt.space',
    title: 'lucnt.space | Illuminate Your Social Presence',
    description: 'AI-powered content management system for optimizing your presence across all social platforms.',
    siteName: 'lucnt.space',
    images: [
      {
        url: '/logo-1024.png',
        width: 1024,
        height: 1024,
        alt: 'lucnt.space - Illuminate Your Social Presence',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'lucnt.space | Illuminate Your Social Presence',
    description: 'AI-powered content management system for optimizing your presence across all social platforms.',
    creator: '@lucntspace',
    images: ['/twitter-image.png'],
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
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#60A5FA',
      },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://lucnt.space',
    languages: {
      'en-US': 'https://lucnt.space',
    },
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: '#0F172A',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}