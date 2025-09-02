import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/_data/site-config";
import { useLensFont } from "@/_data/fonts";



export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
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
      >
        {children}
      </body>
    </html>
  );
}
