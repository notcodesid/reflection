import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import nyc from "../../../public/nyc.png";

export default function DayPage() {
    // Common styles to avoid repetition
    const paragraphStyle = "text-base";
    const paragraphSpacing = "mt-2";
    const sectionStyle = "pt-8  border-gray-200 mt-8";

    return (
        <>
            <div>
            <div className="mb-12">
                <h1 className="text-3xl font-bold mb-5">a day of 20 years old</h1>
                <div className="text-sm text-gray-600 flex items-center">
                    <span>2025-04-22</span>
                    <span className="mx-2">•</span>
                    <span>3 min read</span>
                </div>
            </div>

            <section className={sectionStyle}>
                <p className={paragraphStyle}>
                    first things first, make the bed. because you can&apos;t code your way to greatness with a wrinkled sheet. can you? salt water in hand, trying to summon an endorphin rush. a bit of liquid luck, because i&apos;ll need it today. five minutes of meditation to stop obsessing about how much i&apos;m not doing.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">morning routine</h2>
                <p className={paragraphStyle}>
                    pretending it&apos;s meditation, when really i&apos;m just trying not to spiral into &quot;i should be doing more.&quot; wild, right? i barely know how blockchains work, but here i am, bagging a $2.5k web3 grant like i accidentally typed the right proposal.
                </p>
                
                <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    black coffee with no sugar, because today&apos;s not handing out wins for free.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">work mode</h2>
                
                <p className={paragraphStyle}>
                    now comes the 20 yrs old engineer building a full product from scratch. zero to deployed. mirror check. yup—still that guy.
                </p>
                
                <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    laptop open. nyc morning up on the screen like it knows i&apos;m dreaming of something bigger. the best view after i woke up. it&apos;s a reminder to move to nyc.
                </p>

                <Image src={nyc} alt="nyc" className="w-full rounded-sm mt-5" width={500} height={500} />
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">web3 project</h2>
                
                <p className={paragraphStyle}>
                    i&apos;ve got this react native plus solana app breathing down my neck. i don&apos;t fully speak the language of web3 yet, but that&apos;s never stopped me before. fake it till i ship it—or till it stops throwing weird errors. either works.
                </p>
                
                <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    then it&apos;s onto system design. not the &quot;youtube thumbnail with a diagram and dramatic music&quot; kind. i&apos;m talking real, foundational stuff—the architecture that keeps the castle standing, written by the guy i&apos;m inspired by daily: <a href="https://x.com/shivambhadani_" target="_blank" rel="noopener noreferrer" className="text-blue-500">@shivambhadani_</a>. it&apos;s dense. but it&apos;s also the kind of thing that makes me feel like i&apos;m leveling up, stat by stat.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">evening cricket</h2>
                
                <p className={paragraphStyle}>
                    evening rolls around, and it&apos;s time to switch roles. cricket in the evening. turning into kohli when the pressure&apos;s on. i lace up like it&apos;s the world cup final. the moment i pick up the bat, i&apos;m virat kohli chasing down 180 with calm eyes and calculated aggression.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">exploring ai</h2>
                
                <p className={paragraphStyle}>
                    and if time grants me a little bonus xp, i&apos;ll peek into the world of ai agents. these things are wild—little digital brains with potential that makes your head spin. might not understand it all yet, but curiosity doesn&apos;t wait for permission.
                </p>
                
                <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    so yeah—code, architecture, cricket, and curiosity.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">balancing act</h2>
                
                <p className={paragraphStyle}>
                    being an engineer? just one of the roles i juggle. like spider-man, but the only thing i&apos;m swinging between is a dozen tabs and my task list.
                </p>
                
                <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    write the todos. write the code. write the story.
                </p>
                
                <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    but somehow, this chaos clicks together—barely. and i wouldn&apos;t have it any other way.
                </p>
                
                <p className={`${paragraphStyle} mt-5`}>
                    until then,
                </p>
                
                <p className={`${paragraphStyle} ${paragraphSpacing} font-bold`}>
                    siddharth
                </p>
            </section>
            </div>
            <Footer />
        </>
    );
}