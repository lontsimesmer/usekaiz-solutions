import { Check, X, ArrowRight } from "lucide-react";

interface ComparisonProps {
  onBookDemo: () => void;
}

export function PlatformComparison({ onBookDemo }: ComparisonProps) {
  // Features matrix matching Image 3 & Image 4
  const features = [
    {
      name: "Prospection automatisée 24/7",
      others: false,
      kaiz: true,
    },
    {
      name: "Qualification des leads par IA",
      others: false,
      kaiz: true,
    },
    {
      name: "Relances intelligentes multi-canaux",
      others: "Partiel",
      kaiz: true,
    },
    {
      name: "Synchronisation CRM native",
      others: "Complexe",
      kaiz: true,
    },
    {
      name: "Interactions WhatsApp natives",
      others: false,
      kaiz: true,
    },
    {
      name: "Rapports de performance IA",
      others: false,
      kaiz: true,
    },
    {
      name: "Coût par lead qualifié",
      others: "Élevé",
      kaiz: "-60%",
      badge: true,
    },
  ];

  return (
    <section className="py-14 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header (Image 3) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            Pourquoi choisir Usekaiz ?
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 font-medium">
            La différence entre un outil classique et une équipe d'agents IA.
          </p>
        </div>

        {/* Table Shell (Image 3 & Image 4) */}
        <div className="bg-white rounded-3xl shadow-xl border border-border/80 overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-12 p-4 sm:p-6 border-b border-border/80 text-xs sm:text-sm font-extrabold text-foreground">
            <div className="col-span-6 sm:col-span-6">Fonctionnalité</div>
            <div className="col-span-3 sm:col-span-3 text-center text-muted-foreground font-semibold">
              Autres outils
            </div>
            <div className="col-span-3 sm:col-span-3 text-center text-primary font-black">
              Usekaiz
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-border/60">
            {features.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-12 items-center p-4 sm:p-5 text-xs sm:text-sm hover:bg-slate-50/60 transition-colors"
              >
                <div className="col-span-6 sm:col-span-6 pr-2 font-bold text-foreground">
                  {item.name}
                </div>

                {/* Autres outils column */}
                <div className="col-span-3 sm:col-span-3 flex justify-center text-center">
                  {item.others === false ? (
                    <X className="w-5 h-5 text-rose-400 stroke-[2.5]" />
                  ) : item.others === true ? (
                    <Check className="w-5 h-5 text-emerald-500 stroke-[2.5]" />
                  ) : (
                    <span className="text-xs font-semibold text-muted-foreground">
                      {item.others}
                    </span>
                  )}
                </div>

                {/* Usekaiz column */}
                <div className="col-span-3 sm:col-span-3 flex justify-center text-center">
                  {item.badge ? (
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-primary font-black text-xs sm:text-sm shadow-xs">
                      {item.kaiz}
                    </span>
                  ) : item.kaiz === true ? (
                    <Check className="w-5 h-5 text-primary stroke-[3]" />
                  ) : (
                    <span className="text-xs font-bold text-primary">{item.kaiz}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Footer (Image 4 bottom) */}
          <div className="p-8 sm:p-10 text-center border-t border-border/80 bg-slate-50/40 space-y-4">
            <p className="font-extrabold text-foreground text-base sm:text-lg">
              Ne laissez plus vos concurrents prendre de l'avance avec l'IA.
            </p>
            <div>
              <button
                onClick={onBookDemo}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary hover:bg-primary/95 text-primary-foreground font-extrabold text-sm sm:text-base shadow-lg shadow-primary/25 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                Choisir Usekaiz →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
