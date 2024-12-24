import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"


import { Merriweather } from "next/font/google";

const merriweather = Merriweather({
  variable: "--font-Merriweather", // Set the custom variable for the font
  weight: ["400", "700"], // Include specific weights
  subsets: ["latin"], // Add subsets
});

export const metadata: Metadata = {
  title: "Awakenings - Siddharth",
  description:
    "Snapshots of growth, reflections, and insights for curious minds navigating life, tech, and everything in between.",

  // Open Graph metadata
  openGraph: {
    title: "Awakenings - Siddharth",
    description:
      "Snapshots of growth, reflections, and insights for curious minds navigating life, tech, and everything in between.",
    url: "https://awakenings-one.vercel.app/",
    siteName: "Awakening",
    images: [
      {
        url:"https://i.pinimg.com/736x/5b/09/ab/5b09ab874aa7763b02f0165f77cabce9.jpg", // image link
        width: 1200,
        height: 500,
        alt: "Title with their description",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Awakenings - Siddharth",
    description:
      "Snapshots of growth, reflections, and insights for curious minds navigating life, tech, and everything in between.",
    images: ["https://i.pinimg.com/736x/5b/09/ab/5b09ab874aa7763b02f0165f77cabce9.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} antialiased`} // Apply the font variable correctly here
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
