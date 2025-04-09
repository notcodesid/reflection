import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "competitive programming | reflection",
  description: "why i'm obsessed with competitive programming",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "competitive programming | reflection",
    description: "why i'm obsessed with competitive programming",
    url: "https://blog.notcodesid.xyz/cp",
    siteName: "reflection",
    images: [
      {
        url: "/cp.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "competitive programming | reflection",
    description: "why i'm obsessed with competitive programming",
    images: ["/cp.png"],
  },
};

export default function CPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
