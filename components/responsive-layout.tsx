"use client"

import { useEffect, useState } from "react"

// Desktop components (LOCKED - DO NOT MODIFY)
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CompaniesCarousel from "@/components/companies-carousel"
import AboutSection from "@/components/about-section"
import AwardsCertificates from "@/components/awards-certificates"
import Footer from "@/components/footer"
import ContactPanel from "@/components/contact-panel"
import ScrollNavigation from "@/components/scroll-navigation"

// Tablet components (768px - 1023px)
import TabletHeader from "@/components/tablet/tablet-header"
import TabletHero from "@/components/tablet/tablet-hero"
import TabletCompanies from "@/components/tablet/tablet-companies"
import TabletAbout from "@/components/tablet/tablet-about"
import TabletAwards from "@/components/tablet/tablet-awards"
import TabletFooter from "@/components/tablet/tablet-footer"
import TabletContactPanel from "@/components/tablet/tablet-contact-panel"
import TabletScrollNavigation from "@/components/tablet/tablet-scroll-navigation"

// Mobile components (< 768px)
import MobileHeader from "@/components/mobile/mobile-header"
import MobileHero from "@/components/mobile/mobile-hero"
import MobileCompanies from "@/components/mobile/mobile-companies"
import MobileAbout from "@/components/mobile/mobile-about"
import MobileAwards from "@/components/mobile/mobile-awards"
import MobileFooter from "@/components/mobile/mobile-footer"
import MobileContactPanel from "@/components/mobile/mobile-contact-panel"
import MobileScrollNavigation from "@/components/mobile/mobile-scroll-navigation"

type DeviceType = "mobile" | "tablet" | "desktop"

export default function ResponsiveLayout() {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setDeviceType("mobile")
      } else if (width < 1024) {
        setDeviceType("tablet")
      } else {
        setDeviceType("desktop")
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!mounted) {
    return (
      <main className="min-h-screen w-full">
        {/* SSR fallback - renders desktop by default */}
        <Header />
        <HeroSection />
        <CompaniesCarousel />
        <AboutSection />
        <AwardsCertificates />
        <Footer />
        <ContactPanel />
        <ScrollNavigation />
      </main>
    )
  }

  // Mobile view (< 768px)
  if (deviceType === "mobile") {
    return (
      <main className="min-h-screen w-full">
        <MobileHeader />
        <MobileHero />
        <MobileCompanies />
        <MobileAbout />
        <MobileAwards />
        <MobileFooter />
        <MobileContactPanel />
        <MobileScrollNavigation />
      </main>
    )
  }

  // Tablet view (768px - 1023px)
  if (deviceType === "tablet") {
    return (
      <main className="min-h-screen w-full">
        <TabletHeader />
        <TabletHero />
        <TabletCompanies />
        <TabletAbout />
        <TabletAwards />
        <TabletFooter />
        <TabletContactPanel />
        <TabletScrollNavigation />
      </main>
    )
  }

  // Desktop view (>= 1024px) - LOCKED, DO NOT MODIFY
  return (
    <main className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <CompaniesCarousel />
      <AboutSection />
      <AwardsCertificates />
      <Footer />
      <ContactPanel />
      <ScrollNavigation />
    </main>
  )
}

