import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import ClientLayout from "./ClientLayout"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Ayesha's Atelier - Handcrafted with Love",
  description:
    "Custom artwork, handmade with love. Specializing in crochet creations and beautiful sketches. Turning your ideas into beautiful reality.",
  generator: "v0.app",
  keywords: ["handmade", "crochet", "sketching", "custom artwork", "embroidery", "personalized gifts"],
  authors: [{ name: "Ayesha's Atelier" }],
  openGraph: {
    title: "Ayesha's Atelier - Handcrafted with Love",
    description: "Custom artwork, handmade with love. Specializing in crochet creations and beautiful sketches.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
