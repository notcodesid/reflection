import Image from "next/image"
import Link from "next/link"
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  id: string
  title: string
  date: string
  likes: number
  image: string
}

const samplePosts: BlogPost[] = [
  {
    id: "a-new-beginning",
    title: "A New Beginning",
    date: "December 16, 2024",
    likes: 8,
    image: "https://i.pinimg.com/736x/7c/0b/d4/7c0bd435745921a61079abb7ef8b0c5a.jpg"
  },
  {
    id: "2",
    title: "The Art of Problem Solving",
    date: "December 18, 2024",
    likes: 12,
    image: "https://i.pinimg.com/736x/b0/55/74/b05574e5afd4d182d2f8e881dfe0e18a.jpg"
  },
  {
    id: "3",
    title: "Mindfulness in the Digital Age",
    date: "December 20, 2024",
    likes: 15,
    image: "https://i.pinimg.com/736x/d8/28/70/d82870ec84038587dc3c9c4726ab7463.jpg"
  },
  {
    id: "4",
    title: "The Future of AI",
    date: "December 22, 2024",
    likes: 20,
    image: "https://i.pinimg.com/736x/7d/c7/e4/7dc7e41d715fb091f1fefc4cd5c00c6c.jpg"
  },
  {
    id: "5",
    title: "Lessons from Failure",
    date: "December 24, 2024",
    likes: 18,
    image: "https://i.pinimg.com/736x/5a/d4/71/5ad471a2ba34058c37a640ed92db7e19.jpg"
  },
  {
    id: "6",
    title: "The Power of Habit",
    date: "December 26, 2024",
    likes: 22,
    image: "https://i.pinimg.com/736x/94/b4/54/94b454f14c145475b78da427122b29bb.jpg"
  }
]

export default function BlogSection() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-8">Archive</h2>
        
        {/* Search and Categories */}
        {/* <div className="mb-8 space-y-6">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input 
              type="search" 
              placeholder="Search posts..." 
              className="pl-10 w-full"
            />
          </div>
  
        </div> */}

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {samplePosts.map((post) => (
            <article key={post.id} className="group">
              <Link href={`blogs/${post.id}`}>
                <div className="space-y-4">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    
                    <h3 className="text-xl font-semibold group-hover:text-gray-600">
                      {post.title}
                    </h3>
                    {/* <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.date}>{post.date}</time>
                    </div> */}
                    
                  
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

