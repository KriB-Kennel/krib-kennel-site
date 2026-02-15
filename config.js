const SITE = {
  defaultLang: "en",

  brand: "KriB Kennel",

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
    hero: "./assets/hero.png",
    photo: "./assets/photo.jpg",
    // opcional si quieres controlar la mini del index:
    // gallery: "./assets/mapphoto.png"
  },

  header: { tagline: "Guaynabo • 9am–6pm • Puerto Rico" },
  hero: { kicker: "Dog Sales • Boarding • Training • Grooming", title: "KriB Kennel", text: "" },

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
  },

  // ✅ COMA ARRIBA ARREGLADA + nav correcto
  nav: {
    items: [
      { href: "./index.html#inicio",    labelKey: "navHome",     label: "Home" },
      { href: "./index.html#servicios", labelKey: "navServices", label: "Services" },
      { href: "./gallery.html",        labelKey: "navGallery",  label: "Gallery" },
      { href: "./dogs.html",           labelKey: "navDogs",     label: "Dogs" },
      { href: "./index.html#contacto", labelKey: "navContact",  label: "Contact" }
    ]
  },

  gallery: {
    images: {
      en: [
        "./assets/gallery/1.jpg",
        "./assets/gallery/2.jpg",
        "./assets/gallery/3.jpg",
        "./assets/gallery/4.jpg",
        "./assets/gallery/5.jpg",
        "./assets/gallery/6.jpg"
      ],
      es: [
        "./assets/gallery/1.jpg",
        "./assets/gallery/2.jpg",
        "./assets/gallery/3.jpg",
        "./assets/gallery/4.jpg",
        "./assets/gallery/5.jpg",
        "./assets/gallery/6.jpg"
      ]
    }
  },

  dogs: {
    items: {
      en: [
        {
          name: "Lex",
          pedigree: "SG1 Lex VD Southernwind",
          img: "./assets/dogs/lex.jpg",
          desc: "SG1 Lex VD Southernwind is the embodiment of power, balance, and character. With outstanding temperament and rock-solid nerves, he combines strength and elegance in perfect harmony. His massive bone, powerful structure, and remarkably strong head are trademarks he consistently transmits to his offspring. Broad across the chest and hindquarters, with correct shoulder layback, strong feet, and firm pasterns, Lex stands as a model of anatomical excellence. Beyond structure, Lex shines through his incredible character with children, dogs, and puppies—a true testament to his stable, noble nature. His progeny carry forward not only his strength and beauty, but also his unmatched balance, intelligence, and loving temperament, making them ideal for family, work, and companionship."
        },
        { name: "Dog 2", pedigree: "Pedigree 2", img: "./assets/dogs/dog2.jpg", desc: "Description..." },
        { name: "Dog 3", pedigree: "Pedigree 3", img: "./assets/dogs/dog3.jpg", desc: "Description..." },
        { name: "Dog 4", pedigree: "Pedigree 4", img: "./assets/dogs/dog4.jpg", desc: "Description..." }
      ],
      es: [
        {
          name: "Lex",
          pedigree: "SG1 Lex VD Southernwind",
          img: "./assets/dogs/lex.jpg",
          desc: "SG1 Lex VD Southernwind es la personificación de poder, balance y carácter... (si quieres la traduzco completa)."
        },
        { name: "Perro 2", pedigree: "Pedigrí 2", img: "./assets/dogs/dog2.jpg", desc: "Descripción..." },
        { name: "Perro 3", pedigree: "Pedigrí 3", img: "./assets/dogs/dog3.jpg", desc: "Descripción..." },
        { name: "Perro 4", pedigree: "Pedigrí 4", img: "./assets/dogs/dog4.jpg", desc: "Descripción..." }
      ]
    }
  },

  // ✅ UN SOLO i18n con TODO junto
  i18n: {
    en: {
      brand: "KriB Kennel",
      tagline: "Dog Sales • Boarding • Training • Grooming",

      heroKicker: "Guaynabo • Puerto Rico •",
      heroTitle: "KriB Kennel",
      heroText: "Dog sales, boarding, training and grooming. Open 9am–6pm.",

      servicesTitle: "Services",
      servicesLead: "Everything your pet needs in one place.",

      contactTitle: "Contact",
      contactLead: "Call or message us on WhatsApp for availability and details.",

      phone1Label: "Phone",
      phone2Label: "Alternate",

      navTitle: "Menu",
      navHome: "Home",
      navServices: "Services",
      navGallery: "Gallery",
      navDogs: "Dogs",
      navContact: "Contact",

      galleryTitle: "Gallery",
      galleryPageTitle: "Gallery",
      galleryPageLead: "Photos of our facility, litters, and dogs.",

      dogsTitle: "Dogs",
      dogsLead: "Featured dogs with pedigree and description.",

      callBtn: "Call",
      waBtn: "WhatsApp"
    },

    es: {
      brand: "KriB Kennel",
      tagline: "Hospedaje • Training • Grooming",

      heroKicker: "Guaynabo • Puerto Rico •",
      heroTitle: "KriB Kennel",
      heroText: "Venta de perros, hospedaje, training y grooming. Atención 9am a 6pm.",

      servicesTitle: "Servicios",
      servicesLead: "Todo en un solo lugar para tu mascota.",

      contactTitle: "Contacto",
      contactLead: "Llámanos o escríbenos por WhatsApp para disponibilidad y detalles.",

      phone1Label: "Teléfono",
      phone2Label: "Alterno",

      navTitle: "Menú",
      navHome: "Inicio",
      navServices: "Servicios",
      navGallery: "Galería",
      navDogs: "Canes",
      navContact: "Contacto",

      galleryTitle: "Galería",
      galleryPageTitle: "Galería",
      galleryPageLead: "Fotos de nuestras instalaciones, camadas y ejemplares.",

      dogsTitle: "Canes",
      dogsLead: "Ejemplares destacados con pedigrí y descripción.",

      callBtn: "Llamar",
      waBtn: "WhatsApp"
    }
  }
};
