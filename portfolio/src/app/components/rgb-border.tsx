import type React from "react"

interface RGBBorderProps {
  children: React.ReactNode
  className?: string
}

export function RGBBorder({ children, className = "" }: RGBBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-rgb-shift rounded-lg"></div>
      <div className="relative bg-background rounded-lg ">{children}</div>
    </div>
  )
}

