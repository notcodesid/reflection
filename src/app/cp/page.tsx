import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
        <div className="reflection-container pt-8">
            <section className="mb-16 hidden md:block pt-[3rem] pb-[2rem]">
                <h1 className=" md:text-7xl font-medium font-serif mb-12">
                    why i'm  <br />
                    obsessed with <br />
                    competitive programming
                </h1>

                <section className="mb-4 flex items-center text-sm text-gray-500 font-sans">
                <span>2025-04-09</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
            </section>
            </section>

            <section className="mb-16 md:hidden">
                <h1 className="text-4xl font-normal font-serif mb-6">why i'm obsessed with competitive programming</h1>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <p className="text-lg md:text-xl font-serif">
                picture this: it&apos;s 9 am in the morning, i&apos;ve been learning c++ and now trying to understand the problem on codeforces. i&apos;m trying to understand the problem, design the algorithm and implement the code. it&apos;s failed for the 4th time again.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                hi, i&apos;m siddharth and competitive programming has me hooked. why i am obsessed and why i think it&apos;s a big deal for any engineer dreaming of building something epic.
                </p>
            </section>

            <section className="border-t border-gray-300 pt-8 mb-16 ">
                <h2 className="text-sm font-sans tracking-wide mb-6">why it's important (to me)</h2>
                <div className="text-lg md:text-xl font-serif">
                    <p className="text-lg md:text-xl font-serif">
                    i&apos;ve always believed that real software engineers do competitive programming at some point in their career, if not competitive programming then probably something problem solving. it&apos;s not just about problem solving, it&apos;s about brain exercise. competitive programming is gym for the brain; every algorithm i crack makes me sharper. cp is helping me in the real world projects as well (web development, mobile development, etc.) to test ideas, find bugs and fix them. it&apos;s like a superpower!
                    </p>

                    <p className="text-lg md:text-xl font-serif mt-4">
                    one lesson i&apos;m deeply learning from it is don&apos;t rush. early on as soon as i saw some bug i tried to fix it, but now i design the logic first, sometimes on pen and paper, sometimes in my head. it&apos;s slower but it works. and when i&apos;m stuck, i take a break, listen to imagine dragons and rethink.
                    </p>
                </div>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">what it's giving (to me)</h2>

                <p className="text-lg md:text-xl font-serif">
                competitive programming is already rewiring how I code. debugging something a lot or something less. i am starting to think bigger too; a recent problem created an idea for a social app i want to build. right now i don't really compete in the contests, just pick 800 level problem sets. it's building a better problem solving mindset.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                the best part when it's accepted, it's not just a win but it's proof i'm growing. i'm not just a vibe coder; i'm an engineer who loves what i can do with coding.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">your turn</h2>

                <p className="text-lg md:text-xl font-serif">
                i&apos;m obsessed with competitive programming because it&apos;s raw, chaotic, fun to solve and satisfying. it&apos;s started shaping me into the engineer i want to be, one who builds crazy epic things.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                so here&apos;s my advice or take it as a challenge; try competitive programming, if not cp then something that makes you think about algorithms. start small like i did, with some leetcode questions and even using javascript. solve it, feel the high. and tell me about it.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                what's stopping you now?
                </p>
            </section>

            <section className="border-gray-300">
                <p className="text-lg md:text-xl font-serif">
                    that's all for now. thanks for being here.
                </p>

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
