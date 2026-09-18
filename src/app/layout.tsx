import type { Metadata } from 'next'
import { Lexend_Deca, IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const lexendDeca = Lexend_Deca({
  variable: '--font-lexend-deca',
  subsets: ['latin'],
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Fox Scarlett | Web Developer',
  description:
    'Web Developer since 2015, JS, TS, React, Next.js, node, CMS, PHP',
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      className={`${lexendDeca.variable} ${ibmPlexSans.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
