import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "effective studying | reflection",
  description: "thoughts on effective studying.",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "effective studying | reflection",
    description: "thoughts on effective studying.",
    url: "https://blog.notcodesid.xyz/study",
    siteName: "reflection",
    images: [
      {
        url: "/study.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "effective studying | reflection",
    description: "thoughts on effective studying.",
    images: ["/study.png"],
  },
};

export default function StudyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
