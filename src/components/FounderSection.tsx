import { useState } from "react";

export function FounderSection() {
  const [showAlternatePhoto, setShowAlternatePhoto] = useState(false);

  return (
    <section className="py-10 md:py-16 relative z-10 bg-white overflow-hidden border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left: Founder photo in rounded lavender border card with badge */}
          <div className="w-full lg:w-1/3 relative mx-auto max-w-sm">
            <div className="absolute inset-0 bg-primary/10 rounded-[3rem] transform rotate-3 scale-105" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
              <button
                type="button"
                onClick={() => setShowAlternatePhoto((showAlternate) => !showAlternate)}
                aria-label={
                  showAlternatePhoto
                    ? "Afficher la photo principale de Nathalie Ralaison"
                    : "Afficher l'autre photo de Nathalie Ralaison"
                }
                className="block w-full cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary"
              >
                <img
                  src={
                    showAlternatePhoto
                      ? "/founder-nathalie-variation.png"
                      : "https://vibe.filesafe.space/1774851885328190062/attachments/fb709667-7ac2-4509-bb5b-ce193ad6953c.jpg"
                  }
                  alt="Nathalie Ralaison - Fondatrice & Experte IA Immobilier"
                  className="w-full h-auto object-cover aspect-[4/5]"
                  loading="lazy"
                />
              </button>
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-lg shadow-lg border border-white">
                <div className="font-bold text-lg text-foreground">Nathalie Ralaison</div>
                <div className="text-sm text-primary font-medium">
                  Fondatrice & Experte IA Immobilier
                </div>
              </div>
            </div>
          </div>

          {/* Right: Narrative text */}
          <div className="w-full lg:w-2/3 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
              L'humain au cœur de <br />
              <span className="text-[#6016ec]">l'automatisation.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-normal leading-relaxed">
              Après avoir passé 15 ans sur le terrain dans la transaction immobilière, Nathalie
              Ralaison a fait un constat simple : les agents immobiliers passent trop de temps sur
              des tâches répétitives et pas assez sur le terrain. Elle a elle-même vécu toutes ces
              problématiques métier.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-slate-500 font-normal leading-relaxed">
              C'est ainsi qu'est né Usekaiz. L'objectif n'est pas de remplacer l'agent immobilier,
              mais de lui donner les meilleurs outils grâce à l'IA pour qu'il puisse se concentrer
              sur ce qui compte vraiment : la relation client et la conclusion des ventes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
