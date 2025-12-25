"use client"

import Image from "next/image"

export default function MobileAbout() {
  return (
    <section id="mobile-about" className="relative" style={{ backgroundColor: "#FAF0E6" }}>
      <div className="py-8 sm:py-10">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 items-center gap-8 md:gap-12">
            {/* Image Column - Order 2 on mobile, Order 1 on tablet/desktop */}
            <div className="order-2 md:order-1 flex justify-center md:justify-end">
              <div className="relative">
                <div className="aspect-[4/5] w-[180px] sm:w-[240px] md:w-[280px] rounded-xl overflow-hidden shadow-xl relative z-10">
                  <Image
                    src="/images/owners-about-me-pic.jpg"
                    alt="Dattaram B Gorivale - Proprietor of DG Realtors"
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 240px, 280px"
                    className="object-cover pointer-events-none select-none"
                    draggable={false}
                  />
                  <div className="absolute inset-0 z-20" onContextMenu={(e) => e.preventDefault()} />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 bg-secondary rounded-xl -z-10 hidden md:block" />
              </div>
            </div>

            {/* Content Column - Order 1 on mobile, Order 2 on tablet/desktop */}
            <div className="order-1 md:order-2 text-center md:text-left">
              <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-accent mb-2 font-semibold">
                About Me
              </p>
              <p className="text-sm md:text-base text-muted-foreground mb-2">DG realtors &bull; Since 2008</p>
              <h2 className="font-serif text-foreground text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-2 md:mb-4">
                Dattaram B Gorivale
              </h2>
              <p className="text-sm md:text-lg text-accent font-medium mb-4">Proprietor &bull; Property Consultants</p>

              {/* Quote */}
              <blockquote className="border-l-3 border-accent pl-4 py-1 mb-4 md:mb-6 inline-block md:block">
                <p className="font-serif text-foreground/80 text-lg md:text-xl italic">"Sign of Trust"</p>
              </blockquote>

              {/* Description */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 max-w-md mx-auto md:mx-0">
                For over 17 years, DG Realtors has helped businesses in Maharashtra find the right retail and office spaces.
                Our commitment to integrity and personalized service ensures you secure a location that perfectly matches
                your specific requirements.
              </p>

              {/* Stats */}
              <div className="flex justify-center md:justify-start">
                <div className="text-center md:text-left">
                  <p className="font-serif text-3xl md:text-4xl font-medium text-foreground">17+</p>
                  <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-0.5">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-2 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, #F5DEB3 100%)",
        }}
      />
    </section>
  )
}
