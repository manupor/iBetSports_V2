import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "LuckySpin Casino - Premium Online Gaming Experience",
  description:
    "Experience the thrill of premium casino games, sports betting, and live dealers at LuckySpin Casino. Join now for exclusive bonuses and instant payouts.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        {children}
        <Script src="https://images.betimages.com/Betslip/js/quickmail.login.js" strategy="beforeInteractive" />
        <Script id="login-config" strategy="beforeInteractive">
          {`
            window.BackEndUrl = "https://betslip.ibetsports.ag/";
            window.idsite = "901";
          `}
        </Script>
      </body>
    </html>
  )
}
