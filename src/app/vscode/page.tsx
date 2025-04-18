import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
        <div className="reflection-container pt-8">
            <section className="mb-16 hidden md:block pt-[3rem] pb-[2rem]">
                <h1 className="md:text-7xl font-medium font-serif mb-12">
                transition from  <br />
                cursor to <br />
                    vscode 
                </h1>

                <section className="mb-4 flex items-center text-sm text-gray-500 font-sans">
                    <span>2025-04-18</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                </section>
            </section>

            <section className="mb-16 md:hidden">
                <h1 className="text-4xl font-normal font-serif mb-6">why i switched back to vscode</h1>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <p className="text-lg md:text-xl font-serif">
                i&apos;ve always loved side projects, they&apos;re the best way to get that satisfaction of learning and building something cool. back in the day, i used to build projects on my own, coding late nights, debugging for hours, and feeling like i was learning at an exceptional level. it was all hands-on, and i loved the grind. but lately, things changed. i started using cursor a lot, especially since i couldn&apos;t afford the paid plan at first, but once i did, it became my go-to. it made coding feel so easy, but then i noticed something: i wasn&apos;t learning as much. this hit home during my last couple of technical interviews, where i couldn&apos;t solve simple problems. that&apos;s when i knew i had to make a change.
                </p>
            </section>

            <section className="border-t border-gray-300 pt-8 mb-16">
                <h2 className="text-sm font-sans tracking-wide mb-6">those interview fails</h2>
                <div className="text-lg md:text-xl font-serif">
                    <p className="text-lg md:text-xl font-serif">
                    it started with a few bad interviews. i couldn&apos;t solve simple coding problems, which surprised me since i used to feel confident. the problem wasn&apos;t that i didn&apos;t know the concepts—it was that i relied on cursor too much. it did most of the work, so i hadn&apos;t practiced thinking through problems. in interviews, with no ai to help, i got stuck. that showed me i needed a change.
                    </p>
                </div>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">why i liked cursor</h2>

                <p className="text-lg md:text-xl font-serif">
                why did i use cursor so much? it made coding quick and easy. cursor has ai that writes code, fixes errors, and suggests ideas, all in a nice editor. when i couldn&apos;t afford paid tools, i built side projects the hard way and learned a lot. cursor changed that—it helped me finish projects faster and skip boring tasks. for a while, it felt like a great tool.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                but there was a catch. the more i used cursor, the less i coded myself. it fixed bugs before i could think. it wrote logic i didn&apos;t fully get. i wasn&apos;t learning or growing as a developer. my interview struggles proved i had to go back to basics.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">switching to vscode</h2>

                <p className="text-lg md:text-xl font-serif">
                after those interviews, i went back to vscode, a simple code editor with no ai built in. it&apos;s fast, clean, and used by many engineers. now, i write all my code myself. i fix my own errors and solve problems from scratch. it takes longer than before, but when i figure something out, it feels good like when i first started coding.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">how i use ai now</h2>

                <p className="text-lg md:text-xl font-serif">
                i still think ai tools are helpful, but i&apos;m more careful. here&apos;s my plan:
                </p>

                <ul className="list-disc pl-8 my-4 text-lg md:text-xl font-serif space-y-2">
                    <li>use ai for small tasks: cursor can do repetitive code, but i write the main parts myself.</li>
                    <li>study ai&apos;s code: if cursor writes something, i read it closely to understand it.</li>
                    <li>practice without ai: i solve coding problems on sites like leetcode without help to build my skills.</li>
                </ul>

                <p className="text-lg md:text-xl font-serif mt-4">
                this keeps me in control. i can use ai but still learn.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">conclusion: finding balance</h2>

                <p className="text-lg md:text-xl font-serif">
                ai tools like cursor make coding faster, but they can slow your growth if you rely on them too much. switching to vscode got me back to hands-on coding after my interview troubles. it&apos;s harder, but i&apos;m learning again, and that feels right. i&apos;m working on using ai wisely while keeping my skills strong.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                coding is about solving problems and growing. ai can help, but don&apos;t let it do everything.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4 italic">
                don&apos;t automate the fun stuff.
                </p>
            </section>

            <section className="border-gray-300">
                <p className="text-lg md:text-xl font-serif mt-4">
                    until then,
                </p>

                <p className="text-lg md:text-xl font-serif mt-4 font-bold">
                    siddharth
                </p>
            </section>
        </div>

        <Footer />
        
        </>
    );
}
