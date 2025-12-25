"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const backgroundImages = [
  { src: "/homepage/hero-2.jpg", alt: "City panorama at sunset with orange sky", blur: false },
  { src: "/homepage/hero-3.jpg", alt: "Bandra-Worli Sea Link at night", blur: false },
  { src: "/homepage/hero-4.jpg", alt: "Mumbai skyline with blue sky and greenery", blur: false },
  { src: "/homepage/hero-5.jpg", alt: "Chhatrapati Shivaji Terminus historic building", blur: true },
  { src: "/homepage/hero-6.jpg", alt: "Green village landscape in Maharashtra", blur: false },
  { src: "/homepage/hero-7.jpg", alt: "Coastal temple in Maharashtra", blur: false },
]

export default function MobileHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById("mobile-companies")
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
  }

  return (
    <section id="mobile-hero" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Slideshow */}
      {backgroundImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <Image
            src={img.src || "/placeholder.svg"}
            alt={img.alt}
            fill
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
            sizes="100vw"
            quality={85}
            className={`object-cover object-center scale-105 pointer-events-none select-none ${img.blur ? "blur-[2px]" : ""}`}
            draggable={false}
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[5]"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.6) 100%)",
        }}
      />

      <div className="hero-overlay absolute inset-0 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center px-6 flex flex-col justify-center items-center h-full pb-32">
        <div
          className={`transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <h1
            className="font-serif text-white font-medium leading-[1.15] mb-5 text-balance drop-shadow-[0_2px_3px_rgba(0,0,0,0.4)]"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Find your next business
            <br />
            <span className="text-accent">location with us.</span>
          </h1>
        </div>

        <div
          className={`flex flex-col items-center gap-6 transition-all duration-1000 delay-500 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <a
            href="#mobile-companies"
            onClick={handleScrollClick}
            className="group flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <span className="text-xs uppercase tracking-[0.2em] font-medium">Scroll</span>
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
              <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
