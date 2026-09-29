export const profile = {
  name: "Alejandro Nieto",
  email: "goukastudio@gmail.com",
  projectCount: "30+",
  linkedin: "https://www.linkedin.com/in/alejandronietobarea/",
  github: "https://github.com/aleksnieto",
  bio: {
    es: "Full Stack Engineer en METRICA y CEO de Gouka Studio. Ingeniería con IA y creación de productos digitales, de la idea al desarrollo. He trabajado en más de 30 proyectos.",
    en: "Full Stack Engineer at METRICA and CEO of Gouka Studio. AI-assisted engineering and digital products, from idea to development. I have worked on more than 30 projects.",
  },
};

export const projects = [
  {
    id: "gouka-studio",
    kind: "company",
    title: "Gouka Studio",
    category: {
      es: "Empresa · Estudio digital",
      en: "Company · Digital studio",
    },
    description: {
      es: "El estudio que dirijo como CEO. Un espacio para dar forma a productos digitales, desde la idea hasta el desarrollo.",
      en: "The studio I lead as CEO. A space to shape digital products, from the initial idea through development.",
    },
    contribution: {
      es: "Dirección del estudio y desarrollo de producto digital.",
      en: "Studio leadership and digital product development.",
    },
    focus: {
      es: ["Dirección", "Producto digital", "Ingeniería de software"],
      en: ["Leadership", "Digital product", "Software engineering"],
    },
    href: null,
    status: { es: "CEO · Desde julio de 2026", en: "CEO · Since July 2026" },
  },
  {
    id: "cleverpsico",
    title: "CleverPsico",
    category: {
      es: "Producto · Gestión clínica",
      en: "Product · Clinic management",
    },
    description: {
      es: "Una plataforma para conectar la presencia digital de una consulta con su gestión diaria. Agenda, pacientes y permisos por rol en un sistema compartido entre clínicas, acompañado de una web de presentación.",
      en: "A platform connecting a clinic’s digital presence with its daily management. Scheduling, patients and role-based permissions in a system shared across clinics, alongside a public marketing website.",
    },
    contribution: {
      es: "Diseño y desarrollo del producto, desde la experiencia pública hasta los flujos de gestión y la integración entre frontend y backend.",
      en: "Product design and development, from the public experience to management workflows and frontend–backend integration.",
    },
    stack: ["Angular", "Spring Boot"],
    href: "https://www.cleverpsico.com",
    status: { es: "En evolución", en: "Evolving" },
  },
  {
    id: "gouka",
    title: "Gouka Media Engine",
    category: {
      es: "Laboratorio · Inteligencia artificial",
      en: "Lab · Artificial intelligence",
    },
    description: {
      es: "Un laboratorio editorial para explorar cómo transformar fuentes dispersas en información organizada. La base implementada recoge artículos, elimina duplicados y agrupa eventos mediante embeddings.",
      en: "An editorial lab exploring how to turn scattered sources into organised information. The implemented foundation ingests articles, removes duplicates and groups events using embeddings.",
    },
    contribution: {
      es: "Arquitectura y desarrollo de la ingesta, los procesos en segundo plano y el panel editorial. Experimentación con agrupación semántica y herramientas de producción de contenido.",
      en: "Architecture and development of ingestion, background processing and the editorial dashboard. Experimentation with semantic clustering and content production tools.",
    },
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Celery"],
    href: null,
    status: { es: "En desarrollo", en: "In development" },
  },
  {
    id: "ezbarbers",
    title: "Ezbarbers",
    category: {
      es: "Producto · Reservas y gestión",
      en: "Product · Booking and management",
    },
    description: {
      es: "Un CRM para barberías y peluquerías. Reúne reservas, gestión de empleados, cancelación de citas y email marketing para acompañar la administración del negocio.",
      en: "A CRM for barbershops and hair salons. It brings together bookings, staff management, appointment cancellations and email marketing to support business administration.",
    },
    contribution: {
      es: "Diseño, arquitectura y desarrollo full stack del producto, con una interfaz Angular y un backend Spring Boot.",
      en: "Product design, architecture and full-stack development, with an Angular interface and a Spring Boot backend.",
    },
    stack: ["Angular", "PrimeNG", "Spring Boot", "MariaDB", "Jest"],
    href: null,
    status: { es: "Proyecto propio", en: "Personal project" },
  },
];

export const experience = [
  {
    company: "Gouka Studio",
    period: { es: "Jul 2026 — Actualidad", en: "Jul 2026 — Present" },
    role: "CEO",
    summary: {
      es: "Dirección y desarrollo de producto digital.",
      en: "Digital product direction and development.",
    },
  },
  {
    company: "METRICA",
    period: { es: "Jun 2026 — Actualidad", en: "Jun 2026 — Present" },
    role: "Full Stack Engineer",
    summary: {
      es: "Ingeniería de software con IA.",
      en: "AI-assisted software engineering.",
    },
  },
  {
    company: "Grupo Digital",
    period: { es: "2025 — Jun 2026", en: "2025 — Jun 2026" },
    role: "Frontend / Full Stack Developer",
    summary: {
      es: "Frontend y modernización de aplicaciones.",
      en: "Frontend and application modernisation.",
    },
  },
  {
    company: "Grupo NGN",
    period: { es: "2024 — 2025", en: "2024 — 2025" },
    role: "Software Developer",
    summary: {
      es: "Desarrollo frontend en un equipo internacional.",
      en: "Frontend development in an international team.",
    },
  },
  {
    company: "Controlnet",
    period: { es: "2024 — 2025", en: "2024 — 2025" },
    role: "Full Stack Developer",
    summary: {
      es: "Desarrollo full stack de CRM.",
      en: "Full-stack CRM development.",
    },
  },
];
