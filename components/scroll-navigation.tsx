"use client"

import { useState, useEffect, useCallback } from "react"

const ChevronUpIcon = ({
  className,
  strokeWidth = 2.5,
  size,
}: { className?: string; strokeWidth?: number; size: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: size, height: size }}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
)

const ChevronDownIcon = ({
  className,
  strokeWidth = 2.5,
  size,
}: { className?: string; strokeWidth?: number; size: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ width: size, height: size }}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export default function ScrollNavigation() {
  const [showNav, setShowNav] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      setShowNav(scrollY > 100)
      setAtTop(scrollY < 100)
      setAtBottom(scrollY + windowHeight >= documentHeight - 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  const scrollToBottom = useCallback(() => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight
    window.scrollTo({ top: maxScroll, behavior: "smooth" })
  }, [])

  return (
    <>
      <button
        onClick={scrollToTop}
        disabled={atTop}
        className={`fixed z-40 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${atTop ? "bg-transparent cursor-not-allowed" : "bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm"}`}
        style={{
          right: "0.75rem",
          width: "2rem",
          height: "2rem",
          top: "calc(50% - 2rem)",
        }}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon
          className={`transition-colors ${atTop ? "text-gray-500" : "text-gray-200"}`}
          strokeWidth={2.5}
          size="1rem"
        />
      </button>

      <button
        onClick={scrollToBottom}
        disabled={atBottom}
        className={`fixed z-40 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${atBottom ? "bg-transparent cursor-not-allowed" : "bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm"}`}
        style={{
          right: "0.75rem",
          width: "2rem",
          height: "2rem",
          top: "calc(50% + 0.5rem)",
        }}
        aria-label="Scroll to bottom"
      >
        <ChevronDownIcon
          className={`transition-colors ${atBottom ? "text-gray-500" : "text-gray-200"}`}
          strokeWidth={2.5}
          size="1rem"
        />
      </button>
    </>
  )
}
