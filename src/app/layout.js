import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'

import { grotesk, general } from '@/fonts'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className={`${general.variable} ${grotesk.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
