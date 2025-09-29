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
  title: "Ayesha's Atelier - Custom Handmade Art, Crochet & Sketches | Mumbai",
  description:
    "Premium custom artwork, handmade crochet creations, and beautiful sketches. Personalized art pieces crafted with love in Mumbai. Order custom portraits, blankets, and embroidery.",
  keywords: [
    "custom artwork Mumbai",
    "handmade crochet India",
    "custom sketches portraits",
    "personalized art",
    "handmade gifts Mumbai",
    "custom embroidery",
    "portrait artist Mumbai",
    "crochet blankets custom",
    "handcrafted art India",
    "personalized gifts handmade",
    "custom crochet accessories",
    "hand drawn portraits"
  ],
  authors: [{ name: "Ayesha's Atelier", url: "https://ayeshasatelier.vercel.app" }],
  creator: "Ayesha's Atelier",
  publisher: "Ayesha's Atelier",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Ayesha's Atelier - Custom Handmade Art & Crochet Creations",
    description: "Premium custom artwork, handmade crochet, and beautiful sketches. Personalized art pieces crafted with love. Order your custom creation today!",
    type: "website",
    url: "https://ayeshasatelier.vercel.app",
    siteName: "Ayesha's Atelier",
    locale: "en_IN",
    images: [
      {
        url: "https://ayeshasatelier.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ayesha's Atelier - Custom Handmade Art and Crochet Creations",
        type: "image/jpeg",
      },
      {
        url: "https://ayeshasatelier.vercel.app/images/logo.jpg",
        width: 800,
        height: 800,
        alt: "Ayesha's Atelier Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayesha's Atelier - Custom Handmade Art & Crochet",
    description: "Premium custom artwork, handmade crochet, and beautiful sketches. Personalized art pieces crafted with love.",
    images: ["https://ayeshasatelier.vercel.app/images/og-image.jpg"],
    creator: "@ayeshas_atelier",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
  },
  alternates: {
    canonical: "https://ayeshasatelier.vercel.app",
  },
  category: "Art & Crafts",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/apple-touch-icon.png" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#FFB6C1" />
        <meta name="msapplication-TileColor" content="#FFB6C1" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="19.0760;72.8777" />
        <meta name="ICBM" content="19.0760, 72.8777" />
        
        {/* Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://ayeshasatelier.vercel.app/#business",
              "name": "Ayesha's Atelier",
              "alternateName": "Ayeshas Atelier",
              "description": "Custom handmade artwork, crochet creations, and beautiful sketches. Personalized art pieces crafted with love.",
              "url": "https://ayeshasatelier.vercel.app",
              "logo": "https://ayeshasatelier.vercel.app/images/logo.jpg",
              "image": "https://ayeshasatelier.vercel.app/images/og-image.jpg",
              "telephone": "+918097684385",
              "email": "ateliar.ayesha@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN",
                "addressLocality": "Mumbai"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.0760",
                "longitude": "72.8777"
              },
              "openingHours": [
                "Mo-Fr 09:00-18:00",
                "Sa 10:00-16:00"
              ],
              "priceRange": "$$",
              "serviceArea": {
                "@type": "Country",
                "name": "India"
              },
              "sameAs": [
                "https://www.instagram.com/ayeshas_atelier",
                "https://wa.me/918097684385"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Art Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Crochet Creations",
                      "description": "Handmade crochet blankets, accessories, and home decor"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Portrait Sketching",
                      "description": "Custom pencil portraits and character drawings"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Custom Artwork",
                      "description": "Personalized paintings and mixed media art"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Embroidery & Stitching",
                      "description": "Decorative embroidery and personalized stitched items"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Article/Creative Work Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Ayesha's Atelier Portfolio",
              "description": "Collection of handmade artwork including crochet, sketches, paintings, and embroidery",
              "creator": {
                "@type": "Person",
                "name": "Ayesha",
                "jobTitle": "Artist & Craftsperson",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Ayesha's Atelier"
                }
              },
              "about": ["Handmade Art", "Crochet", "Sketching", "Custom Artwork", "Embroidery"],
              "keywords": "custom artwork, handmade crochet, portrait sketching, personalized art, embroidery",
              "inLanguage": "en-IN"
            })
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${playfair.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
