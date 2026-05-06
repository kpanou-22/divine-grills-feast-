import { Lang, t, WHATSAPP } from "@/i18n/translations";

const socials = [
  { icon: "fa-facebook-f", bg: "bg-[#1877F2]", href: "https://facebook.com" },
  { icon: "fa-instagram", bg: "bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]", href: "https://instagram.com" },
  { icon: "fa-tiktok", bg: "bg-black", href: "https://tiktok.com" },
  { icon: "fa-whatsapp", bg: "bg-whatsapp", href: WHATSAPP },
];

export const Contact = ({ lang }: { lang: Lang }) => {
  const T = t[lang].contact;
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center reveal">
          <h2 className="text-4xl sm:text-5xl font-display text-foreground">{T.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{T.subtitle}</p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          <div className="space-y-6 reveal">
            <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
              {[
                { icon: "fa-location-dot", label: T.address, value: T.addressV },
                { icon: "fa-phone", label: T.phone, value: "+229 0157300154" },
                { icon: "fa-clock", label: T.hours, value: T.hoursV },
              ].map((it, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-11 w-11 shrink-0 rounded-lg bg-primary/15 text-primary flex items-center justify-center text-lg">
                    <i className={`fa-solid ${it.icon}`} />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{it.label}</div>
                    <div className="font-medium text-foreground">{it.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href={WHATSAPP} target="_blank" rel="noopener" className="flex items-center justify-center gap-3 bg-whatsapp text-white px-6 py-5 rounded-2xl text-lg font-semibold hover:opacity-90 transition shadow-ember">
              <i className="fa-brands fa-whatsapp text-2xl" /> {T.whatsappBtn}
            </a>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="font-display text-lg tracking-wide text-foreground">{T.follow}</div>
              <div className="mt-4 flex gap-3">
                {socials.map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener" className={`h-12 w-12 rounded-xl text-white flex items-center justify-center text-lg hover:scale-110 transition ${s.bg}`}>
                    <i className={`fa-brands ${s.icon}`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-border bg-card flex-1 min-h-[400px]">
              <iframe
                title="DIVIN GRILLADES — Carrefour Acconville"
                src="https://www.google.com/maps?q=Carrefour+Acconville+Abomey-Calavi+Benin&output=embed"
                className="w-full h-full min-h-[400px]"
                loading="lazy"
              />
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=Carrefour+Acconville+Abomey-Calavi" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition">
              <i className="fa-solid fa-location-arrow" /> {T.directions}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};