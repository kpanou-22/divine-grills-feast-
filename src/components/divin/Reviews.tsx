import { Lang, t } from "@/i18n/translations";

export const Reviews = ({ lang }: { lang: Lang }) => {
  const T = t[lang].reviews;
  return (
    <section id="avis" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center reveal">
          <h2 className="text-4xl sm:text-5xl font-display text-foreground">{T.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{T.subtitle}</p>
        </div>

        <div className="mt-10 text-center reveal">
          <div className="font-display text-7xl text-primary">4.8 <span className="text-3xl text-muted-foreground">/ 5</span></div>
          <div className="mt-2 flex justify-center gap-1 text-primary text-xl">
            {Array.from({ length: 5 }).map((_, i) => <i key={i} className="fa-solid fa-star" />)}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{T.basedOn}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {T.items.map((r, i) => (
            <article key={i} className="reveal relative rounded-2xl border border-border bg-card p-6">
              <i className="fa-solid fa-quote-left absolute -top-3 left-5 text-primary text-3xl bg-background px-2" />
              <p className="mt-3 text-sm text-foreground/90 leading-relaxed">{r.text}</p>
              <div className="mt-4 flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, j) => <i key={j} className="fa-solid fa-star text-sm" />)}
              </div>
              <div className="mt-3 flex items-center justify-between text-xs">
                <span className="font-semibold text-foreground">{r.name}</span>
                <span className="text-muted-foreground">{r.date}</span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center reveal">
          <a href="https://maps.google.com" target="_blank" rel="noopener" className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition">
            <i className="fa-solid fa-pen" /> {T.cta}
          </a>
        </div>
      </div>
    </section>
  );
};