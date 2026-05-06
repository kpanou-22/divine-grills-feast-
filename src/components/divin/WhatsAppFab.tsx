import { Lang, t, WHATSAPP } from "@/i18n/translations";

export const WhatsAppFab = ({ lang }: { lang: Lang }) => (
  <a
    href={WHATSAPP}
    target="_blank"
    rel="noopener"
    title={t[lang].wa.tooltip}
    aria-label={t[lang].wa.tooltip}
    className="group fixed z-50 bottom-5 right-5 sm:bottom-6 sm:right-6 h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-whatsapp text-white flex items-center justify-center text-2xl sm:text-3xl shadow-2xl animate-pulse-ring"
  >
    <i className="fa-brands fa-whatsapp" />
    <span className="hidden md:block absolute right-full mr-3 whitespace-nowrap bg-foreground text-background text-xs font-semibold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition">
      {t[lang].wa.tooltip}
    </span>
  </a>
);