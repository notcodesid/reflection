import Link from "next/link";

const ArrowIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" style={{width: '16px', height: '16px'}} className="w-4 h-4"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
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
