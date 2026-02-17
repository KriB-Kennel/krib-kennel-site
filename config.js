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

  header: { tagline: "HOSPEDAJE • TRAINING • GROOMING" },
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
    { href: "./index.html", labelKey: "navHome", label: "Home" },
    { href: "./gallery.html", labelKey: "navGallery", label: "Gallery" },
    { href: "./studs.html", labelKey: "navStuds", label: "Studs" },
    { href: "./females.html", labelKey: "navFemales", label: "Females" },
    { href: "./puppies.html", labelKey: "navPuppies", label: "Puppies Available" },
    { href: "./planned.html", labelKey: "navPlanned", label: "Planned Litters" }
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
studs:{
  items:{
    en:[
      {
        name:"GECH",
        pedigree:"GECH OD STOJKOVICA",
        img:"./assets/dogs/GECH.jpg",
        certImg:"./assets/pedigree/GECH-certificate.jpg",
        desc:"GECH is an outstanding male known for his stable temperament, strong character, and excellent pigmentation. Certified hips and elbows, he combines quality structure with a balanced, confident nature. Imported from Europe, GECH is available for stud service and represents strong working bloodlines with proven genetics."
      }
    ],
    es:[
      {
        name:"GECH",
        pedigree:"GECH OD STOJKOVICA",
        img:"./assets/dogs/GECH.jpg",
        certImg:"./assets/pedigree/GECH-certificate.jpg",
        desc:"GECH es un macho destacado por su temperamento estable, fuerte carácter y excelente pigmentación. Certificado de caderas y codos, combina estructura de calidad con una personalidad equilibrada y segura. Importado de Europa, GECH está disponible para servicio de padrote y representa líneas de trabajo sólidas con genética comprobada."
      }
    ]
  }
},
  females: {
  items: {
    en: [
      {
        name: "Luna",
        pedigree: "(LUNA VOM KRIB)",
        img: "./assets/dogs/luna.jpg",
        certImg: "./assets/pedigree/luna-certificate.jpg",
        desc: "Beautifully sized with an exceptional coat color and a stable, well-balanced temperament. She has steady nerves and an outstanding disposition, making her an excellent service and companion dog. Luna consistently produces puppies with strong bone structure, impressive size, and remarkable presence."
      },
      {
        name: "SAŠKA",
        pedigree: "(SAŠKA OD STOJKOVICA)",
        img: "./assets/hero.png",
        certImg: "./assets/pedigree/female2-certificate.jpg",
        desc: "Of excellent size, with an exceptional coat color and a stable, well-balanced temperament. She possesses strong, steady nerves and an outstanding disposition, making her an excellent service and companion dog. She is also an exceptional producer, consistently producing puppies with strong bone structure, impressive size, beautiful coloration, and a well-defined black mask that enhances their expression and presence."
      },
      {
        name: "Altea",
        img: "./assets/dogs/female3.JPG",
        desc: "Female of excellent structure, strong bone, and outstanding presence. She stands out for her beautiful rich red coat with a well-defined black mask and a confident, firm expression. Stable and well-balanced temperament. Currently retired from breeding."
      }
    ],
    es: [
      {
        name: "Luna",
        pedigree: "(LUNA VOM KRIB)",
        img: "./assets/dogs/luna.jpg",
        certImg: "./assets/pedigree/luna-certificate.jpg",
        desc: "De excelente tamaño, con un color de pelaje excepcional y un temperamento estable y equilibrado. Posee nervios firmes y una disposición extraordinaria, lo que la convierte en una excelente perra de servicio y compañía. Luna produce cachorros con gran estructura ósea, tamaño imponente y una presencia sobresaliente."
      },
      {
        name: "SAŠKA",
        pedigree: "(SAŠKA OD STOJKOVICA)",
        img: "./assets/hero.png",
        certImg: "./assets/pedigree/female2-certificate.jpg",
        desc: "De excelente tamaño, con un color de pelaje excepcional y un temperamento estable y equilibrado. Posee nervios firmes y una disposición extraordinaria, lo que la convierte en una excelente perra de servicio y compañía. Es una excelente reproductora, produciendo cachorros con gran estructura ósea, tamaño imponente, hermoso color y una marcada máscara negra que resalta su expresión y presencia."
      },
      {
        name: "Altea",
        img: "./assets/dogs/female3.JPG",
        desc: "Hembra de excelente estructura, fuerte osamenta y gran presencia. Destaca por su hermoso manto rojo con máscara negra bien definida y una expresión firme y segura. De temperamento estable y equilibrado. Actualmente se encuentra retirada de la reproducción."
      }
    ]
  }
},

    // ===== PUPPIES (YouTube) =====
  puppiesVideo: {
    // Pega aquí el link de YouTube (o solo el ID si quieres)
    url: "https://youtube.com/shorts/zyOKxrBLl5o?si=NI7AbGasIl15-8bj",
    // ejemplo: "https://youtu.be/abc123XYZ"
    desc: {
      en: "High-energy female puppy with an excellent working attitude. Good angulation and balanced structure. Strong prey drive, making her an excellent prospect for protection and service work.",
      es: "Cachorra con gran energía y excelente actitud de trabajo. Buenas angulaciones y estructura equilibrada. Destaca por su fuerte instinto de presa, siendo una excelente opción para protección y perro de servicio."
    },
    img: "./assets/puppies/female1.JPG"
  },

  dogs: {
    items: {
      en: [
        {
          name: "Dog 1",
          pedigree: "????",
          img: "./assets/dogs/Dog 1.jpg",
          desc: "Dog 1 Description.... English"
        },
        { name: "Dog 2", pedigree: "Pedigree 2", img: "./assets/dogs/dog2.jpg", desc: "Description..." },
        { name: "Dog 3", pedigree: "Pedigree 3", img: "./assets/dogs/dog3.jpg", desc: "Description..." },
        { name: "Dog 4", pedigree: "Pedigree 4", img: "./assets/dogs/dog4.jpg", desc: "Description..." }
      ],
      es: [
        {
          name: "Dog 1",
          pedigree: "????",
          img: "./assets/dogs/Dog 1.jpg",
          desc: "Descripción.... ESP"
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
      navStuds:"Males",
navFemales:"Females",
navPuppies:"Puppies Available",
navPlanned:"Planned Litters",
     
      puppiesTitle: "Puppies Available",
      puppiesLead: "All our puppies come with AKC papers. Vaccinated and dewormed.",

      comingSoonTitle: "Coming Soon",
      comingSoonText: "Updates will be posted here soon.",

      galleryTitle: "Gallery",
      galleryPageTitle: "Gallery",
      galleryPageLead: "Photos of our dogs.",
studsTitle: "Studs",
studsLead: "Featured stud with pedigree and description.",

      dogsTitle: "Dogs",
      dogsLead: "Featured dogs with pedigree and description.",

femalesLead:"Featured females with pedigree and description.",

      
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
      navStuds:"Machos",
navFemales:"Hembras",
navPuppies:"Cachorros Disponibles",
navPlanned:"Camadas Planificadas",

            puppiesTitle: "Cachorros Disponibles",
      puppiesLead: "Todos nuestros cachorros se entregan con papeles AKC. Vacunados y desparacitados",

      comingSoonTitle: "Próximamente",
      comingSoonText: "Pronto publicaremos actualizaciones aquí.",



      galleryTitle: "Galería",
      galleryPageTitle: "Galería",
      galleryPageLead: "Fotos de nuestros ejemplares.",
studsTitle: "Padrotes",
studsLead: "Padrote destacado con pedigrí y descripción.",

      femalesLead:"Hembras destacadas con pedigrí y descripción.",


      dogsTitle: "Canes",
      dogsLead: "Ejemplares destacados con pedigrí y descripción.",

      callBtn: "Llamar",
      waBtn: "WhatsApp"
    }
  }
};
