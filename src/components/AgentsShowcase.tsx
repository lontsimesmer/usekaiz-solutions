import { useState, useEffect } from "react";
import { AGENTS_LIST } from "../data/agents";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

interface AgentsShowcaseProps {
  selectedIndex: number;
  onSelectIndex: (idx: number) => void;
  onBookDemo?: () => void;
}

export function AgentsShowcase({ selectedIndex, onSelectIndex, onBookDemo }: AgentsShowcaseProps) {
  const [selectedResponse, setSelectedResponse] = useState<number | null>(null);

  const activeAgent = (AGENTS_LIST[selectedIndex] ?? AGENTS_LIST[0]) as (typeof AGENTS_LIST)[number];

  // Autoplay: advance to the next agent every ~10s
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setSelectedResponse(null);
      onSelectIndex((selectedIndex + 1) % AGENTS_LIST.length);
    }, 10000);
    return () => window.clearTimeout(timer);
  }, [selectedIndex, onSelectIndex]);

  const handleNext = () => {
    setSelectedResponse(null);
    onSelectIndex((selectedIndex + 1) % AGENTS_LIST.length);
  };

  const handlePrev = () => {
    setSelectedResponse(null);
    onSelectIndex((selectedIndex - 1 + AGENTS_LIST.length) % AGENTS_LIST.length);
  };

  const handleSelect = (idx: number) => {
    setSelectedResponse(null);
    onSelectIndex(idx);
  };

  return (
    <section id="agents-showcase" className="py-14 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 md:mb-6 text-foreground tracking-tight">
            Rencontrez votre nouvelle équipe.
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 font-medium">
            Sélectionnez un agent pour découvrir son expertise et tester ses réponses en direct.
          </p>
        </div>

        {/* Horizontal Agent Selector Avatar Bar */}
        <div className="flex justify-center items-center -space-x-3 sm:-space-x-5 md:-space-x-6 mb-12 md:mb-16 py-4 px-2">
          {AGENTS_LIST.map((agent, idx) => {
            const isCurrent = idx === selectedIndex;
            return (
              <button
                key={agent.id}
                onClick={() => handleSelect(idx)}
                className={`group relative flex flex-col items-center transition-all duration-300 outline-hidden cursor-pointer ${
                  isCurrent
                    ? "scale-115 md:scale-125 z-30 opacity-100"
                    : "opacity-65 hover:opacity-100 grayscale hover:grayscale-0 hover:scale-105 z-10"
                }`}
                aria-label={agent.name}
              >
                <div
                  className={`w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 transition-all rounded-full overflow-hidden border-4 bg-background shadow-lg ${
                    isCurrent
                      ? "border-primary shadow-[0_0_25px_rgba(96,22,236,0.55)] ring-4 ring-primary/20"
                      : "border-primary/25 hover:border-primary/50"
                  }`}
                >
                  <img
                    src={agent.avatar}
                    alt={agent.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <span
                  className={`absolute -bottom-8 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-bold transition-all whitespace-nowrap shadow-md pointer-events-none ${
                    isCurrent
                      ? "bg-foreground text-background opacity-100 translate-y-0"
                      : "bg-background/95 text-foreground/75 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 border border-border"
                  }`}
                >
                  {agent.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Agent Card Showcase */}
        <div className="max-w-8xl mx-auto relative mt-6">
          {/* Nav arrows */}
          <button
            onClick={handlePrev}
            aria-label="Agent précédent"
            className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 text-primary items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Agent suivant"
            className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 z-40 w-12 h-12 rounded-full bg-white shadow-xl border-2 border-primary/20 text-primary items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Card with EXACT background matching the active agent color */}
          <div
            className="relative overflow-hidden rounded-3xl md:rounded-[40px] text-white shadow-2xl transition-colors duration-500 ease-out"
            style={{ backgroundColor: activeAgent.bgColor }}
          >
            {/* Top area with Category Badge, Main Headline, Description & 3 Tags */}
            <div className="pt-8 sm:pt-12 px-6 sm:px-10 lg:px-14 flex flex-col items-center text-center max-w-4xl mx-auto">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-xs sm:text-sm font-bold text-white mb-4 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>{activeAgent.category}</span>
              </div>

              {/* Exact Agent Headline */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
                {activeAgent.headline}
              </h3>

              {/* Exact Agent Description */}
              <p className="text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-2xl leading-relaxed mb-5">
                {activeAgent.description}
              </p>

              {/* Exact 3 Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-2">
                {activeAgent.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-semibold text-white shadow-2xs"
                  >
                    <span className="w-1 h-1 rounded-full bg-white/80" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Inner label: Testez une conversation type */}
            <div className="pt-4 sm:pt-6 px-6 sm:px-10 lg:px-14 flex items-center justify-end"></div>

            {/* Main content grid: Portrait & Chat box */}
            <div className="px-6 sm:px-10 lg:px-14 pb-0 pt-2">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
                {/* Agent Realistic Cutout Portrait (stretching directly to the bottom edge with 0 space underneath) */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-end relative self-end h-full">
                  <div className="w-full relative flex justify-center lg:justify-start items-end -mb-0">
                    <img
                      src={activeAgent.avatar}
                      alt={activeAgent.name}
                      className="w-auto max-w-[380px] sm:max-w-[440px] lg:max-w-[480px] h-[380px] sm:h-[480px] lg:h-[540px] xl:h-[580px] object-contain object-bottom drop-shadow-2xl transition-all duration-300 pointer-events-none block"
                    />
                  </div>
                </div>

                {/* Chat Preview / Simulator Card & CTA */}
                <div className="lg:col-span-7 flex flex-col justify-end space-y-5 pb-8 mb-8 sm:pb-10">
                  <div className="text-lg font-bold mb-4 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-white" />
                    <span>Testez une conversation type</span>
                  </div>
                  <div className="relative bg-white rounded-3xl p-5 sm:p-7 shadow-2xl text-slate-800 space-y-4">
                    {/* Agent header inside white box */}
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img
                          src={activeAgent.avatar}
                          alt={activeAgent.name}
                          className="w-10 h-10 rounded-full object-cover border border-slate-100 shadow-sm"
                        />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute bottom-0 right-0 ring-2 ring-white" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-slate-900 leading-tight">
                          {activeAgent.name}
                        </div>
                        <div className="text-[11px] text-slate-400 font-medium">En ligne</div>
                      </div>
                    </div>

                    {/* Agent prompt speech bubble */}
                    <div className="p-3 text-sm max-w-[85%] shadow-xs rounded-2xl bg-white text-gray-900 rounded-tl-none border border-gray-100">
                      {activeAgent.sampleQuestion}
                    </div>

                    {/* Audio wave player simulator — sits directly below the speech bubble, extending out past the left edge like in the image */}
                    <div className="flex justify-start my-1">
                      <div className="-ml-10 sm:-ml-14 bg-white text-foreground px-5 sm:px-5 py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-3 sm:gap-4 animate-float z-20">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-play w-5 h-5 text-primary ml-1"
                          >
                            <polygon points="6 3 20 12 6 21 6 3" />
                          </svg>
                        </div>
                        {/* Audio wave bars */}
                        <div className="flex items-center gap-1 h-5">
                          <span
                            className="w-1.5 h-4 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "0ms" }}
                          />
                          <span
                            className="w-1.5 h-6 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "100ms" }}
                          />
                          <span
                            className="w-1.5 h-3 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "200ms" }}
                          />
                          <span
                            className="w-1.5 h-7 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "300ms" }}
                          />
                          <span
                            className="w-1.5 h-4 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "400ms" }}
                          />
                          <span
                            className="w-1.5 h-8 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "500ms" }}
                          />
                          <span
                            className="w-1.5 h-5 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "600ms" }}
                          />
                          <span
                            className="w-1.5 h-3 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "700ms" }}
                          />
                          <span
                            className="w-1.5 h-6 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "800ms" }}
                          />
                          <span
                            className="w-1.5 h-4 bg-primary rounded-full animate-pulse"
                            style={{ animationDelay: "900ms" }}
                          />
                        </div>
                        <span className="text-[11px] text-slate-400 font-mono font-medium">
                          0:12
                        </span>
                      </div>
                    </div>

                    {/* Choice Pill Buttons */}
                    <div className="space-y-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setSelectedResponse(1)}
                        className={`w-full text-left px-4 py-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          selectedResponse === 1
                            ? "bg-[#6016ec] text-white border-[#6016ec] shadow-sm"
                            : "bg-[#f3edff] hover:bg-[#ebe1ff] text-[#6016ec] border-[#e4d4ff]"
                        }`}
                      >
                        {activeAgent.sampleAnswer1}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedResponse(2)}
                        className={`w-full text-left px-4 py-3 rounded-2xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                          selectedResponse === 2
                            ? "bg-[#6016ec] text-white border-[#6016ec] shadow-sm"
                            : "bg-[#f3edff] hover:bg-[#ebe1ff] text-[#6016ec] border-[#e4d4ff]"
                        }`}
                      >
                        {activeAgent.sampleAnswer2}
                      </button>
                    </div>

                    {/* Agent Live Reaction if clicked */}
                    {selectedResponse && (
                      <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-xs sm:text-sm text-emerald-950 font-medium animate-in fade-in slide-in-from-bottom-2">
                        {selectedResponse === 1 ? activeAgent.agentReply1 : activeAgent.agentReply2}
                      </div>
                    )}
                  </div>

                  {/* White CTA button below chat box matching screenshots */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={onBookDemo}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl bg-white text-slate-900 font-extrabold text-sm sm:text-base shadow-xl hover:bg-slate-50 transition-all hover:scale-[1.02] active:scale-98 cursor-pointer"
                    >
                      <span>{activeAgent.ctaText}</span>
                      <ChevronRight className="w-4 h-4 text-slate-900" />
                    </button>
                    <span className="text-white/80 font-bold text-sm hidden sm:inline-block">
                      {selectedIndex + 1} / {AGENTS_LIST.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
