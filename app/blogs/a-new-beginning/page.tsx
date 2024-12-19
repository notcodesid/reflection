import { Clock } from 'lucide-react'

export default function BlogPost() {
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
                    <h2 className="text-2xl font-bold mb-4">The Secret to Sam's Success</h2>
                    <ul className="space-y-2">
                        <li>He believes in creating things that can change the world. It's not just talk; it's a mindset.</li>
                        <li>Sam is known for making public appearances everywhere—conferences, podcasts, interviews—you name it. This openness helped him become a well-known figure.</li>
                        <li>One of his skills? He remembers people's names and greets them like they've been friends forever. He makes everyone feel important.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">How Sam Connects with People</h2>
                    <p>Whenever Sam meets someone, he doesn't just shake hands and move on. He figures out two things:</p>
                    <ol className="space-y-2 pl-4">
                        <li>How he can help them.</li>
                        <li>How they can help him.</li>
                    </ol>
                    <p className="mt-4">This isn't transactional—it's about building real relationships.</p>
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                        <p className="font-medium">Pro tip from Sam:</p>
                        <p>Don't hang out too long at parties or public places. Make your presence felt, then leave.</p>
                    </div>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">The "Change the World" Attitude</h2>
                    <p>Sam believes with all his heart that anyone can change the world. But you need two things:</p>
                    <ol className="space-y-2 pl-4">
                        <li>Faith in yourself.</li>
                        <li>The drive to act on it.</li>
                    </ol>
                    <p className="mt-4">He has this <em>you-can't-beat-me</em> confidence in his skills. It's not arrogance; it's mastery.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Sam's Unique Skills</h2>
                    <ul className="space-y-2">
                        <li>He's incredibly good at figuring out who's powerful and charming them.</li>
                        <li>He knows how to impress older, more experienced people—those who can open doors for him.</li>
                        <li>Fun fact: As a teenager, he acted way older than he was. He loved being in charge and taking control of situations.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">His Journey to Silicon Valley</h2>
                    <ul className="space-y-2">
                        <li>Sam finished school, got into Stanford, and studied computer science.</li>
                        <li>But he didn't finish. He dropped out and joined Y Combinator (YC).</li>
                        <li>YC is where he created Loopt, an app for sharing your location with friends and finding things to do nearby.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">What Makes Him Different</h2>
                    <ul className="space-y-2">
                        <li>Sam impressed big names like Paul Graham and Peter Thiel.</li>
                        <li>He doesn't waste time on small things—like worrying about what to wear. He once said cargo shorts were his go-to because they're comfortable.</li>
                        <li>His secret weapon? Persistence. When he wants something done, he doesn't give up.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Sam's Attitude Toward Startups</h2>
                    <ul className="space-y-2">
                        <li>He believes that the best founders don't just create businesses; they create <em>movements</em>—almost like religions.</li>
                        <li>Most people don't even try to change the world. But Sam thinks that if you have enough self-belief, you can bend the world to your will.</li>
                        <li>Fun note: He uses the words "super" and "excited" all the time—it's part of his optimism.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Key Traits That Set Him Apart</h2>
                    <ul className="space-y-2">
                        <li>Sam has sky-high ambition and insane focus.</li>
                        <li>He listens intensely in conversations, often locking eyes with the speaker.</li>
                        <li>He builds relationships not for immediate gain but for long-term returns in power, money, and knowledge.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">The Bigger Picture</h2>
                    <blockquote className="italic border-l-4 pl-4 my-4">
                        "People should believe in you so much that they're convinced you'll make it, no matter how or when."
                    </blockquote>
                    <p>His advice to startup founders often comes through essays and blogs, which have helped inspire countless entrepreneurs.</p>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Fun Moments</h2>
                    <ul className="space-y-2">
                        <li>Elon Musk once casually told a story about ending a friendship. Sam loved it because the anecdote made him smarter.</li>
                        <li>Even the smallest things, like sitting arrangements, seemed "wired" (probably strategic) with Sam.</li>
                    </ul>
                </section>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold mb-4">Big Takeaways from Sam's Story</h2>
                    <ul className="space-y-2">
                        <li>Believe in yourself to the point where others might think you're <em>delusional</em>.</li>
                        <li>Be persistent, optimistic, and confident, even if you don't have all the answers yet.</li>
                        <li>Build relationships with the right people, and don't hesitate to charm your way into opportunities.</li>
                    </ul>
                </section>
            </article>
        </div>
    )
}

