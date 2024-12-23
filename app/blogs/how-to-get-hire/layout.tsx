import { Toaster } from '@/components/ui/toaster'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A New Beginning | Awakenings',
  description: 'Exploring new horizons and fresh starts in the tech world',


//   open graph
  openGraph: {
    title: 'A New Beginning | Awakenings',
    description: 'Exploring new horizons and fresh starts in the tech world',
    url: '',
    siteName: 'Awakenings',
    images: [
      {
        url: 'https://i.pinimg.com/736x/5a/d4/71/5ad471a2ba34058c37a640ed92db7e19.jpg',
        width: 1200,
        height: 500,
        alt: 'A serene landscape representing new beginnings',
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'A New Beginning | Awakenings',
    description: 'Exploring new horizons and fresh starts in the tech world',
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
