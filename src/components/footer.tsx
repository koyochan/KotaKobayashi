import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-secondary py-8 px-4">
      <div className="container mx-auto">
        <nav className="mb-4">
          <ul className="flex justify-center space-x-4">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#experience" className="hover:underline">Experience</Link></li>
            <li><Link href="/works" className="hover:underline">Works</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </nav>
        <p className="text-center text-sm">Copyright © 2023 Kota Kobayashi. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

