import type React from "react"

interface RGBBorderProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedRGBBorder({ children, className = "" }: RGBBorderProps) {
  return (
    <div className={`relative ${className} rounded-lg overflow-clip`}>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500  left-[-25%] top-[-25%] h-[150%] w-[150%] animate-spin rounded-lg"></div>
      <div className="relative bg-background rounded-lg m-1 ">{children}</div>
    </div>
  )
}