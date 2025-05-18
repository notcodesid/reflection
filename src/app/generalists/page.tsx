import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
    return (
        <>
        <div className=" pt-8">
            <div className="mb-12">
                <h1 className="text-3xl font-bold mb-5">generalists in the information age</h1>
                <div className="text-sm text-gray-600 flex items-center">
                    <span>2025-01-12</span>
                    <span className="mx-2">•</span>
                    <span>6 min read</span>
                </div>
            </div>

            <section className="mt-8 pt-8">
  <p className="text-base">
    the world is changing faster than we can imagine. we're stepping into a second renaissance —a digital renaissance—where the shift is as profound as moving from books to media, mechanics to robotics, and even from earth to mars.  
  </p>

  <p className="text-base mt-2">
    this era is exciting, full of possibilities, and offers opportunities to make a difference in ways we never thought possible. but with all this change comes a big question:  
    how can i adapt to these times? how can i have an impact on the world?
  </p>
</section>

            <section className="mt-5">
  <h2 className="text-xl font-medium mb-4 text-blue-500">what is a generalist?</h2>
  <p className="text-base">
    the answer lies in understanding what the renaissance truly means. there are synonyms for it—like generalist, polymath, & scholar.  
  </p>

  <p className="text-base mt-2">
    a generalist is someone with a broad range of knowledge and skills but also deep expertise in multiple areas. they embrace diverse experiences, think divergently, and solve problems in creative ways.  
  </p>

  <p className="text-base mt-2">
    now, i wonder—what traits or habits do these generalists have to succeed in today's digital age?  
  </p>
</section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">high energy level</h2>
                <p className="text-base">
                    as a <strong>generalist</strong>, you have many interests, and the only way to pursue them all is by staying full of energy.
                </p>

                <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4 text-base">
                    <p>
                        <strong>entrepreneurs mind. athletes body. artists soul.</strong> <br />
                        - james clear
                    </p>
                </blockquote>

                <p className="text-base mt-2">
                    exercise is a great way to boost your brain, especially for learning. movement signals to the brain that something important is happening. <strong>if exercise were a drug, it would be the most powerful one ever created.</strong>
                </p>

                <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4 text-base">
                    <p>
                        <strong>in the future, the greatest division will be between those who can acquire skills and discipline their minds and those who are irrevocably distracted by all the media around them and can never focus enough to learn.</strong> <br />
                        - robert greene
                    </p>
                </blockquote>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">focus</h2>

                <p className="text-base">
                i'm a big big believer in the flow state (thanks to watching blue lock anime), where you get so immersed in something that hours fly by without you noticing. i often get into this state when coding, learning something new, or playing chess.
                </p>

                <blockquote className="border-l-4 border-gray-500 pl-4 italic my-4 text-base">it feels like play to you, but works to other.
                - naval ravikant</blockquote>
                <ul className="mt-2">
                    <li>
                    <Link 
                        href="https://www.youtube.com/watch?v=GtyWqj2ESiQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.navalmanack.com/almanack-of-naval-ravikant/find-work-that-feels-like-play
                    </Link>
                    </li>
                </ul>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">self education</h2>

                <p className="text-base">
                    if you need someone to tell you what to learn and how it works, then i think you're at severe disadvantage in the digital age.
                </p>

                <p className="text-base mt-2">
                so now a generalists have habits like:
                </p>

                <ul className="list-disc pl-8 my-4 text-base space-y-2">
                    <li>high energy level</li>
                    <li>focus</li> 
                    <li>self education</li>
                </ul>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">permissionless skills</h2>

                <p className="text-base">
                    now, what skills do generalists have? they focus on <strong>permissionless skills</strong>, meaning they don't rely on other people, money, or resources to use them in ways that provide value to others.
                </p>

                <p className="text-base mt-2">
                    for example, media and apps can be created on a computer and shared online.
                </p>

                <p className="text-base mt-2">
                    big companies like microsoft, apple, google, and meta are all built on code.
                </p>

                <div className="my-4">
                    <Link 
                        href="https://www.youtube.com/watch?v=GtyWqj2ESiQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.youtube.com/watch?v=GtyWqj2ESiQ
                    </Link>
                </div>
            </section>
            
            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">the meta-skill: writing</h2>

                <p className="text-base">
                    now, what is the one "meta-skill" everyone should learn, no matter their field?
                </p>

                <p className="text-base mt-2">
                    no, it's not coding (although coding is powerful). it's writing.
                </p>

                <p className="text-base mt-2">
                    writing helps you think clearly. if you keep everything in your head, you might miss logical connections. it's that moment when you think you understand something, but when someone asks you about it, you can't explain it clearly.
                </p>

                <div className="my-4">
                    <Link 
                        href="https://www.youtube.com/watch?v=x0vUsxhMczI&t=74s"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.youtube.com/watch?v=x0vUsxhMczI&t=74s
                    </Link>
                </div>

                <p className="text-base mt-2">
                    some time ago, i would have said reading is the best skill someone could have. but now i realize that reading is a skill like:
                </p>

                <ul className="list-disc pl-8 my-4 text-base space-y-2">
                    <li>comprehending things</li>
                    <li>understanding analogies</li>
                    <li>building mental models</li>
                    <li>context switching</li>
                    <li>connecting dots</li>
                </ul>

                <p className="text-base mt-2">
                    reading plus writing make literacy which is pretty much the craziest skills someone could have.
                </p>
            </section>

            <section className="mt-5">
                <h2 className="text-xl font-medium mb-4 text-blue-500">digital literacy - the ultimate meta skill</h2>

                <p className="text-base">
                    you might think that understanding how computers work is the ultimate skill, but it's actually just part of the puzzle. yes obviously it contains computer because with that you can build applications and software and distribute them into the web.
                </p>

                <p className="text-base mt-2">
                    it's not just about coding—it's about knowing how to use technology to bring ideas to life and share them with the world.
                </p>

                <div className="my-4">
                    <Link 
                        href="https://www.youtube.com/watch?v=NjIhmzU0Y8Y"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.youtube.com/watch?v=NjIhmzU0Y8Y
                    </Link>
                </div>

                <p className="text-base mt-5">
                    thanks for being here.
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
