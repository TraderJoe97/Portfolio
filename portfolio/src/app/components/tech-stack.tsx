import { Card } from "@/components/ui/card"
import Image from "next/image"

const technologies = ["HTML", "CSS", "JavaScript", "React", "Redux", "firebase" , "Node.js", "Next.js" , "TypeScript", "TailwindCSS", "Git" , "Express",]

export default function TechStack() {
  return (
    <div className="grid gap-2 md:gap-4 lg:gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
      {technologies.map((tech) => (
        <Card key={tech} className="p-4 bg-gradient-to-bl from-zinc-400 via-zinc-300 to-gray-400 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <Image
              src={`/icons/${tech.toLowerCase()}.svg`}
              alt={`${tech} icon`}
              width={40}
              height={40}
              className="mb-2"
            />
            <span className="text-sm font-medium">{tech}</span>
          </div>
        </Card>
      ))}
    </div>
  )
}

