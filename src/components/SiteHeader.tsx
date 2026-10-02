import { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Bot, Sparkles, MessageSquare, ChevronUp } from "lucide-react";

interface HeaderProps {
  onBookDemo: () => void;
}

export function SiteHeader({ onBookDemo }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] max-w-7xl z-50 bg-white/90 backdrop-blur-2xl border border-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)] rounded-full transition-all duration-300">
      <div className="px-4 md:px-8 h-14 md:h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group cursor-pointer">
          <img
            src="https://vibe.filesafe.space/1774851885328190062/attachments/de4f9da7-7ebd-4417-81b9-2128bcf87195.webp"
            alt="Logo Usekaiz"
            className="h-7 md:h-9 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Nav matching usekaiz.com header exactly as in Image 1 & 2 */}
        <nav className="hidden lg:flex items-center gap-10 text-sm font-semibold text-slate-800">
          <a href="#features" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            Fonctionnalités
          </a>
          <a href="#agents-showcase" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            Agents IA
          </a>
          <a href="#cas-clients" className="hover:text-primary transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary hover:after:w-full after:transition-all after:duration-300">
            Cas clients
          </a>
        </nav>

        {/* CTA & Mobile trigger */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={onBookDemo}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap py-2 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md shadow-primary/25 hover:-translate-y-0.5 transition-all font-bold text-xs md:text-sm h-9 md:h-11 px-4 md:px-5 cursor-pointer"
          >
            Audit Gratuit
            <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 ml-0.5" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full hover:bg-accent text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-6 pt-3 pb-6 bg-white/95 backdrop-blur-2xl border-t border-border mt-2 rounded-b-3xl shadow-xl flex flex-col gap-4 text-sm font-bold animate-in fade-in slide-in-from-top-2">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary py-2"
          >
            Fonctionnalités
          </a>
          <a
            href="#agents-showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary py-2"
          >
            Agents IA
          </a>
          <a
            href="#cas-clients"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary py-2"
          >
            Cas clients
          </a>
          <a
            href="#contact-expert"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-primary py-2"
          >
            Conseils d'experts
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookDemo();
            }}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground text-center font-extrabold text-sm shadow-md"
          >
            Réserver une démo
          </button>
        </div>
      )}
    </header>
  );
}

export function FloatingWhatsAppButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top button - placed directly above WhatsApp icon matching the image */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white text-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center transition-all duration-300 hover:bg-slate-50 hover:shadow-md active:scale-95 ${
          showTopBtn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
        aria-label="Retourner en haut"
      >
        <ChevronUp className="w-5 h-5 text-slate-800 stroke-[2.5]" />
      </button>

      {/* WhatsApp Pill + Circular button combo matching the image */}
      <a
        href="https://api.whatsapp.com/send?phone=33633673561&text=Bonjour%20!%20J%27aimerais%20en%20savoir%20plus%20sur%20Usekaiz"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02] active:scale-95"
        aria-label="Contacter sur WhatsApp au +33 6 33 67 35 61"
      >
        {/* Left Pill with green status dot and phone number */}
        <div className="bg-white px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100/80 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] inline-block shrink-0" />
          <span className="text-sm sm:text-[15px] font-bold text-slate-900 tracking-tight select-none">
            +33 6 33 67 35 61
          </span>
        </div>

        {/* Circular WhatsApp green button */}
        <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] ring-4 ring-white shadow-[0_4px_20px_rgba(37,211,102,0.3)] flex items-center justify-center shrink-0">
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
