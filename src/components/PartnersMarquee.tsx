import { PARTNER_LOGOS } from "../data/agents";

export function PartnersMarquee() {
  return (
    <section className="py-8 md:py-12 relative z-10">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xs md:text-sm font-bold text-muted-foreground uppercase tracking-widest mb-8">
          Ils nous font confiance dans toute la France
        </h2>
        <div
          className="group flex overflow-hidden relative w-full"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
            <div className="flex w-max items-center justify-around gap-12 md:gap-20 px-6 md:px-10">
              {PARTNER_LOGOS.map((partner, i) => (
                <div
                  key={i}
                  className="h-10 md:h-14 flex items-center justify-center transition-all opacity-80 hover:opacity-100"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="h-10 md:h-14 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Duplicated for seamless infinite marquee loop */}
            <div className="flex w-max items-center justify-around gap-12 md:gap-20 px-6 md:px-10">
              {PARTNER_LOGOS.map((partner, i) => (
                <div
                  key={`dup-${i}`}
                  className="h-10 md:h-14 flex items-center justify-center transition-all opacity-80 hover:opacity-100"
                >
                  <img
                    src={partner.src}
                    alt={partner.name}
                    className="h-10 md:h-14 object-contain"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
