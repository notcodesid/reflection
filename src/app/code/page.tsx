import { Footer } from "@/components/layout/Footer";

export default function Home() {
    // Common styles to avoid repetition
    const paragraphStyle = "text-lg md:text-xl ";
    const paragraphSpacing = "mt-1";
    const sectionStyle = "pt-8";
    const headingStyle = " text-2xl mb-6";

    return (
        <>
            <div className="reflection-container pt-8">
                <section className="mb-16 hidden md:block pt-[3rem] pb-[2rem]">
                    <h1 className="md:text-7xl font-medium  mb-12">
                        can you really code ?
                    </h1>

                    <section className="mb-4 flex items-center text-sm text-gray-500 ">
                        <span>2025-05-10</span>
                        <span className="mx-2">•</span>
                        <span>4 min read</span>
                    </section>
                </section>

                <section className="mb-8 md:hidden">
                    <h1 className="text-4xl font-normal  mb-6">can you really code ?</h1>
                </section>

                <section className="border-t border-gray-300 pt-8">
                    <p className={paragraphStyle}>
                        on may 7, 2025 cursor dropped some pretty big news:
                    </p>

                    <blockquote className="twitter-tweet" data-media-max-width="500"><p lang="en" dir="ltr">Cursor is now free for students. Enjoy!</p>&mdash; Cursor (@cursor_ai) <a href="https://twitter.com/cursor_ai/status/1919846420234031146?ref_src=twsrc%5Etfw">May 7, 2025</a></blockquote>
                    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>

                    <p className={`${paragraphStyle} mt-4`}>
                        honestly? it&apos;s kind of amazing.
                    </p>

                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                        ai coding assistant, free for a whole year, right when you&apos;re just getting started.
                    </p>

                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                        but here&apos;s the real question:
                    </p>

                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                        are you coding? like, <em>really</em> coding?
                    </p>

                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                        or is cursor quietly doing most of the work for you?
                    </p>
                </section>

                <section className={sectionStyle}>
                    <h2 className={headingStyle}>this isn&apos;t just about free stuff. it&apos;s a full-on race</h2>
                    <div className={paragraphStyle}>
                        <p className={paragraphStyle}>
                            this move from cursor isn&apos;t random. it&apos;s strategy.
                        </p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                            that same day, openai bought windsurf, another cool coding tool, for $3 billion.
                        </p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                            $3 billion. for a code editor. wild.
                        </p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                            these companies know the next generation of developers is learning
                        </p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>right now
                            and they all want to be the tool that teaches you.</p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                            because if you grow up building things inside cursor or windsurf or whatever comes next
                        </p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>you&apos;ll probably keep using it when you&apos;re working at your first job. or your second.</p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>or when you&apos;re building your own thing</p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                            so giving it away now makes total sense
                            but just remember
                        </p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>you&apos;re right in the middle of a billion-dollar race
                        </p>

                        <p className={`${paragraphStyle} ${paragraphSpacing}`}>   and your attention,                   your habits, your trust is what everyone&apos;s chasing
                        </p>
                    </div>
                </section>

                <section className={sectionStyle}>
                    <h2 className={headingStyle}>ai can make things easier but don&apos;t let it take the wheel</h2>

                    <p className={paragraphStyle}>
                    these tools are amazing
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    they save time, unblock you, and help you build fast
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    they make you feel 10x smarter, and sometimes you actually are with the right prompt
                    </p>

                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    a few years ago, building something like a blog or a game might&apos;ve taken weeks
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    now with cursor, you could have it done in a weekend. maybe less
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    and that&apos;s empowering
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    especially for students just getting into coding
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    but here&apos;s the quiet trade-off
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    if ai is always one step ahead, finishing your thoughts and fixing your bugs
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    how much are you actually learning?
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    what happens when you turn it off?
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    or when it gives you something that looks right but breaks everything?
                    </p>
                </section>

                <section className={sectionStyle}>
                    <h2 className={headingStyle}>don&apos;t automate the fun stuff</h2>

                    <p className={paragraphStyle}>
                    i&apos;ve had moments where cursor gave me an answer and it worked
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    but i didn&apos;t understand it
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    and later, when something else broke, i was stuck
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    it&apos;s tempting to let the tool go on autopilot
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    write the function, fix the bug, explain the error
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    but those tiny struggles, those late-night bugs, that moment when you finally get it
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    that&apos;s where real confidence comes from
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    it&apos;s the difference between copying a recipe and learning how to cook
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    and no matter how smart ai gets, that joy of figuring something out yourself
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    nothing beats that
                    </p>
                </section>

                <section className={sectionStyle}>
                    <h2 className={headingStyle}>use the tool, don&apos;t become the tool</h2>

                    <p className={paragraphStyle}>
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
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    because in a few years, when you&apos;re interviewing or launching your own thing
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    you&apos;ll want that muscle memory
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    that confidence from messing up, fixing it, and actually learning
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    code with cursor
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    learn with it
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    get faster with it
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    but make time to do it the slow, confusing way sometimes
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    that&apos;s how you grow
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    that&apos;s how you get proud
                    </p>
                    
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                    that&apos;s how you build stuff that lasts with your own smarts, not someone else&apos;s shortcuts
                    </p>
                </section>

                <section className={`${sectionStyle} mb-8`}>
                    <h2 className={headingStyle}>conclusion</h2>

                    <p className={paragraphStyle}>
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

                <section>
                    <p className={`${paragraphStyle} ${paragraphSpacing}`}>
                        until then,
                    </p>

                    <p className={`${paragraphStyle} ${paragraphSpacing} font-bold`}>
                        sidharth
                    </p>
                </section>
            </div>

            <Footer />

        </>
    );
}
