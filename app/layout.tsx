import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/component/navbar"
import Socail from './component/social'
import { poppins } from './ui/fonts'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adii portfolio',
  description: 'Created by Adnan Adil',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
       <Navbar></Navbar>
        {children}
        <Socail></Socail>
        </body>

    </html>
  )
}
