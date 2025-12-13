import { GetServerSideProps } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://oto-giakhanh.vercel.app'

export default function Robots() {
  // This will never be called, but Next.js requires a default export
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

  res.setHeader('Content-Type', 'text/plain')
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate')
  res.write(robotsTxt)
  res.end()

  return {
    props: {},
  }
}

