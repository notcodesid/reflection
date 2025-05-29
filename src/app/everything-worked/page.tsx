import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
    <div className=" pt-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-5">everything worked - except me</h1>
        <div className="text-sm flex items-center">
          <span>2025-05-29</span>
          <span className="mx-2">•</span>
          <span>5 min read</span>
        </div>
      </div>

      <section className="mt-8 pt-3">
        <p className="text-base">
          from a long time, i was avoiding writing this, probably because i was too afraid to.
          but in the last 3–4 days, something really big happened.
          let me tell the story from the start…
        </p>

        <p className="text-base mt-3">
          i was building an app called lockin, which is an accountability app that helps people stay accountable to their habits. simple as that.
        </p>

        <p className="text-base mt-3">
          but for about a month, i was also talking about a memecoin with a engineer.
          it all felt casual. i thought it was just a simple coin experiment.
          i had no idea how much money i could actually make from it.
        </p>

        <p className="text-base mt-3">
          until 3 days ago when i suddenly made a significant amount of money.
          i was so happy. i thought,
        </p>

        <p className="text-base mt-3 italic">
          "wow, this pump-and-dump stuff actually works. i can make good money here."
        </p>

        <p className="text-base mt-3">
          until yesterday…
        </p>

        <p className="text-base mt-3">
          i had a conversation with a friend, who knows more about crypto than me.
          i told him the whole story and he straight up showed me the comments people were posting under my tweets.    they were calling me a scammer.
          that hit hard.
          because i didn't intend to scam anyone.
        </p>

        <p className="text-base mt-3 ">
          so what really happened?
        </p>

        <p className="text-base mt-3">
          i had two wallets:
        </p>

        <ul className="list-disc pl-5 my-2 text-base space-y-2">
          <li>one was the dev wallet where i wasn't supposed to sell any tokens.</li>
          <li>the other was the public wallet, where i could sell freely.</li>
        </ul>

        <p className="text-base mt-3">
          i honestly didn't know the difference at first.
          i talked to my friend another friend, who also knows about crypto more than me. but even he didn't know i had two wallets.
        </p>

        <p className="text-base mt-3">
          i ended up selling from the public wallet, a decent amount of tokens.
          at that point, the token market cap was nearly $400k, and i was feeling pretty damn good about that.
        </p>

        <p className="text-base mt-3">
          then people started showing interest.
          i started getting a lot of dms, people asking to be mods, or help with the community, or manage things.
          i ignored most of them, thinking it wasn't that serious.
          some of those people were probably legit.
          but i didn't respond. i didn't make a proper channel, or even a discord server.
        </p>

        <p className="text-base mt-3">
          and that was my mistake.
          a big one.
        </p>

        <p className="text-base mt-3">
          then, when the market started dipping…
          i panicked.
          and i sold the rest of my tokens from the dev wallet.
          tokens i should've never touched.
        </p>

        <p className="text-base">
          i sold a considerable amount of tokens.
          and that's when people really started calling me out.
        </p>

        <p className="text-base mt-3">
         
        </p>

        <p className="text-base">
        the market crashed.
        and people said i rugged them.
          at first, i didn't care.
          but when i talked to a friend again, he told me bluntly: 
          "you made money because others lost."

        </p>

        <p className="text-base">
        </p>

        <p className="text-base">
          and that really got to me.
        </p>

        <p className="text-base mt-3">
          i've been avoiding twitter for the past 3 days.
          no tweets, no replies.
          just watching movies, which feels depressing doing everything except coding or showing up online.
        </p>

        <p className="text-base mt-3">
          i haven't told anyone.
          because every time i think about it, i wonder:
        </p>

        <p className="text-base">
          "would they even be okay enjoying money that came at someone else's loss?"
        </p>

        <p className="text-base">
          that's not how i ever wanted to make money.
          this is a positive sum game and i never wanted to be on the wrong side of it.
        </p>

        <p className="text-base mt-3">
          the hardest part is…
          i didn't know.
          i wasn't aware.
          and now i can't even digest the fact that the money i made was at the cost of other people losing theirs.
        </p>

        <p className="text-base">
          i tried sitting in front of my laptop, opening the code editor
          but i couldn't write anything.
          it feels like i don't belong.
          like i lost the credibility i built over a year on twitter.
        </p>

        <p className="text-base mt-3">
          i'm stuck with this question:
          what now?
        </p>

        <p className="text-base">
          one part of me says:
        </p>

        <p className="text-base">
          just keep going. tweet. code. show up. people will forget.
        </p>

        <p className="text-base">
          the other part says:
        </p>

        <p className="text-base">
          take time off. let it pass.
        </p>

        <p className="text-base mt-3">
          i know this is just the internet.
          but i also know i didn't mean to loss anyone.
          and somehow, i still did.
        </p>

        <p className="text-base">
          so yeah…
          now what?
        </p>
      </section>
    </div>

    <Footer />
    
    </>
  );
}