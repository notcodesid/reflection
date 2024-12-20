'use client'

import { Menu, Clock, Share2, MessageSquare, Star, MoreHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function BlogAppBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center gap-4 px-4">
        <Button variant="ghost" size="icon" className="shrink-0">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded-sm bg-primary/20" />
          <span className="font-semibold hidden sm:inline-block">The Perpetual Student</span>
        </div>

        <Breadcrumb className="hidden md:flex">
          <BreadcrumbItem>
            <BreadcrumbLink href="/foundering">Foundering Podcast</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/foundering/episode-1" className="truncate max-w-[300px]">
              Episode 1: The Most Silicon Valley...
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <div className="ml-auto flex items-center gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Edited 21h ago</span>
          </div>

          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Share2 className="h-4 w-4" />
            <span className="sr-only">Share</span>
          </Button>

          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <MessageSquare className="h-4 w-4" />
            <span className="sr-only">Comments</span>
          </Button>

          <Button variant="ghost" size="icon">
            <Star className="h-4 w-4" />
            <span className="sr-only">Star</span>
          </Button>

          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More options</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

