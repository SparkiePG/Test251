"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function TabletHeader() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault()
        // Try tablet-prefixed ID first, fallback to standard ID
        const tabletElement = document.getElementById(`tablet-${sectionId}`)
        const standardElement = document.getElementById(sectionId)
        const element = tabletElement || standardElement

        if (element) {
            const offset = 90 // Tablet Header height approx
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
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="flex items-center justify-between h-20 md:h-22">
                    <a
                        href="#tablet-hero"
                        onClick={(e) => scrollToSection(e, "hero")}
                        className="flex items-center group focus:outline-none z-50"
                    >
                        <div className="relative w-20 h-20 md:w-24 md:h-24">
                            <Image
                                src="/header/Header.png"
                                alt="DG Realtors Logo"
                                fill
                                className="object-contain pointer-events-none select-none"
                                draggable={false}
                                priority
                            />
                        </div>
                        <div className="flex flex-col -ml-2">
                            <span
                                className={`font-serif font-semibold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${isScrolled || isMenuOpen ? "text-foreground" : "text-white"
                                    }`}
                            >
                                realtors
                            </span>
                            <span
                                className={`font-bold text-[10px] md:text-[11px] uppercase tracking-[0.16em] transition-colors duration-300 ${isScrolled || isMenuOpen ? "text-muted-foreground" : "text-white/70"
                                    }`}
                            >
                                Property Consultants
                            </span>
                        </div>
                    </a>

                    {/* Tablet Navigation - Horizontal like desktop */}
                    <nav className="flex items-center gap-8">
                        <a
                            href="#tablet-about"
                            onClick={(e) => scrollToSection(e, "about")}
                            className={`relative text-lg font-medium tracking-wide transition-colors duration-300 py-2 group ${isScrolled ? "text-foreground" : "text-white"
                                }`}
                        >
                            About
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                        <a
                            href="#tablet-footer"
                            onClick={(e) => scrollToSection(e, "footer")}
                            className={`relative text-lg font-medium tracking-wide transition-colors duration-300 py-2 group ${isScrolled ? "text-foreground" : "text-white"
                                }`}
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                    </nav>
                </div>
            </div>
        </header>
    )
}
