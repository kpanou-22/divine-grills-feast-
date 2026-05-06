import { useState } from "react";
import { Lang, t } from "@/i18n/translations";
import { WHATSAPP } from "@/i18n/translations";

const links = (lang: Lang) => [
  { href: "#accueil", label: t[lang].nav.home },
  { href: "#menu", label: t[lang].nav.menu },
  { href: "#pourquoi", label: t[lang].nav.why },
  { href: "#avis", label: t[lang].nav.reviews },
  { href: "#contact", label: t[lang].nav.contact },
];

export const Navbar = ({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#accueil" className="flex items-center gap-2 text-foreground">
          <i className="fa-solid fa-fire text-primary text-2xl" />
          <span className="font-display text-xl tracking-wider">DIVIN GRILLADES</span>
        </a>
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links(lang).map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-full border border-border overflow-hidden text-xs font-semibold">
            <button onClick={() => setLang("fr")} className={`px-3 py-1 ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>FR</button>
            <button onClick={() => setLang("en")} className={`px-3 py-1 ${lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>EN</button>
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="hidden sm:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition">
            <i className="fa-solid fa-utensils" /> {t[lang].nav.order}
          </a>
          <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground text-2xl" aria-label="menu">
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`} />
          </button>
        </div>
      </nav>
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <ul className="flex flex-col px-6 py-6 gap-4 text-lg font-medium">
            {links(lang).map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-1">{l.label}</a>
              </li>
            ))}
            <li className="flex items-center gap-2 pt-2">
              <button onClick={() => setLang("fr")} className={`px-3 py-1 rounded-full text-sm font-semibold ${lang === "fr" ? "bg-primary text-primary-foreground" : "border border-border"}`}>FR</button>
              <button onClick={() => setLang("en")} className={`px-3 py-1 rounded-full text-sm font-semibold ${lang === "en" ? "bg-primary text-primary-foreground" : "border border-border"}`}>EN</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};