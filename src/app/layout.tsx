import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Layout } from "@/components/layout/Layout";
import ClientBody from "./ClientBody";
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "siddharth / reflection",
  description: "thoughts on life, tech, and growth.",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "reflection",
    description: "thoughts on life, tech, and growth.",
    url: "https://blog.notcodesid.xyz/",
    siteName: "reflection",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <ClientBody>
        <Layout>
          {children}
          <Analytics />
        </Layout>
      </ClientBody>
    </html>
  );
}
