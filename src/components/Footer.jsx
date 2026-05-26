const navLinks = ['Home', 'FAQs', 'Safety', 'Blog', 'Contact Us'];

const socials = [
  {
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M23 7s-.3-1.9-1.1-2.7c-1.1-1.1-2.3-1.1-2.8-1.2C16.3 3 12 3 12 3s-4.3 0-7.1.1c-.6.1-1.7.1-2.8 1.2C1.3 5.1 1 7 1 7S.7 9.1.7 11.2v2c0 2 .3 4.1.3 4.1s.3 1.9 1.1 2.7c1.1 1.1 2.5 1.1 3.1 1.2C7.2 21.3 12 21.3 12 21.3s4.3 0 7.1-.2c.6-.1 1.7-.1 2.8-1.2.8-.8 1.1-2.7 1.1-2.7s.3-2.1.3-4.1v-2C23.3 9.1 23 7 23 7zm-13.5 8.5v-7l6.4 3.5-6.4 3.5z"/>
      </svg>
    )
  },
  {
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    )
  },
  {
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
      </svg>
    )
  },
  {
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    )
  },
  {
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
      </svg>
    )
  }
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0d1f5c] font-sans relative overflow-hidden">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1a3a9e] opacity-20 blur-[120px]"></div>
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#1a3a9e] opacity-10 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-10 lg:py-8">

          <div className="flex flex-col items-center lg:items-start">
            <img src="/images/footer logo.png" alt="Valam Logo" className="h-[70px] lg:h-[90px] w-auto object-contain" />
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 lg:gap-x-10">
            {navLinks.map(link => (
              <a
                key={link}
                href="#"
                className="text-white/85 text-[14px] font-medium hover:text-white transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="bg-white rounded-full px-5 py-2.5 flex items-center gap-3 shadow-md">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-[32px] h-[32px] rounded-full bg-[#2563eb] flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>

        </div>

        <div className="relative z-10 border-t border-white/10 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <a href="#" className="text-white/55 text-[12px] font-medium hover:text-white/80 transition-colors">Privacy</a>
            <span className="text-white/30 text-[12px]">|</span>
            <a href="#" className="text-white/55 text-[12px] font-medium hover:text-white/80 transition-colors">Terms & Conditions</a>
          </div>
          <p className="text-white/55 text-[12px] font-medium">&#169;2024 Valam</p>
        </div>

      </div>

    </footer>
  );
}
