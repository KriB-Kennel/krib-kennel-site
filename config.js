const SITE = {
  defaultLang: "en", // idioma por defecto

  // ===== Switch EN/ES =====
  i18n: {
    en: {
      brand: "KriB Kennel",
      tagline: "Dog Sales • Boarding • Training • Grooming",

      heroKicker: "Guaybabo • Puerto Rico •",
      heroTitle: "KriB Kennel",
      heroText: "Dog sales, boarding, training and grooming. Open 9am–6pm.",

      servicesTitle: "Services",
      servicesLead: "Everything your pet needs in one place.",

      contactTitle: "Contact",
      contactLead: "Call or message us on WhatsApp for availability and details.",

      phone1Label: "Phone",
      phone2Label: "Alternate",
      mapLabel: "Open in Google Maps",

      callBtn: "Call",
      waBtn: "WhatsApp"
    },

    es: {
      brand: "KriB Kennel",
      tagline: "Hospedaje • Training • Grooming",

      heroKicker: "Guaybabo • Puerto Rico •",
      heroTitle: "KriB Kennel",
      heroText: "Venta de perros, hospedaje, training y grooming. Atención 9am a 6pm.",

      servicesTitle: "Servicios",
      servicesLead: "Todo en un solo lugar para tu mascota.",

      contactTitle: "Contacto",
      contactLead: "Llámanos o escríbenos por WhatsApp para disponibilidad y detalles.",

      phone1Label: "Teléfono",
      phone2Label: "Alterno",
      mapLabel: "Abrir en Google Maps",

      callBtn: "Llamar",
      waBtn: "WhatsApp"
    }
  },

  // ===== Opciones visuales =====
  brand: "KriB Kennel", // (se usa también si i18n no está)
  flags: {
    showPhoto: true,
    showPhone2: false,
    showSocials: false,
    showMap: false,
    showSticky: true
  },

  colors: {
    bg0: "#071226",
    bg1: "#0b1e3b",
    brand0: "#2ea8ff",
    brand1: "#0b5cff",
    btnText: "#061014",
    card: "rgba(255,255,255,.08)",
    stroke: "rgba(255,255,255,.14)",
    text: "rgba(255,255,255,.92)",
    muted: "rgba(255,255,255,.72)"
  },

  assets: {
    logo: "./assets/logo.png",
    hero: "./assets/hero.jpg",
    photo: "./assets/photo.jpg"
  },

  // Estos quedan como fallback si i18n no existiera
  header: { tagline: "Guaynabo • 9am–6pm • Puerto Rico" },
  hero: { kicker: "Dog Sales • Boarding • Training • Grooming", title: "KriB Kennel", text: "" },

  // Servicios (si quieres que también sean bilingües, usa items.en / items.es)
  services: {
    items: {
      en: [
        { title: "Dog Sales", desc: "Guidance and support to choose your new companion." },
        { title: "Boarding", desc: "Safe care and stay (subject to availability)." },
        { title: "Training", desc: "Basic obedience and behavior training." },
        { title: "Grooming", desc: "Bath, grooming and full care." }
      ],
      es: [
        { title: "Venta de perros", desc: "Variedad y orientación para elegir tu mascota." },
        { title: "Hospedaje", desc: "Cuidado y estadía segura (según disponibilidad)." },
        { title: "Training", desc: "Entrenamiento básico y obediencia." },
        { title: "Grooming", desc: "Baño, grooming y cuidado general." }
      ]
    }
  },

  contactSection: {
    // (labels se cambian por i18n)
    title: "Contact",
    lead: "Call or message us on WhatsApp for availability and details."
  },

  contact: {
    phone1Label: "Phone",
    phone1: "(787) 383-0494",
    phone1E164: "+17873830494",

    whatsappE164: "17873830494",
    whatsappMessage: "Hi! I need information about KriB Kennel.",
    whatsappHint: "Message on WhatsApp"
  },

  map: {
    embedUrl: "",
    openUrl: "https://maps.google.com/?q=Guaynabo,+Puerto+Rico"
  },

  socials: [],

  footer: {
    companyLabel: "RaymondDevelop",
    companyUrl: "https://www.raymonddevelop.com"
  }
};
