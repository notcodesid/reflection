"use client"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Footer } from "@/components/layout/Footer";
// Component for copyable code blocks
const CopyableCode = ({ code }: { code: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        
        // Reset the copied state after 2 seconds
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div className="relative">
            <pre className="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto">
                <code>{code}</code>
            </pre>
            <button 
                onClick={handleCopy}
                className={`absolute top-2 right-2 ${copied ? 'bg-green-100 text-green-500' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'} p-1 rounded text-xs transition-colors duration-200`}
            >
                {copied ? 'copied' : 'copy'}
            </button>
        </div>
    );
};

export default function Home() {
    return (
        <>
        <div className="reflection-container pt-8">
            <div className="my-[4rem]">
                <section className="hidden md:block pt-[3rem] pb-[2rem]">
                    <h1 className="md:text-7xl font-medium font-serif">serverless backend</h1>
                </section>

                <section className="md:hidden">
                    <h1 className="text-4xl font-normal font-serif mb-6">serverless backend</h1>
                </section>

                <section className="mb-4 flex items-center text-sm text-gray-500 font-sans">
                    <span>2024-09-30</span>
                    <span className="mx-2">•</span>
                    <span>5 min read</span>
                </section>
            </div>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">backend</h2>
                
                <p className="text-lg md:text-xl font-serif">
                    what is backend?
                </p>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    backend refers to the server-side processes that manage the logic, database interactions, and overall functionality of web applications, which users do not see. you might have used express to create the backend server. and the way the server runs is usually is <code className="bg-red-300 px-1 text-sm">node index.js</code> which start a process on a certain port (8000 for example)
                </p>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    you have to deploy the backend on the server so other people can access it and there are few ways to deploy your application on the internet.
                </p>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    there are some cloud computing platform which can let you rent a virtual machine and deploy your application (you can run on your laptop as well, but it can't run 24 hours). some cloud computing platform:
                </p>
                
                <ul className="list-disc pl-8 my-4 text-lg md:text-xl font-serif space-y-2">
                    <li>aws</li>
                    <li>azure</li>
                    <li>cloudflare</li>
                </ul>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    there are few things you need to take care of it along with deploying your application on the cloud.
                </p>
                
                <ul className="list-disc pl-8 my-4 text-lg md:text-xl font-serif space-y-2">
                    <li>taking care of how and when to scale</li>
                    <li>base cost (even if on one is visiting the app)</li>
                </ul>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">serverless backend</h2>
                
                <div className="my-6">
                    <Image
                        src="https://img.notionusercontent.com/s3/prod-files-secure%2Fc3841a92-a773-4ae2-b373-52b87f954981%2F199d28ea-eae2-4e37-856d-0ab1c1ca460f%2Fimage.png/size/w=2000?exp=1743229717&sig=FfP2P6Kx8frptVMnfBI4oLky1FrUicx9Ov1XuAIYgYg&id=17bdb9bb-546c-803a-8de0-c77ba4d75c01&table=block&userId=4028c792-25be-4c3c-a45e-0d490de1b6e6"
                        alt="Serverless Architecture"
                        width={800}
                        height={500}
                        className="w-full rounded-md"
                    />
                </div>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    it is similar like code and push the github vercel automatically deploy the application on the internet.
                </p>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    we just have to write the backend code and run the command the app will automatically deploy, auto scale and can also charge per request (better than paying for virtual machine)
                </p>
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    but there are few problems with that like it's become more expensive at scale and cold start problem.
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">serverless providers</h2>
                
                <ul className="list-disc pl-8 my-4 text-lg md:text-xl font-serif space-y-2">
                    <li>aws lambda</li>
                    <li>google cloud function</li>
                    <li>cloudflare worker (we are going this to deploy our app because no credit card required to deploy one app)</li>
                </ul>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">cloudflare worker setup</h2>
                
                <div className="flex my-6">
                    <p className="font-medium mb-2">sign up on :</p>
                    <Link 
                        href="https://www.cloudflare.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.cloudflare.com/
                    </Link>
                </div>
                
                <div className="bg-yellow-50 p-4 my-6 border-l-4 border-yellow-400">
                    <p className="font-medium mb-2">some of resources to learn and understand how cloudflare worker works?</p>
                    <div className="space-y-2">
                        <div>
                            <Link 
                                href="https://www.youtube.com/watch?v=H7Qe96fqg1M"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                https://www.youtube.com/watch?v=H7Qe96fqg1M
                            </Link>
                        </div>
                        <div>
                            <Link 
                                href="https://developers.cloudflare.com/workers/reference/how-workers-works/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                https://developers.cloudflare.com/workers/reference/how-workers-works/
                            </Link>
                        </div>
                    </div>
                </div>
                
                <p className="text-lg md:text-xl font-serif font-bold">
                    cloudflare workers don't use the node.js runtime. they have created their own runtime.
                </p>
                
                <div className="ml-4 my-4">
                    <p className="text-lg md:text-xl font-serif font-medium">node.js runtime?</p>
                    <p className="text-lg md:text-xl font-serif mt-2">
                        node.js is a runtime environment that allows javascript to be executed on the your local machine. it is built on the v8 javascript engine from chrome, which compiles javascript into machine code.
                    </p>
                </div>
                
                <div className="my-4">
                    <Link 
                        href="https://www.perplexity.ai/search/cloudflare-workers-dont-use-th-DDU7e_8GRyOwlFFQ3pptKA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://www.perplexity.ai/search/cloudflare-workers-dont-use-th-DDU7e_8GRyOwlFFQ3pptKA
                    </Link>
                </div>
                
                <div className="ml-4 border-gray-300 pl-4 my-4">
                    <p className="text-lg md:text-xl font-serif">
                        try creating a test worker from the ui (common worker examples) and try hitting the url at which it is deployed
                    </p>
                    
                    <div className="my-6">
                        <Image
                            src="http://img.notionusercontent.com/s3/prod-files-secure%2Fc3841a92-a773-4ae2-b373-52b87f954981%2Ffd4edd6d-008c-4102-b674-c29b8c0f5042%2Fimage.png/size/w=2000?exp=1743229957&sig=kolUlpzyVGxUq4apycb--miTYrWKQgcV0nukaLrmbp4&id=17bdb9bb-546c-80fd-8e05-c48147e2d537&table=block&userId=4028c792-25be-4c3c-a45e-0d490de1b6e6"
                            alt="Cloudflare Worker Creation"
                            width={300}
                            height={300}
                            className="w-full rounded-md"
                        />
                    </div>
                    
                    <Link 
                        href="https://dash.cloudflare.com/78a4b68097082fdbfdba1f6506ee93b8/workers-and-pages/create"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://dash.cloudflare.com/78a4b68097082fdbfdba1f6506ee93b8/workers-and-pages/create
                    </Link>
                </div>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">initializing a worker</h2>
                
                <p className="text-lg md:text-xl font-serif">initialize a worker</p>
                
                <CopyableCode code={`npm create cloudflare -- serverless-backend

// Select no for Do you want to deploy your application`} />
                
                <div className="my-6">
                    <Image
                        src="https://img.notionusercontent.com/s3/prod-files-secure%2Fc3841a92-a773-4ae2-b373-52b87f954981%2Fc5422c46-b2e2-4528-8319-7d8101498367%2Fimage.png/size/w=2000?exp=1743230096&sig=GzomK2EF_4dU4LKdlyxYD4oqCAdKZ37WbanGc1ohqs0&id=17bdb9bb-546c-8080-a483-c71754ae6dfb&table=block&userId=4028c792-25be-4c3c-a45e-0d490de1b6e6"
                        alt="Worker Initialization"
                        width={800}
                        height={500}
                        className="w-full rounded-md"
                    />
                </div>
                
                <p className="text-lg md:text-xl font-serif mt-4">start the worker locally</p>
                
                <CopyableCode code="npm run dev" />
                
                <p className="text-lg md:text-xl font-serif mt-4">basic server (try to write you own code)</p>
                
                <CopyableCode code={`import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello from serverless backend!')
})

export default app`} />
                
                <p className="text-lg md:text-xl font-serif mt-4">
                    or try to clone/download this repo <Link 
                        href="https://github.com/notcodesid/serverless-backend"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                    >
                        https://github.com/notcodesid/serverless-backend
                    </Link>
                </p>
            </section>

            <section className="mb-16 border-t border-gray-300 pt-8">
                <h2 className="text-sm font-sans tracking-wide mb-6">deploy your server</h2>
                
                <p className="text-lg md:text-xl font-serif">login to cloudflare via the <code className="bg-red-300 px-1 text-sm">wrangler cli</code></p>
                
                <CopyableCode code="npx wrangler login" />
                
                <p className="text-lg md:text-xl font-serif mt-4">deploy your application</p>
                
                <CopyableCode code="npm run deploy" />
                
                <p className="text-lg md:text-xl font-serif mt-4">that's it. you've deployed the application on the server.</p>
                
                <div className="bg-yellow-50 p-4 my-6 border-l-4 border-yellow-400">
                    <p className="font-medium mb-2">
                        for notes details check harkirat notes 
                        <Link 
                            href="https://projects.100xdevs.com/tracks/eooSv7lnuwBO6wl9YA5w/serverless-1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline ml-1"
                        >
                            https://projects.100xdevs.com/tracks/eooSv7lnuwBO6wl9YA5w/serverless-1
                        </Link>
                    </p>
                </div>
                
                <p className="text-lg md:text-xl font-serif mt-8">
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
