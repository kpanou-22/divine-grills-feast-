import { Lang, t } from "@/i18n/translations";

const icons = ["fa-fire", "fa-fish", "fa-bowl-food", "fa-clock", "fa-money-bill-wave", "fa-motorcycle"];

export const Why = ({ lang }: { lang: Lang }) => {
  const T = t[lang].why;
  return (
    <section id="pourquoi" className="py-24 bg-gradient-fire relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle at 80% 20%, hsl(var(--primary)/0.5), transparent 60%)" }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center reveal">
          <h2 className="text-4xl sm:text-5xl font-display text-foreground">{T.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{T.subtitle}</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {T.cards.map((c, i) => (
            <div key={i} className="reveal rounded-2xl border border-primary/30 bg-card/80 backdrop-blur p-6 hover:border-primary hover:-translate-y-1 transition">
              <div className="h-12 w-12 rounded-xl bg-primary/15 text-primary flex items-center justify-center text-2xl">
                <i className={`fa-solid ${icons[i]}`} />
              </div>
              <h3 className="mt-4 font-display text-xl tracking-wide text-foreground">{c.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};