import Image from "next/image"
import Appbar from "./components/appbar"
import BlogSection from "./components/blog-section"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Appbar />


      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 text-center">
        <div className="mb-12">
          <Image
            src="https://pbs.twimg.com/profile_images/1801972870756925440/i5Hk08rP_400x400.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="mx-auto rounded"
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

      </main>

      <BlogSection />
    </div>
  )
}

