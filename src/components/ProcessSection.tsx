interface ProcessSectionProps {
  onBookDemo: () => void;
}

export function ProcessSection({ onBookDemo }: ProcessSectionProps) {
  const steps = [
    {
      num: "01",
      title: "Connectez votre écosystème",
      desc: "Liez votre CRM, vos portails immobiliers et vos réseaux sociaux en quelques clics. Nous vous accompagnons pas à pas.",
    },
    {
      num: "02",
      title: "Activez votre premier Agent acquéreurs en 24h",
      desc: "Dès validation, votre premier agent IA est déployé et commence à qualifier vos acheteurs en temps réel.",
    },
    {
      num: "03",
      title: "Déployez progressif",
      desc: "Les 5 autres agents sont activés au fil des 3 semaines pour assurer une transition fluide et maîtrisée.",
    },
    {
      num: "04",
      title: "Formez votre équipe",
      desc: "Nous formons vos collaborateurs pour qu'ils tirent le maximum de l'IA et se concentrent sur les ventes.",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Title exact copy from Image 3 */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Déploiement progressif sur 3 semaines. Accompagnement inclus.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Votre premier agent est actif en 24h. Nous installons les suivants progressivement et
            formons votre équipe pour garantir votre succès.
          </p>
        </div>

        {/* 4 Cards with horizontal connector line exactly matching Image 3 */}
        <div className="relative">
          {/* Connector line passing behind cards */}
          <div className="hidden lg:block absolute top-[50px] left-[12%] right-[12%] h-[1.5px] bg-purple-200/80 -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                {/* Square pill number box with subtle rounded corners */}
                <div
                  className={`w-24 h-24 sm:w-26 sm:h-26 rounded-[22px] bg-white border flex items-center justify-center mb-6 shadow-[0_8px_24px_rgba(96,22,236,0.06)] ${
                    idx === 1
                      ? "border-purple-600 shadow-[0_8px_30px_rgba(96,22,236,0.14)]"
                      : "border-slate-100"
                  }`}
                >
                  <span
                    className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                      idx === 1 ? "text-purple-600" : "text-purple-400/90"
                    }`}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-slate-900 text-base sm:text-lg mb-2.5 max-w-[220px] leading-snug">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-[240px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
