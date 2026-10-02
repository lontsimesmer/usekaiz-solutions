import { Star } from "lucide-react";
import { PRESS_LOGOS } from "../data/agents";

export function TestimonialsAndPress() {
  // Testimonials matching Image 2 exact text
  const testimonials = [
    {
      quote:
        "Usekaiz est devenu un véritable partenaire stratégique. Le système répond aux acquéreurs en un temps record. Mes leads ont augmenté de 43% en 2 mois.",
      author: "Matthieu B.",
      role: "Directeur d'agence - Paris",
      initial: "M",
    },
    {
      quote:
        "Un vrai souffle d'air frais dans mon quotidien. Les rendez-vous sont pris selon mes dispos. Résultat : La charge mentale a drastiquement diminué.",
      author: "Hanan C.",
      role: "Conseillère immobilier - Igny",
      initial: "H",
    },
    {
      quote:
        "Ce que j'apprécie particulièrement, c'est leur système d'avis automatique. Cela m'a permis de générer 20+ avis positifs en quelques semaines.",
      author: "Sylvie C.",
      role: "Directrice d'agence - Bordeaux",
      initial: "S",
    },
  ];

  return (
    <section id="cas-clients" className="py-14 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header (Image 2) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
            Ils ont transformé leur agence avec Usekaiz.
          </h2>
        </div>

        {/* 3 cards matching Image 2 visual styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 md:p-8 shadow-xl border border-purple-200/80 hover:border-primary transition-all flex flex-col justify-between"
            >
              <div>
                {/* Stylized Double Quotes icon in primary purple */}
                <div className="text-primary font-serif font-black text-4xl leading-none mb-4 select-none opacity-80">
                  ““
                </div>
                <p className="text-sm sm:text-base text-foreground font-medium leading-relaxed mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-4 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-purple-100 text-primary font-black flex items-center justify-center text-sm shadow-xs">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-foreground">{item.author}</h4>
                  <p className="text-xs text-muted-foreground font-semibold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press logos (Image 3 top) */}
        <div className="pt-8">
          <h3 className="text-center text-2xl sm:text-3xl font-black text-foreground mb-10 tracking-tight">
            Ils parlent de nous
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
            {PRESS_LOGOS.map((press, i) => (
              <div key={i} className="transition-all hover:scale-105">
                <img
                  src={press.src}
                  alt={press.name}
                  className="max-h-24 max-w-[130px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
