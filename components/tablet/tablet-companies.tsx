"use client"

import Image from "next/image"

const companies = [
    { name: "Ashwin Sheth Group", logo: "/clients/ashwin-sheth-group-removebg.png" },
    { name: "Arihant Superstructures", logo: "/clients/arihant-superstructures-removebg.png" },
    { name: "Ajmera Realty", logo: "/clients/ajmera-removebg.png" },
    { name: "Nahar Group", logo: "/clients/nahar-removebg.png" },
    { name: "Tridhaatu Realty", logo: "/clients/tridhaatu-removebg.png" },
    { name: "Puraniks", logo: "/clients/puraniks-removebg.png" },
]

export default function TabletCompanies() {
    return (
        <section
            id="tablet-companies"
            className="relative py-12 md:py-16 snap-start"
            style={{ backgroundColor: "#FAF0E6" }}
        >
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
                {/* Header */}
                <div className="text-center mb-8">
                    <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2 font-semibold">
                        Our Clients
                    </p>
                    <h2 className="font-serif text-foreground text-2xl md:text-3xl font-medium">
                        Trusted by Leading Developers
                    </h2>
                </div>

                {/* 6-column grid for tablet - show all logos */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
                    {companies.map((company, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center p-4 bg-white/50 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="relative w-full h-16 md:h-20">
                                <Image
                                    src={company.logo}
                                    alt={company.name}
                                    fill
                                    className="object-contain pointer-events-none select-none filter grayscale hover:grayscale-0 transition-all duration-300"
                                    draggable={false}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
