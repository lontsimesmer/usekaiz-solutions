import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "C'est quoi Usekaiz et comment ça fonctionne ?",
      a: "Usekaiz est une plateforme d'intelligence artificielle conçue spécifiquement pour les professionnels de l'immobilier. Elle met à votre disposition 7 agents virtuels qui automatisent votre prospection, qualifient vos leads, estiment vos biens et effectuent les relances 24h/24, 7j/7, vous permettant de vous concentrer sur la conclusion de vos ventes.",
    },
    {
      q: "Combien de temps faut-il pour installer Usekaiz ?",
      a: "Votre premier agent IA est déployé et opérationnel en moins de 24 heures. Nous connectons vos sources de leads (portails d'annonces, réseaux sociaux, site agence) et votre CRM. Les 6 autres agents sont ensuite activés progressivement sur 3 semaines avec formation de vos équipes incluse.",
    },
    {
      q: "Usekaiz s'intègre-t-il avec mon CRM actuel ?",
      a: "Oui, parfaitement ! Usekaiz s'interface avec les principaux logiciels métiers du marché immobilier (Apimo, Hektor, Netty, Adapt immo, Hubspot, Périclès, etc.) ainsi qu'avec vos agendas Google Calendar et Microsoft Outlook pour la prise de rendez-vous automatique.",
    },
    {
      q: "Puis-je personnaliser les agents IA pour mon agence ?",
      a: "Absolument. Le ton, les questions posées, les barèmes d'honoraires, les critères de filtrage d'acquéreurs, les quartiers couverts et les créneaux d'agenda sont entièrement personnalisés aux couleurs et spécificités de votre agence.",
    },
    {
      q: "Pourquoi choisir WhatsApp plutôt que le SMS classique ?",
      a: "WhatsApp enregistre un taux d'ouverture de 98% en moins de 3 minutes et permet d'envoyer des fiches de biens complètes avec photos, plans et boutons d'action interactifs. Vos prospects répondent 4 fois plus vite que par SMS ou email.",
    },
    {
      q: "Usekaiz convient-il aux mandataires indépendants ?",
      a: "Oui ! Les mandataires indépendants (IAD, SAFTI, BSK, MegAgence, Propriétés Privées, etc.) adorent Usekaiz car il agit comme un assistant commercial virtuel dédié qui répond à leur place pendant qu'ils sont en visite ou en négociation.",
    },
    {
      q: "Quels résultats puis-je attendre en 30 jours ?",
      a: "En moyenne constatée sur nos clients : +43% de leads qualifiés, 3h30 de travail chronophage gagnées par jour par conseiller, et une réduction de 60% du coût d'acquisition par mandat exclusif.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header exact match to Image 5 */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Vos questions, nos réponses.
          </h2>
          <p className="text-base sm:text-lg text-slate-500 font-normal">
            Tout ce que vous devez savoir sur Usekaiz.
          </p>
        </div>

        {/* FAQ Accordions matching Image 5: purple outline on active item, rounded-2xl cards */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-2 border-purple-600 shadow-[0_8px_30px_rgba(96,22,236,0.08)]"
                    : "border border-slate-200/90 shadow-2xs hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 transition-colors cursor-pointer"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className="shrink-0 text-purple-600">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-purple-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-700" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-500 leading-relaxed font-normal animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
