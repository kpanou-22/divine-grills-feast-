import { useState } from "react";
import { Navbar } from "@/components/divin/Navbar";
import { Hero } from "@/components/divin/Hero";
import { Menu } from "@/components/divin/Menu";
import { Why } from "@/components/divin/Why";
import { Reviews } from "@/components/divin/Reviews";
import { Contact } from "@/components/divin/Contact";
import { Footer } from "@/components/divin/Footer";
import { WhatsAppFab } from "@/components/divin/WhatsAppFab";
import { useReveal } from "@/hooks/useReveal";
import type { Lang } from "@/i18n/translations";

const Index = () => {
  const [lang, setLang] = useState<Lang>("fr");
  useReveal();
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Navbar lang={lang} setLang={setLang} />
      <main className="pt-16">
        <Hero lang={lang} />
        <Menu lang={lang} />
        <Why lang={lang} />
        <Reviews lang={lang} />
        <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <WhatsAppFab lang={lang} />
    </div>
  );
};

export default Index;
