import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-4">
      <div className={`max-w-6xl mx-auto bg-white border border-slate-200 shadow-md shadow-slate-100/40 transition-all duration-300 ${isOpen ? 'rounded-[2rem] py-6 px-6' : 'rounded-full py-2.5 px-4 sm:px-6'}`}>
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <div className="inline-flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-full px-5 py-1">
              <span className="text-xl font-serif font-black italic tracking-tight text-slate-800 leading-none">
                Valam
              </span>
              <span className="text-[6px] uppercase font-bold tracking-[0.2em] text-slate-400 mt-0.5">
                Self Driving Cars
              </span>
            </div>
          </div>

          <div className="hidden md:flex space-x-10 items-center">
            <a href="#" className="relative py-1 text-sm font-semibold text-slate-800 transition-colors">
              Home
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800 rounded-full"></span>
            </a>
            <a href="#" className="relative py-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
              FAQs
            </a>
            <a href="#" className="relative py-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
              Blog
            </a>
            <a href="#" className="relative py-1 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="border border-slate-200 hover:border-slate-800 text-slate-600 hover:text-slate-800 text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200">
              Sign In
            </a>
            <a href="#" className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all duration-200 flex items-center gap-1.5">
              Sign Up
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-50 focus:outline-none transition-colors"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="flex flex-col space-y-4 px-2">
            <a
              href="#"
              className="py-2 text-base font-semibold text-slate-800 border-b border-slate-100"
            >
              Home
            </a>
            <a
              href="#"
              className="py-2 text-base font-medium text-slate-500 hover:text-slate-800 transition-colors border-b border-slate-100"
            >
              FAQs
            </a>
            <a
              href="#"
              className="py-2 text-base font-medium text-slate-500 hover:text-slate-800 transition-colors border-b border-slate-100"
            >
              Blog
            </a>
            <a
              href="#"
              className="py-2 text-base font-medium text-slate-500 hover:text-slate-800 transition-colors border-b border-slate-100"
            >
              Contact Us
            </a>
            <div className="pt-4 flex flex-col space-y-3">
              <a
                href="#"
                className="text-center border border-slate-200 hover:border-slate-800 text-slate-600 hover:text-slate-800 py-3 rounded-full font-semibold transition-all"
              >
                Sign In
              </a>
              <a
                href="#"
                className="text-center bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-full font-semibold shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                Sign Up
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
