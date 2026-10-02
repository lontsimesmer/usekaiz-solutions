import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader, FloatingWhatsAppButton } from "../components/SiteHeader";
import { HeroSection } from "../components/HeroSection";
import { PartnersMarquee } from "../components/PartnersMarquee";
import { AgentsShowcase } from "../components/AgentsShowcase";
import { FounderSection } from "../components/FounderSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { PlatformComparison } from "../components/PlatformComparison";
import { DashboardPreview } from "../components/DashboardPreview";
import { ProcessSection } from "../components/ProcessSection";
import { DemoBookingSection } from "../components/DemoBookingSection";
import { TestimonialsAndPress } from "../components/TestimonialsAndPress";
import { FaqSection } from "../components/FaqSection";
import { BlogTeaserSection } from "../components/BlogTeaserSection";
import { LeadCaptureSection, SiteFooter } from "../components/LeadCaptureSection";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Usekaiz — L'agence immobilière la plus réactive du marché" },
      {
        name: "description",
        content:
          "Usekaiz est le logiciel d'IA n°1 pour les agents et mandataires immobiliers en France. Automatisez prospection, pige, qualification et prise de RDV 24h/24.",
      },
      { property: "og:title", content: "Usekaiz — 7 Agents IA pour votre Agence Immobilière" },
      {
        property: "og:description",
        content:
          "Ne laissez passer aucun acquéreur ni vendeur. Déployez votre équipe d'agents IA en ligne 24h/24.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
const [selectedAgentIndex, setSelectedAgentIndex] = useState(0); // Acquéreurs by default

  const scrollToBooking = () => {
    const el = document.getElementById("demo-booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectAgentFromHero = (index: number) => {
    setSelectedAgentIndex(index);
    scrollToAgents();
  };

  const scrollToAgents = () => {
    const el = document.getElementById("agents-showcase");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-background text-foreground relative overflow-hidden">
      {/* Dynamic ambient gradient background similar to usekaiz.com */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#f4f7fc]">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-primary/12 blur-[130px] animate-blob" />
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF6B35]/12 blur-[130px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[60%] rounded-full bg-[#00C896]/12 blur-[130px] animate-blob animation-delay-4000" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
      </div>

      <Toaster position="top-right" richColors />

      {/* Floating Header */}
      <SiteHeader onBookDemo={scrollToBooking} />

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-32 relative z-10">
        <HeroSection onBookDemo={scrollToBooking} onExploreAgents={scrollToAgents} onSelectAgent={selectAgentFromHero} />

        {/* Video / Platform preview player */}
        <section className="pt-0 pb-8 md:pt-2 md:pb-12 relative z-10">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="p-2 sm:p-4 rounded-3xl md:rounded-[36px] border-2 border-primary/20 bg-white/70 shadow-2xl backdrop-blur-md overflow-hidden relative">
              <div className="aspect-video rounded-2xl md:rounded-3xl overflow-hidden relative group shadow-inner bg-slate-950 flex items-center justify-center">
                <video
                  src="https://assets.cdn.filesafe.space/mRhnldj04dyIPr70WDAp/media/6ab148412e45fddc3845d445.mp4"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                />
              </div>
            </div>
          </div>
        </section>

        {/* Infinite Partners Marquee */}
        <PartnersMarquee />

        {/* 7 Interactive Agents Showcase */}
        <AgentsShowcase selectedIndex={selectedAgentIndex} onSelectIndex={setSelectedAgentIndex} onBookDemo={scrollToBooking} />

        {/* Founder Narrative (L'humain au cœur de l'automatisation) */}
        <FounderSection />

        {/* Features & ROI Gains */}
        <FeaturesSection onBookDemo={scrollToBooking} />

        {/* Comparison: Usekaiz vs Others */}
        <PlatformComparison onBookDemo={scrollToBooking} />

        {/* Interactive Dashboard Cockpit Preview */}
        <DashboardPreview />

        {/* 3-Week Onboarding Process & Founder Narrative */}
        <ProcessSection onBookDemo={scrollToBooking} />

        {/* Demo Booking (Interactive Slots + Calendar) */}
        <DemoBookingSection />

        {/* Client Testimonials & Press Logos */}
        <TestimonialsAndPress />

        {/* FAQ Accordions */}
        <FaqSection />

        {/* Blog & Resources Teaser (Image 1) */}
        <BlogTeaserSection />

        {/* Lead/Expert Capture Form with Form Tracking Integration (Image 2 & 3) */}
        <LeadCaptureSection />
      </main>

      {/* Footer */}
      <SiteFooter />

      {/* Floating Direct WhatsApp button */}
      <FloatingWhatsAppButton />
    </div>
  );
}
