"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function MobileHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    // Try mobile-prefixed ID first, fallback to standard ID
    const mobileElement = document.getElementById(`mobile-${sectionId}`)
    const standardElement = document.getElementById(sectionId)
    const element = mobileElement || standardElement

    if (element) {
      const offset = 80 // Header height approx
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMenuOpen
        ? "bg-background/95 backdrop-blur-lg shadow-sm border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "hero")}
            className="flex items-center group focus:outline-none z-50"
          >
            <div className="relative w-20 h-20 sm:w-22 sm:h-22">
              <Image
                src="/header/Header.png"
                alt="DG Realtors Logo"
                fill
                className="object-contain pointer-events-none select-none"
                draggable={false}
                priority
              />
            </div>
            <div className="flex flex-col -ml-1.5">
              <span
                className={`font-serif font-semibold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${isScrolled || isMenuOpen ? "text-foreground" : "text-white"
                  }`}
              >
                realtors
              </span>
              <span
                className={`font-bold text-[8px] sm:text-[9px] uppercase tracking-[0.14em] transition-colors duration-300 ${isScrolled || isMenuOpen ? "text-muted-foreground" : "text-white/70"
                  }`}
              >
                Property Consultants
              </span>
            </div>
          </a>

          {/* Hamburger */}
          <button
            className="z-50 p-2 -mr-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded-full transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-foreground" : "bg-white"
                  } ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-0.5 w-full rounded-full transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-foreground" : "bg-white"
                  } ${isMenuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-full rounded-full transition-all duration-300 ${isScrolled || isMenuOpen ? "bg-foreground" : "bg-white"
                  } ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>

          {/* Mobile nav dropdown */}
          <div
            className={`fixed left-0 right-0 top-16 sm:top-18 z-40 transition-all duration-300 ${isMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-2 pointer-events-none"
              }`}
          >
            <nav className="mx-4 bg-background/95 backdrop-blur-xl rounded-xl border border-border/50 shadow-xl overflow-hidden">
              <div className="flex flex-col">
                <a
                  href="#about"
                  onClick={(e) => scrollToSection(e, "about")}
                  className="text-base font-medium text-foreground hover:bg-muted/50 hover:text-accent transition-colors duration-200 px-5 py-3.5 border-b border-border/30"
                >
                  About
                </a>
                <a
                  href="#footer"
                  onClick={(e) => scrollToSection(e, "footer")}
                  className="text-base font-medium text-foreground hover:bg-muted/50 hover:text-accent transition-colors duration-200 px-5 py-3.5"
                >
                  Contact
                </a>
              </div>
            </nav>
          </div>

          {/* Backdrop overlay */}
          {isMenuOpen && <div className="fixed inset-0 top-16 sm:top-18 z-30 bg-black/20" onClick={handleLinkClick} />}
        </div>
      </div>
    </header>
  )
}
