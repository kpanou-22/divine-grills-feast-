export type Lang = "fr" | "en";

export const t = {
  fr: {
    nav: { home: "Accueil", menu: "Menu", why: "Pourquoi Nous", reviews: "Avis", contact: "Contact", order: "Commander" },
    hero: {
      badge: "Ouvert tous les jours · 16h – 4h",
      slogan: "Divin par le nom. Inoubliable par le goût.",
      desc: "Grillades au feu de bois · Poissons braisés · Saveurs authentiques · Abomey-Calavi",
      cta1: "Voir le Menu",
      cta2: "Commander sur WhatsApp",
      stats: ["100% Grillé", "16h – 4h", "Acconville, Abomey-Calavi"],
    },
    menu: {
      title: "La Carte",
      subtitle: "Des grillades authentiques préparées chaque jour avec passion",
      tabs: { poultry: "Volaille", meat: "Viandes", fish: "Poissons", sides: "Accompagnements", drinks: "Boissons" },
      order: "Commander",
      cta: "Passer une commande sur WhatsApp",
    },
    why: {
      title: "Pourquoi Nous Choisir ?",
      subtitle: "Ce qui rend DIVIN GRILLADES unique à Abomey-Calavi",
      cards: [
        { t: "Grillées à la Flamme", d: "Nos viandes sont grillées sur braise vive pour un goût authentique et incomparable." },
        { t: "Poissons Braisés Frais", d: "Des poissons sélectionnés chaque jour et braisés selon la tradition locale." },
        { t: "Accompagnements Traditionnels", d: "Pillon, akassa et pâte rouge préparés maison avec soin." },
        { t: "Ouvert Jusqu'à 4h du Matin", d: "Nous vous accueillons tous les jours de 16h à 4h, même tard le soir." },
        { t: "Prix Accessibles", d: "Dès 1 500 FCFA, régalez-vous d'un repas complet et généreux." },
        { t: "Livraison Disponible", d: "Commandez via WhatsApp et faites-vous livrer à domicile rapidement." },
      ],
    },
    reviews: {
      title: "Ce Que Disent Nos Clients",
      subtitle: "Des centaines de clients satisfaits nous font confiance chaque soir",
      basedOn: "Basé sur l'avis de nos clients",
      cta: "Donnez votre avis",
      items: [
        { text: "Le meilleur poulet grillé d'Abomey-Calavi ! La viande est tendre, bien assaisonnée et la pâte rouge est divine. Je reviens chaque semaine !", name: "Kossi A.", date: "il y a 3 jours" },
        { text: "Ambiance super sympa, service rapide et les poissons braisés sont à tomber. Je recommande vivement à toute ma famille !", name: "Adjoua M.", date: "il y a 1 semaine" },
        { text: "J'ai commandé via WhatsApp et la livraison était rapide. Le demi-poulet avec pillon, c'est un régal pur. Bravo l'équipe !", name: "Rodrigue K.", date: "il y a 2 semaines" },
        { text: "Ouvert tard, bon prix, bonne viande. C'est tout ce qu'il faut. Mon spot préféré le soir après le travail.", name: "Ines T.", date: "il y a 1 mois" },
        { text: "Le mouton grillé est exceptionnel. Servi chaud, bien épicé. Le rapport qualité-prix est imbattable à Acconville.", name: "Fiacre D.", date: "il y a 1 mois" },
      ],
    },
    contact: {
      title: "Contactez-Nous",
      subtitle: "Réservez, commandez ou passez nous voir — nous sommes là tous les soirs !",
      address: "Adresse",
      addressV: "Carrefour Acconville, Abomey-Calavi, Bénin",
      phone: "Téléphone / WhatsApp",
      hours: "Horaires",
      hoursV: "Tous les jours de 16h à 4h du matin",
      whatsappBtn: "Commander sur WhatsApp",
      follow: "Suivez-Nous",
      directions: "Obtenir l'itinéraire",
    },
    footer: {
      slogan: "Divin par le nom. Inoubliable par le goût.",
      hours: "16h – 4h · Tous les jours",
      copy: "© 2025 DIVIN GRILLADES · Tous droits réservés",
    },
    wa: { tooltip: "Commander via WhatsApp" },
  },
  en: {
    nav: { home: "Home", menu: "Menu", why: "Why Us", reviews: "Reviews", contact: "Contact", order: "Order" },
    hero: {
      badge: "Open every day · 4pm – 4am",
      slogan: "Divine by name. Unforgettable by taste.",
      desc: "Wood-fire grills · Braised fish · Authentic flavors · Abomey-Calavi",
      cta1: "View Menu",
      cta2: "Order on WhatsApp",
      stats: ["100% Grilled", "4pm – 4am", "Acconville, Abomey-Calavi"],
    },
    menu: {
      title: "Our Menu",
      subtitle: "Authentic grills prepared every day with passion",
      tabs: { poultry: "Poultry", meat: "Meats", fish: "Fish", sides: "Sides", drinks: "Drinks" },
      order: "Order",
      cta: "Place an order on WhatsApp",
    },
    why: {
      title: "Why Choose Us?",
      subtitle: "What makes DIVIN GRILLADES unique in Abomey-Calavi",
      cards: [
        { t: "Flame Grilled", d: "Our meats are grilled over live embers for an authentic, unmatched taste." },
        { t: "Fresh Braised Fish", d: "Fish selected daily and braised the traditional local way." },
        { t: "Traditional Sides", d: "Pillon, akassa and red dough — handmade with care." },
        { t: "Open Until 4 AM", d: "We welcome you every day from 4pm to 4am, even late at night." },
        { t: "Affordable Prices", d: "From 1,500 FCFA, enjoy a complete and generous meal." },
        { t: "Delivery Available", d: "Order via WhatsApp and get fast home delivery." },
      ],
    },
    reviews: {
      title: "What Our Customers Say",
      subtitle: "Hundreds of happy customers trust us every night",
      basedOn: "Based on our customers' reviews",
      cta: "Leave a review",
      items: [
        { text: "The best grilled chicken in Abomey-Calavi! The meat is tender, well seasoned and the red dough is divine. I'm back every week!", name: "Kossi A.", date: "3 days ago" },
        { text: "Great vibe, fast service and the braised fish is to die for. I highly recommend it to my whole family!", name: "Adjoua M.", date: "1 week ago" },
        { text: "I ordered on WhatsApp and delivery was fast. Half chicken with pillon — pure delight. Bravo team!", name: "Rodrigue K.", date: "2 weeks ago" },
        { text: "Open late, good price, good meat. That's all you need. My favorite spot after work.", name: "Ines T.", date: "1 month ago" },
        { text: "The grilled lamb is exceptional. Served hot, well spiced. Unbeatable value at Acconville.", name: "Fiacre D.", date: "1 month ago" },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Book, order or come see us — we're here every night!",
      address: "Address",
      addressV: "Carrefour Acconville, Abomey-Calavi, Benin",
      phone: "Phone / WhatsApp",
      hours: "Hours",
      hoursV: "Every day from 4pm to 4am",
      whatsappBtn: "Order on WhatsApp",
      follow: "Follow Us",
      directions: "Get directions",
    },
    footer: {
      slogan: "Divine by name. Unforgettable by taste.",
      hours: "4pm – 4am · Every day",
      copy: "© 2025 DIVIN GRILLADES · All rights reserved",
    },
    wa: { tooltip: "Order via WhatsApp" },
  },
} as const;

export const menuData = {
  poultry: [
    { name: { fr: "Quart de poulet grillé + accompagnement", en: "Grilled quarter chicken + side" }, desc: { fr: "Quart de poulet juteux grillé à la flamme, servi avec pillon, akassa ou pâte rouge.", en: "Juicy flame-grilled quarter chicken served with pillon, akassa or red dough." }, price: "1 500 FCFA", img: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=800&q=70" },
    { name: { fr: "Demi poulet grillé + accompagnement", en: "Grilled half chicken + side" }, desc: { fr: "Demi poulet tendre et savoureux, grillé sur braise vive.", en: "Tender, tasty half chicken grilled over live embers." }, price: "2 500 FCFA", img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=800&q=70" },
    { name: { fr: "Poulet entier grillé + accompagnement", en: "Whole grilled chicken + side" }, desc: { fr: "Un poulet entier grillé à partager, pour les grandes faims !", en: "A whole grilled chicken to share — for big appetites!" }, price: "4 500 FCFA", img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=70" },
  ],
  meat: [
    { name: { fr: "Lapin grillé (portion) + accompagnement", en: "Grilled rabbit (portion) + side" }, desc: { fr: "Lapin grillé fondant, une spécialité rare et savoureuse.", en: "Melt-in-the-mouth grilled rabbit — a rare, savory specialty." }, price: "2 500 FCFA", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=70" },
    { name: { fr: "Mouton grillé (portion) + accompagnement", en: "Grilled lamb (portion) + side" }, desc: { fr: "Portion de mouton grillé, tendre et parfumé aux épices locales.", en: "Tender grilled lamb portion, fragrant with local spices." }, price: "3 000 FCFA", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=70" },
  ],
  fish: [
    { name: { fr: "Poisson braisé (petit) + accompagnement", en: "Braised fish (small) + side" }, desc: { fr: "Poisson frais braisé selon la tradition, accompagné de pâte rouge.", en: "Fresh fish braised the traditional way, served with red dough." }, price: "1 500 FCFA", img: "https://images.unsplash.com/photo-1535400875775-0fc402b4cf28?auto=format&fit=crop&w=800&q=70" },
    { name: { fr: "Poisson braisé (grand) + accompagnement", en: "Braised fish (large) + side" }, desc: { fr: "Grand poisson braisé, généreux et plein de saveurs.", en: "Large braised fish — generous and full of flavor." }, price: "3 000 FCFA", img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=800&q=70" },
  ],
  sides: [
    { name: { fr: "Pillon", en: "Pillon" }, desc: { fr: "Accompagnement traditionnel, préparé maison.", en: "Traditional homemade side." }, price: "500 FCFA", img: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?auto=format&fit=crop&w=800&q=70" },
    { name: { fr: "Akassa", en: "Akassa" }, desc: { fr: "Pâte de maïs fermentée, douce et fondante.", en: "Soft fermented corn dough." }, price: "500 FCFA", img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=70" },
    { name: { fr: "Pâte rouge", en: "Red dough" }, desc: { fr: "Notre pâte rouge épicée, signature de la maison.", en: "Our spicy red dough — house signature." }, price: "500 FCFA", img: "https://images.unsplash.com/photo-1574484284002-952d92456975?auto=format&fit=crop&w=800&q=70" },
  ],
  drinks: [
    { name: { fr: "Boissons diverses", en: "Assorted drinks" }, desc: { fr: "Sodas, eaux et boissons locales.", en: "Sodas, water and local beverages." }, price: "500 – 1 000 FCFA", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=70" },
  ],
} as const;

export const WHATSAPP = "https://wa.me/2290157300154";