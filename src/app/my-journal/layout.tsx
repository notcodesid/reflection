import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "my journal | reflection",
  description: "my journal.",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "my journal | reflection",
    description: "my journal.",
    url: "https://blog.notcodesid.xyz/my-journal",
    siteName: "reflection",
    images: [
      {
        url: "/journal.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "my journal | reflection",
    description: "my journal.",
    images: ["/journal.png"],
  },
};

export default function GeneralistsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
