import { BookOpen, ArrowRight } from "lucide-react";

export function BlogTeaserSection() {
  return (
    <section className="py-12 md:py-20 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Large rounded white card with subtle glowing shadow exactly as in Image 1 */}
        <div className="bg-white/95 rounded-[32px] sm:rounded-[40px] p-8 sm:p-14 md:p-16 text-center shadow-[0_20px_60px_-15px_rgba(96,22,236,0.08)] border border-slate-100 relative overflow-hidden backdrop-blur-sm">
          {/* Badge: Ressources & Actualités */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EEFF] text-[#6016EC] text-xs sm:text-sm font-semibold mb-6">
            <BookOpen className="w-3.5 h-3.5 text-[#6016EC]" />
            <span>Ressources & Actualités</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-5">
            Découvrez nos conseils pour <br className="hidden sm:inline" />
            <span className="text-[#6016EC]">l'immobilier de demain</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-500 font-normal max-w-xl mx-auto mb-8 leading-relaxed">
            Plongez dans notre blog pour découvrir comment l'intelligence artificielle révolutionne
            la prospection, la qualification et la pige immobilière.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <a
              href="#contact-expert"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-2xl bg-[#6016EC] hover:bg-[#500fd1] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#6016EC]/30 hover:shadow-xl hover:-translate-y-0.5 transition-all group"
            >
              <span>Explorer le Blog Usekaiz</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
