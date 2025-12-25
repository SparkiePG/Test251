"use client"

import Image from "next/image"

export default function TabletAbout() {
    return (
        <section id="tablet-about" className="relative" style={{ backgroundColor: "#FAF0E6" }}>
            <div className="py-12 md:py-16">
                <div className="max-w-[1200px] mx-auto px-8 md:px-12">
                    {/* 2-column grid matching desktop layout */}
                    <div className="grid grid-cols-2 items-center gap-10 md:gap-16">
                        {/* Image Column - Left side like desktop */}
                        <div className="relative">
                            <div className="aspect-[4/5] w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-2xl relative z-10">
                                <Image
                                    src="/images/owners-about-me-pic.jpg"
                                    alt="Dattaram B Gorivale - Proprietor of DG Realtors"
                                    fill
                                    loading="lazy"
                                    sizes="(max-width: 1024px) 320px, 50vw"
                                    className="object-cover pointer-events-none select-none"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 z-20" onContextMenu={(e) => e.preventDefault()} />
                            </div>
                            {/* Decorative elements like desktop */}
                            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-secondary rounded-2xl -z-10" />
                            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-accent/30 rounded-2xl -z-10" />
                        </div>

                        {/* Content Column - Right side like desktop */}
                        <div className="text-left">
                            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-2 font-semibold">
                                About Me
                            </p>
                            <p className="text-base text-muted-foreground mb-3">
                                DG realtors &bull; Since 2008
                            </p>
                            <h2 className="font-serif text-foreground text-3xl md:text-4xl font-medium leading-tight mb-4">
                                Dattaram B Gorivale
                            </h2>
                            <p className="text-base text-accent font-medium mb-6">
                                Proprietor &bull; Property Consultants
                            </p>

                            {/* Quote */}
                            <blockquote className="border-l-4 border-accent pl-5 py-1 mb-6">
                                <p className="font-serif text-foreground/80 text-xl italic leading-relaxed">
                                    "Sign of Trust"
                                </p>
                            </blockquote>

                            {/* Description */}
                            <p className="text-muted-foreground text-base leading-relaxed mb-8">
                                For over 17 years, DG Realtors has helped businesses in Maharashtra find the right retail and office
                                spaces. Our commitment to integrity and personalized service ensures you secure a location that
                                perfectly matches your specific requirements.
                            </p>

                            {/* Stats */}
                            <div className="flex justify-start gap-8">
                                <div>
                                    <p className="font-serif text-4xl font-medium text-foreground">17+</p>
                                    <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">
                                        Years Experience
                                    </p>
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
