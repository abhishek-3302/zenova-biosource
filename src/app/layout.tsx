import type { Metadata, Viewport } from "next";
import { inter, interTight } from "./fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Zenova Biosource | Laboratory & Diagnostic Equipment Supplier in India",
    template: `%s · ${site.name}`,
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#f6f7f9",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${interTight.variable}`}
    >
      <body className="min-h-dvh flex flex-col bg-base text-ink" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-teal focus:px-5 focus:py-2.5 focus:text-navy-deep focus:font-semibold"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "Organization"],
              name: site.name,
              alternateName: ["Zenova", "Zenova Biosource"],
              legalName: site.name,
              slogan: site.tagline,
              url: site.url,
              logo: `${site.url}/logo.png`,
              image: `${site.url}/og-image.png`,
              description: site.description,
              telephone: site.phone,
              email: site.email,
              priceRange: "₹₹",
              address: {
                "@type": "PostalAddress",
                streetAddress: site.address,
                addressLocality: "Guwahati",
                addressRegion: "Assam",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.1445,
                longitude: 91.7362,
              },
              areaServed: "IN",
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "19:00",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: site.email,
                telephone: site.phone,
                contactType: "sales",
                areaServed: "IN",
                availableLanguage: ["English", "Hindi"],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: site.name,
              url: site.url,
              description: site.description,
              inLanguage: "en-IN",
            }),
          }}
        />
      </body>
    </html>
  );
}
