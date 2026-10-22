import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { profile } from '@/data/portfolio';
const title = 'Shanon Simon Lubega | Full-Stack Software Engineer';
const description = 'Ugandan full-stack software engineer building web and mobile applications with Laravel, React, TypeScript, and PostgreSQL. Founder of Shanvexa Technologies.';
export const metadata: Metadata = {
  metadataBase: new URL(profile.site), title, description,
  alternates: { canonical: '/' },
  openGraph: { type: 'website', url: '/', title, description, siteName: profile.name, locale: 'en_UG' },
  twitter: { card: 'summary_large_image', title, description },
};
export default function RootLayout({ children }: {
  children: React.ReactNode;
}) {
  return <html lang="en">
    <body>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>{children}</main>
      <Footer />
    </body>
  </html>;
}
