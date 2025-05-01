import PremiumCosmeticAnimation from "../components/premium-cosmetic-animation"

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <PremiumCosmeticAnimation />

      <div className="relative z-10 text-center p-4 sm:p-8 max-w-3xl mx-auto">
        <div className="mb-2 inline-block px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r from-rose-400/20 to-purple-400/20 backdrop-blur-sm text-white/90 text-[10px] sm:text-xs font-medium tracking-wider uppercase">
          Aesthetic Excellence
        </div>
        <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-200 to-purple-200">
            Redefining Beauty
          </span>
        </h1>
        <p className="text-base sm:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
          Where artistry meets precision, embodying the perfect harmony of aesthetic vision and meticulous detail. Each element carefully crafted to create visual symphonies that captivate and inspire.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
          <a 
            href="https://kmrb.tech" 
            className="group relative flex items-center justify-center mx-auto w-[85%] sm:w-auto max-w-[280px] gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-white/5 backdrop-blur-md text-white font-medium border border-white/10 hover:bg-white/8 transition-all duration-500 overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-300/20 via-transparent to-purple-300/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-rose-100 via-white to-purple-100 uppercase text-[10px] sm:text-xs tracking-[0.2em] font-semibold">KOMOREBI</span>
              <span className="relative h-px w-4 sm:w-5 bg-gradient-to-r from-rose-300/80 to-purple-300/80"></span>
              <span className="relative text-[9px] sm:text-[10px] text-white/70 font-light tracking-wider">PREMIUM ATELIER</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
