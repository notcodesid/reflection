import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "serverless backend | reflection",
  description: "thoughts on serverless backend.",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "serverless backend | reflection",
    description: "thoughts on serverless backend.",
    url: "https://blog.notcodesid.xyz/serverless",
    siteName: "reflection",
    images: [
      {
        url: "/serverless.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "serverless backend | reflection",
    description: "thoughts on serverless backend.",
    images: ["/serverless.png"],
  },
};

export default function ServerlessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
