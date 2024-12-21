"use client";

import { ArrowLeft, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function BlogAppBar() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <Button
          variant="ghost"
          size="icon"
          className="shrink-0"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="sr-only">Back</span>
        </Button>
        <div className="flex items-center gap-2">
          <Image
            src="https://pbs.twimg.com/profile_images/1801972870756925440/i5Hk08rP_400x400.jpg"
            alt="Logo"
            width={32}
            height={32}
            className="rounded"
          />

          <span className="font-semibold hidden sm:inline-block">
            Awakenings
          </span>
        </div>

        <div className="hidden md:flex items-center text-sm text-muted-foreground">
          <Link
            href="/blogs"
            className="hover:text-foreground transition-colors"
          >
            Blogs
          </Link>
          <p className="mx-3">/</p>
          <Link
            href="/foundering/episode-1"
            className="hover:text-foreground transition-colors truncate max-w-[300px]"
          >
            The Most Silicon Valley...
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Created at Dec 20, 2024</span>
          </div>

          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
