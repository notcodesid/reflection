import type { Metadata } from "next";
import "@/app/globals.css";
import { Layout } from "@/components/layout/Layout";
import ClientBody from "./ClientBody";

export const metadata: Metadata = {
  title: "siddharth / reflection",
  description: "thoughts on life, tech, and growth.",
  metadataBase: new URL("https://reflection.siddharthkrishna.com"),
  openGraph: {
    title: "siddharth / reflection",
    description: "thoughts on life, tech, and growth.",
    url: "https://reflection.siddharthkrishna.com/",
    siteName: "reflection",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "reflection",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "siddharth / reflection",
    description: "thoughts on life, tech, and growth.",
    creator: "@notcodesid",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "reflection",
      }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClientBody>
        <Layout>
          {children}
        </Layout>
      </ClientBody>
    </html>
  );
}
