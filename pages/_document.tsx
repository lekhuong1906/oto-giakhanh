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

                {/* Thẻ link để gắn file SVG làm favicon */}
                <link
                    rel="icon"
                    href="/icon.svg"
                    type="image/svg+xml" // BẮT BUỘC: Chỉ định MIME type là SVG
                />

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
                <meta
                    name="google-site-verification"
                    content="Lc4O01Utd4G9Khcn_orDOP0F7wDKyNIBffiK4pcPspk"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}