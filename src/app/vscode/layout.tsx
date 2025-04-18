import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "transition from cursor to vscode  | reflection",
  description: "finding balance between ai tools and real learning",
  metadataBase: new URL("https://blog.notcodesid.xyz"),
  openGraph: {
    title: "transition from cursor to vscode | reflection",
    description: "finding balance between ai tools and real learning",
    url: "https://blog.notcodesid.xyz/vscode",
    siteName: "reflection",
    images: [
      {
        url: "/vscode.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "transition from cursor to vscode  | reflection",
    description: "finding balance between ai tools and real learning",
    images: ["/vscode.png"],
  },
};

export default function VSCodeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
