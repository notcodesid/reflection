// import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface BlogPost {
  id: string;
  title: string;
  image: string;
}

const samplePosts: BlogPost[] = [
  {
    id: "https://ethereal-alto-f58.notion.site/Generalists-in-the-Information-Age-f2efbf0d962d4cbbad8423c8d917e7fc?pvs=4",
    title: "Generalists in the Information Age",
    image:
      "https://i.pinimg.com/736x/f3/fe/a6/f3fea68781554bfbd4426ee1c136066b.jpg",
  },
  {
    id: "https://ethereal-alto-f58.notion.site/Serverless-Backend-179db9bb546c80f8805acc2b14228db2",
    title: "Serverless Backend",
    image:
      "https://pbs.twimg.com/media/GhVz_ncaMAAButd?format=jpg&name=small",
  },
  {
    id: "https://ethereal-alto-f58.notion.site/How-to-Study-4-hours-every-day-186db9bb546c80acb25ddabf57e594aa",
    title: "How to Study 4 hours every day",
    image:
      "https://i.pinimg.com/736x/8c/5e/98/8c5e988ae5c41128e4e3035bf6e7ae59.jpg",
  },
];

export default function BlogSection() {
  return (
    <section className="pb-16 px-4">
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
              <Link href={`${post.id}`}>
                <div className="space-y-4">
                  <div className="aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-contain transition-transform group-hover:scale-105"
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

      {/* <div>
        <Link href={"/blogs"} className="flex justify-center items-center mt-5 ">
          <span className="text-lg">  Let me see all the blogs </span>
          <ArrowRight className="h-5 ml-1"/>
        </Link>
      </div> */}

    </section>
  );
}
