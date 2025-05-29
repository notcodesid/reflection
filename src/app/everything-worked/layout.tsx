import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "everything worked - except me | reflection",
  description: "i was moving fast, until i wasn't",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "everything worked - except me | reflection",
    description: "i was moving fast, until i wasn't.",
    url: "https://blog.notcodesid.xyz/everything-worked",
    siteName: "reflection",
    images: [
      {
        url: "/everything.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "everything worked - except me | reflection",
    description: "i was moving fast, until i wasn't.",
    images: ["/everything.png"],
  },
};

export default function GeneralistsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
