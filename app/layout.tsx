import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const interMedium = localFont({
  src: "../public/fonts/Inter-Medium.woff",
  variable: "--font-inter-medium",
  weight: "500",
})

const interBold = localFont({
  src: "../public/fonts/Inter-Bold.woff2",
  variable: "--font-inter-bold",
  weight: "700",
})

export const metadata: Metadata = {
  title: "LuckySpin Casino - Premium Online Gaming",
  description: "Experience the ultimate online casino with premium games, sports betting, and exclusive rewards.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${interMedium.variable} ${interBold.variable}`}>
      <body className="font-text antialiased">{children}</body>
    </html>
  )
}
