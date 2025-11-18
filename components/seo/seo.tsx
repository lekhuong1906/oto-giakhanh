// components/seo/Seo.tsx
import Head from "next/head"

type SeoProps = {
  title?: string
  description?: string
  url?: string
  ogImage?: string
}

const DEFAULT_TITLE = "Công Ty TNHH Ô Tô Gia Khánh - Phụ tùng & Dịch vụ ô tô"
const DEFAULT_DESCRIPTION =
  "Chuyên phụ tùng, phụ kiện ô tô chính hãng và dịch vụ sửa chữa, bảo dưỡng uy tín."
const DEFAULT_OG_IMAGE = "/og-image.jpg"
const BASE_URL = "https://autoparts-garage.vn" // sau này đổi thành domain thật của bạn

export default function Seo({
  title,
  description,
  url,
  ogImage,
}: SeoProps) {
  const fullTitle = title ? `${title} | Ô Tô Gia Khánh` : DEFAULT_TITLE
  const metaDescription = description || DEFAULT_DESCRIPTION
  const canonical = url ? `${BASE_URL}${url}` : BASE_URL
  const image = ogImage || DEFAULT_OG_IMAGE

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
