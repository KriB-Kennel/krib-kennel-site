const SITE = {
  brand: "KriB Kennel",

  flags: {
    showPhoto: true,       // si no tienes photo.jpg pon false
    showPhone2: false,
    showSocials: false,    // pon true cuando tengas links
    showMap: true,
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

  header: {
    // 👇 ESTE es el que tu index.html imprime arriba del logo
    tagline: "Guaynabo • 9am–6pm • Puerto Rico"
  },

  hero: {
    // 👇 ESTE es el texto pequeño del hero (kicker)
    kicker: "Dog Sales • Boarding • Training • Grooming",
    title: "KriB Kennel",
    text: "Dog sales, boarding, training and grooming. Open 9am–6pm."
  },

  services: {
    title: "Services",
    lead: "Everything your pet needs in one place.",
    items: [
      { title: "Dog Sales", desc: "Guidance and support to choose your new companion." },
      { title: "Boarding", desc: "Safe care and stay (subject to availability)." },
      { title: "Training", desc: "Basic obedience and behavior training." },
      { title: "Grooming", desc: "Bath, grooming and full care." }
    ]
  },

  contactSection: {
    title: "Contact",
    lead: "Call or message us on WhatsApp for availability and details."
  },

  contact: {
    phone1Label: "Phone",
    phone1: "(787) 383-0494",
    phone1E164: "+17873830494",

    // WhatsApp (E164 sin el +)
    whatsappE164: "17873830494",
    whatsappMessage: "Hi! I need information about KriB Kennel.",
    whatsappHint: "Message on WhatsApp"
  },

  map: {
    // Si no tienes embed, déjalo vacío y solo se muestra el link si tu HTML lo permite.
    embedUrl: "",
    openUrl: "https://maps.google.com/?q=Guaynabo,+Puerto+Rico"
  },

  socials: [
    // { label: "Instagram", url: "https://instagram.com/..." }
  ],

  footer: {
    companyLabel: "RaymondDevelop",
    companyUrl: "https://www.raymonddevelop.com"
  }
};
