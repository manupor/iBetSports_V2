import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import Script from "next/script"

export const metadata: Metadata = {
title: 'v0 App',
description: 'Created with v0',
generator: 'v0.dev',
}

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode
}>) {
return (
  <html lang="en">
    <head>
      <style>{`
html {
font-family: ${GeistSans.style.fontFamily};
--font-sans: ${GeistSans.variable};
--font-mono: ${GeistMono.variable};
}
      `}</style>
      {/* Perf hints for external services */}
      <link rel="preconnect" href="https://signup.isppro.net" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://signup.isppro.net" />
      <link rel="preconnect" href="https://betslip.ibetsports.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://betslip.ibetsports.com" />
    </head>
    <body>
      {children}
      <Script
        id="tawk-livechat"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function () {
            try {
              var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
              var s1 = document.createElement("script");
              var s0 = document.getElementsByTagName("script")[0];
              s1.async = true;
              s1.src = "https://embed.tawk.to/677ab10d49e2fd8dfe02cf01/1igrk77hr";
              s1.charset = "UTF-8";
              s1.setAttribute("crossorigin", "*");
              s1.onerror = function () {
                console.warn("Tawk.to failed to load");
              };
              s0.parentNode.insertBefore(s1, s0);
            } catch (err) {
              console.warn("Tawk.to init error:", err);
            }
          })();`,
        }}
        onError={(e) => {
          console.warn("Tawk.to script error:", e);
        }}
      />
    </body>
  </html>
)
}
