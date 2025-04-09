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
                picture this: it&apos;s 9 am in the morning, i&apos;ve been learning c++ and now trying to understand the problme of codeforces. i&apos;m trying to understand the problem trying to design the alogthims and implemating the code. it&apos;s failed 4th time again.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                hi, i&apos;m siddharth and competitive programming has me hooked. why i am obsessed and why i think it&apos;s a big deal for any engineer dreaming of buildling something epic shit.
                </p>
            </section>

            <section className="border-t border-gray-300 pt-8 mb-16 ">
                <h2 className="text-sm font-sans tracking-wide mb-6">why it important (to me)</h2>
                <div className="text-lg md:text-xl font-serif">
                    <p className="text-lg md:text-xl font-serif">
                    i&apos;ve always believed that real software engineers do competitive programming at some point on their career, if not competitive programming then probably something problem solving. it&apos;s not just about problem solving it&apos;s about brain exercise. competitive programming is gym for brain; every alogthmics i crack make me sharper. cp is helping me in the real world projects as well(web development, mobile development, etc.) test ideas, find bugs and fix it. it&apos;s like superpower!
                    </p>

                    <p className="text-lg md:text-xl font-serif mt-4">
                    one lesson i&apos;m deeply learning from it is don&apos;t rush. early on as soon i see some bug i tried to fix, but now i design the logic first, sometimes on pen paper, sometime on head. it&apos;s shower but it&apos;s works. and when i&apos;m stuck, take a break hear imagine dragons and rethink.
                    </p>
                </div>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">why it's giving (to me)</h2>

                <p className="text-lg md:text-xl font-serif">
                competitive programming is already rewiring how I code. debugging something a lot or something less. i am starting thinking bigger too; a recent problem create an idea for a social app i want to build. right now i don't really compete on the contents, picks 800 level problem set. it's building better problem sovling mindeset.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                the best part when it's accpected, it's not just win but it's proof i'm growing. i'm not just a vibe coder; i'm an engineer who loves what i can do with coding.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">your turn</h2>

                <p className="text-lg md:text-xl font-serif">
                i&apos;m obessed with competitive programming because it&apos;s raw, chaotic, fun to solve and satisfying. it&apos;s started shaping me the engineer i want to be, one who build crazy epic shit.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                so here&apos;s my advice or take it as challgence; try competitive programming if not cp then something that make you think about the alogthmics. start a small like me started with some leetcode qns and that too on javascript. solve it, feel the high. and tell me about it.
                </p>

                <p className="text-lg md:text-xl font-serif mt-4">
                what's stoping you now?
                </p>
            </section>

            <section className=" border-gray-300">
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
