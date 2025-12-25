"use client"

import Image from "next/image"

const companies = [
  { name: "Wellness Forever", logo: "/images/wellness-20forever.png", height: 200, widthMultiplier: 1.2 },
  { name: "ICICI Bank", logo: "/images/icici-20bank-20logo.png", height: 120, widthMultiplier: 1.2 },
  { name: "The EleFant", logo: "/images/the-elefant.png", height: 180, widthMultiplier: 1.8 },
  { name: "Amazon Logistics", logo: "/images/amazon-logistics.png", height: 140, widthMultiplier: 1.2 },
  { name: "Honda BigWing", logo: "/images/hondabigwing.png", height: 180, widthMultiplier: 1.2 },
  { name: "Clove Dental", logo: "/images/clove-dental.png", height: 130, widthMultiplier: 1.6 },
  { name: "Godrej Group", logo: "/images/godrej-group-logo-vector.png", height: 200, widthMultiplier: 0.9 },
  { name: "Lodha Group", logo: "/images/lodha-logo.png", height: 200, widthMultiplier: 0.9 },
  { name: "Dominos", logo: "/images/dominos.png", height: 90, widthMultiplier: 1.4 },
  { name: "Canara Bank", logo: "/images/canara-bank.png", height: 80, widthMultiplier: 1.4 },
  { name: "TBZ", logo: "/images/tbz.png", height: 90, widthMultiplier: 1.5 },
  { name: "McDonalds", logo: "/images/mcdonalds.png", height: 70, widthMultiplier: 1.4 },
  { name: "DMart", logo: "/images/dmart.png", height: 140, widthMultiplier: 1.4 },
]

export default function MobileCompanies() {
  const allCompanies = [...companies, ...companies]

  return (
    <section id="mobile-companies" className="w-full snap-start" style={{ scrollMarginTop: "5rem", backgroundColor: "#FAEBD7" }}>
      <div className="py-6 sm:py-8">
        <div className="w-full max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-4 sm:mb-6 px-4">
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground mb-1 font-medium">
              Our Clients
            </p>
            <h2 className="font-serif text-foreground text-lg sm:text-xl font-medium">Companies We Have Worked With</h2>
          </div>

          {/* Carousel */}
          <div className="relative w-full overflow-hidden mask-gradient-x">
            <div className="carousel-track">
              {allCompanies.map((company, index) => (
                <div key={index} className="carousel-item">
                  <div
                    className="relative shrink-0"
                    style={{
                      height: `${company.height * 0.35}px`,
                      width: `${company.height * company.widthMultiplier * 0.35}px`,
                    }}
                  >
                    <Image
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      fill
                      sizes="120px"
                      loading="lazy"
                      className="object-contain object-center pointer-events-none select-none"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
