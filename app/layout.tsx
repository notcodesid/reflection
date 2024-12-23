import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Awakenings - Siddharth",
  description: "Snapshots of growth, reflections, and insights for curious minds navigating life, tech, and everything in between.",

  // open graph
  openGraph : {
    title : ' Awakenings - Siddharth',
    description : 'Snapshots of growth, reflections, and insights for curious minds navigating life, tech, and everything in between.',
    url : 'localhost:3000',
    siteName : 'Awakening',
    images : [
      {
        url : 'https://drive.google.com/file/d/1kxUsg4r5-0Oe5p33SsV47xBG_cXqr3kY/view?usp=drive_link', // image link
        width : 1200,
        height : 500,
        alt : 'Title with their description'
      },
    ],
    locale : 'en_US',
    type:'article'
  },

  twitter : {
    card : 'summary_large_image',
    title : ' Awakenings - Siddharth',
    description : 'Snapshots of growth, reflections, and insights for curious minds navigating life, tech, and everything in between.',
   images : ['https://drive.google.com/file/d/1kxUsg4r5-0Oe5p33SsV47xBG_cXqr3kY/view?usp=drive_link'] // image link
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
