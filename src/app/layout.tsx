import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css"; 

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Eduardo Vargas Porfolio',
  description: 'Senior fullstack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
