import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import XLogo from "@/public/logo-white.png"

export default function Appbar() {
    return (

        <div className="flex justify-between">
            <Link href={"/"} >
         

            <nav className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2">
                    <Image
                        src="https://pbs.twimg.com/profile_images/1801972870756925440/i5Hk08rP_400x400.jpg"
                        alt="Logo"
                        width={32}
                        height={32}
                        className="rounded"
                    />
                    <span className="text-lg font-medium">Awakenings - Siddharth </span>
                </div>
            </nav>

            </Link>

            <div className="p-5">

                <div className="flex gap-2 justify-center">
                    <Link href="https://x.com/notcodesid" className="bg-black rounded-full p-2 hover:opacity-80">
                        <Image
                            src={XLogo}
                            alt="Profile"
                            width={20}
                            height={20}
                            className="mx-auto rounded-full"
                            priority
                        />
                        <span className="sr-only">X (formerly Twitter)</span>
                    </Link>
                    <Link href="https://github.com/notcodesid" className="bg-black rounded-full p-2 hover:opacity-80">
                        <Github className="h-5 w-5 text-white" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://www.linkedin.com/in/sidharthh-pandro/" className="bg-black rounded-full p-2 hover:opacity-80">
                        <Linkedin className="h-5 w-5 text-white" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}