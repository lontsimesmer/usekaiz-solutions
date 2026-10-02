export function FounderSection() {
  return (
    <section className="py-12 md:py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 shadow-[0_20px_60px_-15px_rgba(96,22,236,0.07)] border border-slate-100/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left: Founder photo in rounded lavender border card with badge */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] p-2.5 sm:p-3 rounded-[32px] sm:rounded-[36px] bg-[#ede9fe]/60 border border-purple-200/60 shadow-lg">
                <div className="relative aspect-[4/4.6] w-full rounded-[26px] sm:rounded-[28px] overflow-hidden bg-slate-100 shadow-inner">
                  <img
                    src="https://vibe.filesafe.space/1774851885328190062/attachments/fb709667-7ac2-4509-bb5b-ce193ad6953c.jpg"
                    alt="Nathalie Ralaison - Fondatrice & Experte IA Immobilier"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  {/* Floating Founder Badge at bottom left matching Image */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl px-4 py-2.5 shadow-lg border border-slate-100">
                    <div className="font-extrabold text-sm text-slate-900 leading-tight">
                      Nathalie Ralaison
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#6016ec] font-bold">
                      Fondatrice & Experte IA Immobilier
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Narrative text */}
            <div className="lg:col-span-7 space-y-6">
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
      </div>
    </section>
  );
}
