"use client"

import { useState } from "react"
import Image from "next/image"

const awardImages = [
  { src: "/images/photo-2025-12-20-17-52-00.jpg", alt: "MahaSeWA Professional Opportunities Certificate" },
  { src: "/images/mahipatrai-appreciation.png", alt: "Mahipatrai Bhiwandi Token of Appreciation", isPortrait: true },
  {
    src: "/images/smartbg-2025-12-19-adb21865-4d96-48d2-bfca-c391fa4a33d7.png",
    alt: "MahaSeWA Certificate of Completion",
  },
  {
    src: "/images/destination-thane-2023.png",
    alt: "Destination Thane 2023 Symbiosis - Organising Committee",
    isPortrait: true,
  },
  {
    src: "/images/smartbg-2025-12-16-83d5d408-c3c4-46a8-8cb8-4c726d993e12.png",
    alt: "NAR India Certificate of Achievement",
  },
  { src: "/images/teaa-ashwin-sheth-award.png", alt: "TEAA Ashwin Sheth Token of Appreciation - Avalon" },
  {
    src: "/images/smartbg-2025-12-19-232d868d-a01a-4b07-9d0a-10df074f7291.png",
    alt: "GRSF Certificate on Redevelopment",
  },
  {
    src: "/images/honda-bigwing-appreciation.png",
    alt: "Honda BigWing Thane West Appreciation Award",
    isPortrait: true,
  },
  { src: "/images/img-20251219-221153.png", alt: "Certificate of Appreciation - One International District" },
  { src: "/images/destination-thane-2020.png", alt: "Destination Thane 2020 - TEAA CREDAI MCHI", isPortrait: true },
  {
    src: "/images/smartbg-2025-12-19-2f0b25e8-ec27-40e1-a020-1c554b2a3577.png",
    alt: "NAR India Certificate of Training",
  },
  { src: "/images/destination-thane-2022.png", alt: "Destination Thane 2022 Transformation 3.0 - TEAA NAR India" },
  {
    src: "/images/smartbg-2025-12-19-5f4e17f2-64ca-48f5-833f-1fec5ea47265.png",
    alt: "MahaRERA Certificate of Completion",
  },
  {
    src: "/images/smartbg-2025-12-19-1a28d541-c8e9-4e1d-9756-db095b28bec8.png",
    alt: "NAR India Certificate of Membership",
  },
  {
    src: "/images/smartbg-2025-12-19-6ea6a189-180b-4940-bf36-d4a6d7d3fe59.png",
    alt: "NAR India Certificate of Participation",
  },
  {
    src: "/images/smartbg-2025-12-19-271b515f-741a-499b-830a-cd278900d6e0.png",
    alt: "NAREDCO REMI Certificate of Completion",
  },
  {
    src: "/images/broker-ki-pathshala-certificate.png",
    alt: "Broker Ki Pathshala Certificate of Participation - Square Feet Foundation",
  },
  { src: "/images/teaa-membership-certificate.png", alt: "TEAA Certificate of Membership 2025-26" },
]

export default function MobileAwards() {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => new Set(prev).add(index))
  }

  return (
    <section
      id="mobile-awards"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FBF6EC 0%, #F5DEB3 18%, #F5DEB3 100%)",
      }}
    >
      <div className="py-8 sm:py-10">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "radial-gradient(#3d2b1f 1px, transparent 1px)", backgroundSize: "40px 40px" }}
        />

        <div className="w-full max-w-[1400px] mx-auto relative z-10 px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-5 sm:mb-8">
            <p className="text-[10px] uppercase tracking-[0.15em] text-accent mb-1.5 font-semibold opacity-85">
              Recognition
            </p>
            <h2 className="font-serif text-[#3d2b1f] text-lg sm:text-xl font-medium">Awards & Certificates</h2>
          </div>

          {/* Grid - 2 columns on mobile */}
          <div className="columns-2 gap-2.5 sm:gap-3">
            {awardImages.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer bg-primary-foreground/5 mb-2.5 sm:mb-3 break-inside-avoid shadow-[0_4px_12px_rgba(0,0,0,0.06)]"
                onContextMenu={(e) => e.preventDefault()}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  width={item.isPortrait ? 300 : 400}
                  height={item.isPortrait ? 450 : 300}
                  loading="lazy"
                  sizes="50vw"
                  className={`w-full h-auto object-contain transition-all duration-500 group-hover:scale-105 pointer-events-none select-none ${
                    loadedImages.has(index) ? "opacity-100" : "opacity-0"
                  }`}
                  draggable={false}
                  onLoad={() => handleImageLoad(index)}
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-2.5">
                    <p className="text-white text-[10px] sm:text-xs font-medium line-clamp-2">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
