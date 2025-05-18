import { Footer } from "@/components/layout/Footer";

export default function VscodePage() {
    return (
        <>
            <div>
                <div className="mb-12">
                    <h1 className="text-3xl font-bold mb-5">transition from cursor to vscode</h1>
                    <div className="text-sm text-gray-600 flex items-center">
                        <span>april 18, 2025</span>
                        <span className="mx-2">•</span>
                        <span>5 min read</span>
                    </div>
                </div>

                <section className="mt-8 pt-8">
                    <p className="text-base">
                    i&apos;ve always loved side projects, they&apos;re the best way to get that satisfaction of learning and building something cool. back in the day, i used to build projects on my own, coding late nights, debugging for hours, and feeling like i was learning at an exceptional level. it was all hands-on, and i loved the grind. but lately, things changed. 
                    <br />
                    <br />
                    i started using cursor a lot, especially since i couldn&apos;t afford the paid plan at first, but once i did, it became my go-to. it made coding feel so easy, but then i noticed something: i wasn&apos;t learning as much. this hit home during my last couple of technical interviews, where i couldn&apos;t solve simple problems. that&apos;s when i knew i had to make a change.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">those interview fails</h2>
                    <p className="text-base">
                    it started with a few bad interviews. i couldn&apos;t solve simple coding problems, which surprised me since i used to feel confident. the problem wasn&apos;t that i didn&apos;t know the concepts—it was that i relied on cursor too much. it did most of the work, so i hadn&apos;t practiced thinking through problems. in interviews, with no ai to help, i got stuck. that showed me i needed a change.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">why i liked cursor</h2>
                    <p className="text-base">
                    why did i use cursor so much? it made coding quick and easy. cursor has ai that writes code, fixes errors, and suggests ideas, all in a nice editor. when i couldn&apos;t afford paid tools, i built side projects the hard way and learned a lot. cursor changed that—it helped me finish projects faster and skip boring tasks. for a while, it felt like a great tool.
                    </p>
                    <br />

                    <p className="text-base mt-2">
                    but there was a catch. the more i used cursor, the less i coded myself. it fixed bugs before i could think. it wrote logic i didn&apos;t fully get. i wasn&apos;t learning or growing as a developer. my interview struggles proved i had to go back to basics.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">switching to vscode</h2>
                    <p className="text-base">
                    after those interview fails, i switched back to vscode. it was a deliberate choice to make coding harder. i wanted to feel that struggle again, to think through problems and build solutions myself. vscode doesn&apos;t have built-in ai, so i had to write all the code myself, debug my own errors, and learn from my mistakes. it was frustrating at first, but that&apos;s the point—i needed to rebuild those problem-solving muscles.
                    </p>
                    <br />

                    <p className="text-base mt-2">
                    the first week was rough. i was slower, made more mistakes, and spent hours debugging. but by week two, i noticed something: i was thinking more clearly about my code. i was learning again, building that confidence back. i wasn&apos;t just copying ai suggestions—i was coding.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">how i use ai now</h2>

                    <p className="text-base">
                    i still think ai tools are helpful, but i&apos;m more careful. here&apos;s my plan:
                    </p>

                    <ul className="list-disc pl-8 my-4 text-base space-y-2">
                        <li>use ai for small tasks: cursor can do repetitive code, but i write the main parts myself.</li>
                        <li>study ai&apos;s code: if cursor writes something, i read it closely to understand it.</li>
                        <li>practice without ai: i solve coding problems on sites like leetcode without help to build my skills.</li>
                    </ul>

                    <p className="text-base mt-2">
                    this keeps me in control. i can use ai but still learn.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">conclusion: finding balance</h2>

                    <p className="text-base">
                    ai tools like cursor make coding faster, but they can slow your growth if you rely on them too much. switching to vscode got me back to hands-on coding after my interview troubles. it&apos;s harder, but i&apos;m learning again, and that feels right. i&apos;m working on using ai wisely while keeping my skills strong.
                    </p>
                    <br />

                    <p className="text-base mt-2">
                    coding is about solving problems and growing. ai can help, but don&apos;t let it do everything.
                    </p>

                    <p className="text-base mt-2 italic font-bold">
                    don&apos;t automate the fun stuff.
                    </p>
                </section>

                <section className="mt-5">
                    <p className="text-base">
                        until then,
                    </p>

                    <p className="text-base font-bold">
                        siddharth
                    </p>
                </section>
            </div>

            <Footer />
        
        </>
    );
}
