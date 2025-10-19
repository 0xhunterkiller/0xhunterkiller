export const dynamic = "force-static";

import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/'],
      disallow: ['/_next/'],
    },
    sitemap: 'https://0xhunterkiller.github.io/0xhunterkiller/sitemap.xml',
  }
}
