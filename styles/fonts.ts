import localFont from "next/font/local"

export const poppins = localFont({
  src: [
    {
      path: "../public/fonts/poppins-medium-webfont.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
  display: "swap",
})
