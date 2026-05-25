import { Youtube, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const navLinks = ['Home', 'FAQs', 'Safety', 'Blog', 'Contact Us'];

const socials = [
  { icon: <Youtube className="w-4 h-4" />, href: '#' },
  { icon: <Facebook className="w-4 h-4" />, href: '#' },
  { icon: <Instagram className="w-4 h-4" />, href: '#' },
  { icon: <Linkedin className="w-4 h-4" />, href: '#' },
  { icon: <Twitter className="w-4 h-4" />, href: '#' }
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
            <div className="relative w-[90px] h-[90px] flex items-center justify-center mb-1">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'transparent',
                  border: '2px dashed rgba(255,255,255,0.35)',
                  borderRadius: '50%'
                }}
              ></div>
              <span className="text-white font-black text-[28px] italic tracking-tight leading-none select-none" style={{ fontFamily: 'Georgia, serif' }}>
                Valam
              </span>
            </div>
            <p className="text-white/50 text-[11px] font-medium tracking-wide mt-1">Self Driving Cars</p>
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

          <div className="flex items-center gap-2.5">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                className="w-[36px] h-[36px] rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white hover:border-white/60 transition-all"
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
