"use client"

import { useEffect, useState } from "react"

interface ScrollWrapperProps {
  children: React.ReactNode
  className?: string
  scrolledClassName?: string
  threshold?: number
}

const ScrollWrapper = ({ 
  children, 
  className = "", 
  scrolledClassName = "", 
  threshold = 50 
}: ScrollWrapperProps) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > threshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return (
    <div className={`${className} ${isScrolled ? scrolledClassName : ''}`}>
      {children}
    </div>
  )
}

export default ScrollWrapper
