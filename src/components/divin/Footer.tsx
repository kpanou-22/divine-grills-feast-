import { Lang, t, WHATSAPP } from "@/i18n/translations";

export const Footer = ({ lang }: { lang: Lang }) => {
  const T = t[lang];
  const links = [
    { href: "#accueil", label: T.nav.home },
    { href: "#menu", label: T.nav.menu },
    { href: "#pourquoi", label: T.nav.why },
    { href: "#avis", label: T.nav.reviews },
    { href: "#contact", label: T.nav.contact },
  ];
  return (
    <footer className="bg-footer text-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-fire text-primary text-2xl" />
            <span className="font-display text-2xl text-primary tracking-wider">DIVIN GRILLADES</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{T.footer.slogan}</p>
          <div className="mt-5 flex gap-3">
            {[
              { i: "fa-facebook-f", h: "https://facebook.com" },
              { i: "fa-instagram", h: "https://instagram.com" },
              { i: "fa-tiktok", h: "https://tiktok.com" },
              { i: "fa-whatsapp", h: WHATSAPP },
            ].map((s, i) => (
              <a key={i} href={s.h} target="_blank" rel="noopener" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition">
                <i className={`fa-brands ${s.i}`} />
              </a>
            ))}
          </div>
        </div>

        <ul className="space-y-2 text-sm">
          {links.map((l) => (
            <li key={l.href}><a href={l.href} className="hover:text-primary transition">{l.label}</a></li>
          ))}
        </ul>

        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><i className="fa-solid fa-clock text-primary" /> {T.footer.hours}</li>
          <li className="flex items-center gap-2"><i className="fa-solid fa-location-dot text-primary" /> Carrefour Acconville, Abomey-Calavi, Bénin</li>
          <li className="flex items-center gap-2"><i className="fa-solid fa-phone text-primary" /> +229 0157300154</li>
        </ul>
      </div>

      <div className="mt-12 border-t border-primary/40 pt-6 text-center text-xs text-muted-foreground">
        {T.footer.copy}
      </div>
    </footer>
  );
};