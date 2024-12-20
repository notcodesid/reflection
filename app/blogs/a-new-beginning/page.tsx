'use client'

import { Clock } from 'lucide-react'
import { useEffect, useState, useCallback } from 'react'

function TableOfContents({ sections }: { sections: { id: string; title: string }[] }) {
  const [activeSection, setActiveSection] = useState<string>('')
  const [isHovered, setIsHovered] = useState(false)
  const [isManualScroll, setIsManualScroll] = useState(false)

  useEffect(() => {
    const observers = new Map()
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      if (isManualScroll) return

      // Find the most visible section
      let maxVisibility = 0
      let mostVisibleSection = ''

      entries.forEach((entry) => {
        if (entry.intersectionRatio > maxVisibility) {
          maxVisibility = entry.intersectionRatio
          mostVisibleSection = entry.target.id
        }
      })

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection)
      }
    }

    const observerOptions = {
      rootMargin: '-20% 0px -35% 0px',
      threshold: [0, 0.25, 0.5, 0.75, 1]
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    const headings = document.querySelectorAll('h2')
    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading)
        observers.set(heading.id, observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [isManualScroll])

  // Debounced hover handler
  const handleMouseEnter = useCallback(() => {
    const timer = setTimeout(() => setIsHovered(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const timer = setTimeout(() => setIsHovered(false), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      setIsManualScroll(true)
      setActiveSection(sectionId)
      element.scrollIntoView({ behavior: 'smooth' })
      
      // Reset manual scroll after animation completes
      setTimeout(() => {
        setIsManualScroll(false)
      }, 1000)
    }
  }, [])

  return (
    <nav
      className="fixed right-8 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`
        transition-all duration-300 ease-in-out transform
        ${isHovered 
          ? 'opacity-100 translate-x-0 w-64 bg-background/80 backdrop-blur-sm p-4 rounded-lg border shadow-lg' 
          : 'opacity-50 translate-x-12 w-8 hover:opacity-100'}
      `}>
        {isHovered ? (
          <ul className="space-y-2 text-sm">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left w-full px-2 py-1 rounded hover:text-primary truncate transition-colors ${
                    activeSection === section.id 
                      ? 'text-primary font-medium bg-primary/10' 
                      : 'text-muted-foreground'
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
                    ? 'bg-primary w-6'
                    : 'bg-foreground/20'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// Main BlogPost component
export default function BlogPost() {
    const sections = [
        { id: 'success', title: "The Secret to Sam's Success" },
        { id: 'connects', title: 'How Sam Connects with People' },
        { id: 'attitude', title: 'The "Change the World" Attitude' },
        { id: 'skills', title: "Sam's Unique Skills" },
        { id: 'journey', title: 'His Journey to Silicon Valley' },
        { id: 'different', title: 'What Makes Him Different' },
        { id: 'startups', title: "Sam's Attitude Toward Startups" },
        { id: 'traits', title: 'Key Traits That Set Him Apart' },
        { id: 'bigger-picture', title: 'The Bigger Picture' },
        { id: 'fun-moments', title: 'Fun Moments' },
        { id: 'takeaways', title: "Big Takeaways from Sam's Story" }
    ]

    return (
        <div className="min-h-screen bg-background px-4 py-6 md:px-6 md:py-12 lg:py-16">
            <article className="prose prose-gray dark:prose-invert mx-auto max-w-3xl">
                <div className="space-y-2 not-prose">
                    <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-3">
                        The Most Silicon Valley Man Alive
                    </h1>
                    <div className="flex items-center space-x-2">
                        <Clock className="h-[18px] w-[18px]" />
                        <span className="text-muted-foreground">Created at</span>
                        <span className="text-sm">18 Dec 2024</span>
                    </div>
                </div>

                <section className="mt-8">
                    <h2 id="success" className="text-2xl font-bold mb-4">The Secret to Sam&apos;s Success</h2>
                    <ul className="space-y-2">
                        <li>He believes in creating things that can change the world. It&apos;s not just talk; it&apos;s a mindset.</li>
                        <li>Sam is known for making public appearances everywhere—conferences, podcasts, interviews—you name it. This openness helped him become a well-known figure.</li>
                        <li>One of his skills? He remembers people&apos;s names and greets them like they&apos;ve been friends forever. He makes everyone feel important.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 id="connects" className="text-2xl font-bold mb-4">How Sam Connects with People</h2>
                    <p>Whenever Sam meets someone, he doesn&apos;t just shake hands and move on. He figures out two things:</p>
                    <ol className="space-y-2 pl-4">
                        <li>How he can help them.</li>
                        <li>How they can help him.</li>
                    </ol>
                    <p className="mt-4">This isn&apos;t transactional—it&apos;s about building real relationships.</p>
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                        <p className="font-medium">Pro tip from Sam:</p>
                        <p>Don&apos;t hang out too long at parties or public places. Make your presence felt, then leave.</p>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 id="attitude" className="text-2xl font-bold mb-4">The &quot;Change the World&quot; Attitude</h2>
                    <p>Sam believes with all his heart that anyone can change the world. But you need two things:</p>
                    <ol className="space-y-2 pl-4">
                        <li>Faith in yourself.</li>
                        <li>The drive to act on it.</li>
                    </ol>
                    <p className="mt-4">He has this <em>you-can&apos;t-beat-me</em> confidence in his skills. It&apos;s not arrogance; it&apos;s mastery.</p>
                </section>

                <section className="mt-8">
                    <h2 id="skills" className="text-2xl font-bold mb-4">Sam&apos;s Unique Skills</h2>
                    <ul className="space-y-2">
                        <li>He&apos;s incredibly good at figuring out who&apos;s powerful and charming them.</li>
                        <li>He knows how to impress older, more experienced people—those who can open doors for him.</li>
                        <li>Fun fact: As a teenager, he acted way older than he was. He loved being in charge and taking control of situations.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 id="journey" className="text-2xl font-bold mb-4">His Journey to Silicon Valley</h2>
                    <ul className="space-y-2">
                        <li>Sam finished school, got into Stanford, and studied computer science.</li>
                        <li>But he didnt finish. He dropped out and joined Y Combinator (YC).</li>
                        <li>YC is where he created Loopt, an app for sharing your location with friends and finding things to do nearby.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 id="different" className="text-2xl font-bold mb-4">What Makes Him Different</h2>
                    <ul className="space-y-2">
                        <li>Sam impressed big names like Paul Graham and Peter Thiel.</li>
                        <li>He doesnt waste time on small things—like worrying about what to wear. He once said cargo shorts were his go-to because theyre comfortable.</li>
                        <li>His secret weapon? Persistence. When he wants something done, he doesnt give up.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 id="startups" className="text-2xl font-bold mb-4">Sams Attitude Toward Startups</h2>
                    <ul className="space-y-2">
                        <li>He believes that the best founders dont just create businesses; they create <em>movements</em>—almost like religions.</li>
                        <li>Most people dont even try to change the world. But Sam thinks that if you have enough self-belief, you can bend the world to your will.</li>
                        <li>Fun note: He uses the words uper and excited all the times part of his optimism.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 id="traits" className="text-2xl font-bold mb-4">Key Traits That Set Him Apart</h2>
                    <ul className="space-y-2">
                        <li>Sam has sky-high ambition and insane focus.</li>
                        <li>He listens intensely in conversations, often locking eyes with the speaker.</li>
                        <li>He builds relationships not for immediate gain but for long-term returns in power, money, and knowledge.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 id="bigger-picture" className="text-2xl font-bold mb-4">The Bigger Picture</h2>
                    <blockquote className="italic border-l-4 pl-4 my-4">
                        People should beliee in you so much that theyre convinced youll make it, no matter how or when.
                    </blockquote>
                    <p>His advice to startup founders often comes through essays and blogs, which have helped inspire countless entrepreneurs.</p>
                </section>

                <section className="mt-8">
                    <h2 id="fun-moments" className="text-2xl font-bold mb-4">Fun Moments</h2>
                    <ul className="space-y-2">
                        <li>Elon Musk once casually told a story about ending a friendship. Sam loved it because the anecdote made him smarter.</li>
                        <li>Even the smallest things, like sitting arrangements, seemed wired(probably strategic) with Sam.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 id="takeaways" className="text-2xl font-bold mb-4">Big Takeaways from Sams Story</h2>
                    <ul className="space-y-2">
                        <li>Believe in yourself to the point where others might think youre <em>delusional</em>.</li>
                        <li>Be persistent, optimistic, and confident, even if you dont have all the answers yet.</li>
                        <li>Build relationships with the right people, and dont hesitate to charm your way into opportunities.</li>
                    </ul>
                </section>
            </article>
            <TableOfContents sections={sections} />
        </div>
    )
}

