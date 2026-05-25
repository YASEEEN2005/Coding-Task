import { useRef } from 'react';
import { Star, StarHalf, ChevronLeft, ChevronRight } from 'lucide-react';

const brands = [
  { name: 'Honda', img: '01.png' },
  { name: 'MG', img: '02.png' },
  { name: 'Skoda', img: '03.png' },
  { name: 'Maruti Suzuki', img: '04.png' },
  { name: 'Tata', img: '05.png' },
  { name: 'Toyota', img: '06.png' },
  { name: 'Hyundai', img: '07.png' },
  { name: 'Mahindra', img: '08.png' },
  { name: 'Nissan', img: '09.png' }
];

const reviews = [
  {
    name: 'Suresh Kumar',
    avatar: 'https://ui-avatars.com/api/?name=Suresh+Kumar&background=cbd5e1&color=334155&bold=true',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
  },
  {
    name: 'Raj',
    avatar: 'https://ui-avatars.com/api/?name=Raj&background=cbd5e1&color=334155&bold=true',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
  },
  {
    name: 'Priya',
    avatar: 'https://ui-avatars.com/api/?name=Priya&background=cbd5e1&color=334155&bold=true',
    text: 'Excellent service! The car was delivered on time and was in pristine condition. Highly recommend this for weekend getaways.'
  },
  {
    name: 'Vikram',
    avatar: 'https://ui-avatars.com/api/?name=Vikram&background=cbd5e1&color=334155&bold=true',
    text: 'Very transparent pricing. No hidden fees at all. The entire booking process was smooth and the customer support was very helpful.'
  },
  {
    name: 'Anjali',
    avatar: 'https://ui-avatars.com/api/?name=Anjali&background=cbd5e1&color=334155&bold=true',
    text: 'I loved the flexibility of extending my trip. The app makes it so easy to manage bookings on the go. Will definitely use again!'
  }
];

export default function ReviewsAndBrands() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-16 font-sans">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="w-full rounded-[40px] border-[1.5px] border-[#a5c8fb] p-6 lg:p-8 relative flex flex-col mb-16 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-stretch">
            
            <div className="bg-[#f8fafc] rounded-[32px] p-6 lg:p-8 flex flex-col sm:flex-row items-center sm:items-start justify-between w-full lg:w-[420px] shrink-0 gap-8 sm:gap-4">
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                <h3 className="text-[18px] font-extrabold text-[#1f2937] mb-2">Happy customers</h3>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-[48px] font-black text-[#111827] leading-none tracking-tight">4.8</span>
                  <span className="text-[18px] font-bold text-[#64748b] mb-1.5">/5</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <Star className="w-4 h-4 fill-[#ea580c] text-[#ea580c]" />
                  <Star className="w-4 h-4 fill-[#ea580c] text-[#ea580c]" />
                  <Star className="w-4 h-4 fill-[#ea580c] text-[#ea580c]" />
                  <Star className="w-4 h-4 fill-[#ea580c] text-[#ea580c]" />
                  <StarHalf className="w-4 h-4 fill-[#ea580c] text-[#ea580c]" />
                </div>
                <span className="text-[14px] font-semibold text-[#64748b]">120 ratings</span>
              </div>
              
              <div className="flex flex-col gap-3 w-full max-w-[160px]">
                {[
                  { star: 5, pct: 85 },
                  { star: 4, pct: 60 },
                  { star: 3, pct: 35 },
                  { star: 2, pct: 10 },
                  { star: 1, pct: 0 }
                ].map(row => (
                  <div key={row.star} className="flex items-center gap-3">
                    <span className="text-[13px] font-bold text-[#64748b] w-11 shrink-0">{row.star} Star</span>
                    <div className="h-[5px] flex-1 bg-[#e2e8f0] rounded-full overflow-hidden">
                      <div className="h-full bg-[#ea580c] rounded-full" style={{ width: `${row.pct}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex-1 flex flex-col min-w-0 w-full">
              <div className="relative flex items-center w-full">
                <button 
                  onClick={() => scroll('left')}
                  className="hidden lg:flex absolute left-[-18px] z-10 w-[38px] h-[38px] bg-white border border-[#e2e8f0] rounded-full items-center justify-center shadow-sm text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div 
                  ref={scrollRef}
                  className="flex gap-4 lg:gap-6 overflow-x-auto snap-x w-full py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {reviews.map(review => (
                    <div key={review.name} className="bg-[#f8fafc] rounded-[28px] p-6 w-[280px] sm:w-[320px] shrink-0 snap-center shadow-sm border border-[#f1f5f9]">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full overflow-hidden shrink-0">
                          <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="text-[15px] font-bold text-[#0f172a] leading-none mb-1.5">{review.name}</h4>
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#ea580c] text-[#ea580c]" />)}
                          </div>
                        </div>
                      </div>
                      <p className="text-[13px] text-[#475569] leading-relaxed font-medium">
                        {review.text}
                      </p>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => scroll('right')}
                  className="hidden lg:flex absolute right-[-18px] z-10 w-[38px] h-[38px] bg-white border border-[#e2e8f0] rounded-full items-center justify-center shadow-sm text-[#64748b] hover:bg-[#f8fafc] hover:text-[#0f172a] transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex justify-center mt-6 w-full">
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-[#bfdbfe]">
                  <div className="w-[9px] h-[9px] rounded-full bg-[#3b82f6] shadow-sm"></div>
                  <div className="w-[9px] h-[9px] rounded-full bg-white border border-[#bfdbfe]"></div>
                  <div className="w-[9px] h-[9px] rounded-full bg-white border border-[#bfdbfe]"></div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        <div className="w-full">
          <h3 className="text-[17px] font-bold text-[#334155] mb-5 px-1">Popular brands</h3>
          <div className="flex gap-3 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden snap-x px-1">
            {brands.map(brand => (
              <div key={brand.name} className="w-[124px] h-[96px] bg-white border border-[#e2e8f0] rounded-[24px] flex flex-col items-center justify-center shrink-0 snap-start shadow-[0_2px_8px_rgba(0,0,0,0.03)] transition-all hover:border-[#bfdbfe] hover:shadow-md cursor-pointer">
                <div className="h-[46px] w-full flex items-center justify-center mb-1">
                  <img 
                    src={`/Brand images/${brand.img}`} 
                    alt={brand.name} 
                    className="h-full w-auto max-w-[85%] object-contain" 
                  />
                </div>
                <span className="text-[11px] font-bold text-[#475569]">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
