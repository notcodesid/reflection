import Link from "next/link";
import { MoveRight } from "lucide-react"; //Added icon from lucide react

const ArrowIcon = () => (
<MoveRight className="w-4 h-4 text-gray-800 dark:text-gray-200" /> // updated styles when light mode text-gray-800 and when dark mode text-gray-200
);



export default function Home() {
    return (
        <div className="reflection-container pt-8 font-serif text-lg md:text-xl">
          <p className="mb-[5rem] text-7xl mt-[12rem]">thoughts on life, tech, and growth.</p>

          {/* blog posts */}
          <div className="flex flex-col gap-4 pt-8">

            {/* <h2 className="text-2xl font-bold">growth</h2> */}

            <Link href="/study">
              <h2 className="flex items-center gap-2"> <ArrowIcon /> 
              <span className=" ml-5">how to study 4 hours every day</span>
              </h2>
            </Link>

            <Link href="/generalists">
              <h2 className="flex items-center gap-2"> <ArrowIcon /> 
              <span className=" ml-5">generalists in the information age</span>
              </h2>
            </Link>

            <Link href="/serverless">
              <h2 className="flex items-center gap-2"> <ArrowIcon /> 
              <span className=" ml-5">serverless backend</span>
              </h2>
            </Link>

            <Link href="/hire">
              <h2 className="flex items-center gap-2"> <ArrowIcon /> 
              <span className=" ml-5">how to get hire - sam altman</span>
              </h2>
            </Link>

            
          </div>
        </div>
    );
}
