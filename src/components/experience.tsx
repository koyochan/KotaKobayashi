import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <Card>
        <CardHeader>
          <CardTitle>Studying History</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="flex items-center">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            <div>
              <h3 className="font-semibold">C</h3>
              <p className="text-sm text-muted-foreground">Intermediate</p>
            </div>
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            <div>
              <h3 className="font-semibold">Go</h3>
              <p className="text-sm text-muted-foreground">Beginner</p>
            </div>
          </div>
          <div className="flex items-center">
            <CheckCircle2 className="mr-2 h-4 w-4" />
            <div>
              <h3 className="font-semibold">Python</h3>
              <p className="text-sm text-muted-foreground">Intermediate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
