import {
  ChevronLeft,
  ChevronRight,
  BadgePercent,
  CarFront,
} from "lucide-react";
const offers = [1, 2, 3, 4];  

export default function SearchAndOffers()
 {
  return (
    <>
    <div className="relative z-30 -mt-4 lg:-mt-[38px] flex justify-center px-4">
      <div className="w-full max-w-[1080px] flex items-center justify-center">

          <div className="flex flex-col lg:flex-row lg:items-center bg-white border border-[#2d57a1] rounded-[24px] lg:rounded-full shadow-[0_12px_30px_rgba(15,40,90,0.16)] h-auto lg:h-[82px] px-5 lg:px-7 py-5 lg:py-0 w-full">

            <div className="flex items-center gap-4 w-full lg:w-auto lg:min-w-[240px]">
              <div className="w-11 h-11 rounded-full bg-[#173f8a] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
                  />
                  <circle cx="12" cy="11" r="2.2" fill="currentColor" />
                </svg>
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-[14px] font-bold text-[#1f1f1f] leading-none">
                  City
                </label>

                <input
                  type="text"
                  placeholder="Coimbatore, Tamilnadu"
                  className="mt-[8px] bg-transparent outline-none border-none text-[14px] text-[#707070] w-full lg:w-[180px] p-0"
                />
              </div>
            </div>

            <div className="w-full h-px lg:w-px lg:h-10 bg-[#e7e7e7] my-4 lg:my-0 lg:mx-6"></div>

            <div className="flex items-center gap-4 w-full lg:w-auto lg:min-w-[230px]">
              <div className="w-11 h-11 rounded-full bg-[#173f8a] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-[14px] font-bold text-[#1f1f1f] leading-none">
                  Starting Date
                </label>

                <input
                  type="date"
                  className="mt-[8px] bg-transparent outline-none border-none text-[14px] text-[#707070] w-full lg:w-[150px] p-0"
                />
              </div>
            </div>

            <div className="w-full h-px lg:w-px lg:h-10 bg-[#e7e7e7] my-4 lg:my-0 lg:mx-6"></div>

            <div className="flex items-center gap-4 w-full lg:w-auto lg:min-w-[220px]">
              <div className="w-11 h-11 rounded-full bg-[#173f8a] flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="flex flex-col flex-1">
                <label className="text-[14px] font-bold text-[#1f1f1f] leading-none">
                  End Date
                </label>

                <input
                  type="date"
                  className="mt-[8px] bg-transparent outline-none border-none text-[14px] text-[#707070] w-full lg:w-[140px] p-0"
                />
              </div>
            </div>
            
            <div className="pt-5 lg:pt-0 lg:pl-5 flex items-center w-full lg:w-auto justify-center">
              <button className="h-[54px] lg:h-[62px] w-full lg:w-auto lg:min-w-[170px] px-8 rounded-full bg-[#173f8a] hover:bg-[#204da8] transition-all duration-300 flex items-center justify-center gap-3 text-white text-[18px] font-semibold shadow-[0_10px_22px_rgba(23,63,138,0.24)]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.85-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>

                Search
              </button>
            </div>

          </div>

      </div>
    </div> 

    <section className="w-full bg-white py-14 overflow-hidden font-sans">
      <div className="max-w-[1500px] mx-auto relative">

        <div className="flex justify-center mb-8">
          <span className="text-[#6b7280] text-[14px] font-medium tracking-wide">Duration: 1 day , 14 hrs</span>
        </div>

        <div className="flex items-center justify-center gap-2 lg:gap-6 w-full relative">
          
          <button className="hidden lg:flex w-[42px] h-[42px] rounded-full bg-white border border-[#e5e7eb] shadow-md items-center justify-center text-[#6b7280] hover:bg-[#f9fafb] transition-all duration-300 z-10 shrink-0">
            <ChevronLeft className="w-5 h-5" strokeWidth={2.5} />
          </button>

          <div className="flex items-center gap-4 lg:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory px-4 lg:px-0 py-4 w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {offers.map((item) => (
              <div key={item} className="relative drop-shadow-[0_8px_16px_rgba(15,23,42,0.08)] snap-center shrink-0">
                <div
                  className="relative w-[340px] h-[126px] bg-white flex"
                  style={{
                    WebkitMaskImage: 'radial-gradient(circle at 0px 8px, transparent 4px, black 4.5px), radial-gradient(circle at 100% 8px, transparent 4px, black 4.5px)',
                    WebkitMaskSize: '51% 16px, 51% 16px',
                    WebkitMaskPosition: 'left top, right top',
                    WebkitMaskRepeat: 'repeat-y, repeat-y',
                    maskImage: 'radial-gradient(circle at 0px 8px, transparent 4px, black 4.5px), radial-gradient(circle at 100% 8px, transparent 4px, black 4.5px)',
                    maskSize: '51% 16px, 51% 16px',
                    maskPosition: 'left top, right top',
                    maskRepeat: 'repeat-y, repeat-y'
                  }}
                >
                  
                  <div className="absolute left-[8px] top-2 bottom-2 border-l-[1.5px] border-dotted border-[#cbd5e1] z-10"></div>
                  <div className="absolute right-[8px] top-2 bottom-2 border-r-[1.5px] border-dotted border-[#cbd5e1] z-10"></div>

                  <div 
                    className="absolute top-0 right-0 w-[80%] h-[70%] opacity-[0.12] z-0" 
                    style={{ 
                      backgroundImage: 'radial-gradient(#2563eb 1.5px, transparent 1.5px)', 
                      backgroundSize: '12px 12px', 
                      maskImage: 'linear-gradient(to bottom left, black, transparent)',
                      WebkitMaskImage: 'linear-gradient(to bottom left, black, transparent)'
                    }}
                  ></div>

                  <div className="flex-1 px-7 py-4 h-full flex flex-col justify-between z-10">
                    
                    <div className="flex items-center gap-1.5 text-[#2563eb]">
                      <CarFront className="w-3.5 h-3.5 text-[#2563eb]" fill="currentColor" />

                      <span className="text-[10px] font-bold tracking-wide">
                        Ride safe with Valam
                      </span>
                    </div>

                    <p className="text-[14.5px] leading-[19px] font-semibold text-[#1e293b] max-w-[190px] mt-1">
                      Valam Cars offers 10% off for new users in Coimbatore.
                    </p>

                    <div className="flex items-center gap-3 mt-1">
                      <div className="bg-[#173f8a] h-[36px] px-4 rounded-[10px] flex items-center gap-2 shadow-md">
                        <BadgePercent className="w-[18px] h-[18px] text-white" />

                        <div className="flex flex-col leading-none justify-center">
                          <span className="text-white text-[15px] font-extrabold tracking-wide">
                            10%
                          </span>

                          <span className="text-white/80 text-[8.5px] font-semibold mt-[2px]">
                            for all users*
                          </span>
                        </div>
                      </div>

                      <div className="flex relative w-12 h-8 ml-2">
                        <div className="text-[#93c5fd] text-[16px] absolute -top-1 left-0 opacity-70">✦</div>
                        <div className="text-[#bfdbfe] text-[12px] absolute top-4 left-4 opacity-60">✦</div>
                        <div className="text-[#93c5fd] text-[18px] absolute top-0 left-8 opacity-50">✦</div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[88px] h-full border-l-[1.5px] border-dashed border-[#e2e8f0] flex items-center justify-center relative z-10">
                    <div className="-rotate-90 border-[1.5px] border-dashed border-[#94a3b8] rounded-[30px] px-4 py-1 flex items-center justify-center opacity-80">
                      <span className="text-[19px] italic font-bold text-[#64748b] tracking-wider" style={{ fontFamily: 'cursive' }}>
                        Valam
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <button className="hidden lg:flex w-[42px] h-[42px] rounded-full bg-white border border-[#e5e7eb] shadow-md items-center justify-center text-[#6b7280] hover:bg-[#f9fafb] transition-all duration-300 z-10 shrink-0">
            <ChevronRight className="w-5 h-5" strokeWidth={2.5} />
          </button>
        </div>

        <div className="flex items-center justify-center mt-10">
          <div className="bg-[#dbeafe] border border-[#bfdbfe] rounded-full px-2 py-1.5 flex items-center gap-1.5">
            <div className="w-[10px] h-[10px] rounded-full bg-[#3b82f6] shadow-sm"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#bfdbfe]"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-[#bfdbfe]"></div>
          </div>
        </div>
      </div>
    </section>
</>
  );
}