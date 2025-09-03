import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/_data/site-config";
import { useLensFont } from "@/_data/fonts";
import { AppProvider } from "@/context/app-provider";



export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.getStartedUrl),
  keywords: [
    "Lens",
    "Machine Learning",
    "AI-Powered Summaries",
    "Open Library",
  ],
  authors: [
    {
      name: siteConfig.title,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.title,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.getStartedUrl,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/blocks/og-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.links.creator,
  },
  icons: {
    icon: `${siteConfig.url}/blocks/pacepard.png`,
    apple: "/apple-touch-icon.png",
  },
};
s
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${useLensFont.variable} antialiased`}
      ><AppProvider>
        {children}
        </AppProvider>
      </body>
    </html>
  );
}
