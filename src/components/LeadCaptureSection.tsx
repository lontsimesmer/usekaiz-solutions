import { useState } from "react";
import { Mail, Phone, MapPin, X } from "lucide-react";
import { toast } from "sonner";

// Form tracking definitions as required by the integration prompt
type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
    body.append(key, file, file.name);
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {});
};

export function LeadCaptureSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showNotification, setShowNotification] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Veuillez renseigner votre email.");
      return;
    }

    setLoading(true);

    try {
      const trackingPayload = {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "usekaiz-expert-advice-form",
        formData: {
          first_name: firstName,
          last_name: lastName,
          email: email,
        },
        formLabels: {
          first_name: "Prénom",
          last_name: "Nom",
          email: "Email",
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        trackingId: "tk_a8a48025d4704a3f9766e9ab286f9e94",
        locationId: "XLxqA97WNOslkoYH2shj",
        projectId: "1790856565422627225",
        sessionId: crypto.randomUUID(),
        properties: {
          deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
          source: "ai_studio",
          projectId: "1790856565422627225",
          formName: "Formulaire Conseils Experts Usekaiz",
        },
      };

      postTrackingEvent(trackingPayload);
      setSubmitted(true);
      toast.success("Demande envoyée ! Vous recevrez nos conseils d'experts.");
    } catch (err) {
      console.error(err);
      toast.error("Une erreur est survenue lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-expert" className="py-16 md:py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Title exact match to Image 2 */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Prêt à transformer votre agence ?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Rejoignez les agences qui ont déjà automatisé leur prospection et leur suivi clients
            avec Usekaiz.
          </p>
        </div>

        {/* Clean card with dashed outline and light background matching Image 2 */}
        <div className="max-w-xl mx-auto bg-white/90 rounded-[32px] p-6 sm:p-10 shadow-[0_20px_50px_rgba(96,22,236,0.06)] border border-slate-200/80 relative">
          {/* Subtle inner dashed frame as visible in screenshot */}
          <div className="border border-dashed border-slate-200 rounded-2xl p-5 sm:p-8 bg-[#FBFBFE]/70">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-slate-900">Merci !</h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Notre équipe va vous transmettre nos conseils et vous contacter sous peu.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs text-purple-600 underline font-semibold"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Prénom * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Prénom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Prénom"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F6FB] border-0 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>

                {/* Nom * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Nom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Nom"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#F4F6FB] border-0 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </div>

                {/* Email * */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Email *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#F4F6FB] border-0 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-hidden focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>
                </div>

                {/* Submit button: Recevoir des conseils d'experts (Image 2 & 3 exact) */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#6016EC] hover:bg-[#500fd1] text-white font-bold text-sm sm:text-base shadow-md shadow-purple-600/30 hover:shadow-lg transition-all cursor-pointer"
                  >
                    Recevoir des conseils d'experts
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Floating toast notification at bottom left: "Rendez-vous confirmé 📅 Sophie a planifié une visite avec Marie L. pour demain à 14h." (Image 2 bottom left) */}
      {showNotification && (
        <div className="fixed bottom-6 left-6 z-40 bg-white/95 backdrop-blur-md border border-purple-200 shadow-2xl rounded-2xl p-3.5 max-w-xs animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-start justify-between gap-3">
            <div className="space-y-0.5">
              <p className="text-xs font-extrabold text-slate-900 flex items-center gap-1.5">
                Rendez-vous confirmé 📅
              </p>
              <p className="text-[11px] text-slate-600 leading-snug">
                Sophie a planifié une visite avec Marie L. pour demain à 14h.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setShowNotification(false)}
              className="text-slate-400 hover:text-slate-700 p-0.5 rounded-md hover:bg-slate-100 cursor-pointer"
              aria-label="Fermer la notification"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-white text-slate-800 pt-16 pb-12 border-t border-slate-200/80 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200/60">
          {/* Col 1: Brand & Socials (Image 3) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="https://vibe.filesafe.space/1774851885328190062/attachments/de4f9da7-7ebd-4417-81b9-2128bcf87195.webp"
                alt="Logo Usekaiz"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-xs">
              L'IA qui travaille pour votre agence, 24h/24. Automatisez, qualifiez, convertissez.
            </p>
            {/* Social icons (LinkedIn, Instagram, Facebook, YouTube) */}
            <div className="flex items-center gap-3 pt-2 text-slate-500">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:text-purple-600 hover:bg-purple-50 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:text-purple-600 hover:bg-purple-50 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:text-purple-600 hover:bg-purple-50 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center hover:text-purple-600 hover:bg-purple-50 transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation (Image 3) */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 mb-4">Navigation</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <a href="#features" className="hover:text-purple-600 transition-colors">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#agents-showcase" className="hover:text-purple-600 transition-colors">
                  Agents IA
                </a>
              </li>
              <li>
                <a href="#cas-clients" className="hover:text-purple-600 transition-colors">
                  Cas clients
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Nos Solutions (Image 3) */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 mb-4">Nos Solutions</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
              <li>
                <span className="hover:text-purple-600 transition-colors cursor-pointer">
                  Estimation IA
                </span>
              </li>
              <li>
                <span className="hover:text-purple-600 transition-colors cursor-pointer">
                  Cockpit by Usekaiz
                </span>
              </li>
              <li>
                <a
                  href="https://leadkaiz.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  Leadkaiz (Pige)
                </a>
              </li>
              <li>
                <a
                  href="#demo-booking"
                  className="text-purple-600 hover:text-purple-700 font-semibold transition-colors"
                >
                  Sloty (Agenda & RDV)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact (Image 3) */}
          <div>
            <h4 className="font-extrabold text-sm text-slate-900 mb-4">Contact</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a
                  href="mailto:support@usekaiz.com"
                  className="hover:text-purple-600 transition-colors"
                >
                  support@usekaiz.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <a href="tel:+33633673561" className="hover:text-purple-600 transition-colors">
                  +33 6 33 67 35 61
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar (Image 3: "© 2026 Usekaiz. Fait avec 💜 par Usekaiz." and legal links) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Usekaiz. Fait avec 💜 par Usekaiz.</p>
          <div className="flex gap-6">
            <span className="hover:text-slate-800 cursor-pointer">Mentions légales</span>
            <span className="hover:text-slate-800 cursor-pointer">
              Politique de confidentialité
            </span>
            <span className="hover:text-slate-800 cursor-pointer">CGV</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
