import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "are you really learning to code? | reflection",
  description: "on the balance between ai tools and genuine learning",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "are you really learning to code? | reflection",
    description: "on the balance between ai tools and genuine learning",
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
    title: "are you really learning to code? | reflection",
    description: "on the balance between ai tools and genuine learning",
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