"use client"
import Image from "next/image"
import Link from "next/link"
import { Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"
import ContactForm from "./components/contact-form"
import { ScrollAnimation } from "./components/scroll-animation"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedRGBBorder } from "./components/animated-rgb-border"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="font-bold sm:inline-block">{"<Joseph Monakedi/>"}</span>
            </Link>
          <div className="mr-4 hidden md:flex">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <a className="ml-auto mr-5" href="https://docs.google.com/document/d/1uaLyRdcl3IOFr_qLL7bGMHDvblrTyJr69-3ceLfruvM/export?format=pdf" download>
          <Button variant="outline" >
            Resume
          </Button>
          </a>
          <ThemeToggle/>          
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <ScrollAnimation>
          <section id="hero" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Welcome to My Portfolio
                  </h1>
                  <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                    I'm a front-end developer passionate about creating amazing web experiences.
                  </p>
                </div>
                <div className="space-x-4">
                  <Link href="https://github.com/TraderJoe97" target="_blank">
                    <Button variant="outline" size="icon">
                      <Github className="h-4 w-4" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://linkedin.com/in/TraderJoe97" target="_blank">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:jimonakedi@gmail.com">
                    <Button variant="outline" size="icon">
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section id="about" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                About Me
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <AnimatedRGBBorder className="w-full aspect-square">
                <img src="/Avatar.jpg" alt="Joseph Monakedi" className="rounded-lg aspect-square" />
                </AnimatedRGBBorder>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold mb-2">Joseph Monakedi</h3>
                  <h4 className="text-xl text-gray-600 dark:text-gray-400 mb-4">Front-end Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    I'm a passionate front-end developer currently honing my skills at Codespace Academy. I love
                    building beautiful and interactive web applications.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Tech Stack
              </h2>
              <TechStack />
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section id="projects" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Projects
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ProjectCard
                  title="Joes-Podcast_App"
                  description="A podcast streaming platform that allows users to listen to their favorite podcasts."
                  image="/brave_screenshot_podcast.png"
                  liveSite="https://joes-podcasts.netlify.app/"
                  githubRepo="https://github.com/TraderJoe97/CS20230347_WFO2407_Group-B_Joseph-Monakedi_DJS11.git"
                  technologies={["React", "TailwindCSS", "JavaScript", "TypeScript", "Vite"]}
                />
                <ProjectCard
                  title="Shortly"
                  description="A URL shortening service that allows users to shorten long URLs."
                  image="/brave_screenshot_shortly.png"
                  liveSite="https://joes-shortly.netlify.app/"
                  githubRepo="https://github.com/TraderJoe97/url-shortening-api"
                  technologies={["React", "TailwindCSS", "JavaScript", "TypeScript", "Vite"]}
                />
                <ProjectCard
                  title="Kanban Task Management App"
                  description="An agile task management application that allows users to create, manage, and prioritize tasks efficiently."
                  image="/brave_screenshot_agiletaskmanager.netlify.app.png"
                  liveSite="https://agiletaskmanager.netlify.app/"
                  githubRepo="https://github.com/TraderJoe97/CS20230347_WFO2407_Group-B_Joseph-Monakedi_JSL11.git"
                  technologies={["HTML", "CSS", "JavaScript"]}
                />
              </div>
            </div>
          </section>
        </ScrollAnimation>

        <ScrollAnimation>
          <section id="contact" className="py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                  Get in Touch
                </h2>
                <ContactForm />
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Joseph Monakedi. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

