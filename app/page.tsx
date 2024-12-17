import Image from "next/image"
import Link from "next/link"
import { Linkedin, Youtube, Instagram } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Image
            src="https://pbs.twimg.com/profile_images/1801972870756925440/i5Hk08rP_400x400.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-lg font-medium">Awakenings - Siddharth </span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 text-center">
        <div className="mb-12">
          <Image
            src="https://pbs.twimg.com/profile_images/1801972870756925440/i5Hk08rP_400x400.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="mx-auto rounded-full"
            priority
          />
        </div>

        <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
        Awakenings - Siddharth
        </h1>
        
        <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
        Snapshots of growth, reflections, and insights for curious minds navigating life, tech, and everything in between.
        </p>

        {/* <div className="mx-auto mb-16 flex max-w-md flex-col gap-4 px-4 sm:flex-row sm:gap-2">
          <Input 
            type="email" 
            placeholder="Enter Your Email"
            className="flex-1"
          />
          <Button className="bg-black text-white hover:bg-gray-800">
            Subscribe
          </Button>
        </div> */}

        <div className="text-center">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Connect
          </h2>
          <div className="flex justify-center gap-6">
            <Link href="#" className="text-gray-600 hover:text-black">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Youtube className="h-6 w-6" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-black">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}

