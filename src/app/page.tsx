"use client";

import { Navbar } from '@/components/navbar'
import { Profile } from '@/components/profile'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}

