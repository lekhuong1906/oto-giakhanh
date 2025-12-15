import Head from "next/head"

type SeoProps = {
  title?: string
  description?: string
  url?: string
  ogImage?: string
  keywords?: string
  ogType?: "website" | "article"
  noindex?: boolean
}

const DEFAULT_TITLE = "Công Ty TNHH Ô Tô Gia Khánh - Phụ tùng & Dịch vụ ô tô"
const DEFAULT_DESCRIPTION =
  "Chuyên phụ tùng, phụ kiện ô tô chính hãng và dịch vụ sửa chữa, bảo dưỡng uy tín tại Gia Lai."
const DEFAULT_KEYWORDS = "phụ tùng ô tô, phụ kiện ô tô, gara ô tô, sửa chữa ô tô, bảo dưỡng ô tô, đồng sơn ô tô, cứu hộ ô tô, bảo hiểm ô tô, Gia Lai, Top 10 gara uy tín ở Gia Lai, Top 10 gara uy tín ở Quy Nhơn, Top 10 gara uy tín ở Bình Định"
const DEFAULT_OG_IMAGE = "https://oto-giakhanh.vercel.app/images/banner_logo.webp"
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://oto-giakhanh.vercel.app"

export default function Seo({
  title,
  description,
  url,
  ogImage,
  keywords,
  ogType = "website",
  noindex = false,
}: SeoProps) {
  const fullTitle = title ? `${title} | Ô Tô Gia Khánh` : DEFAULT_TITLE
  const metaDescription = description || DEFAULT_DESCRIPTION
  const canonical = url ? `${BASE_URL}${url}` : BASE_URL
  const image = ogImage ? (ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`) : DEFAULT_OG_IMAGE
  const metaKeywords = keywords || DEFAULT_KEYWORDS

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      
      {/* Site branding */}
      <meta name="author" content="Ô Tô Gia Khánh" />
      <meta name="publisher" content="Ô Tô Gia Khánh" />
      
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Ô Tô Gia Khánh" />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@otogiakhanh" />

      {/* Structured Data - JSON-LD for better Google recognition */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ô Tô Gia Khánh",
            "alternateName": "Công Ty TNHH Ô Tô Gia Khánh",
            "url": BASE_URL,
            "logo": `${BASE_URL}/icon.svg`,
            "description": "Chuyên phụ tùng, phụ kiện ô tô chính hãng và dịch vụ sửa chữa, bảo dưỡng uy tín tại Gia Lai.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Gia Lai",
              "addressCountry": "VN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+84-973-874-677",
              "contactType": "customer service"
            },
            "sameAs": []
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Ô Tô Gia Khánh",
            "url": BASE_URL,
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
              },
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
    </Head>
  )
}
