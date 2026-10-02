import { Zap, Sliders, HelpCircle, Calendar as CalendarIcon } from "lucide-react";

const WIDGET_URL = "https://api.leadconnectorhq.com/widget/bookings/usekaiz-solution";

export function DemoBookingSection() {
  return (
    <section id="demo-booking" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Réservez votre démo personnalisée
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal max-w-2xl mx-auto leading-relaxed">
            En 30 minutes, nos experts vous montrent comment Usekaiz transforme votre agence.
            Gratuit et sans engagement.
          </p>
        </div>

        {/* 3 Purple Badges row */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#EDE7FB] text-purple-700 text-xs sm:text-sm font-bold border border-purple-200/50">
            <Zap className="w-4 h-4 text-purple-600" />
            <span>Démo des 7 agents IA</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#EDE7FB] text-purple-700 text-xs sm:text-sm font-bold border border-purple-200/50">
            <Sliders className="w-4 h-4 text-purple-600" />
            <span>Configuration de votre agence</span>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#EDE7FB] text-purple-700 text-xs sm:text-sm font-bold border border-purple-200/50">
            <HelpCircle className="w-4 h-4 text-purple-600" />
            <span>Questions / Réponses experts</span>
          </div>
        </div>

        {/* Direct embed of the booking widget — exact calendar as configured in the account */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_20px_60px_-15px_rgba(96,22,236,0.1)] border border-slate-200/80 overflow-hidden">
          <iframe
            src={WIDGET_URL}
            title="Réservation de démonstration Usekaiz"
            className="w-full"
            style={{ height: "820px", border: "none", minHeight: "740px" }}
            loading="lazy"
            scrolling="no"
            allow="clipboard-write; fullscreen"
          />
        </div>

        {/* Sub-card guarantees row */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
          <CalendarIcon className="w-4 h-4" />
          <span className="text-purple-700 font-semibold">Confirmation immédiate par email</span>
          <span className="text-slate-300">·</span>
          <span>Aucune vente forcée</span>
          <span className="text-slate-300">·</span>
          <span>Annulation libre</span>
        </div>

        {/* Response in max 2h badge with avatars */}
        <div className="mt-4 flex items-center justify-center gap-2.5">
          <div className="flex -space-x-2 overflow-hidden">
            <img
              src="https://vibe.filesafe.space/1790856565422627225/assets/cdb37c96-0af4-4408-aef3-0ac88f4b8c3a.jpg"
              alt="Conseiller Usekaiz"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
            />
            <img
              src="https://vibe.filesafe.space/1790856565422627225/assets/bb2173a8-a44c-4e2a-b495-0e3dec141b44.jpg"
              alt="Conseillère Usekaiz"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-white object-cover"
            />
          </div>
          <p className="text-xs font-semibold text-slate-700">
            L'équipe Usekaiz vous répondra sous{" "}
            <span className="text-[#6016ec] font-bold">2h maximum</span>
          </p>
        </div>
      </div>
    </section>
  );
}
