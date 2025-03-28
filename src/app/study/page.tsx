import Link from "next/link";
import { Footer } from "@/components/layout/Footer";


export default function Home() {
    return (
        <>
        <div className="reflection-container pt-8">
            <div className="my-[4rem]">
                <section className="hidden md:block pt-[3rem] pb-[2rem]">
                    <h1 className="md:text-7xl font-medium font-serif">how to Study 4 hours every day </h1>
                </section>

                <section className="md:hidden">
                    <h1 className="text-4xl font-normal font-serif mb-6">effective studying</h1>
                </section>

                <section className="mb-4 flex items-center text-sm text-gray-500 font-sans">
                    <span>2024-10-05</span>
                    <span className="mx-2">•</span>
                    <span>4 min read</span>
                </section>
            </div>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <p className="text-lg md:text-xl font-serif">
                    i randomly came across a video where someone talked about what they've done in just one year:
                </p>
                
                <ul className="list-disc pl-8 my-4 text-lg md:text-xl font-serif space-y-2">
                    <li>math</li>
                    <li>computer science</li>
                    <li>data engineering</li>
                    <li>ai/ml</li>
                </ul>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    as someone who's seen friends grind through four-year degrees for the same, i was skeptical. how?
                </p>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    here are some tips they shared about studying 4 hours a day, every day:
                </p>
                
                <div className=" my-6 ">
                    <Link 
                        href="https://www.youtube.com/watch?v=kLv2ntXJFnA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.youtube.com/watch?v=kLv2ntXJFnA
                    </Link>
                </div>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">fewer hobbies</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    we all have hobbies like reading novels, gaming, or binge-watching shows. keep the ones you truly enjoy, but cut out the half-hearted ones. you don't need to sacrifice all your hobbies, just the ones you're not very interested in.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">buy time, not just coffee</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    time is your most limited resource. if you want to learn something new, invest in good courses or cohorts where resources are structured. or, if you have household chores, pay someone else to do them.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">multitasking intelligence</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    avoid multitasking, but pair low-brain tasks with learning. for example, listen to lectures while walking, then practice what you've learned afterward.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">energy {'>'} hours</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    high energy lets you pursue your interests fully. exercise is a great way to boost your brain. movement signals to the brain that something important is happening. if exercise were a drug, it would be the most powerful one ever created.
                </p>
                
                <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4 font-serif text-lg md:text-xl">
                    <p>entrepreneurs mind. athletes body. artists soul.</p>
                </blockquote>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">change environment</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    working in one place all day is boring. try working from a park, cafe, or balcony. new surroundings act like a "reset button" for your focus.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">sleep as your brain depends on it (it does)</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    i'm not the best person to advise on sleep (my schedule is messed up), but a good sleep schedule keeps you fresh. even a short nap during the day can help.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">focus on one thing</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    don't try to learn ai/ml, web3, and development all at once. focus on one thing at a time, especially if you have limited hours to study.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">default actively</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    use small pockets of time wisely. instead of scrolling social media, spend 5-10 minutes reading something worthwhile.
                </p>
            </section>

            <section className="border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">take time off</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    if you're working 24/7, you'll burn out. spend time with loved ones and have fun. remember: "it's just part of your life, not your whole life."
                </p>
                
                <p className="text-lg md:text-xl font-serif mt-8">
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
