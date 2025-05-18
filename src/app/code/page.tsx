import { Footer } from "@/components/layout/Footer";

export default function CodePage() {
    // Common styles to avoid repetition
    const paragraphStyle = "text-base";
    const paragraphSpacing = "mt-2";
    const sectionStyle = "pt-8  border-gray-200 mt-8";
    const headingStyle = "text-sm font-medium mb-4";

    return (
        <>
            <div>
                <div className="mb-12">
                    <h1 className="text-3xl font-bold mb-5">can you really code?</h1>
                    <div className="text-sm text-gray-600 flex items-center">
                        <span>may 10, 2025</span>
                        <span className="mx-2">•</span>
                        <span>4 min read</span>
                    </div>
                </div>

                <section className="mt-8  pt-8">
                    <p className="text-base">
                        on may 7, 2025 cursor dropped some pretty big news:
                    </p>
                    <p className="text-base mt-4">
                        honestly? it&apos;s kind of amazing.
                    </p>

                    <p className="text-base mt-2">
                        ai coding assistant, free for a whole year, right when you&apos;re just getting started.
                    </p>

                    <p className="text-base mt-2">
                        but here&apos;s the real question:
                    </p>

                    <p className="text-base mt-2">
                        are you coding? like, <em>really</em> coding?
                    </p>

                    <p className="text-base mt-2">
                        or is cursor quietly doing most of the work for you?
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">this isn&apos;t just about free stuff. it&apos;s a full-on race</h2>
                    <div>
                        <p className="text-base">
                            this move from cursor isn&apos;t random. it&apos;s strategy.
                        </p>

                        <p className="text-base mt-2">
                            that same day, openai bought windsurf, another cool coding tool, for $3 billion.
                        </p>

                        <p className="text-base mt-2">
                            $3 billion. for a code editor. wild.
                        </p>

                        <p className="text-base mt-2">
                            these companies know the next generation of developers is learning
                        </p>

                        <p className="text-base mt-2">right now
                            and they all want to be the tool that teaches you.</p>

                        <p className="text-base mt-2">
                            because if you grow up building things inside cursor or windsurf or whatever comes next
                        </p>

                        <p className="text-base mt-2">you&apos;ll probably keep using it when you&apos;re working at your first job. or your second.</p>

                        <p className="text-base mt-2">or when you&apos;re building your own thing</p>

                        <p className="text-base mt-2">
                            so giving it away now makes total sense
                            but just remember
                        </p>

                        <p className="text-base mt-2">you&apos;re right in the middle of a billion-dollar race
                        </p>

                        <p className="text-base mt-2">and your attention, your habits, your trust is what everyone&apos;s chasing
                        </p>
                    </div>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">ai can make things easier but don&apos;t let it take the wheel</h2>

                    <p className="text-base">
                    these tools are amazing
                    </p>
                    
                    <p className="text-base mt-2">
                    they save time, unblock you, and help you build fast
                    </p>
                    
                    <p className="text-base mt-2">
                    they make you feel 10x smarter, and sometimes you actually are with the right prompt
                    </p>

                    <p className="text-base mt-2">
                    a few years ago, building something like a blog or a game might&apos;ve taken weeks
                    </p>
                    
                    <p className="text-base mt-2">
                    now with cursor, you could have it done in a weekend. maybe less
                    </p>
                    
                    <p className="text-base mt-2">
                    and that&apos;s empowering
                    </p>
                    
                    <p className="text-base mt-2">
                    especially for students just getting into coding
                    </p>
                    
                    <p className="text-base mt-2">
                    but here&apos;s the quiet trade-off
                    </p>
                    
                    <p className="text-base mt-2">
                    if ai is always one step ahead, finishing your thoughts and fixing your bugs
                    </p>
                    
                    <p className="text-base mt-2">
                    how much are you actually learning?
                    </p>
                    
                    <p className="text-base mt-2">
                    what happens when you turn it off?
                    </p>
                    
                    <p className="text-base mt-2">
                    or when it gives you something that looks right but breaks everything?
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">don&apos;t automate the fun stuff</h2>

                    <p className="text-base">
                    i&apos;ve had moments where cursor gave me an answer and it worked
                    </p>
                    
                    <p className="text-base mt-2">
                    but i didn&apos;t understand it
                    </p>
                    
                    <p className="text-base mt-2">
                    and later, when something else broke, i was stuck
                    </p>
                    
                    <p className="text-base mt-2">
                    it&apos;s tempting to let the tool go on autopilot
                    </p>
                    
                    <p className="text-base mt-2">
                    write the function, fix the bug, explain the error
                    </p>
                    
                    <p className="text-base mt-2">
                    but those tiny struggles, those late-night bugs, that moment when you finally get it
                    </p>
                    
                    <p className="text-base mt-2">
                    that&apos;s where real confidence comes from
                    </p>
                    
                    <p className="text-base mt-2">
                    it&apos;s the difference between copying a recipe and learning how to cook
                    </p>
                    
                    <p className="text-base mt-2">
                    and no matter how smart ai gets, that joy of figuring something out yourself
                    </p>
                    
                    <p className="text-base mt-2">
                    nothing beats that
                    </p>
                </section>

                <section className="mt-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">use the tool, don&apos;t become the tool</h2>

                    <p className="text-base">
                    so yeah, try cursor
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    it&apos;s free, it&apos;s powerful, it&apos;ll help you build real things
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    it might even save you hours
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    but don&apos;t let it become a crutch
                    </p>
                    
                    <p className="text-base mt-2">
                    because in a few years, when you&apos;re interviewing or launching your own thing
                    </p>
                    
                    <p className="text-base mt-2">
                    you&apos;ll want that muscle memory
                    </p>
                    
                    <p className="text-base mt-2">
                    that confidence from messing up, fixing it, and actually learning
                    </p>
                    
                    <p className="text-base mt-2">
                    code with cursor
                    </p>
                    
                    <p className="text-base mt-2">
                    learn with it
                    </p>
                    
                    <p className="text-base mt-2">
                    get faster with it
                    </p>
                    
                    <p className="text-base mt-2">
                    but make time to do it the slow, confusing way sometimes
                    </p>
                    
                    <p className="text-base mt-2">
                    that&apos;s how you grow
                    </p>
                    
                    <p className="text-base mt-2">
                    that&apos;s how you get proud
                    </p>
                    
                    <p className="text-base mt-2">
                    that&apos;s how you build stuff that lasts with your own smarts, not someone else&apos;s shortcuts
                    </p>
                </section>

                <section className="mt-5 mb-5">
                    <h2 className="text-xl font-medium mb-4 text-blue-500">conclusion</h2>

                    <p className="text-base">
                    you&apos;ve got a whole year
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    make cool stuff
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    mess up
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    fix it
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    and most of all, enjoy the ride
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    this is your time to learn how to really build
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    you&apos;ve got this
                    </p>
                </section>

                <section className="mt-5">
                    <p className="text-base">
                        until then,
                    </p>

                    <p className="text-base font-bold">
                        sidharth
                    </p>
                </section>
            </div>

            <Footer />

        </>
    );
}
