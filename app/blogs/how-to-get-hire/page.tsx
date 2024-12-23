"use client";

import { BlogAppBar } from "@/components/blogAppbar";
import { useEffect, useState, useCallback } from "react";

function TableOfContents({
  sections,
}: {
  sections: { id: string; title: string }[];
}) {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isHovered, setIsHovered] = useState(false);
  const [isManualScroll, setIsManualScroll] = useState(false);

  useEffect(() => {
    const observers = new Map();

    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isManualScroll) return;

      // Find the most visible section
      let maxVisibility = 0;
      let mostVisibleSection = "";

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxVisibility) {
          maxVisibility = entry.intersectionRatio;
          mostVisibleSection = entry.target.id;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    };

    const observerOptions = {
      rootMargin: "-20% 0px -35% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const headings = document.querySelectorAll("h2");
    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading);
        observers.set(heading.id, observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isManualScroll]);

  // Debounced hover handler
  const handleMouseEnter = useCallback(() => {
    const timer = setTimeout(() => setIsHovered(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseLeave = useCallback(() => {
    const timer = setTimeout(() => setIsHovered(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setIsManualScroll(true);
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });

      // Reset manual scroll after animation completes
      setTimeout(() => {
        setIsManualScroll(false);
      }, 1000);
    }
  }, []);

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`
        transition-all duration-300 ease-in-out transform
        ${
          isHovered
            ? "opacity-100 translate-x-0 w-64 bg-background/80 backdrop-blur-sm p-4 rounded-lg border shadow-lg"
            : "opacity-50 translate-x-12 w-8 hover:opacity-100"
        }
      `}
      >
        {isHovered ? (
          <ul className="space-y-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full px-2 py-1 rounded hover:text-primary truncate transition-colors ${
                    activeSection === section.id
                      ? "text-primary font-medium bg-primary/10"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center gap-3">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`h-[2px] w-4 transition-all duration-300 ${
                  section.id === activeSection
                    ? "bg-primary w-6"
                    : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// Main BlogPost component
export default function BlogPost() {
  const sections = [
    { id: "Take-Your-time", title: "Take Your Time to Find the Right Job" },
    { id: "Get-Involved-Early", title: "Get Involved Early" },
    { id: "Be-smart", title: " Be Smart, But Also Get Stuff Done" },
    { id: "Prepare", title: "Prepare for the Job, Not Just the Interview" },
    { id: "Do-trial", title: "Do a trial project" },
  ];

  return (
    <>
      <BlogAppBar />
      <div className="min-h-screen bg-background px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <article className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
          <div className="space-y-2 not-prose">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
              How to get hire{" "}
            </h1>
          </div>

          <p className="space-y-2">
          So, I was reading this blog by Sam Altman, How to Hire, and it got me thinking: as developers, we really need to understand what founders want from us. Here&apos;s what I picked up, and honestly, it&apos;s pretty straightforward!
             </p>

          <section className="mt-8">
            <h2 id="Take-Your-time" className="text-2xl font-bold mb-4">
            Take Your Time to Find the Right Job
            </h2>
            <p className="space-y-2">
            Founders spend a lot of time hiring, so we should do the same when we’re job hunting. It’s not just about doing one interview and calling it a day. Spend time getting to know the company, what they do, and how you fit in.</p>
          </section>

          <section className="mt-8">
            <h2 id="Get-Involved-Early " className="text-2xl font-bold mb-4">
            Get Involved Early
            </h2>
            <p>
            Don’t just show up and use big, fancy words. Show that you&apos;re ready to dive in and actually work on things. Be real. Founders know what’s up, and they appreciate people who are hands-on and practical.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="Be-smart" className="text-2xl font-bold mb-4">
            Be Smart, But Also Get Stuff Done
            </h2>
            <p>
            It’s not enough to just be smart. You need to prove you can get results. Show examples of your best work, explain what you’ve done, and how you solved problems. Founders love people who can adapt and make things happen.
            </p>
          </section>

          <section className="mt-8">
            <h2 id="Prepare" className="text-2xl font-bold mb-4">
            Prepare for the Job, Not Just the Interview
            </h2>
           <p>
           Founders aren’t just looking for someone who can answer interview questions. They want to see that you can actually do the job. Focus on showing what you can bring to the table in real-life situations, not just theoretical answers.
           </p>
          </section>

          <section className="mt-8">
            <h2 id="Do-trial" className="text-2xl font-bold mb-4">
            Do a Trial Project
            </h2>
           <p>
           This is a big one. If you can, offer to do a small project or task before getting hired. It gives the founder a chance to see you in action, and it gives you a feel for what working at the company will be like. Plus, it’s way better than just talking in interviews.
           </p>
          </section>

          <section className="mt-8">
         <p>And that’s it! I got this idea after reading Sam’s blog, and it really made things clear. Getting hired isn’t just about the interview, it’s about showing you’re the right fit from day one.
            </p>
          </section>



       

        </article>
        <TableOfContents sections={sections} />
      </div>
    </>
  );
}
