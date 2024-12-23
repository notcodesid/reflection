import { Toaster } from '@/components/ui/toaster'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to get hire | Awakenings ',
  description: 'What founders what from a developers',
//   open graph
  openGraph: {
    title: 'How to get hire | Awakenings ',
    description: 'What founders want from a developers',
    url: 'https://awakenings-one.vercel.app/blogs/how-to-get-hire',
    siteName: 'Awakenings',
    images: [
      {
        url: 'https://i.pinimg.com/736x/5a/d4/71/5ad471a2ba34058c37a640ed92db7e19.jpg',
        width: 1200,
        height: 500,
        alt: 'Sam Altaman',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'How to get hire | Awakenings ',
    description: 'What founders what from a developers',
    images: ['https://i.pinimg.com/736x/5a/d4/71/5ad471a2ba34058c37a640ed92db7e19.jpg']
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}
    <Toaster />
  </div>
}
