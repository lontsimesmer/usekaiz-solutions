import { useState } from "react";
import {
  Users,
  TrendingUp,
  Calendar,
  MessageSquare,
  Bot,
  Bell,
  Search,
  Check,
  ChevronDown,
} from "lucide-react";

export function DashboardPreview() {
  const [activeTab, setActiveTab] = useState<"apercu" | "agents">("apercu");
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(2); // Default to Mercredi (index 2) as in Image 1 & 2

  const recentLeads = [
    {
      contact: "Sophie Martin",
      source: "SeLoger",
      agent: "Qualification",
      agentColor: "text-purple-600 bg-purple-50",
      score: 95,
      scoreColor: "bg-emerald-500",
      statut: "Qualifié",
      statutColor: "bg-emerald-50 text-emerald-600 border border-emerald-200/60",
    },
    {
      contact: "Thomas Dubois",
      source: "WhatsApp",
      agent: "Prospection",
      agentColor: "text-purple-600 bg-purple-50",
      score: 60,
      scoreColor: "bg-purple-600",
      statut: "En cours",
      statutColor: "bg-purple-50 text-purple-700 border border-purple-200/60",
    },
    {
      contact: "Marie Leroy",
      source: "Site Web",
      agent: "Agenda",
      agentColor: "text-purple-600 bg-purple-50",
      score: 88,
      scoreColor: "bg-emerald-500",
      statut: "RDV Fixé",
      statutColor: "bg-blue-50 text-blue-600 border border-blue-200/60",
    },
    {
      contact: "Lucas Petit",
      source: "Base de données",
      agent: "Réactivation",
      agentColor: "text-purple-600 bg-purple-50",
      score: 75,
      scoreColor: "bg-amber-500",
      statut: "Relancé",
      statutColor: "bg-amber-50 text-amber-700 border border-amber-200/60",
    },
  ];

  return (
    <section id="dashboard" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-100/70 text-purple-700 text-xs font-semibold tracking-wide mb-4">
            Aperçu de la plateforme
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Pilotez votre agence depuis un seul endroit
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground font-normal max-w-2xl mx-auto">
            Suivez l'activité de vos agents IA en temps réel, analysez vos performances et gérez vos
            leads qualifiés.
          </p>
        </div>

        {/* Dashboard Shell Mockup */}
        <div className="bg-white rounded-[28px] sm:rounded-[36px] shadow-[0_20px_60px_-15px_rgba(96,22,236,0.12)] border border-slate-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
            {/* Sidebar (as seen in Image 1) */}
            <aside className="lg:col-span-3 border-r border-slate-100 p-5 sm:p-6 flex flex-col justify-between bg-white">
              <div className="space-y-6">
                {/* Logo top */}
                <div className="flex items-center gap-2.5 px-2">
                  <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-sm shadow-purple-500/30">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <span className="font-extrabold text-lg tracking-tight text-slate-900">
                    Usekaiz
                  </span>
                </div>

                {/* Nav Links */}
                <nav className="space-y-1 pt-2">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl bg-[#EDE7FB] text-purple-700 font-bold text-sm transition-colors text-left"
                  >
                    <span className="flex items-center gap-3">
                      <span className="grid grid-cols-2 gap-0.5 w-4 h-4">
                        <span className="w-1.5 h-1.5 rounded-xs bg-purple-700" />
                        <span className="w-1.5 h-1.5 rounded-xs bg-purple-700" />
                        <span className="w-1.5 h-1.5 rounded-xs bg-purple-700" />
                        <span className="w-1.5 h-1.5 rounded-xs bg-purple-700" />
                      </span>
                      Vue d'ensemble
                    </span>
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-semibold text-sm transition-colors text-left"
                  >
                    <span className="flex items-center gap-3">
                      <Bot className="w-4 h-4 text-slate-400" />
                      Mes Agents IA
                    </span>
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-semibold text-sm transition-colors text-left"
                  >
                    <span className="flex items-center gap-3">
                      <Users className="w-4 h-4 text-slate-400" />
                      Leads
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white font-bold text-[11px]">
                      12
                    </span>
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-semibold text-sm transition-colors text-left"
                  >
                    <span className="flex items-center gap-3">
                      <MessageSquare className="w-4 h-4 text-slate-400" />
                      Conversations
                    </span>
                  </button>

                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-slate-500 hover:text-slate-800 hover:bg-slate-50 font-semibold text-sm transition-colors text-left"
                  >
                    <span className="flex items-center gap-3">
                      <Calendar className="w-4 h-4 text-slate-400" />
                      Agenda
                    </span>
                  </button>
                </nav>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="lg:col-span-9 p-5 sm:p-7 lg:p-8 bg-[#FBFBFE] flex flex-col justify-between space-y-6">
              {/* Search bar & Top Profile */}
              <div className="flex items-center justify-between gap-4">
                <div className="relative flex-1 max-w-xs sm:max-w-sm">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    readOnly
                    placeholder="Rechercher un lead..."
                    className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-white rounded-full border border-slate-200 placeholder:text-slate-400 text-slate-700 shadow-2xs focus:outline-hidden"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <div className="relative p-2 text-slate-500 hover:text-slate-700 cursor-pointer">
                    <Bell className="w-4 h-4" />
                    <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-rose-500" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-purple-200 text-purple-700 font-bold text-xs flex items-center justify-center">
                    JD
                  </div>
                </div>
              </div>

              {/* Greeting & Tabs */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    Bonjour, Jean 👋
                  </h3>
                </div>

                {/* Pill tab switcher (Aperçu / Agents) */}
                <div className="p-1 rounded-xl bg-slate-100 border border-slate-200/60 inline-flex items-center gap-1 text-xs font-semibold text-slate-600">
                  <button
                    type="button"
                    onClick={() => setActiveTab("apercu")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeTab === "apercu"
                        ? "bg-white text-purple-700 shadow-2xs font-bold"
                        : "hover:text-slate-900"
                    }`}
                  >
                    Aperçu
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("agents")}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      activeTab === "agents"
                        ? "bg-white text-purple-700 shadow-2xs font-bold"
                        : "hover:text-slate-900"
                    }`}
                  >
                    Agents
                  </button>
                </div>
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Leads Générés</span>
                    <Users className="w-3.5 h-3.5 text-purple-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">120</div>
                  <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <span>↗</span> +12% cette semaine
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Leads Qualifiés</span>
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-emerald-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">85</div>
                  <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <span>↗</span> +8% cette semaine
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>Taux de Conv.</span>
                    <span className="text-amber-500 font-bold text-xs">⚡</span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">70.8%</div>
                  <div className="text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <span>↗</span> +2.4% cette semaine
                  </div>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                    <span>RDV Fixés</span>
                    <Calendar className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">24</div>
                  <div className="text-[11px] font-semibold text-slate-400">
                    À venir cette semaine
                  </div>
                </div>
              </div>

              {/* Chart & Statut des Agents Row */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                {/* Chart Box (Image 1 & 2 exact recreation) */}
                <div className="lg:col-span-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                  <h4 className="text-base font-extrabold text-slate-900 mb-4">
                    Acquisition de leads
                  </h4>

                  {/* SVG Chart with Smooth Curve and Tooltip */}
                  <div className="relative w-full h-44 sm:h-52">
                    {/* Horizontal Grid guidelines */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[10px] text-slate-400 font-mono">
                      <div className="border-b border-dashed border-slate-200/80 flex items-center justify-start pb-0.5">
                        <span className="w-6">28</span>
                      </div>
                      <div className="border-b border-dashed border-slate-200/80 flex items-center justify-start pb-0.5">
                        <span className="w-6">21</span>
                      </div>
                      <div className="border-b border-dashed border-slate-200/80 flex items-center justify-start pb-0.5">
                        <span className="w-6">14</span>
                      </div>
                      <div className="border-b border-dashed border-slate-200/80 flex items-center justify-start pb-0.5">
                        <span className="w-6">7</span>
                      </div>
                      <div className="border-b border-dashed border-slate-200/80 flex items-center justify-start pb-0.5">
                        <span className="w-6">0</span>
                      </div>
                    </div>

                    {/* SVG Graphic with Gradient Wave */}
                    <svg
                      viewBox="0 0 500 160"
                      preserveAspectRatio="none"
                      className="absolute inset-0 w-full h-full pl-6 overflow-visible"
                    >
                      <defs>
                        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Light secondary subtle wave */}
                      <path
                        d="M 0 120 C 50 110, 80 90, 150 95 C 220 100, 260 70, 320 80 C 380 90, 440 115, 500 120"
                        fill="none"
                        stroke="#DDD6FE"
                        strokeWidth="2.5"
                      />

                      {/* Main purple curve area */}
                      <path
                        d="M 0 110 C 60 70, 100 80, 180 90 C 240 98, 290 20, 350 30 C 410 40, 450 90, 500 105 L 500 160 L 0 160 Z"
                        fill="url(#purpleGradient)"
                      />

                      {/* Main purple line */}
                      <path
                        d="M 0 110 C 60 70, 100 80, 180 90 C 240 98, 290 20, 350 30 C 410 40, 450 90, 500 105"
                        fill="none"
                        stroke="#6016EC"
                        strokeWidth="3"
                      />

                      {/* Wednesday Data point */}
                      <circle cx="215" cy="92" r="5" fill="#6016EC" />
                      <circle cx="215" cy="92" r="9" fill="#6016EC" fillOpacity="0.2" />
                    </svg>

                    {/* Tooltip exactly as in screenshot 2 */}
                    <div
                      className="absolute left-[38%] top-[24%] bg-white rounded-xl shadow-xl border border-slate-100 p-3 z-10 pointer-events-none transition-all"
                      style={{ transform: "translateX(-20%)" }}
                    >
                      <p className="text-xs font-bold text-slate-800 mb-1">Mer</p>
                      <p className="text-[11px] font-medium text-slate-600">
                        Leads Entrants : <strong className="text-slate-900">15</strong>
                      </p>
                      <p className="text-[11px] font-medium text-slate-600">
                        Leads Qualifiés : <strong className="text-slate-900">10</strong>
                      </p>
                    </div>
                  </div>

                  {/* Day labels */}
                  <div className="flex justify-between pl-6 text-[11px] font-semibold text-slate-400 pt-2">
                    <span>Lun</span>
                    <span>Mar</span>
                    <span className="text-purple-700 font-bold">Mer</span>
                    <span>Jeu</span>
                    <span>Ven</span>
                    <span>Sam</span>
                    <span>Dim</span>
                  </div>
                </div>

                {/* Statut des Agents Box */}
                <div className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 mb-4">
                      Statut des Agents
                    </h4>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <Bot className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">
                            Qualification
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 font-bold text-[11px]">
                          Actif
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <Bot className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">
                            Prospection
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 font-bold text-[11px]">
                          Actif
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                            <Bot className="w-4 h-4" />
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">
                            Agenda
                          </span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-700 font-bold text-[11px]">
                          Actif
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="w-full mt-6 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50 transition-colors"
                  >
                    Gérer les agents
                  </button>
                </div>
              </div>

              {/* Derniers leads traités Table (Image 2) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-4">
                  Derniers leads traités
                </h4>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="text-slate-400 font-medium text-xs border-b border-slate-100">
                        <th className="pb-3 font-medium">Contact</th>
                        <th className="pb-3 font-medium">Source</th>
                        <th className="pb-3 font-medium">Agent en charge</th>
                        <th className="pb-3 font-medium">Score</th>
                        <th className="pb-3 font-medium text-right">Statut</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {recentLeads.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 font-bold text-slate-900">{item.contact}</td>
                          <td className="py-3 text-purple-600 font-semibold">{item.source}</td>
                          <td className="py-3">
                            <span className="inline-flex items-center gap-1.5 text-slate-700 font-medium">
                              <Bot className="w-3.5 h-3.5 text-purple-600" />
                              {item.agent}
                            </span>
                          </td>
                          <td className="py-3">
                            <div className="flex items-center gap-2">
                              <div className="w-12 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                                <div
                                  className={`h-full rounded-full ${item.scoreColor}`}
                                  style={{ width: `${item.score}%` }}
                                />
                              </div>
                              <span className="font-semibold text-slate-700 font-mono text-xs">
                                {item.score}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 text-right">
                            <span
                              className={`inline-block px-2.5 py-0.5 rounded-full font-bold text-[11px] ${item.statutColor}`}
                            >
                              {item.statut}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
