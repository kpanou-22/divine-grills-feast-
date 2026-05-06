import { Lang, t, WHATSAPP } from "@/i18n/translations";

const statIcons = ["fa-fire", "fa-clock", "fa-location-dot"];

export const Hero = ({ lang }: { lang: Lang }) => {
  const T = t[lang].hero;
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1920&q=70"
        alt="Grillades au feu de bois"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center text-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/15 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground animate-pulse">
          <i className="fa-solid fa-fire text-primary" /> {T.badge}
        </span>
        <h1 className="mt-6 text-5xl sm:text-7xl md:text-8xl font-display tracking-wider leading-none text-balance">
          DIVIN <span className="text-primary">GRILLADES</span>
        </h1>
        <p className="mt-6 text-lg sm:text-2xl font-display tracking-wide text-foreground/90">{T.slogan}</p>
        <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">{T.desc}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#menu" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition shadow-ember">
            <i className="fa-solid fa-utensils" /> {T.cta1}
          </a>
          <a href={WHATSAPP} target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 border-2 border-foreground text-foreground px-7 py-3.5 rounded-full font-semibold hover:bg-foreground hover:text-background transition">
            <i className="fa-brands fa-whatsapp" /> {T.cta2}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {T.stats.map((s, i) => (
            <div key={i} className="rounded-xl border border-border bg-card/60 backdrop-blur px-4 py-4 flex items-center justify-center gap-3">
              <i className={`fa-solid ${statIcons[i]} text-primary text-lg`} />
              <span className="font-semibold text-sm">{s}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#menu" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/80 animate-bounce-soft" aria-label="scroll">
        <i className="fa-solid fa-chevron-down text-2xl" />
      </a>
    </section>
  );
};