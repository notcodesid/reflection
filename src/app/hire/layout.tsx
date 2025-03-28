import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "how to get hire | reflection",
  description: "thoughts on how to get hired.",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "hire me | reflection",
    description: "thoughts on how to get hired.",
    url: "https://blog.notcodesid.xyz/hire",
    siteName: "reflection",
    images: [
      {
        url: "/hire.png",
        width: 1200,
        height: 630,
      },
    ],  
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "hire me | reflection",
    description: "thoughts on how to get hired.",
    images: ["/hire.png"],
  },
};

export default function HireLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
