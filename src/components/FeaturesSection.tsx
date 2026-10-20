import { useState, useEffect, type MouseEvent } from "react";
import { ArrowRight, Clock, PhoneCall, Zap, MessageSquare, Check, X } from "lucide-react";

interface FeaturesProps {
  onBookDemo: () => void;
}

export function FeaturesSection({ onBookDemo }: FeaturesProps) {
  // Notification pop-up state ("Nouveau contact 🎯 Aria a identifié un vendeur potentiel sur SeLoger.")
  const [showNotification, setShowNotification] = useState(true);

  // Auto-dismiss or allow user to close
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSummaryCardMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const pointerX = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const pointerY = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));

    event.currentTarget.style.setProperty("--card-rotate-x", `${(0.5 - pointerY) * 10}deg`);
    event.currentTarget.style.setProperty("--card-rotate-y", `${(pointerX - 0.5) * 10}deg`);
    event.currentTarget.style.setProperty("--card-rotate-z", `${(pointerX - 0.5) * 4}deg`);
  };

  const handleSummaryCardMouseLeave = (event: MouseEvent<HTMLDivElement>) => {
    event.currentTarget.style.removeProperty("--card-rotate-x");
    event.currentTarget.style.removeProperty("--card-rotate-y");
    event.currentTarget.style.removeProperty("--card-rotate-z");
  };

  return (
    <section id="features" className="py-10 md:py-16 relative z-10 overflow-hidden bg-white/40">
      <div className="container mx-auto px-4">
        {/* Section Header (Image 5 exact text) */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-foreground tracking-tight mb-5 leading-tight">
            Un agent immobilier perd en moyenne <br className="hidden sm:inline" />
            3h30 par jour sur des tâches que l'IA <br className="hidden sm:inline" />
            peut faire.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-medium max-w-2xl mx-auto">
            Prospection manuelle, relances oubliées, leads non qualifiés... Usekaiz automatise tout
            pour vous.
          </p>
        </div>

        {/* 3 cards: Pain points & Usekaiz solution (Image 5) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 md:mb-28">
          {/* Card 1: Temps perdu */}
          <div
            className="feature-summary-card-wrapper"
            onMouseMove={handleSummaryCardMouseMove}
            onMouseLeave={handleSummaryCardMouseLeave}
          >
            <div className="feature-summary-card bg-white rounded-3xl p-7 md:p-8 shadow-md border-2 border-transparent flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center font-bold mb-6">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-xl text-foreground mb-3">Temps perdu</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Des heures passées à qualifier des contacts froids au lieu de visiter et signer.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Relances oubliées */}
          <div
            className="feature-summary-card-wrapper"
            onMouseMove={handleSummaryCardMouseMove}
            onMouseLeave={handleSummaryCardMouseLeave}
          >
            <div className="feature-summary-card bg-white rounded-3xl p-7 md:p-8 shadow-md border-2 border-transparent flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-500 flex items-center justify-center font-bold mb-6">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="font-extrabold text-xl text-foreground mb-3">Relances oubliées</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Des prospects qui vous échappent car vous ne pouvez pas être partout à la fois.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: La solution Usekaiz */}
          <div
            className="feature-summary-card-wrapper"
            onMouseMove={handleSummaryCardMouseMove}
            onMouseLeave={handleSummaryCardMouseLeave}
          >
            <div className="feature-summary-card bg-white rounded-3xl p-7 md:p-8 shadow-md border-2 border-purple-200 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-4 right-4 text-purple-400">
                <Zap className="w-5 h-5 fill-purple-200 text-primary" />
              </div>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-primary flex items-center justify-center font-bold mb-6">
                  <Zap className="w-6 h-6 fill-primary" />
                </div>
                <h3 className="font-extrabold text-xl text-primary mb-3">La solution Usekaiz</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Laissez nos agents IA s'occuper du travail chronophage. Concentrez-vous sur
                  l'humain.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 1 Deep-Dive: Prospection automatisée multi-sources (Image 1) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-24 md:mb-32">
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
              Prospection automatisée multi-sources
            </h3>
            <p className="text-foreground/75 text-base sm:text-lg leading-relaxed">
              Connectez vos portails immobiliers, réseaux sociaux et bases de données. Notre IA
              identifie et contacte automatiquement les meilleurs prospects selon vos critères.
            </p>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-primary text-xs sm:text-sm font-bold shadow-xs">
                <Zap className="w-4 h-4" /> Augmente le volume de leads de 43%
              </span>
            </div>
            <div className="pt-2">
              <button
                onClick={onBookDemo}
                className="inline-flex items-center gap-2 text-primary font-bold text-sm sm:text-base hover:underline group cursor-pointer"
              >
                En savoir plus sur la prospection
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Interactive Card: Campagne Active (Image 1) */}
          <div
            className="lg:col-span-6 flex-1 order-1 md:order-2 relative feature-summary-card-wrapper"
            onMouseMove={handleSummaryCardMouseMove}
            onMouseLeave={handleSummaryCardMouseLeave}
          >
            <div className="feature-summary-card feature-summary-card-tilted bg-white p-8 rounded-3xl shadow-2xl border-2 border-border/80 relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-6">
                <div className="w-12 h-12 rounded-full bg-purple-100 text-primary flex items-center justify-center font-bold shadow-inner">
                  <div className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-foreground">Campagne Active</h4>
                  <p className="text-xs text-muted-foreground font-semibold">
                    Recherche mandats exclusifs
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-2 mb-2">
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-all duration-1000"
                    style={{ width: "71%" }}
                  />
                </div>
                <div className="flex items-center justify-between text-xs font-bold text-muted-foreground pt-1">
                  <span>Leads contactés</span>
                  <span className="text-foreground font-black">1420 / 2000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2 Deep-Dive: Qualification intelligente des leads (Image 1 bottom) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left card: Lead scores preview */}
          <div
            className="lg:col-span-6 order-2 lg:order-1 flex-1 relative feature-summary-card-wrapper"
            onMouseMove={handleSummaryCardMouseMove}
            onMouseLeave={handleSummaryCardMouseLeave}
          >
            <div className="feature-summary-card feature-summary-card-negative-tilt bg-white p-8 rounded-3xl border-2 border-transparent space-y-3.5">
              <div className="bg-white rounded-2xl p-5 shadow-lg border border-purple-200">
                <div className="bg-purple-100/70 text-primary px-3.5 py-1.5 rounded-lg text-xs font-black inline-block mb-2">
                  Score du lead : 95/100
                </div>
                <p className="text-xs sm:text-sm font-semibold text-foreground">
                  Projet d'achat validé. Financement accordé. Recherche active.
                </p>
              </div>

              <div className="bg-white/80 rounded-2xl p-5 shadow-sm border border-border/70 opacity-70">
                <div className="bg-slate-100 text-muted-foreground px-3.5 py-1.5 rounded-lg text-xs font-bold inline-block mb-2">
                  Score du lead : 40/100
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Curieux. Pas de financement. Projet à 12 mois.
                </p>
              </div>
            </div>
          </div>

          {/* Right text: Qualification intelligente */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight">
              Qualification intelligente des leads
            </h3>
            <p className="text-foreground/75 text-base sm:text-lg leading-relaxed">
              Fini les appels inutiles. L'agent IA dialogue avec vos prospects, comprend leur
              projet, vérifie leur budget et ne vous transfère que les profils chauds.
            </p>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-primary text-xs sm:text-sm font-bold shadow-xs">
                <Clock className="w-4 h-4" /> Réduit le temps de qualification de 70%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating bottom-left notification badge as seen in Image 2 */}
      {showNotification && (
        <div className="fixed bottom-6 left-6 z-40 bg-white/95 backdrop-blur-md border border-purple-200 shadow-2xl rounded-2xl p-3.5 max-w-xs animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-0.5">
              <p className="text-xs font-extrabold text-foreground flex items-center gap-1.5">
                Nouveau contact 🎯
              </p>
              <p className="text-[11px] text-muted-foreground leading-snug">
                Aria a identifié un vendeur potentiel sur SeLoger.
              </p>
            </div>
            <button
              onClick={() => setShowNotification(false)}
              className="text-muted-foreground hover:text-foreground p-0.5 rounded-md hover:bg-slate-100 cursor-pointer"
              aria-label="Fermer la notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
