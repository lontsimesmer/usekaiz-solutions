import { useState, useEffect, useRef } from "react";
import { AGENTS_LIST, type AgentData } from "../data/agents";
import { ChevronLeft, ChevronRight, MessageSquare } from "lucide-react";

interface AgentsShowcaseProps {
  selectedIndex: number;
  onSelectIndex: (idx: number) => void;
  onBookDemo?: () => void;
}

export function AgentsShowcase({ selectedIndex, onSelectIndex, onBookDemo }: AgentsShowcaseProps) {
  const [lastInteraction, setLastInteraction] = useState<number | null>(null);

  const activeAgent = (AGENTS_LIST[selectedIndex] ??
    AGENTS_LIST[0]) as (typeof AGENTS_LIST)[number];

  // Autoplay: advance to the next agent every ~10s, giving more time once the visitor interacts
  useEffect(() => {
    const timer = window.setTimeout(
      () => onSelectIndex((selectedIndex + 1) % AGENTS_LIST.length),
      lastInteraction ? 15000 : 10000,
    );
    return () => window.clearTimeout(timer);
  }, [selectedIndex, onSelectIndex, lastInteraction]);

  const handleNext = () => {
    setLastInteraction(null);
    onSelectIndex((selectedIndex + 1) % AGENTS_LIST.length);
  };

  const handlePrev = () => {
    setLastInteraction(null);
    onSelectIndex((selectedIndex - 1 + AGENTS_LIST.length) % AGENTS_LIST.length);
  };

  const handleSelect = (idx: number) => {
    setLastInteraction(null);
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
                  <ChatSimulator
                    key={activeAgent.id}
                    agent={activeAgent}
                    onInteract={() => setLastInteraction(Date.now())}
                  />

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

type ChatMessage = { id: number; from: "agent" | "user"; text: string };

const WAVE_BARS = [
  { h: "h-4", tone: "bg-primary" },
  { h: "h-6", tone: "bg-primary" },
  { h: "h-3", tone: "bg-primary/60" },
  { h: "h-7", tone: "bg-primary" },
  { h: "h-4", tone: "bg-primary" },
  { h: "h-8", tone: "bg-primary" },
  { h: "h-5", tone: "bg-primary" },
  { h: "h-3", tone: "bg-primary/60" },
  { h: "h-6", tone: "bg-primary" },
  { h: "h-4", tone: "bg-primary/60" },
];

const REPLY_DELAY = 1400;

// Simulated WhatsApp-style conversation. The agent's question and both answers are shown
// straight away; clicking an answer adds the visitor's bubble then the agent's reply. Only the
// message thread scrolls — the voice note and the answers never move.
function ChatSimulator({ agent, onInteract }: { agent: AgentData; onInteract: () => void }) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 0, from: "agent", text: agent.sampleQuestion },
  ]);
  const [typing, setTyping] = useState(false);
  const timer = useRef<number | null>(null);
  const nextId = useRef(1);
  const threadRef = useRef<HTMLDivElement>(null);

  const push = (from: ChatMessage["from"], text: string) =>
    setMessages((prev) => [...prev, { id: nextId.current++, from, text }]);

  const answer = (choice: 1 | 2) => {
    if (typing) return;
    onInteract();
    push("user", choice === 1 ? agent.sampleAnswer1 : agent.sampleAnswer2);
    setTyping(true);
    timer.current = window.setTimeout(() => {
      setTyping(false);
      push("agent", choice === 1 ? agent.agentReply1 : agent.agentReply2);
    }, REPLY_DELAY);
  };

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  // Keep the latest message in view without scrolling the page itself
  useEffect(() => {
    const el = threadRef.current;
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="relative h-[380px] flex flex-col bg-white rounded-3xl shadow-2xl text-slate-800">
      {/* Header */}
      <div className="shrink-0 flex items-center gap-3 px-5 py-3.5 bg-slate-50 border-b border-slate-100 rounded-t-3xl">
        <div className="relative shrink-0">
          <img
            src={agent.avatar}
            alt={agent.name}
            className="w-10 h-10 rounded-full object-cover object-top border-2 border-primary/30"
          />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute bottom-0 right-0 ring-2 ring-white" />
        </div>
        <div>
          <div className="font-bold text-sm text-slate-900 leading-tight">{agent.name}</div>
          <div className="text-[11px] text-slate-400 font-medium">En ligne</div>
        </div>
      </div>

      <div className="relative flex-1 min-h-0 flex flex-col bg-slate-50/40">
        {/* Message thread — fills the fixed-height card and scrolls; the bottom padding reserves
            the spot where the voice note floats so the newest bubble sits right above it */}
        <div
          ref={threadRef}
          className="flex-1 min-h-0 overflow-y-auto px-5 pt-4 pb-[92px] flex flex-col"
        >
          <div className="mt-4 flex flex-col gap-2.5">
            {messages.map((m) =>
              m.from === "agent" ? (
                <div
                  key={m.id}
                  className="relative self-start max-w-[85%] px-4 py-2.5 text-sm leading-snug rounded-[20px] rounded-bl-[6px] bg-white text-slate-900 border border-slate-100 shadow-sm animate-in fade-in slide-in-from-bottom-2"
                >
                  {m.text}
                </div>
              ) : (
                <div
                  key={m.id}
                  className="self-end max-w-[80%] px-4 py-2.5 text-sm font-medium leading-snug rounded-[20px] rounded-br-[6px] bg-primary text-white shadow-sm animate-in fade-in slide-in-from-bottom-2"
                >
                  {m.text}
                </div>
              ),
            )}

            {typing && (
              <div className="self-start inline-flex items-center gap-1 px-4 py-3 rounded-[20px] rounded-bl-[6px] bg-white border border-slate-100 shadow-sm">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Voice note pill — floats on top of the card (out of the layout), overhanging its left edge */}
        <div className="absolute bottom-3.5 left-5 -ml-10 sm:-ml-14 z-20 animate-float pointer-events-none">
          <div className="bg-white px-5 py-3 rounded-full shadow-lg border border-gray-100 flex items-center gap-3 sm:gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-primary ml-1"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
            <div className="flex items-center gap-1 h-5">
              {WAVE_BARS.map((bar, i) => (
                <span
                  key={i}
                  className={`w-1.5 ${bar.h} ${bar.tone} rounded-full animate-pulse`}
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>
            <span className="text-[11px] text-slate-400 font-mono font-medium">0:12</span>
          </div>
        </div>
      </div>

      {/* Answer choices — always visible, directly under the voice note */}
      <div className="shrink-0 px-5 pt-2.5 pb-4 bg-slate-50/40 rounded-b-3xl space-y-2">
        {([1, 2] as const).map((choice) => (
          <button
            key={choice}
            type="button"
            onClick={() => answer(choice)}
            disabled={typing}
            className="w-full text-left truncate px-4 py-2.5 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/15 text-primary text-xs sm:text-sm font-bold transition-colors cursor-pointer disabled:cursor-wait"
          >
            {choice === 1 ? agent.sampleAnswer1 : agent.sampleAnswer2}
          </button>
        ))}
      </div>
    </div>
  );
}
