import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "a day of 20 years old | reflection",
  description: "a day of 20 years old.",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "a day of 20 years old | reflection",
    description: "a day of 20 years old.",
    url: "https://blog.notcodesid.xyz/day",
    siteName: "reflection",
    images: [
      {
        url: "/day.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "a day of 20 years old | reflection",
    description: "a day of 20 years old.",
    images: ["/day.png"],
  },
};

export default function GeneralistsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
