import { GetServerSideProps } from 'next'
import { services } from '@/data/services'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://oto-giakhanh.vercel.app'

interface SitemapUrl {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: number
}

function generateSitemap(urls: SitemapUrl[]): string {
  const urlsXml = urls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ''}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ''}
    ${url.priority ? `<priority>${url.priority}</priority>` : ''}
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlsXml}
</urlset>`
}

export default function Sitemap() {
  // This will never be called, but Next.js requires a default export
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const now = new Date().toISOString().split('T')[0]

  // Static pages
  const staticPages: SitemapUrl[] = [
    {
      loc: `${SITE_URL}`,
      lastmod: now,
      changefreq: 'daily',
      priority: 1.0,
    },
    {
      loc: `${SITE_URL}/ve-chung-toi`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${SITE_URL}/lien-he`,
      lastmod: now,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      loc: `${SITE_URL}/dich-vu-sua-chua`,
      lastmod: now,
      changefreq: 'weekly',
      priority: 0.9,
    },
  ]

  // Dynamic service pages
  const servicePages: SitemapUrl[] = services.map((service) => ({
    loc: `${SITE_URL}/dich-vu-sua-chua/${service.slug}`,
    lastmod: now,
    changefreq: 'monthly',
    priority: 0.7,
  }))

  const allUrls = [...staticPages, ...servicePages]

  const sitemap = generateSitemap(allUrls)

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

