import Image from "next/image"

export default function MobileFooter() {
  return (
    <footer
      id="mobile-footer"
      className="bg-[#FFEFD5] border-t border-[#3d2b1f]/10"
      style={{ paddingTop: "2rem", paddingBottom: "1.5rem" }}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6">
        <div className="pb-5 border-b border-[#3d2b1f]/10">
          {/* Logo */}
          <div className="flex justify-center mb-5">
            <div className="flex items-center bg-white/[0.04] p-2 px-3 rounded-lg">
              <div className="relative w-20 h-20 flex-shrink-0 pointer-events-none select-none" draggable={false}>
                <Image
                  src="/footer/Footer.png"
                  alt="DG Realtors Logo"
                  fill
                  loading="lazy"
                  sizes="80px"
                  className="object-contain"
                />
              </div>
              <div className="-ml-1.5 flex flex-col justify-center">
                <span className="font-serif font-semibold text-lg text-[#3d2b1f] block">realtors</span>
                <span className="text-[8px] uppercase tracking-[0.14em] text-[#3d2b1f]/60 font-bold">
                  Property Consultants
                </span>
              </div>
            </div>
          </div>

          {/* Address & Contact */}
          <div className="space-y-4 text-center">
            {/* Address */}
            <div>
              <h4 className="text-[#C2703E] text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Address</h4>
              <div className="text-[#5c4a3d] text-xs leading-5 space-y-0.5 font-medium">
                <p>Shop No 19, Shahu Market Basement</p>
                <p>M.G.Road, Naupada, Opp Naupada Police Station</p>
                <p>Thane (W), Thane 400602</p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-[#C2703E] text-[10px] font-bold uppercase tracking-[0.15em] mb-2">Contact</h4>
              <div className="text-xs leading-5 space-y-0.5">
                <p>
                  <span className="text-[#8b7355] font-medium">Tel: </span>
                  <a
                    href="tel:022-25300113"
                    className="text-[#3d2b1f] font-semibold hover:text-[#C2703E] transition-colors"
                  >
                    022-25300113
                  </a>
                </p>
                <p>
                  <span className="text-[#8b7355] font-medium">Email: </span>
                  <a
                    href="mailto:dgrealtors@ymail.com"
                    className="text-[#3d2b1f] font-semibold hover:text-[#C2703E] transition-colors"
                  >
                    dgrealtors@ymail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-4 text-center">
          <p className="text-[#3d2b1f]/70 text-[10px] tracking-wider font-bold">
            © 2025 DG realtors. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
