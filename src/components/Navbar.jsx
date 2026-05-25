import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-black tracking-tight text-indigo-600">
              valam
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Home
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              FAQs
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Blog
            </a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Contact Us
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
              Sign In
            </a>
            <a href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:shadow-indigo-100 transition-all">
              Sign Up
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-indigo-600 hover:bg-slate-50 focus:outline-none transition-colors"
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
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-b border-slate-100 shadow-lg">
          <a
            href="#"
            className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
          >
            FAQs
          </a>
          <a
            href="#"
            className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
          >
            Blog
          </a>
          <a
            href="#"
            className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
          >
            Contact Us
          </a>
          <div className="pt-4 pb-2 border-t border-slate-100 flex flex-col space-y-2 px-3">
            <a
              href="#"
              className="text-center py-2.5 rounded-md text-base font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#"
              className="text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2.5 rounded-full font-semibold shadow-sm transition-all"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
