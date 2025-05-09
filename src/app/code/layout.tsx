import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "  can you really code ? | reflection",
  description: "on the balance between ai tools and learning",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "  can you really code ? | reflection",
    description: "on the balance between ai tools and learning",
    url: "https://blog.notcodesid.xyz/code",
    siteName: "reflection",
    images: [
      {
        url: "/code.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "  can you really code ? | reflection",
    description: "on the balance between ai tools and learning",
    images: ["/code.png"],
  },
};

export default function CodeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
} 