import type React from "react"

interface RGBBorderProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedRGBBorder({ children, className = "" }: RGBBorderProps) {
  return (
    <div className={`relative ${className} rounded-lg overflow-clip`}>
      <div className="absolute -inset-0.5 bg-conic/decreasing from-violet-700 via-lime-300 to-violet-700 left-[-50%] top-[-50%] h-[200%] w-[200%] blur animate-spin "></div>
      <div className="relative bg-background rounded-lg m-1 ">{children}</div>
    </div>
  )
}