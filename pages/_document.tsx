// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="vi">
            <Head>
                {/* Charset + viewport backup */}
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />

                {/* Favicon - Multiple formats for better compatibility with Google */}
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/svg+xml"
                />
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/png"
                    sizes="192x192"
                />
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/png"
                    sizes="32x32"
                />
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    rel="shortcut icon"
                    href="/icon.svg"
                />
                <link
                    rel="apple-touch-icon"
                    href="/icon.svg"
                    sizes="180x180"
                />
                {/* Site verification and branding */}
                <meta name="application-name" content="Ô Tô Gia Khánh" />
                <meta name="msapplication-TileColor" content="#EAB308" />
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Ô Tô Gia Khánh" />
                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />

                {/* Default SEO (có thể override bằng từng page) */}
                <meta
                    name="description"
                    content="Công Ty TNHH Ô Tô Gia Khánh - Phụ tùng, phụ kiện ô tô và dịch vụ sửa chữa, bảo dưỡng uy tín."
                />
                <meta
                    name="keywords"
                    content="phu tung o to, phu kien o to, gara o to, sua chua o to, bao duong o to, do xe, do noi that"
                />
                <meta name="theme-color" content="#111827" />
                {/** Google search console */}
                <meta name="robots" content="index, follow" />
                <meta name="google-site-verification" content="p0DhAmGDFlXbnakd0pdjycVWvah_HiDKA3s_TYVwWBw" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}