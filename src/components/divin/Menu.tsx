import { useState } from "react";
import { Lang, t, menuData, WHATSAPP } from "@/i18n/translations";

type Cat = keyof typeof menuData;
const tabs: { key: Cat; icon: string }[] = [
  { key: "poultry", icon: "fa-drumstick-bite" },
  { key: "meat", icon: "fa-bone" },
  { key: "fish", icon: "fa-fish" },
  { key: "sides", icon: "fa-bowl-rice" },
  { key: "drinks", icon: "fa-wine-glass" },
];

export const Menu = ({ lang }: { lang: Lang }) => {
  const [active, setActive] = useState<Cat>("poultry");
  const T = t[lang].menu;
  const items = menuData[active];

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center reveal">
          <h2 className="text-4xl sm:text-5xl font-display text-foreground">{T.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{T.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3 reveal">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold border transition ${
                active === tab.key
                  ? "bg-primary text-primary-foreground border-primary shadow-ember"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-primary"
              }`}
            >
              <i className={`fa-solid ${tab.icon}`} /> {T.tabs[tab.key]}
            </button>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <article key={i} className="reveal group rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/60 transition flex flex-col h-full">
              <div className="relative aspect-[4/3] overflow-hidden shrink-0">
                <img src={item.img} alt={item.name[lang]} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                  {item.price}
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg tracking-wide text-foreground">{item.name[lang]}</h3>
                <p className="mt-2 text-sm italic text-muted-foreground line-clamp-2">{item.desc[lang]}</p>
                <div className="mt-auto pt-6">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener"
                    className="group inline-flex items-center justify-between w-full bg-[#25D366] text-white px-5 py-3 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:scale-[1.02]"
                  >
                    <span className="flex items-center gap-2">
                      <i className="fa-brands fa-whatsapp text-base" /> {T.order}
                    </span>
                    <span className="h-4 w-4 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <div className="h-1 w-1 rounded-full bg-white" />
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};