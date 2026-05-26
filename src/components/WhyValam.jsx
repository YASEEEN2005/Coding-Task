import {
  Compass,
  CarFront,
  Home,
  BadgeCent,
  BadgePercent
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Book with flexibility",
    desc: "Filter for car offers with free cancellation, unlimited mileage, and more.",
    icon: <Compass className="w-6 h-6 text-[#1e40af] relative z-10" />
  },
  {
    id: 2,
    title: "Well maintained cars",
    desc: "Regular service & maintenance; Inspected before each trip",
    icon: <CarFront className="w-6 h-6 text-[#1e40af] relative z-10" />
  },
  {
    id: 3,
    title: "Home delivery & return",
    desc: "On-time doorstep service at your preferred location and time.",
    icon: <Home className="w-6 h-6 text-[#1e40af] relative z-10" />
  },
  {
    id: 4,
    title: "Price transparency",
    desc: "See the total cost up front so there are no surprises.",
    icon: <BadgeCent className="w-6 h-6 text-[#1e40af] relative z-10" />
  }
];

export default function WhyValam() {
  return (
    <section className="w-full bg-white py-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6">
          <h2 className="text-[20px] font-bold text-[#1e293b]">Why Valam?</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {features.map((feature) => (
            <div key={feature.id} className="bg-[#f0f6ff] rounded-2xl p-4 flex gap-4 w-full items-start group hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default">
              <div className="w-[52px] h-[52px] rounded-[14px] bg-[#dbeafe] group-hover:bg-[#bfdbfe] transition-colors flex items-center justify-center shrink-0 relative">
                <div className="absolute top-2 left-2 w-4 h-4 bg-blue-400 rounded-full blur-[8px] opacity-70"></div>
                {feature.icon}
              </div>
              <div className="flex flex-col pt-1">
                <h4 className="text-[13px] font-bold text-[#0f172a] leading-tight mb-1">{feature.title}</h4>
                <p className="text-[11px] font-medium text-[#64748b] leading-[15px]">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="lg:w-[40%] bg-[#f8fafc] rounded-[40px] p-10 lg:p-12 flex flex-col justify-center shadow-sm h-auto min-h-[320px]">
            <h2 className="text-[#173f8a] text-[26px] lg:text-[30px] font-black leading-[1.1] mb-5 tracking-wide uppercase">
              LET'S TRAVEL<br/>TOGETHER!
            </h2>
            <p className="text-[#475569] text-[14px] lg:text-[15px] font-semibold leading-relaxed mb-10 max-w-[280px]">
              With Valam, every mile turns into a personal adventure on the road.
            </p>
            <button className="bg-[#173f8a] text-white font-bold text-[14px] px-7 py-3.5 rounded-full hover:bg-[#1e3a8a] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 w-fit shadow-md">
              Book Us For Safety Ride
            </button>
          </div>

          <div className="lg:w-[60%] bg-[#f8fafc] rounded-[40px] border-[1.5px] border-[#a5c8fb] p-8 lg:p-12 flex flex-col justify-center relative shadow-sm overflow-hidden min-h-[320px] group cursor-default">
            
            <div className="relative z-20 max-w-full lg:max-w-[50%]">
              <div className="flex items-center gap-2 text-[#475569] mb-4">
                <CarFront className="w-4 h-4" />
                <span className="text-[12px] font-bold tracking-wide">Ride safe with Valam</span>
              </div>
              
              <h3 className="text-[20px] lg:text-[22px] font-extrabold text-[#0f172a] leading-[1.3] mb-6">
                Drive into Deals & Enjoy Exclusive Discounts – Limited Time Offer
              </h3>
              
              <div className="flex items-center gap-2 text-[#173f8a] font-black text-[22px] lg:text-[24px] mb-8">
                <BadgePercent className="w-6 h-6 fill-[#173f8a] text-white" />
                Get 15% To 20% OFF
              </div>
              
              <button className="bg-[#173f8a] text-white font-bold text-[14px] px-7 py-3.5 rounded-full hover:bg-[#1e3a8a] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 w-fit shadow-md">
                To Know More Offers
              </button>
            </div>

            <div className="hidden lg:block absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] z-10 pointer-events-none">
              <img 
                src="/Car images/mahindra.png" 
                alt="Silver SUV" 
                className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] scale-[.8] group-hover:scale-[.85] transition-transform duration-700" 
              />
            </div>

            <div className="lg:hidden mt-10 w-full flex justify-center relative z-10 pointer-events-none">
              <img 
                src="/Car images/mahindra.png" 
                alt="Silver SUV" 
                className="w-full max-w-[320px] h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-700" 
              />
            </div>
            
            <svg 
              className="hidden lg:block absolute top-0 right-0 w-[550px] h-[380px] z-0 pointer-events-none" 
              viewBox="0 0 550 380" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M 0 0 C 275 0, 550 160, 550 320 L 550 0 Z" 
                fill="white" 
              />
              <path 
                d="M 0 0 C 275 0, 550 160, 550 320" 
                stroke="#a5c8fb" 
                strokeWidth="1.5" 
              />
            </svg>

          </div>
        </div>

      </div>
    </section>
  );
}
