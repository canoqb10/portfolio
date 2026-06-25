import type { Lang } from "@/i18n/context";

/** Helper: picks the string for the active language */
export function b(bilingual: { en: string; es: string }, lang: Lang): string {
  return bilingual[lang];
}
export function bArr(
  bilingual: { en: string[]; es: string[] },
  lang: Lang,
): string[] {
  return bilingual[lang];
}

// ─── Non-translatable constants ─────────────────────────────────────────────

export const personalInfo = {
  name: "José Alberto Cano Govea",
  wordmark: "JC",
  firstName: "José",
  middleName: "Alberto",
  lastName: "Cano Govea",
  email: "juliojacg@hotmail.com",
  phone: "+52 55 5460 4027",
  location: "México City, México",
  linkedin: "https://www.linkedin.com/in/jose-alberto-cano-govea",
  github: "https://github.com/canoqb10",
  cvUrl: "/jose-alberto-cano-govea-frontend-engineer.pdf",

  // Bilingual fields
  title: { en: "Senior Frontend Engineer", es: "Ingeniero Frontend Senior" },
  subtitle: {
    en: "Building scalable, user-focused web experiences",
    es: "Construyendo experiencias web escalables centradas en el usuario",
  },
  availability: {
    en: "Open to new opportunities",
    es: "Disponible para nuevas oportunidades",
  },
  introShort: {
    en: "10+ years crafting high-performance web platforms at scale. React & Angular specialist with deep expertise in Microfrontend architectures.",
    es: "Más de 10 años construyendo plataformas web de alto rendimiento. Especialista en React y Angular con profundo dominio de arquitecturas Microfrontend.",
  },
  intro: {
    en: `Results-oriented software engineer with 10+ years of experience building scalable, enterprise-grade web applications.
Specialized in modern frontend architectures — React, Angular, Microfrontends — with solid full-stack capabilities.
I design user experiences and develop robust solutions that align technical excellence with real business outcomes.`,
    es: `Ingeniero de software orientado a resultados con más de 10 años de experiencia construyendo aplicaciones web escalables de nivel empresarial.
Especializado en arquitecturas frontend modernas — React, Angular, Microfrontends — con sólidas capacidades en el stack completo.
Diseño experiencias de usuario y desarrollo soluciones robustas que alinean la excelencia técnica con resultados de negocio reales.`,
  },
};

export const stats = [
  {
    value: "10+",
    label: { en: "Years of experience", es: "Años de experiencia" },
  },
  {
    value: "3",
    label: { en: "Enterprise companies", es: "Empresas de primer nivel" },
  },
  {
    value: "15+",
    label: { en: "Projects delivered", es: "Proyectos entregados" },
  },
  {
    value: "5+",
    label: { en: "Frontend frameworks", es: "Frameworks frontend" },
  },
];

export const expertise = [
  {
    icon: "layers",
    title: { en: "Frontend Architecture", es: "Arquitectura Frontend" },
    description: {
      en: "Microfrontends, Module Federation, component libraries, and scalable SPA design patterns.",
      es: "Microfrontends, Module Federation, bibliotecas de componentes y patrones de diseño SPA escalables.",
    },
  },
  {
    icon: "code2",
    title: { en: "React & Angular", es: "React y Angular" },
    description: {
      en: "Expert-level development with React (hooks, context, Redux) and Angular with RxJS and standalone components.",
      es: "Desarrollo a nivel experto con React (hooks, context, Redux) y Angular con RxJS y componentes standalone.",
    },
  },
  {
    icon: "zap",
    title: { en: "Performance & Quality", es: "Rendimiento y Calidad" },
    description: {
      en: "Core Web Vitals optimization, code quality with SonarQube, automated testing with Jest & RTL.",
      es: "Optimización de Core Web Vitals, calidad de código con SonarQube y pruebas automatizadas con Jest y RTL.",
    },
  },
  {
    icon: "cloud",
    title: { en: "Cloud & DevOps", es: "Cloud y DevOps" },
    description: {
      en: "AWS certified, Docker, Kubernetes, CI/CD pipelines and cloud-native deployment strategies.",
      es: "Certificado en AWS, Docker, Kubernetes, pipelines CI/CD y estrategias de despliegue cloud-native.",
    },
  },
];

export const experience = [
  {
    id: "sps",
    company: "Smart Payments Solutions SA de CV",
    companyShort: "Smart Payments",
    role: { en: "Frontend Engineer", es: "Ingeniero Frontend" },
    period: { en: "October 2025 – Present", es: "Octubre 2025 – Presente" },
    current: true,
    location: "México City, México",
    description: {
      en: "Developing and maintaining a platform to manage payment terminals, merchant networks, user profiles, and operational logs. Incorporating data analysis capabilities to improve decision-making across the organization.",
      es: "Desarrollé y mantuve una plataforma para gestionar terminales de pago, redes de comercios, perfiles de usuarios y registros operativos. Incorporé capacidades de análisis de datos para mejorar la toma de decisiones organizacional.",
    },
    achievements: {
      en: [
        "Built payment terminal management platform integrating real-time operational data",
        "Implemented and enhanced reusable component library ensuring cross-app consistency",
        "Delivered reporting dashboards with real-time visibility into system performance",
        "Established micro-frontend architecture with Native Federation for scalable deployments",
      ],
      es: [
        "Construí la plataforma de gestión de terminales de pago integrando datos operativos en tiempo real",
        "Implementé y mejoré la biblioteca de componentes reutilizables garantizando consistencia entre aplicaciones",
        "Entregué dashboards de reportes con visibilidad en tiempo real del rendimiento del sistema",
        "Establecí arquitectura micro-frontend con Native Federation para despliegues escalables",
      ],
    },
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "SCSS",
      "NodeJs",
      "Native Federation",
      "PrimeNG",
      "Jest",
      "SonarQube",
      "ESLint",
    ],
  },
  {
    id: "meli",
    company: "Mercado Libre",
    companyShort: "Mercado Libre",
    role: {
      en: "Senior Software Engineer",
      es: "Ingeniero de Software Senior",
    },
    period: { en: "June 2022 – July 2025", es: "Junio 2022 – Julio 2025" },
    current: false,
    location: "México City, México",
    description: {
      en: "Analysis, design, development, and implementation of web systems for internal use at Latin America's largest e-commerce company. Worked on ML infrastructure tools and data platforms using Microfrontends architecture.",
      es: "Análisis, diseño, desarrollo e implementación de sistemas web para uso interno en la empresa de e-commerce más grande de América Latina. Trabajé en herramientas de infraestructura ML y plataformas de datos con arquitectura de Microfrontends.",
    },
    achievements: {
      en: [
        "Led development of ML tensor management platform using Microfrontends (Module Federation)",
        "Built ML feature cataloging platform for data engineering and ML teams",
        "Created BackOffice for cross-team operations: data ingestion, report generation, updates",
        "Migrated legacy search engine debugging system to modern stack, improving developer experience",
        "Resolved critical web security vulnerabilities across multiple internal platforms",
      ],
      es: [
        "Lideré el desarrollo de la plataforma de gestión de tensores ML usando Microfrontends (Module Federation)",
        "Construí la plataforma de catalogación de features ML para equipos de data engineering y ML",
        "Creé BackOffice para operaciones transversales: ingesta de datos, generación de reportes y actualizaciones",
        "Migré el sistema legacy de depuración del motor de búsqueda a stack moderno, mejorando la experiencia del desarrollador",
        "Resolví vulnerabilidades críticas de seguridad web en múltiples plataformas internas",
      ],
    },
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "Webpack",
      "Module Federation",
      "Java",
      "Spring Boot",
      "Python",
      "Flask",
      "BigQuery",
      "MySQL",
      "Jest",
      "Material UI",
    ],
  },
  {
    id: "technogi",
    company: "Technogi",
    companyShort: "Technogi",
    role: { en: "Fullstack Developer Sr.", es: "Desarrollador Fullstack Sr." },
    period: { en: "June 2017 – June 2022", es: "Junio 2017 – Junio 2022" },
    current: false,
    location: "México City, México",
    description: {
      en: "Comprehensive creation of customized web and mobile solutions for external clients — from requirements definition to production deployment.",
      es: "Creación integral de soluciones web y móviles personalizadas para clientes externos — desde la definición de requerimientos hasta el despliegue en producción.",
    },
    achievements: {
      en: [
        "Delivered B2C & B2B insurance web platforms with full AML compliance (KYC, CDD, EDD)",
        "Integrated payment gateway into financial platforms handling real-money transactions",
        "Built cross-platform mobile app for dental insurance provider with React Native",
        "Developed CMS and website for cultural events client from the ground up",
        "Implemented a full payroll system for a corporate client",
      ],
      es: [
        "Entregué plataformas web de seguros B2C y B2B con cumplimiento AML completo (KYC, CDD, EDD)",
        "Integré pasarela de pago en plataformas financieras que procesan transacciones reales",
        "Construí app móvil multiplataforma para aseguradora dental con React Native",
        "Desarrollé CMS y sitio web para cliente de eventos culturales desde cero",
        "Implementé un sistema de nómina completo para un cliente corporativo",
      ],
    },
    technologies: [
      "React",
      "Angular",
      "React Native",
      "Ionic",
      "NodeJS",
      "MongoDB",
      "MySQL",
      "Django",
      "LoopBack",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    id: "unam",
    company: "DUACyD, FES Aragón UNAM",
    companyShort: "UNAM",
    role: { en: "Web Developer Jr.", es: "Desarrollador Web Jr." },
    period: {
      en: "November 2016 – June 2017",
      es: "Noviembre 2016 – Junio 2017",
    },
    current: false,
    location: "México City, México",
    description: {
      en: "Design, analysis, and construction of inventory and payroll systems for a Mexico City government agency in partnership with UNAM.",
      es: "Diseño, análisis y construcción de sistemas de inventario y nómina para una agencia gubernamental de la Ciudad de México en colaboración con la UNAM.",
    },
    achievements: {
      en: [
        "Migrated payroll system from obsolete stack to modern web technologies",
        "Migrated inventory system from legacy platform to modern stack",
        "Authored analysis documents including user stories, sequence diagrams, and use cases",
      ],
      es: [
        "Migré el sistema de nómina de stack obsoleto a tecnologías web modernas",
        "Migré el sistema de inventario de plataforma legada a stack moderno",
        "Elaboré documentos de análisis incluyendo historias de usuario, diagramas de secuencia y casos de uso",
      ],
    },
    technologies: [
      "AngularJS",
      "jQuery",
      "PHP",
      "CodeIgniter",
      "MySQL",
      "Bootstrap",
    ],
  },
];

export const skills = [
  {
    category: { en: "Frontend", es: "Frontend" },
    badgeClass: "badge-frontend",
    icon: "monitor",
    items: [
      "React",
      "Angular",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3 / SCSS",
      "AngularJS",
      "React Native",
      "Redux",
      "Ionic",
      "Axios",
      "Bootstrap",
      "Material UI",
      "PrimeNG",
    ],
  },
  {
    category: { en: "Backend", es: "Backend" },
    badgeClass: "badge-backend",
    icon: "server",
    items: [
      "Node.js",
      "Express.js",
      "NestJS",
      "LoopBack",
      "Java / Spring Boot",
      "Python",
      "Django",
      "Flask",
      "PHP",
      "CodeIgniter",
    ],
  },
  {
    category: { en: "Databases", es: "Bases de Datos" },
    badgeClass: "badge-database",
    icon: "database",
    items: ["MySQL", "PostgreSQL", "MongoDB", "BigQuery", "SQL"],
  },
  {
    category: { en: "Testing", es: "Testing" },
    badgeClass: "badge-testing",
    icon: "check-circle",
    items: ["Jest", "React Testing Library", "Nock", "JUnit", "Mockito"],
  },
  {
    category: { en: "DevOps & Cloud", es: "DevOps y Cloud" },
    badgeClass: "badge-devops",
    icon: "cloud",
    items: [
      "AWS (Certified)",
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "SonarQube",
      "Datadog",
      "Grafana",
    ],
  },
  {
    category: { en: "Architecture", es: "Arquitectura" },
    badgeClass: "badge-frontend",
    icon: "layers",
    items: [
      "Microfrontends",
      "Module Federation",
      "Native Federation",
      "REST APIs",
      "MVC",
      "OOP",
      "Reactive / Event-Driven",
    ],
  },
  {
    category: { en: "Tools", es: "Herramientas" },
    badgeClass: "badge-tools",
    icon: "wrench",
    items: [
      "Git / GitHub",
      "Bitbucket",
      "Figma",
      "Jira",
      "Postman",
      "VSCode",
      "Webpack",
      "npm / yarn / pnpm",
    ],
  },
  {
    category: { en: "AI Tools", es: "Herramientas de IA" },
    badgeClass: "badge-default",
    icon: "cpu",
    items: ["Claude", "GitHub Copilot", "Cursor", "ChatGPT"],
  },
];

export const projects = [
  {
    id: "tensor-platform",
    title: {
      en: "ML Tensor Management Platform",
      es: "Plataforma de Gestión de Tensores ML",
    },
    company: "Mercado Libre",
    period: "2022 – 2025",
    description: {
      en: "Enterprise platform for managing ML tensors — data structures used to deliver datasets to machine learning models or serve online infrastructure. Built with Microfrontends architecture to enable independent team deployments at scale.",
      es: "Plataforma empresarial para gestionar tensores ML — estructuras de datos que entregan datasets a modelos de machine learning o sirven infraestructura en línea. Construida con arquitectura Microfrontends para habilitar despliegues independientes por equipo a escala.",
    },
    problem: {
      en: "Data engineering teams lacked a unified, self-service platform to manage ML data pipelines across hundreds of models.",
      es: "Los equipos de data engineering carecían de una plataforma unificada y de autoservicio para gestionar pipelines de datos ML en cientos de modelos.",
    },
    impact: {
      en: "Enabled ML teams across Mercado Libre to independently deploy and manage tensor pipelines, reducing operational overhead and improving model delivery speed.",
      es: "Permitió a los equipos de ML en Mercado Libre desplegar y gestionar pipelines de tensores de forma independiente, reduciendo la carga operacional y mejorando la velocidad de entrega de modelos.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Webpack",
      "Module Federation",
      "Java",
      "Spring Boot",
      "BigQuery",
    ],
    category: { en: "Enterprise Platform", es: "Plataforma Empresarial" },
    highlight: true,
  },
  {
    id: "payment-platform",
    title: {
      en: "Payment Terminal Management Platform",
      es: "Plataforma de Gestión de Terminales de Pago",
    },
    company: "Smart Payments Solutions",
    period: "2025 – Present",
    description: {
      en: "Full-featured platform for managing payment terminals, merchant networks, user profiles, and operational logs. Includes real-time dashboards and data analysis tools for business decision-making.",
      es: "Plataforma completa para gestionar terminales de pago, redes de comercios, perfiles de usuarios y logs operativos. Incluye dashboards en tiempo real y herramientas de análisis de datos para la toma de decisiones empresariales.",
    },
    problem: {
      en: "Operations teams needed a centralized platform to monitor terminal health, merchant performance, and financial operations in real time.",
      es: "Los equipos de operaciones necesitaban una plataforma centralizada para monitorear la salud de terminales, el rendimiento de comercios y las operaciones financieras en tiempo real.",
    },
    impact: {
      en: "Delivered real-time visibility into payment operations, improving monitoring efficiency and reducing incident response time for operations teams.",
      es: "Entregó visibilidad en tiempo real de las operaciones de pago, mejorando la eficiencia de monitoreo y reduciendo el tiempo de respuesta a incidentes.",
    },
    technologies: [
      "Angular",
      "React",
      "TypeScript",
      "Native Federation",
      "PrimeNG",
      "SCSS",
      "NodeJs",
    ],
    category: { en: "FinTech Platform", es: "Plataforma FinTech" },
    highlight: true,
  },
  {
    id: "insurance-platform",
    title: {
      en: "B2C / B2B Insurance Platforms",
      es: "Plataformas de Seguros B2C / B2B",
    },
    company: "Technogi",
    period: "2017 – 2022",
    description: {
      en: "Comprehensive web platforms for a dental insurance provider — B2C portal for individual customers and B2B portal for corporate clients. Integrated AML compliance (KYC, CDD, EDD) and payment gateway processing.",
      es: "Plataformas web integrales para aseguradora dental — portal B2C para clientes individuales y portal B2B para clientes corporativos. Integración de cumplimiento AML (KYC, CDD, EDD) y pasarela de pago.",
    },
    problem: {
      en: "Insurance provider needed compliant digital onboarding with identity verification and secure payment collection.",
      es: "La aseguradora necesitaba un onboarding digital conforme con verificación de identidad y cobro seguro de pagos.",
    },
    impact: {
      en: "Digitized the full customer lifecycle from onboarding to payment, enabling scalable growth while meeting AML regulatory requirements.",
      es: "Digitalizó el ciclo completo del cliente desde el onboarding hasta el pago, habilitando crecimiento escalable mientras se cumplían los requisitos regulatorios AML.",
    },
    technologies: [
      "React",
      "Angular",
      "NodeJS",
      "LoopBack",
      "MongoDB",
      "MySQL",
      "Material UI",
    ],
    category: { en: "FinTech / InsurTech", es: "FinTech / InsurTech" },
    highlight: true,
  },
  {
    id: "ml-features",
    title: {
      en: "ML Feature Cataloging Platform",
      es: "Plataforma de Catalogación de Features ML",
    },
    company: "Mercado Libre",
    period: "2023 – 2024",
    description: {
      en: "Platform for cataloging machine learning features used to generate tensors and monitor infrastructure. Provided data engineers with observability and governance tools.",
      es: "Plataforma para catalogar features de machine learning usadas para generar tensores y monitorear infraestructura. Proporcionó a los data engineers herramientas de observabilidad y gobernanza.",
    },
    problem: {
      en: "ML feature discovery and reuse were hindered by lack of a centralized catalog, leading to duplicated work across teams.",
      es: "El descubrimiento y reutilización de features ML se veía obstaculizado por la falta de un catálogo centralizado, generando trabajo duplicado entre equipos.",
    },
    impact: {
      en: "Increased ML feature reuse across engineering teams, reducing redundant pipeline development and improving model consistency.",
      es: "Incrementó la reutilización de features ML en los equipos de ingeniería, reduciendo el desarrollo redundante de pipelines y mejorando la consistencia de modelos.",
    },
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "Flask",
      "MySQL",
      "BigQuery",
      "Jest",
    ],
    category: { en: "ML Infrastructure", es: "Infraestructura ML" },
    highlight: false,
  },
  {
    id: "mobile-app",
    title: {
      en: "Dental Insurance Mobile App",
      es: "App Móvil para Seguro Dental",
    },
    company: "Technogi",
    period: "2019 – 2021",
    description: {
      en: "Cross-platform mobile application for a dental insurance provider built with React Native, enabling customers to manage policies, find providers, and track claims from their phones.",
      es: "Aplicación móvil multiplataforma para aseguradora dental construida con React Native, permitiendo a los clientes gestionar pólizas, encontrar proveedores y seguir reclamaciones desde su teléfono.",
    },
    problem: {
      en: "Customers lacked mobile access to insurance services, forcing them to use desktop-only web platforms.",
      es: "Los clientes carecían de acceso móvil a los servicios de seguros, obligándolos a usar plataformas web solo para escritorio.",
    },
    impact: {
      en: "Opened a mobile channel for thousands of policyholders, improving customer satisfaction and self-service adoption.",
      es: "Abrió un canal móvil para miles de asegurados, mejorando la satisfacción del cliente y la adopción del autoservicio.",
    },
    technologies: [
      "React Native",
      "Ionic",
      "JavaScript",
      "NodeJS",
      "REST APIs",
    ],
    category: { en: "Mobile App", es: "App Móvil" },
    highlight: false,
  },
];

export const education = [
  {
    institution: "Facultad de Estudios Superiores de Aragón, UNAM",
    degree: { en: "Computer Engineer", es: "Ingeniero en Computación" },
    period: "2010 – 2014",
    type: "degree",
  },
  {
    institution: "UNAM",
    degree: { en: "Computer Technician", es: "Técnico en Computación" },
    period: "2008",
    type: "degree",
  },
];

export const certifications = [
  {
    name: {
      en: "AWS Certified Cloud Practitioner",
      es: "AWS Certified Cloud Practitioner",
    },
    issuer: "Amazon Web Services",
    period: "2021 – 2024",
    icon: "cloud",
    color: "badge-devops",
  },
  {
    name: {
      en: "Software Architecture: Design Patterns",
      es: "Arquitectura de Software: Patrones de Diseño",
    },
    issuer: { en: "Online Course", es: "Curso en línea" },
    period: { en: "Completed", es: "Completado" },
    icon: "layers",
    color: "badge-frontend",
  },
];

export const achievements = [
  {
    value: "10+",
    label: { en: "Years of Experience", es: "Años de Experiencia" },
    description: {
      en: "Delivering enterprise software since 2014",
      es: "Entregando software empresarial desde 2014",
    },
    icon: "calendar",
  },
  {
    value: "15+",
    label: { en: "Projects Delivered", es: "Proyectos Entregados" },
    description: {
      en: "Across FinTech, ML, Insurance & E-commerce",
      es: "En FinTech, ML, Seguros y E-commerce",
    },
    icon: "rocket",
  },
  {
    value: "3",
    label: { en: "Enterprise Companies", es: "Empresas de Alto Nivel" },
    description: {
      en: "Including Latin America's largest e-commerce",
      es: "Incluyendo el e-commerce más grande de América Latina",
    },
    icon: "building2",
  },
  {
    value: "8+",
    label: { en: "Frontend Frameworks", es: "Frameworks Frontend" },
    description: {
      en: "React, Angular, Next.js, React Native & more",
      es: "React, Angular, Next.js, React Native y más",
    },
    icon: "code2",
  },
  {
    value: "1",
    label: { en: "AWS Certification", es: "Certificación AWS" },
    description: {
      en: "Cloud Practitioner certified",
      es: "Cloud Practitioner certificado",
    },
    icon: "cloud",
  },
  {
    value: "5+",
    label: { en: "Languages / Runtimes", es: "Lenguajes / Runtimes" },
    description: {
      en: "JS/TS, Java, Python, PHP, C/C++",
      es: "JS/TS, Java, Python, PHP, C/C++",
    },
    icon: "terminal",
  },
];

export const softSkills = {
  en: [
    "Effective Communication",
    "Team Leadership",
    "Problem Solving",
    "Adaptability",
    "Resilience",
    "Creativity",
    "Time Management",
    "Teamwork",
    "Working Under Pressure",
    "Results Orientation",
    "Continuous Learning",
    "Ownership",
    "Continuous Improvement",
    "Risk Management",
    "Adaptation to New Technologies",
  ],
  es: [
    "Comunicación efectiva",
    "Liderazgo de equipos",
    "Resolución de problemas",
    "Adaptabilidad",
    "Resiliencia",
    "Creatividad",
    "Gestión del tiempo",
    "Trabajo en equipo",
    "Trabajo bajo presión",
    "Orientación a resultados",
    "Aprendizaje continuo",
    "Ownership",
    "Mejora continua",
    "Gestión de riesgos",
    "Adaptación a nuevas tecnologías",
  ],
};
