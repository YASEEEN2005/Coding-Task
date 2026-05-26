import { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, ChevronRight, ChevronLeft, MapPin, Star } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "Is there a speed limit?",
    answer: "Valam allows up to 125 km/hr. However it is 80 km/hr in a few cities where some cars might be equipped with speed governors as per government directives. Revv strictly advises to follow local speed limits."
  },
  {
    id: 2,
    question: "What is the minimum age to hire a car?",
    answer: "You must be at least 21 years old to rent a car with us."
  },
  {
    id: 3,
    question: "Booking criteria & documents?",
    answer: "You need a valid driving license, an ID proof, and a credit card for the security deposit."
  },
  {
    id: 4,
    question: "Can I extend/ cancel/ modify?",
    answer: "Yes, you can modify or cancel your booking through our app or website up to 24 hours before the pickup time."
  }
];

const trips = [
  {
    id: 1,
    title: "Gedee Car Museum",
    location: "Race Course, Coimbatore...",
    rating: "4.5",
    image: "1.png"
  },
  {
    id: 2,
    title: "Adiyogi the source of yoga",
    location: "Ishana Vihar, Coimbatore...",
    rating: "4.5",
    image: "2.png"
  },
  {
    id: 3,
    title: "Velliangiri Hills",
    location: "Vellingiri hills, Coimbatore...",
    rating: "4.6",
    image: "3.png"
  },
  {
    id: 4,
    title: "Marudhamalai hill temple",
    location: "Marudhamalai, Coimba...",
    rating: "4.8",
    image: "4.png"
  },
  {
    id: 5,
    title: "Kovai kondattam",
    location: "Water park in Coimbatore..",
    rating: "3.8",
    image: "5.png"
  }
];

export default function FaqAndTrip() {
  const [openFaq, setOpenFaq] = useState(1);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section className="w-full bg-white py-12 lg:py-16 font-sans">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[20px] lg:text-[22px] font-bold text-[#1f2937]">FAQs</h2>
            <a href="#" className="flex items-center gap-1 text-[#173f8a] font-bold text-[14px] hover:underline">
              View all <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map(faq => (
              <div 
                key={faq.id} 
                className="w-full bg-[#f8fafc] rounded-[16px] px-6 py-4 cursor-pointer transition-all hover:bg-[#f1f5f9]"
                onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-[15px] font-bold text-[#334155]">{faq.question}</h4>
                  {openFaq === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-[#64748b]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#64748b]" />
                  )}
                </div>
                {openFaq === faq.id && (
                  <p className="mt-3 text-[14px] text-[#64748b] leading-relaxed pr-6 lg:pr-10">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="w-full bg-[#f0f6fc] py-12 lg:py-16 font-sans">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[20px] lg:text-[22px] font-bold text-[#1f2937]">Where to next vacation trip?</h2>
            <a href="#" className="flex items-center gap-1 text-[#173f8a] font-bold text-[14px] hover:underline">
              View all <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative flex flex-col min-w-0 w-full">
            <div className="relative flex items-center w-full">
              <button 
                onClick={() => scroll('left')}
                className="hidden lg:flex absolute left-[-20px] z-10 w-[42px] h-[42px] bg-white border border-[#e2e8f0] rounded-full items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div 
                ref={scrollRef}
                className="flex gap-4 lg:gap-6 overflow-x-auto snap-x w-full py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              >
                {trips.map(trip => (
                  <div key={trip.id} className="bg-white rounded-[24px] w-[260px] shrink-0 snap-center shadow-sm overflow-hidden border border-[#e2e8f0] flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer group">
                    <div className="relative w-full h-[150px] bg-gray-200 overflow-hidden">
                      <img src={`/Trip images/${trip.image}`} alt={trip.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
                        <Star className="w-3.5 h-3.5 fill-[#ea580c] text-[#ea580c]" />
                        <span className="text-[12px] font-bold text-[#334155]">{trip.rating}</span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col gap-2 bg-white">
                      <h4 className="text-[15px] font-bold text-[#1f2937] truncate">{trip.title}</h4>
                      <div className="flex items-center gap-1.5 text-[#64748b]">
                        <MapPin className="w-4 h-4 shrink-0" />
                        <span className="text-[12px] font-medium truncate">{trip.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => scroll('right')}
                className="hidden lg:flex absolute right-[-20px] z-10 w-[42px] h-[42px] bg-white border border-[#e2e8f0] rounded-full items-center justify-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex justify-center mt-6 w-full">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#bfdbfe] bg-white shadow-sm">
                <div className="w-[9px] h-[9px] rounded-full bg-[#3b82f6] shadow-sm"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-white border border-[#bfdbfe]"></div>
                <div className="w-[9px] h-[9px] rounded-full bg-white border border-[#bfdbfe]"></div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
