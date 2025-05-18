import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import nyc from "../../../public/nyc.png";

export default function Home() {
    return (
        <>
        <div className="reflection-container pt-8">
            <div className="my-[4rem]">
                <section className="hidden md:block pt-[3rem] pb-[2rem]">
                    <h1 className="md:text-7xl font-medium ">a day of 20 years old</h1>
                </section>

                <section className="md:hidden">
                    <h1 className="text-4xl font-normal  mb-6">a day of 20 yrs old</h1>
                </section>

                <section className="mb-4 flex items-center text-sm text-gray-500">
                    <span>2025-04-22</span>
                    <span className="mx-2">•</span>
                    <span>3 min read</span>
                </section>
            </div>

            <section className="mb-4 border-t border-gray-300 pt-8">
                <p className="text-lg md:text-xl ">
                    first things first, make the bed. because you can&apos;t code your way to greatness with a wrinkled sheet. can you? salt water in hand, trying to summon an endorphin rush. a bit of liquid luck, because i&apos;ll need it today. five minutes of meditation to stop obsessing about how much i&apos;m not doing.
                </p>
            </section>

            <section className="mb-4 pt-8">
                
                <p className="text-lg md:text-xl ">
                    pretending it&apos;s meditation, when really i&apos;m just trying not to spiral into &quot;i should be doing more.&quot; wild, right? i barely know how blockchains work, but here i am, bagging a $2.5k web3 grant like i accidentally typed the right proposal.
                </p>
                
                <p className="text-lg md:text-xl  mt-4">
                    black coffee with no sugar, because today&apos;s not handing out wins for free.
                </p>
            </section>

            <section className="mb-4 pt-8">
                
                <p className="text-lg md:text-xl ">
                    now comes the 20 yrs old engineer building a full product from scratch. zero to deployed. mirror check. yup—still that guy.
                </p>
                
                <p className="text-lg md:text-xl  mt-4">
                    laptop open. nyc morning up on the screen like it knows i&apos;m dreaming of something bigger. the best view after i woke up. it&apos;s a reminder to move to nyc.
                </p>

                <Image src={nyc} alt="nyc" className="w-full rounded-lg mt-5" width={500} height={500} />
                
                <p className="text-lg md:text-xl  mt-4">
                    next up: the main questline.
                </p>
            </section>

            <section className="mb-4 pt-8">
                
                <p className="text-lg md:text-xl ">
                    i&apos;ve got this react native plus solana app breathing down my neck. i don&apos;t fully speak the language of web3 yet, but that&apos;s never stopped me before. fake it till i ship it—or till it stops throwing weird errors. either works.
                </p>
                
                <p className="text-lg md:text-xl  mt-4">
                    then it&apos;s onto system design. not the &quot;youtube thumbnail with a diagram and dramatic music&quot; kind. i&apos;m talking real, foundational stuff—the architecture that keeps the castle standing, written by the guy i&apos;m inspired by daily: <a href="https://x.com/shivambhadani_" target="_blank" rel="noopener noreferrer" className="text-blue-500">@shivambhadani_</a>. it&apos;s dense. but it&apos;s also the kind of thing that makes me feel like i&apos;m leveling up, stat by stat.
                </p>
            </section>

            <section className="mb-4 pt-8">
                
                <p className="text-lg md:text-xl ">
                    evening rolls around, and it&apos;s time to switch roles. cricket in the evening. turning into kohli when the pressure&apos;s on. i lace up like it&apos;s the world cup final. the moment i pick up the bat, i&apos;m virat kohli chasing down 180 with calm eyes and calculated aggression.
                </p>
            </section>

            <section className="mb-4 pt-8">
                
                <p className="text-lg md:text-xl ">
                    and if time grants me a little bonus xp, i&apos;ll peek into the world of ai agents. these things are wild—little digital brains with potential that makes your head spin. might not understand it all yet, but curiosity doesn&apos;t wait for permission.
                </p>
                
                <p className="text-lg md:text-xl  mt-4">
                    so yeah—code, architecture, cricket, and curiosity.
                </p>
            </section>

            <section className="mb-4 pt-8">
                
                <p className="text-lg md:text-xl ">
                    being an engineer? just one of the roles i juggle. like spider-man, but the only thing i&apos;m swinging between is a dozen tabs and my task list.
                </p>
                
                <p className="text-lg md:text-xl  mt-4">
                    write the todos. write the code. write the story.
                </p>
                
                <p className="text-lg md:text-xl  mt-4">
                    but somehow, this chaos clicks together—barely. and i wouldn&apos;t have it any other way.
                </p>
                
                <p className="text-lg md:text-xl  mt-8">
                    until then,
                </p>
                
                <p className="text-lg md:text-xl  mt-4 font-bold">
                    siddharth
                </p>
            </section>
        </div>
        <Footer />
        </>
    );
}