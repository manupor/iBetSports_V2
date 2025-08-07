import type React from "react"
import type { Metadata } from "next"
import { Poppins } from 'next/font/google'
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Toaster } from "react-hot-toast"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ibetsports.ag - Online Sportsbook & Casino",
  description:
    "Bet on sports, play casino games, and enjoy live dealer action at ibetsports.ag. Join now for a 125% sign-up bonus and fast crypto payouts.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className={cn("min-h-screen bg-background font-poppins antialiased w-full")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="w-full">{children}</div>
          <Toaster />
        </ThemeProvider>
        <Script src="https://images.betimages.com/Betslip/js/quickmail.login.js" strategy="lazyOnload" />
        <Script
          id="tawk-to-chat"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/677ab10d49e2fd8dfe02cf01/1igrk77hr';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
