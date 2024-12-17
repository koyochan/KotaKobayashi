"use client"

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold">tautisan</div>
      <div className="hidden md:flex space-x-4">
        <Button variant="ghost" asChild>
          <Link href="#about">About</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#experience">Experience</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="/works">Works</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link href="#contact">Contact</Link>
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="outline" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col space-y-4 mt-4">
            <Button variant="ghost" asChild>
              <Link href="#about">About</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#experience">Experience</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="/works">Works</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}