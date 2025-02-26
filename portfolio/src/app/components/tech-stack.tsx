import { Card } from "@/components/ui/card"
import Image from "next/image"

const technologies = ["HTML", "CSS", "JavaScript", "React", "Redux", "firebase" , "Node.js", "Next.js" , "TypeScript", "TailwindCSS", "Git" , "Express",]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {technologies.map((tech) => (
        <Card key={tech} className="p-4 flex items-center justify-center">
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

