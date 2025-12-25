"use client"

import Image from "next/image"

export default function TabletFooter() {
    return (
        <footer id="tablet-footer" className="relative bg-primary text-white py-10 md:py-12">
            <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12">
                {/* 2-column layout for tablet */}
                <div className="grid grid-cols-2 gap-8 items-start">
                    {/* Left: Logo and branding */}
                    <div className="flex items-center">
                        <div className="relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                            <Image
                                src="/header/Header.png"
                                alt="DG Realtors Logo"
                                fill
                                className="object-contain pointer-events-none select-none"
                                draggable={false}
                            />
                        </div>
                        <div className="flex flex-col -ml-2">
                            <span className="font-serif font-semibold text-xl md:text-2xl text-white tracking-tight">
                                realtors
                            </span>
                            <span className="font-bold text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-white/70">
                                Property Consultants
                            </span>
                        </div>
                    </div>

                    {/* Right: Contact info */}
                    <div className="text-right">
                        <h3 className="text-lg font-serif font-medium mb-3">Contact</h3>
                        <p className="text-white/80 text-sm mb-1">
                            <a href="tel:+919820089725" className="hover:text-accent transition-colors">
                                +91 98200 89725
                            </a>
                        </p>
                        <p className="text-white/80 text-sm">
                            <a href="mailto:dgrealtors08@gmail.com" className="hover:text-accent transition-colors">
                                dgrealtors08@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-white/20 mt-8 pt-6 text-center">
                    <p className="text-white/60 text-sm">
                        © {new Date().getFullYear()} DG Realtors. All rights reserved.
                    </p>
                    <p className="text-white/40 text-xs mt-2">
                        MahaRERA Registered | Sign of Trust
                    </p>
                </div>
            </div>
        </footer>
    )
}
