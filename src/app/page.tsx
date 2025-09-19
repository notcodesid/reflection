import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <div>
          <div className="mb-12">
            <h1 className="text-lg font-bold mb-1">i'm siddharth. engineer* at the intersection of development & blockchain.</h1>
            <p className="text-lg font-bold mb-1">
              i spend my days with the smartest people i know,
              building software to make peoples' work easier.
            </p>
          </div>
          
          <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <Link href="/code" className="hover:underline text-blue-500">can you really code?</Link>
                  <span className="text-sm  ml-2">thoughts on development skills</span>
                </div>
              </div>
              
              <div className="flex justify-between items-baseline mt-2">
                <div>
                  <Link href="/vscode" className="hover:underline text-blue-500">transition from cursor to vscode</Link>
                  <span className="text-sm  ml-2">developer tools</span>
                </div>
              </div>
          </div>
          
          <div>
              <div className="flex justify-between items-baseline">
                <div>
                  <Link href="/my-journal" className="hover:underline text-blue-500">my journal</Link>
                  <span className="text-sm  ml-2">personal reflections</span>
                </div>
              </div>
              
              <div className="flex justify-between items-baseline mt-2">
                <div>
                  <Link href="/day" className="hover:underline text-blue-500">a day of 20 years old</Link>
                  <span className="text-sm  ml-2">reflections on youth</span>
                </div>
              </div>
              
              <div className="flex justify-between items-baseline mt-2">
                <div>
                  <Link href="/study" className="hover:underline text-blue-500">how to study 4 hours every day</Link>
                  <span className="text-sm  ml-2">productivity tips</span>
                </div>
              </div>
          </div>
          
          <div>
            
              <div className="flex justify-between items-baseline">
                <div>
                  <Link href="/hire" className="hover:underline text-blue-500">how to get hire - sam altman</Link>
                  <span className="text-sm  ml-2">career advice</span>
                </div>
              </div>
              
              <div className="flex justify-between items-baseline mt-2">
                <div>
                  <Link href="/generalists" className="hover:underline text-blue-500">generalists in the information age</Link>
                  <span className="text-sm  ml-2">thoughts on career paths</span>
                </div>
              </div>
          </div>

          <Footer />
        </div>
    );
}
