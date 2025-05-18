import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";
export default function Home() {
    return (
        <>
            <div className="pt-8">
                <div className="mb-12">
                    <h1 className="text-3xl font-bold mb-5">how to get hire</h1>
                    <div className="text-sm text-gray-600 flex items-center">
                        <span>2024-09-23</span>
                        <span className="mx-2">•</span>
                        <span>3 min read</span>
                    </div>
                </div>

                <section className="mt-8 pt-8">
                    <p className="text-base">
                        so, i was reading this blog by sam altman, how to hire, and it got me thinking: as developers, we really need to understand what founders want from us.
                    </p>

                    <p className="text-base mt-2">
                        here's what i picked up, and honestly, it's pretty straightforward!
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">take your time to find the right job</h2>

                    <p className="text-base">
                        founders spend a lot of time hiring, so we should do the same when we're job hunting.
                    </p>

                    <p className="text-base mt-2">
                        it's not just about doing one interview and calling it a day.
                    </p>

                    <p className="text-base mt-2">
                        spend time getting to know the company, what they do, and how you fit in.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">get involved early</h2>

                    <p className="text-base">
                        don't just show up and use big, fancy words.
                    </p>

                    <p className="text-base mt-2">
                        show that you're ready to dive in and actually work on things.
                    </p>

                    <p className="text-base mt-2">
                        be real.
                    </p>

                    <p className="text-base mt-2">
                        founders know what's up, and they appreciate people who are hands-on and practical.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">be smart, but also get stuff done</h2>

                    <p className="text-base">
                        it's not enough to just be smart.
                    </p>

                    <p className="text-base mt-2">
                        you need to prove you can get results.
                    </p>

                    <p className="text-base mt-2">
                        show examples of your best work, explain what you've done, and how you solved problems.
                    </p>

                    <p className="text-base mt-2">
                        founders love people who can adapt and make things happen.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">prepare for the job, not just the interview</h2>

                    <p className="text-base">
                        founders aren't just looking for someone who can answer interview questions.
                    </p>

                    <p className="text-base mt-2">
                        they want to see that you can actually do the job.
                    </p>

                    <p className="text-base mt-2">
                        focus on showing what you can bring to the table in real-life situations, not just theoretical answers.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">do a trial project</h2>

                    <p className="text-base">
                        this is a big one.
                    </p>

                    <p className="text-base mt-2">
                        if you can, offer to do a small project or task before getting hired.
                    </p>

                    <p className="text-base mt-2">
                        it gives the founder a chance to see you in action, and it gives you a feel for what working at the company will be like.
                    </p>

                    <p className="text-base mt-2">
                        plus, it's way better than just talking in interviews.
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">conclusion</h2>
                    
                    <p className="text-base">
                        and that's it!
                    </p>

                    <p className="text-base mt-2">
                        i got this idea after reading sam's blog, and it really made things clear.
                    </p>

                    <p className="text-base mt-2">
                        getting hired isn't just about the interview, it's about showing you're the right fit from day one.
                    </p>

                    <p className="text-base mt-8">
                        until then,
                    </p>

                    <p className="text-base mt-2 font-bold">
                        siddharth
                    </p>
                </section>
            </div>

            <Footer />

        </>
    );
}
