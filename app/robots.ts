import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://ayeshasatelier.vercel.app/sitemap.xml',
    host: 'https://ayeshasatelier.vercel.app',
  }
}
