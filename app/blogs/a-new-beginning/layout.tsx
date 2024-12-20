import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A New Beginning | Awakenings',
  description: 'Exploring new horizons and fresh starts in the tech world',
  openGraph: {
    title: 'A New Beginning | Awakenings',
    description: 'Exploring new horizons and fresh starts in the tech world',
    url: 'https://5c8f-2409-40c4-160-bde6-578f-9130-e835-1fd9.ngrok-free.app/blogs/a-new-beginning',
    siteName: 'Awakenings',
    images: [
      {
        url: 'https://i.pinimg.com/736x/7c/0b/d4/7c0bd435745921a61079abb7ef8b0c5a.jpg',
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
    images: ['https://i.pinimg.com/736x/7c/0b/d4/7c0bd435745921a61079abb7ef8b0c5a.jpg'],
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div>{children}</div>
}
