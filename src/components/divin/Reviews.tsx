import { Lang, t } from "@/i18n/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export const Reviews = ({ lang }: { lang: Lang }) => {
  const T = t[lang].reviews;
  
  const avatars = [
    "https://i.pravatar.cc/150?u=kossi",
    "https://i.pravatar.cc/150?u=adjoua",
    "https://i.pravatar.cc/150?u=rodrigue",
    "https://i.pravatar.cc/150?u=ines",
    "https://i.pravatar.cc/150?u=fiacre"
  ];

  const roles = {
    fr: ["Client Régulier", "Amateur de Grillades", "Guide Local", "Client Fidèle", "Gastronome"],
    en: ["Regular Customer", "Grill Enthusiast", "Local Guide", "Loyal Customer", "Food Lover"]
  };

  return (
    <section id="avis" className="py-24 bg-background relative overflow-hidden">
      {/* Background Section Model adapted to site colors */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden whitespace-nowrap opacity-[0.03] rotate-[-5deg]">
        <div className="flex gap-48 font-black text-[22vw] leading-none uppercase select-none">
          Testimonial Testimonial
        </div>
        <div className="flex gap-48 font-black text-[22vw] leading-none uppercase select-none mt-4 ml-80">
          Testimonial Testimonial
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center reveal mb-16">
          <h2 className="text-4xl sm:text-5xl font-display text-foreground">{T.title}</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">{T.subtitle}</p>
        </div>

        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-4xl"
          >
            <CarouselContent className="-ml-4">
              {T.items.map((r, i) => (
                <CarouselItem key={i} className="pl-4 basis-full lg:basis-11/12 xl:basis-5/6">
                  <div className="p-1">
                    <article className="rounded-[2.5rem] bg-card border border-border/50 p-6 md:p-12 shadow-2xl transition-all">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-10">
                        <div className="flex items-center gap-5">
                          <Avatar className="h-16 w-16 md:h-20 md:w-20 border-2 border-primary/20">
                            <AvatarImage src={avatars[i % avatars.length]} alt={r.name} />
                            <AvatarFallback className="bg-primary/20 text-primary text-xl font-bold">
                              {r.name.substring(0, 1)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="space-y-1">
                            <h4 className="text-xl md:text-2xl font-bold text-foreground leading-none">{r.name}</h4>
                            <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-[0.2em] font-medium">
                              {roles[lang][i % roles[lang].length]}
                            </p>
                            <div className="text-[10px] md:text-xs text-primary font-semibold flex items-center gap-1">
                              <i className="fa-solid fa-location-dot" /> Abomey-Calavi
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-1 text-yellow-500">
                          {Array.from({ length: 5 }).map((_, j) => (
                            <Star key={j} className="h-5 w-5 md:h-6 md:w-6 fill-current" />
                          ))}
                        </div>
                      </div>
                      
                      <div className="relative">
                        <i className="fa-solid fa-quote-left absolute -top-6 -left-3 text-primary opacity-10 text-6xl" />
                        <p className="text-lg md:text-2xl text-foreground/90 font-medium leading-relaxed italic relative z-10">
                          "{r.text}"
                        </p>
                      </div>
                      
                      <div className="mt-10 flex items-center justify-between">
                        <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent mr-6" />
                        <span className="text-xs md:text-sm font-medium text-muted-foreground/60 px-4 py-2 bg-secondary/50 rounded-full backdrop-blur-sm border border-border/30">
                          {r.date}
                        </span>
                      </div>
                    </article>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Navigation Dots/Buttons */}
            <div className="flex justify-center gap-6 mt-12">
              <CarouselPrevious className="static h-14 w-14 translate-y-0 rounded-full bg-card border-border/50 hover:bg-primary hover:border-primary text-foreground hover:text-white transition-all shadow-xl" />
              <CarouselNext className="static h-14 w-14 translate-y-0 rounded-full bg-card border-border/50 hover:bg-primary hover:border-primary text-foreground hover:text-white transition-all shadow-xl" />
            </div>
          </Carousel>
        </div>

        <div className="mt-16 flex justify-center reveal">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener"
            className="group relative inline-flex items-center justify-between gap-6 bg-white/5 border border-primary/30 text-foreground hover:bg-primary hover:text-white px-10 py-5 rounded-full font-bold transition-all hover:shadow-[0_0_40px_-5px_rgba(204,0,0,0.4)]"
          >
            <span className="flex items-center gap-3">
              <i className="fa-solid fa-pen-to-square group-hover:rotate-12 transition-transform" />
              {T.cta}
            </span>
            <span className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <div className="h-1.5 w-1.5 rounded-full bg-primary group-hover:bg-white transition-colors" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};