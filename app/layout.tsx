import type { Metadata } from 'next';
import Script from 'next/script';
import '@engineerplaybook/design-system/dist/style.css';
import './globals.css';

export const metadata: Metadata = {
  title: 'Engineer Playbook | Team',
  description: 'Engineering Playbook Team - Anmol Thukral and Mouna Ramesh K',
  icons: { icon: '/profile/img/logo.svg' },
};

const commonNavBase = process.env.NEXT_PUBLIC_COMMON_NAV_URL || '/nav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/@knadh/oat/oat.min.js" defer />
      </head>
      <body>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-19GSDP6BS8" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-19GSDP6BS8');
          `}
        </Script>
        <link rel="stylesheet" href={`${commonNavBase}/common-nav.css`} />
        <Script id="common-nav-webcomponent" strategy="afterInteractive" type="module" src={`${commonNavBase}/common-nav.js`} crossOrigin="anonymous" />
        {/* @ts-expect-error - custom element defined by the webcomponent script */}
        <engineering-playbook-nav></engineering-playbook-nav>
        <main style={{ minHeight: '100vh', paddingTop: 'var(--header-height)' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
