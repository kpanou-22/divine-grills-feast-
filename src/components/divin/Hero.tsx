import { Lang, t, WHATSAPP } from "@/i18n/translations";

const statIcons = ["fa-fire", "fa-clock", "fa-location-dot"];

export const Hero = ({ lang }: { lang: Lang }) => {
  const T = t[lang].hero;
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1594221708779-94832f4320d1?auto=format&fit=crop&w=1920&q=70"
        alt="Grillades de poulet au feu de bois"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-overlay" />
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-primary/10 to-transparent opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      {/* Concentric Rings Decoration from the Model */}
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-[0.07] select-none hidden lg:block">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full"
            style={{
              width: `${(i + 1) * 100}px`,
              height: `${(i + 1) * 100}px`,
            }}
          />
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[1px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 sm:py-32 text-center text-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/60 bg-primary/15 px-4 py-2 text-[10px] sm:text-sm font-semibold text-foreground uppercase tracking-widest">
          <i className="fa-solid fa-fire text-primary" /> {T.badge}
        </span>
        <h1 className="mt-6 text-4xl sm:text-7xl md:text-8xl font-display tracking-wider leading-[1.1] text-balance">
          DIVIN <span className="text-primary underline decoration-primary/20 underline-offset-8">GRILLADES</span>
        </h1>
        <p className="mt-6 text-base sm:text-2xl font-display tracking-wide text-foreground/90 max-w-xl mx-auto">{T.slogan}</p>
        <p className="mt-3 text-xs sm:text-base text-muted-foreground max-w-xl mx-auto">{T.desc}</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#menu"
            className="group relative inline-flex items-center justify-between gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(204,0,0,0.4)] hover:scale-[1.02]"
          >
            <span className="flex items-center gap-2">
              <i className="fa-solid fa-utensils" /> {T.cta1}
            </span>
            <span className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener"
            className="group relative inline-flex items-center justify-between gap-4 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-[1.02]"
          >
            <span className="flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-xl" /> {T.cta2}
            </span>
            <span className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <div className="h-1.5 w-1.5 rounded-full bg-white" />
            </span>
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