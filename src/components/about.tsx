"use client"

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Studying Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <p>C, Go, Python, HTML, CSS</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent>
              <Image src="/assets/42Tokyo.png" alt="42Tokyo" width={200} height={100} onClick={() => window.open('https://42tokyo.jp/', '_blank')} className="cursor-pointer" />
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardContent className="pt-6">
            <p>
              I am a student of 42Tokyo. I am studying programming languages
              such as C, Go, Python, HTML, and CSS. I am also studying
              frameworks such as React, Express, and Next.js. I am interested in
              web development and I am currently working on a project to create
              a web application using React and Express. I am also interested in
              machine learning and I am currently working on a project to
              create a machine learning model using Python.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}