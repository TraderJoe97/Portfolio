import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedRGBBorder } from "./animated-rgb-border"
import { track } from "@vercel/analytics"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  liveSite: string
  githubRepo: string
  technologies: string[]
}

export default function ProjectCard({
  title,
  description,
  image,
  liveSite,
  githubRepo,
  technologies,
}: ProjectCardProps) {
  const handleProjectClick = (project: string, type: "live" | "github") => {
    track("project_click", { project, type })
  }

  return (
        <AnimatedRGBBorder>
    <Card className="overflow-hidden rounded-lg ">
        <div className="relative aspect-video">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <CardContent className="">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          <p className="text-sm  mb-4">{description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-md bg-gray-700 px-2 py-1 text-xs font-medium text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-2">
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto hover:bg-black hover:text-white"
            onClick={() => handleProjectClick(title, "live")}
          >
            <Link href={liveSite} target="_blank" rel="noopener noreferrer">
              <Globe className="w-4 h-4 mr-2" />
              Live Site
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto hover:bg-black hover:text-white"
            onClick={() => handleProjectClick(title, "github")}
          >
            <Link href={githubRepo} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub Repo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </AnimatedRGBBorder>
  )
}

