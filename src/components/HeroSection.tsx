import {
  ArrowRight,
  Bot,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Clock,
  PhoneCall,
} from "lucide-react";
import { AGENTS_LIST } from "../data/agents";

interface HeroSectionProps {
  onBookDemo: () => void;
  onExploreAgents: () => void;
onSelectAgent?: (index: number) => void;
}
 
export function HeroSection({ onBookDemo, onExploreAgents, onSelectAgent }: HeroSectionProps) {
  return (
    <section className="relative pt-6 pb-8 md:pt-12 md:pb-16 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <div className="relative z-10 w-full max-w-6xl mx-auto">
          {/* Top Avatars Overlap Bar */}
          <div className="flex justify-center items-center -space-x-3 sm:-space-x-4 md:-space-x-5 mb-6 md:mb-8">
            {AGENTS_LIST.map((agent, idx) => (
              <button
                key={agent.id}
                type="button"
                onClick={() => onSelectAgent?.(idx)}
                className="group relative cursor-pointer outline-hidden"
                aria-label={`Voir l'agent ${agent.name}`}>
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-300 transform group-hover:scale-125 group-hover:-translate-y-2 group-hover:z-20 rounded-full overflow-hidden shadow-md border-2 border-primary/25 bg-white">
                  <img
                    src={agent.avatar}
                    alt={agent.role}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg whitespace-nowrap pointer-events-none z-30 shadow-xl">
                  {agent.name}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-b-foreground" />
                </div>
              </button>
            ))}
          </div>

          {/* Status pill badge */}
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/95 border-2 border-primary/20 shadow-md text-xs sm:text-sm font-bold text-primary backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-emerald-500" />
            </span>
            Vos 7 Agents IA sont en ligne
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-4 md:mb-6 leading-[1] animate-fade-in-up [animation-delay:100ms] max-w-5xl mx-auto drop-shadow-sm">
            L'agence immobilière la plus réactive du marché, <br className="hidden lg:block" />
            <span className="text-primary relative inline-block">
              C'est la vôtre.
              <div className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-2 bg-primary/25 rounded-full" />
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl text-foreground/80 font-semibold mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed">
            Votre CA dépend du nombre de leads traités. Vos agents IA ne laissent passer aucune
            opportunité.
          </p>

          {/* SEO Hidden Semantic Text */}
          <p className="sr-only">
            Usekaiz est le logiciel d'intelligence artificielle n°1 pour les agents et mandataires
            immobiliers en France. La plateforme déploie 7 agents IA qui automatisent la
            prospection, la pige immobilière, la qualification de leads, l'estimation de biens et la
            prise de rendez-vous 24h/24. Les agents immobiliers gagnent 3h30 par jour et augmentent
            leurs leads qualifiés de 43% en moyenne. Alternative tout-en-un à Prospectimmo,
            PigeOnline, Prospeneo.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-2xl mx-auto">
            <button
              onClick={onBookDemo}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 text-base md:text-lg rounded-2xl bg-primary hover:bg-primary/95 text-primary-foreground shadow-[0_0_30px_rgba(96,22,236,0.35)] hover:shadow-[0_0_45px_rgba(96,22,236,0.55)] hover:-translate-y-1 transition-all font-bold border-2 border-primary/50 relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10 flex items-center">
                Voir une démo
                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1.5 transition-transform" />
              </span>
            </button>

            <button
              onClick={onExploreAgents}
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto h-14 md:h-16 px-8 md:px-10 text-base md:text-lg rounded-2xl border-2 border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 transition-all backdrop-blur-sm font-bold bg-white/70 shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
            >
              <Bot className="w-5 h-5 text-primary" />
              Découvrir les agents IA
            </button>
          </div>

          {/* Fast value props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-12 pt-8 border-t border-primary/10">
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-foreground/80">
              <Clock className="w-4 h-4 text-primary shrink-0" />
              <span>Réponse en &lt;60s 24/7</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-foreground/80">
              <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>+43% de leads qualifiés</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-foreground/80">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Synchro WhatsApp & CRM</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-foreground/80">
              <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
              <span>3h30 gagnées / jour</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
