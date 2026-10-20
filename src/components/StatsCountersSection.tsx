export function StatsCountersSection() {
  return (
    <section className="py-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border/40">
            <div className="text-center group cursor-default pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold text-[#9B30FF] mb-1 transition-transform group-hover:scale-110 duration-300">
                15k
              </div>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
                Leads qualifiés/mois
              </p>
            </div>
            <div className="text-center group cursor-default pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold text-[#5B8AFF] mb-1 transition-transform group-hover:scale-110 duration-300">
                3h30
              </div>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
                Gagnées par jour
              </p>
            </div>
            <div className="text-center group cursor-default pt-4 md:pt-0">
              <div className="text-3xl md:text-4xl font-extrabold text-[#00C896] mb-1 transition-transform group-hover:scale-110 duration-300">
                98%
              </div>
              <p className="text-xs sm:text-sm font-semibold text-muted-foreground">
                Taux d'ouverture
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
