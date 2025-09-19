import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function Home() {
    const sections = [
        [
            { href: "/code", title: "can you really code?", desc: "thoughts on development skills" },
            { href: "/vscode", title: "transition from cursor to vscode", desc: "developer tools" },
        ],
        [
            { href: "/my-journal", title: "my journal", desc: "personal reflections" },
            { href: "/day", title: "a day of 20 years old", desc: "reflections on youth" },
            { href: "/study", title: "how to study 4 hours every day", desc: "productivity tips" },
        ],
        [
            { href: "/hire", title: "how to get hire - sam altman", desc: "career advice" },
            { href: "/generalists", title: "generalists in the information age", desc: "thoughts on career paths" },
        ],
    ];

    return (
        <div>
          <div className="mb-12">
            <h1 className="text-lg font-bold mb-1">i'm siddharth. engineer* at the intersection of development & blockchain.</h1>
            <p className="text-lg font-bold mb-1">
              i spend my days with the smartest people i know,
              building software to make peoples' work easier.
            </p>
          </div>
          
          {sections.map((section, sectionIdx) => (
          <div key={sectionIdx}>
              {section.map((item, idx) => (
              <div className={`flex justify-between items-baseline${idx > 0 ? " mt-2" : ""}`} key={item.href}>
                <div>
                  <Link href={item.href} className="hover:underline text-blue-500">{item.title}</Link>
                  <span className="text-sm  ml-2">{item.desc}</span>
                </div>
              </div>
              ))}
          </div>
          ))}

          <Footer />
        </div>
    );
}

