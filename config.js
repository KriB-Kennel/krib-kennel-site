const SITE = {
  brand: "KriB Kennel",

  flags: {
    showPhoto: true,     // si no tienes foto aún, pon false
    showPhone2: false,
    showSocials: false,  // pon true cuando tengas links
    showMap: true,
    showSticky: true
  },

  // Azul (preferido) :contentReference[oaicite:1]{index=1}
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
    hero: "./assets/hero.jpg",    // sube una foto bonita (o pon un color de fondo si no tienes)
    photo: "./assets/photo.jpg"   // foto adicional (opcional)
  },

  header: {
    tagline: "Guaynabo • 9am–6pm • Puerto Rico" // Guaynabo + horario :contentReference[oaicite:2]{index=2}
  },

  hero: {
    kicker: "Venta • Hospedaje • Training • Grooming", // servicios :contentReference[oaicite:3]{index=3}
    title: "KriB Kennel",
    text: "Venta de perros, hospedaje, training y grooming. Atención 9am a 6pm."
  },

  services: {
    title: "Servicios",
    lead: "Todo en un solo lugar para tu mascota.",
    items: [
      { title: "Venta de perros", desc: "Variedad y orientación para elegir tu mascota." },
      { title: "Hospedaje", desc: "Cuidado y estadía segura (según disponibilidad)." },
      { title: "Training", desc: "Entrenamiento básico y obediencia." },
      { title: "Grooming", desc: "Baño, grooming y cuidado general." }
    ]
  },

  contactSection: {
    title: "Contacto",
    lead: "Llámanos o escríbenos por WhatsApp para disponibilidad y detalles."
  },

  contact: {
    phone1Label: "Teléfono",
    phone1: "(787) 383-0494",          // :contentReference[oaicite:4]{index=4}
    phone1E164: "+17873830494",
    whatsappE164: "17873830494",       // :contentReference[oaicite:5]{index=5}
    whatsappMessage: "Hola, necesito información sobre KriB Kennel.",
    whatsappHint: "Escribir por WhatsApp"
  },

  map: {
    // Como el formulario solo dice “Guaynabo”, úsalo así de momento :contentReference[oaicite:6]{index=6}
    embedUrl: "", 
    openUrl: "https://maps.google.com/?q=Guaynabo,+Puerto+Rico"
  },

  socials: [
    // cuando tengas links reales, los activas y pones showSocials:true
  ],

  footer: {
    companyLabel: "RaymondDevelop",
    companyUrl: "https://www.raymonddevelop.com"
  }
};
