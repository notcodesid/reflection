import Link from "next/link";
import { Footer } from "@/components/layout/Footer";


export default function Home() {
    return (
        <>
        <div className="pt-8">
            <div className="mb-12">
                <h1 className="text-3xl font-bold mb-5">how to study 4 hours every day</h1>
                <div className="text-sm text-gray-600 flex items-center">
                    <span>2024-10-05</span>
                    <span className="mx-2">•</span>
                    <span>4 min read</span>
                </div>
            </div>

            <section className="mt-8 pt-8">
                <p className="text-base">
                    i randomly came across a video where someone talked about what they've done in just one year:
                </p>
                
                <ul className="list-disc pl-8 my-4 text-base space-y-2">
                    <li>math</li>
                    <li>computer science</li>
                    <li>data engineering</li>
                    <li>ai/ml</li>
                </ul>
                
                <p className="text-base mt-2">
                    as someone who's seen friends grind through four-year degrees for the same, i was skeptical. how?
                </p>
                
                <p className="text-base mt-2">
                    here are some tips they shared about studying 4 hours a day, every day:
                </p>
                
                <div className="my-6">
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

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">fewer hobbies</h2>
                
                <p className="text-base">
                    we all have hobbies like reading novels, gaming, or binge-watching shows. keep the ones you truly enjoy, but cut out the half-hearted ones. you don't need to sacrifice all your hobbies, just the ones you're not very interested in.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">buy time, not just coffee</h2>
                
                <p className="text-base">
                    time is your most limited resource. if you want to learn something new, invest in good courses or cohorts where resources are structured. or, if you have household chores, pay someone else to do them.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">multitasking intelligence</h2>
                
                <p className="text-base">
                    avoid multitasking, but pair low-brain tasks with learning. for example, listen to lectures while walking, then practice what you've learned afterward.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">energy {'>'} hours</h2>
                
                <p className="text-base">
                    high energy lets you pursue your interests fully. exercise is a great way to boost your brain. movement signals to the brain that something important is happening. if exercise were a drug, it would be the most powerful one ever created.
                </p>
                
                <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4 text-base">
                    <p>entrepreneurs mind. athletes body. artists soul.</p>
                </blockquote>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">change environment</h2>
                
                <p className="text-base">
                    working in one place all day is boring. try working from a park, cafe, or balcony. new surroundings act like a "reset button" for your focus.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">sleep as your brain depends on it</h2>
                
                <p className="text-base">
                    i'm not the best person to advise on sleep (my schedule is messed up), but a good sleep schedule keeps you fresh. even a short nap during the day can help.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">focus on one thing</h2>
                
                <p className="text-base">
                    don't try to learn ai/ml, web3, and development all at once. focus on one thing at a time, especially if you have limited hours to study.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">default actively</h2>
                
                <p className="text-base">
                    use small pockets of time wisely. instead of scrolling social media, spend 5-10 minutes reading something worthwhile.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">take time off</h2>
                
                <p className="text-base">
                    if you're working 24/7, you'll burn out. spend time with loved ones and have fun. remember: "it's just part of your life, not your whole life."
                </p>
                
                <p className="text-base mt-8">
                    that's all for now. thanks for being here.
                </p>
                
                <p className="text-base mt-2">
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
