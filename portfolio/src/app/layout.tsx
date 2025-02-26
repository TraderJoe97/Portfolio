import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeToggle } from "@/components/theme-toggle"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joseph Monakedi - Front-end Developer",
  description: "Front-end developer portfolio showcasing projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="fixed top-4 right-4 z-50">
            <ThemeToggle />
          </div>
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

