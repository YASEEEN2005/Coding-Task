import { useState, useEffect } from 'react';

const heroImages = [
  "/images/car.png",
  "/Car images/Sonet.png",
  "/Car images/mahindra.png",
  "/Car images/scorpio.png",
  "/Car images/swift.png"
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#020514] text-white selection:bg-cyan-500 selection:text-slate-900 antialiased flex flex-col justify-center">
      
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/hero backround.png")' }}
      ></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-22 items-center">
          
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

          <div className="lg:col-span-6 relative flex justify-end items-center mt-16 lg:mt-16 lg:translate-y-6">
            <div className="w-full relative z-10 flex justify-end scale-105 sm:scale-110 lg:scale-[1.25] transition-transform duration-300">
              <img 
                src={heroImages[0]} 
                alt="Placeholder" 
                className="w-full max-w-lg object-contain opacity-0 invisible"
              />
              {heroImages.map((img, idx) => (
                <img 
                  key={img}
                  src={img} 
                  alt="Valam Car" 
                  className={`absolute top-0 right-0 w-full max-w-lg h-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)] transition-all duration-1000 ease-in-out ${
                    idx === currentImageIndex 
                      ? 'opacity-100 translate-x-0 scale-100' 
                      : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-10 flex gap-2 bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm">
        {heroImages.map((_, idx) => (
          <button 
            key={idx}
            onClick={() => setCurrentImageIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentImageIndex === idx ? 'bg-white scale-110' : 'bg-white/30 hover:bg-white/50'
            }`}
          ></button>
        ))}
      </div>



    </div>
  )
}
