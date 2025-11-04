import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/_data/site-config";
import { useLensFont } from "@/_data/fonts";
import { AppProvider } from "@/context/app-provider";



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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${useLensFont.variable} antialiased`}
        suppressHydrationWarning
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
