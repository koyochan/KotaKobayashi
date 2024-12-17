import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Mail className="mr-2" /> Email
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="mailto:[email protected]" className="text-blue-500 hover:underline">
              [email protected]
            </a>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Linkedin className="mr-2" /> LinkedIn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <a href="https://www.linkedin.com/in/kotachan/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              LinkedIn Profile
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
