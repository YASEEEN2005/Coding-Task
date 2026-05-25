import {
  Star,
  Bookmark,
  MapPin,
  Settings2,
  Users,
  Snowflake,
  Fuel,
  ChevronRight,
  ChevronLeft,
  BadgeCent,
  CarFront,
  HandCoins,
  CircleDollarSign,
} from "lucide-react";

const cars = [
  {
    id: 1,
    name: "Maruti Swift",
    bgText: "SWIFT",
    image: "/images/car.png",
    rating: 4.5,
    availability: "Available from 4 Aug 2024",
    price: 3144,
    location: "RS Puram,Coimbatore.",
    specs: {
      transmission: "Automatic",
      seats: 5,
      ac: true,
      fuel: "Petrol",
    },
    status: "available",
  },
  {
    id: 2,
    name: "Mahindra Scorpio",
    bgText: "SCORPIO",
    image: "/images/car.png",
    rating: 4.5,
    availability: "Available Now",
    price: 3144,
    location: "RS Puram,Coimbatore.",
    specs: {
      transmission: "Automatic",
      seats: 5,
      ac: true,
      fuel: "Petrol",
    },
    status: "sold_out",
  },
  {
    id: 3,
    name: "Kia Sonet",
    bgText: "SONET",
    image: "/images/car.png",
    rating: 4.5,
    availability: "Available from 4 Aug 2024",
    price: 3144,
    location: "RS Puram,Coimbatore.",
    specs: {
      transmission: "Automatic",
      seats: 5,
      ac: true,
      fuel: "Petrol",
    },
    status: "available",
  },
];

export default function ReadyToDrive() {
  return (
    <section className="w-full bg-white py-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-[22px] font-bold text-[#334155]">Ready to drive cars</h2>
          <button className="flex items-center gap-1 text-[#1d4ed8] font-semibold text-[15px] hover:text-[#1e3a8a] transition-colors">
            View all
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="relative">
          <button className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e2e8f0] shadow-sm items-center justify-center text-[#64748b] hover:bg-[#f8fafc] transition-all z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {cars.map((car) => (
              <div 
                key={car.id} 
                className="min-w-[340px] md:min-w-[380px] flex-1 bg-[#e4ebf3] rounded-[24px] overflow-hidden snap-center relative shadow-sm border border-[#dbe4f0] flex flex-col"
              >
                <div className="relative h-[220px] w-full bg-[#eef4fa] flex items-center pt-8">
                  <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                    <div className="flex gap-2">
                      <div className="bg-white px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-[#ea580c] text-[#ea580c]" />
                        <span className="text-[12px] font-bold text-[#334155]">{car.rating}</span>
                      </div>
                      <div className="bg-white px-3 py-1 rounded-full flex items-center shadow-sm">
                        <span className="text-[12px] font-bold text-[#475569]">{car.availability}</span>
                      </div>
                    </div>
                    <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-[#64748b] hover:text-[#0f172a] transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute left-1 top-5 bottom-0 flex items-center justify-center w-16 z-0">
                    <span className="-rotate-90 text-[30px] font-black text-[#93c5fd] opacity-75 tracking-widest whitespace-nowrap select-none">
                      {car.bgText}
                    </span>
                  </div>

                  <div className="w-full pl-16 pr-4 flex justify-center mt-2 relative z-10">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full max-w-[260px] h-auto object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
                    />
                  </div>
                </div>

                <div className="px-5 py-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-end mb-1">
                      <h3 className="text-[19px] font-bold text-[#0f172a]">{car.name}</h3>
                      <div className="text-right">
                        <span className="text-[20px] font-extrabold text-[#0f172a]">₹{car.price}</span>
                        <span className="text-[11px] font-semibold text-[#64748b] ml-1">per day</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 mb-5">
                      <MapPin className="w-3.5 h-3.5 text-[#334155] fill-[#334155]" />
                      <span className="text-[12.5px] font-semibold text-[#475569]">{car.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Settings2 className="w-3.5 h-3.5 text-[#475569]" />
                        <span className="text-[11px] font-semibold text-[#475569]">{car.specs.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#475569]" />
                        <span className="text-[11px] font-semibold text-[#475569]">{car.specs.seats} Seats</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Snowflake className="w-3.5 h-3.5 text-[#475569]" />
                        <span className="text-[11px] font-semibold text-[#475569]">AC</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="w-3.5 h-3.5 text-[#475569]" />
                        <span className="text-[11px] font-semibold text-[#475569]">{car.specs.fuel}</span>
                      </div>
                    </div>
                    
                    <button 
                      className={`px-5 py-2.5 rounded-[12px] text-[13.5px] font-bold shadow-sm transition-colors ${
                        car.status === 'available' 
                          ? 'bg-[#173f8a] hover:bg-[#1e3a8a] text-white' 
                          : 'bg-[#27272a] hover:bg-[#18181b] text-white'
                      }`}
                    >
                      {car.status === 'available' ? 'Book Now' : 'Sold Out'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e2e8f0] shadow-sm items-center justify-center text-[#64748b] hover:bg-[#f8fafc] transition-all z-10">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center mt-6 mb-12">
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-[#bfdbfe]">
            <div className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white border border-[#93c5fd]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-white border border-[#93c5fd]"></div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-[16px] font-bold text-[#334155] mb-4">Coimbatore Car Rental: Real Time Information</h3>
          
          <div className="bg-[#f8fafc] rounded-[24px] border border-[#f1f5f9] p-6 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
              
              <div className="flex items-center gap-4 flex-1 justify-center lg:justify-start px-4">
                <div className="w-[52px] h-[52px] rounded-full bg-white shadow-sm flex items-center justify-center border border-[#f1f5f9] flex-shrink-0">
                  <BadgeCent className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[22px] font-extrabold text-[#0f172a] leading-tight">₹1500</span>
                  <span className="text-[13px] font-semibold text-[#64748b]">Avg Daily Price</span>
                </div>
              </div>

              <div className="w-full h-px lg:w-px lg:h-12 bg-[#cbd5e1]"></div>

              <div className="flex items-center gap-4 flex-1 justify-center lg:justify-center px-4">
                <div className="w-[52px] h-[52px] rounded-full bg-white shadow-sm flex items-center justify-center border border-[#f1f5f9] flex-shrink-0">
                  <CarFront className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[22px] font-extrabold text-[#0f172a] leading-tight">Swift</span>
                  <span className="text-[13px] font-semibold text-[#64748b]">Most Popular Model</span>
                </div>
              </div>

              <div className="w-full h-px lg:w-px lg:h-12 bg-[#cbd5e1]"></div>

              <div className="flex items-center gap-4 flex-1 justify-center lg:justify-center px-4">
                <div className="w-[52px] h-[52px] rounded-full bg-white shadow-sm flex items-center justify-center border border-[#f1f5f9] flex-shrink-0">
                  <HandCoins className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[22px] font-extrabold text-[#0f172a] leading-tight">₹120 <span className="text-[13px] font-semibold text-[#64748b] font-sans">per hour</span></span>
                  <span className="text-[13px] font-semibold text-[#64748b]">Cheapest Rate</span>
                </div>
              </div>

              <div className="w-full h-px lg:w-px lg:h-12 bg-[#cbd5e1]"></div>

              <div className="flex items-center gap-4 flex-1 justify-center lg:justify-end px-4">
                <div className="w-[52px] h-[52px] rounded-full bg-white shadow-sm flex items-center justify-center border border-[#f1f5f9] flex-shrink-0">
                  <CircleDollarSign className="w-6 h-6 text-[#1e3a8a]" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-[22px] font-extrabold text-[#0f172a] leading-tight">4.5</span>
                    <div className="flex gap-0.5">
                      <Star className="w-3.5 h-3.5 fill-[#ea580c] text-[#ea580c]" />
                      <Star className="w-3.5 h-3.5 fill-[#ea580c] text-[#ea580c]" />
                      <Star className="w-3.5 h-3.5 fill-[#ea580c] text-[#ea580c]" />
                      <Star className="w-3.5 h-3.5 fill-[#ea580c] text-[#ea580c]" />
                      <Star className="w-3.5 h-3.5 fill-[#ea580c] text-[#ea580c]" />
                    </div>
                  </div>
                  <span className="text-[13px] font-semibold text-[#64748b]">Avg Rating all cars</span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
