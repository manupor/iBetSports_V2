import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Metadata } from "next";
import ClientScript from "../components/ClientScript";

// Add your metadata here
export const metadata: Metadata = {
  title: "v0 App", // Replace with your actual site name
  description: "Created with v0", // Replace with your description
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
        {/* Preconnect for performance */}
        <link
          rel="preconnect"
          href="https://signup.isppro.net"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://signup.isppro.net" />
        <link
          rel="preconnect"
          href="https://betslip.ibetsports.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://betslip.ibetsports.com" />
      </head>
      <body>
        {children}
        <ClientScript />
      </body>
    </html>
  );
}
