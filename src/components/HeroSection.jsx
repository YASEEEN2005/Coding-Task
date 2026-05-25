
export default function HeroSection() {
  return (
    <div className="min-h-screen relative overflow-visible bg-[#020514] text-white selection:bg-cyan-500 selection:text-slate-900 antialiased flex flex-col justify-center">
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c2b6b] via-[#051433] to-[#02071d] z-0"></div>

      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-600/25 blur-[130px] z-0 pointer-events-none"></div>
      <div className="absolute bottom-[5%] right-[5%] w-[70%] h-[70%] rounded-full bg-blue-500/10 blur-[150px] z-0 pointer-events-none"></div>

      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none transform -rotate-[15deg] scale-150" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(96, 165, 250, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(96, 165, 250, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: '55px 55px'
        }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Rent the Perfect Car<br className="hidden md:inline" /> for Every Journey!
            </h1>
            
            <p className="mt-6 text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
              We open the doorfor you to explore the world in comfort and style.<br className="hidden md:inline" /> Being your trusted travel partner,
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#ff5a36] text-[#ff5a36] flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  Book with flexibility
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#ff5a36] text-[#ff5a36] flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  Price transparency
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#ff5a36] text-[#ff5a36] flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  Extend or return anytime
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border border-[#ff5a36] text-[#ff5a36] flex-shrink-0">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-slate-200">
                  Doorstep delivery in 2 days
                </span>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center justify-center border border-[#ff5a36] hover:bg-[#ff5a36]/10 text-white text-sm font-semibold px-8 py-3 rounded-full transition-all duration-200"
              >
                Find a Car
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 relative flex justify-end items-center mt-12 lg:mt-0">
            <div className="absolute left-[48%] top-[-8%] z-20 flex flex-col items-center">
              <span className="relative flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500 shadow-[0_0_8px_#22d3ee]"></span>
              </span>
              <svg className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] -mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>

            <div className="w-full relative z-10 flex justify-end scale-105 sm:scale-110 lg:scale-[1.25] transition-transform duration-300">
              <img 
                src="/images/car.png" 
                alt="Red Hatchback Car" 
                className="w-full max-w-lg object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)]"
              />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
        <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
      </div>



    </div>
  )
}
