import { MessageCircle } from "lucide-react";

const WA_URL =
  "https://wa.me/917439668751?text=" +
  encodeURIComponent("Hi SMad Works, I want to know about your AI automation services.");

export function FloatingWhatsApp() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with SMad Works on WhatsApp"
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-2 rounded-full border border-gold/40 bg-black px-4 py-3 text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] ring-1 ring-white/10 transition-all duration-300 hover:scale-[1.03] hover:border-gold hover:shadow-[0_18px_40px_-12px_rgba(212,175,55,0.45)] sm:bottom-6 sm:right-6 sm:px-5 sm:py-3.5 animate-wa-pulse"
    >
      <span className="relative grid h-6 w-6 place-items-center rounded-full bg-gold text-black sm:h-7 sm:w-7">
        <MessageCircle size={14} strokeWidth={2.5} className="sm:hidden" />
        <MessageCircle size={16} strokeWidth={2.5} className="hidden sm:block" />
        <span className="pointer-events-none absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      </span>
      <span className="text-sm font-semibold tracking-tight sm:hidden">Chat</span>
      <span className="hidden text-sm font-semibold tracking-tight sm:inline">
        Automate My Business
      </span>
    </a>
  );
}

export default FloatingWhatsApp;
