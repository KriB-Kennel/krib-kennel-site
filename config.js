const SITE = {
  brand: "Navarro Towing",

  meta: {
    title: "Navarro Towing | Servicio 24/7",
    description: "Servicio de grúas y asistencia en carretera."
  },

  // Cambias colores por cliente (sin tocar CSS)
  colors: {
    bg0: "#0b1220",
    bg1: "#111a2e",
    brand0: "#7dd3fc",
    brand1: "#a78bfa",
    btnText: "#0b1220",
    card: "rgba(255,255,255,.08)",
    stroke: "rgba(255,255,255,.14)",
    text: "rgba(255,255,255,.92)",
    muted: "rgba(255,255,255,.72)"
  },

  assets: {
    logo: "./assets/logo.png",
    hero: "./assets/hero.jpg",
    photo: "./assets/photo.jpg", // pon null si NO quieres foto
  },

  header: {
    tagline: "Servicio 24/7 • Puerto Rico • Respuesta rápida"
  },

  hero: {
    kicker: "Disponible 24/7",
    title: "Soluciones profesionales\nen carretera.",
    text: "Grúas y asistencia vial. Llegamos rápido (según disponibilidad) y trabajamos seguro."
  },

  services: {
    title: "Servicios",
    lead: "Asistencia vial y remolque con atención rápida y segura.",
    items: [
      { title: "Carretera", desc: "Asistencia para vehículos cuando lo necesites." },
      { title: "Remolque", desc: "Servicio de grúa para autos, SUV y pickups." },
      { title: "Cambio de goma", desc: "Cambio de neumáticos con herramientas adecuadas." },
      { title: "Gasolina", desc: "Te llevamos combustible si te quedas sin gasolina." }
    ]
  },

  contactSection: {
    title: "Contacto",
    lead: "Llama o escribe por WhatsApp. Respuesta según disponibilidad."
  },

  contact: {
    phone1Label: "Teléfono principal",
    phone1: "(787) 366-0008",
    phone1E164: "+17873660008",

    phone2Label: "Teléfono alterno",
    phone2: "(787) 934-1644",
    phone2E164: "+17879341644",

    whatsappE164: "17873660008",
    whatsappMessage: "Hola, necesito asistencia. Mi ubicación es:",
    whatsappHint: "Enviar ubicación y detalles"
  },

  // ✅ Mapa: usa un embed URL (iframe) y un link para abrir
  map: {
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242632.89211665784!2d-66.251707!3d18.2319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c03686fe268196f%3A0x8c8aeb1b7b7e15a6!2sPuerto%20Rico!5e0!3m2!1ses!2spr!4v0000000000000",
    openUrl: "https://maps.google.com/?q=Puerto+Rico"
  },

  socials: [
    { label: "Instagram", url: "https://www.instagram.com/navarro_towing_service?igsh=MTU1cmlhdzRpNW9rOA==" },
    { label: "Facebook",  url: "https://www.facebook.com/share/1ETZkfbvzr/?mibextid=wwXIfr" },
    { label: "TikTok",    url: "https://www.tiktok.com/@nomarnavarrocoln?_r=1&_t=ZT-93kwbAny2O6" }
  ],

 ,

  footer: {
    companyLabel: "RaymondDevelop",
    companyUrl: "https://www.raymonddevelop.com"
  }
};
