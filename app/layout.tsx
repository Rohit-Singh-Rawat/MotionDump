import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '@/components/provider/theme-provider'
import Navbar from '@/components/shared/Navbar'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="dark:bg-black">
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
