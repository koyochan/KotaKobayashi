"use client"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react'

export function Profile() {
  return (
    <section id="profile" className="flex flex-col md:flex-row items-center justify-center py-16 px-4">
      <div className="mb-8 md:mr-8">
        <Image src="/assets/icon.png" alt="Kota profile picture" width={200} height={200} className="rounded-full" />
      </div>
      <div className="text-center md:text-left">
        <p className="text-lg mb-2">Hello, I'm</p>
        <h1 className="text-4xl font-bold mb-2">kota san</h1>
        <p className="text-xl mb-4">student of 42Tokyo</p>
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
          <Button onClick={() => window.location.href = '/#contact'}>
            Contact Info
          </Button>
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
          <Button variant="ghost" size="icon" onClick={() => window.open('https://www.instagram.com/kotachan0920/', '_blank')}>
            <Instagram className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => window.open('https://twitter.com/huhkoyo', '_blank')}>
            <Twitter className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => window.open('https://www.linkedin.com/in/kotachan/', '_blank')}>
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => window.open('https://github.com/koyochan/', '_blank')}>
            <Github className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}