import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

export function Profile() {
  return (
    <section id="profile" className="flex flex-col md:flex-row items-center justify-center py-16 px-4">
      <div className="mb-8 md:mr-8">
        <Image src="/assets/icon.png" alt="Kota profile picture" width={200} height={200} className="rounded-full" />
      </div>
      <div className="text-center md:text-left">
        <p className="text-lg mb-2">Hello, I'm</p>
        <h1 className="text-4xl font-bold mb-2">kota</h1>
        <p className="text-xl mb-4">student of 42Tokyo</p>
        <div className="flex justify-center md:justify-start space-x-4 mb-4">
          <Link href="/#contact">
            <Button>Contact Info</Button>
          </Link>
        </div>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://www.instagram.com/kotachan0920/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Instagram className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://twitter.com/huhkoyo" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Twitter className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/kotachan/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-6 w-6" />
            </Button>
          </a>
          <a href="https://github.com/koyochan/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-6 w-6" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}