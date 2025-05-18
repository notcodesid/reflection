import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
export default function Home() {
    return (
        <>
            <div className="reflection-container pt-8">
                <div className="my-[4rem]">
                    <section className="hidden md:block pt-[3rem] pb-[2rem]">
                        <h1 className="md:text-7xl font-medium  ">how to get hire</h1>
                    </section>

                    <section className="mb-16 md:hidden">
                        <h1 className="text-4xl font-normal  mb-6">how to get hire</h1>
                    </section>

                    <section className="mb-4 flex items-center text-sm text-gray-500 ">
                        <span>2024-09-23</span>
                        <span className="mx-2">•</span>
                        <span>3 min read</span>
                    </section>
                </div>

                <section className="mb-6 border-t border-gray-300 pt-8">
                    <p className="text-lg md:text-xl ">
                        so, i was reading this blog by sam altman, how to hire, and it got me thinking: as developers, we really need to understand what founders want from us.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        here's what i picked up, and honestly, it's pretty straightforward!
                    </p>
                </section>

                <section className=" mb-16 border-gray-300 pt-8">
                    <h2 className="text-sm  tracking-wide mb-6">take your time to find the right job</h2>

                    <p className="text-lg md:text-xl ">
                        founders spend a lot of time hiring, so we should do the same when we're job hunting.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        it's not just about doing one interview and calling it a day.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        spend time getting to know the company, what they do, and how you fit in.
                    </p>
                </section>

                <section className="mb-16 border-t border-gray-300 pt-8">
                    <h2 className="text-sm  tracking-wide mb-6">get involved early</h2>

                    <p className="text-lg md:text-xl ">
                        don't just show up and use big, fancy words.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        show that you're ready to dive in and actually work on things.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        be real.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        founders know what's up, and they appreciate people who are hands-on and practical.
                    </p>
                </section>

                <section className="mb-16 border-t border-gray-300 pt-8">
                    <h2 className="text-sm  tracking-wide mb-6">be smart, but also get stuff done</h2>

                    <p className="text-lg md:text-xl ">
                        it's not enough to just be smart.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        you need to prove you can get results.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        show examples of your best work, explain what you've done, and how you solved problems.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        founders love people who can adapt and make things happen.
                    </p>
                </section>

                <section className="mb-16 border-t border-gray-300 pt-8">
                    <h2 className="text-sm  tracking-wide mb-6">prepare for the job, not just the interview</h2>

                    <p className="text-lg md:text-xl ">
                        founders aren't just looking for someone who can answer interview questions.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        they want to see that you can actually do the job.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        focus on showing what you can bring to the table in real-life situations, not just theoretical answers.
                    </p>
                </section>

                <section className="mb-16 border-t border-gray-300 pt-8">
                    <h2 className="text-sm  tracking-wide mb-6">do a trial project</h2>

                    <p className="text-lg md:text-xl ">
                        this is a big one.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        if you can, offer to do a small project or task before getting hired.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        it gives the founder a chance to see you in action, and it gives you a feel for what working at the company will be like.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        plus, it's way better than just talking in interviews.
                    </p>
                </section>

                <section className=" border-gray-300 pt-8">
                    <p className="text-lg md:text-xl ">
                        and that's it!
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        i got this idea after reading sam's blog, and it really made things clear.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
                        getting hired isn't just about the interview, it's about showing you're the right fit from day one.
                    </p>

                    <p className="text-lg md:text-xl  mt-4">
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
