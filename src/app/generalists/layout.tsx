import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "generalists | reflection",
  description: "thoughts on being a generalist in a specialized world.",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "generalists | reflection",
    description: "thoughts on being a generalist in a specialized world.",
    url: "https://blog.notcodesid.xyz/generalists",
    siteName: "reflection",
    images: [
      {
        url: "/generalists.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "generalists | reflection",
    description: "thoughts on being a generalist in a specialized world.",
    images: ["/generalists.png"],
  },
};

export default function GeneralistsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
