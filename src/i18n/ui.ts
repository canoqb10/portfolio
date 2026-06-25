import type { Lang } from "@/i18n/context";

const ui = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Technical Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      resume: "Resume",
      switchLang: "Cambiar a Español",
    },
    hero: {
      contact: "Get in touch",
      downloadCv: "Download CV",
      scroll: "Scroll",
    },
    about: {
      eyebrow: "About me",
      title: "Crafting",
      titleHighlight: "Digital Experiences",
      description:
        "Senior software engineer with a decade of experience building enterprise-grade web applications across FinTech, ML infrastructure, and e-commerce.",
      currentRole: "Currently working at",
      prevRole: "Previously, I spent 3 years at",
      latamDesc: "Latin America's largest e-commerce company",
      buildingMl:
        "building ML infrastructure tools with Microfrontend architectures.",
      softSkillsLabel: "Soft Skills",
    },
    experience: {
      eyebrow: "Career",
      title: "Professional",
      titleHighlight: "Experience",
      description:
        "10+ years delivering impactful software solutions at startups, agencies, and enterprise companies.",
      current: "Current",
      keyAchievements: "Key achievements",
      technologies: "Technologies",
    },
    skills: {
      eyebrow: "Expertise",
      title: "Technical",
      titleHighlight: "Skills",
      description:
        "A comprehensive toolkit built over 10+ years of professional development across the full stack.",
      softTitle: "Soft Skills",
    },
    achievements: {
      eyebrow: "Impact",
      title: "Results that",
      titleHighlight: "speak for themselves",
      description:
        "Measurable outcomes from a decade of building enterprise software at scale.",
      quote:
        "Results-oriented engineer passionate about designing experiences that improve user lives and align with business objectives.",
    },
    projects: {
      eyebrow: "Work",
      title: "Featured",
      titleHighlight: "Projects",
      description:
        "Highlights from enterprise platforms I've designed and built — from ML infrastructure to FinTech solutions.",
      problemLabel: "Problem",
      impactLabel: "Impact",
      othersLabel: "Other notable projects",
    },
    education: {
      eyebrow: "Background",
      title: "Education &",
      titleHighlight: "Certifications",
      description:
        "Academic foundation and continuous learning through certifications and professional courses.",
      academicLabel: "Academic",
      certsLabel: "Certifications",
      verified: "✓ Verified",
      continuousTitle: "Continuous learner",
      continuousText:
        "actively exploring new technologies, design patterns, and engineering best practices through hands-on projects and ongoing courses.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's work",
      titleHighlight: "together",
      description:
        "Open to new opportunities, collaborations, and interesting engineering challenges. Let's connect.",
      roleSearch:
        "I'm actively looking for Senior, Staff, or Lead Frontend engineering roles where I can contribute to scalable architectures and lead impactful web products. Based in México City, open to remote or hybrid opportunities.",
      form: {
        heading: "Send a message",
        nameLabel: "Name",
        namePlaceholder: "Your name",
        emailLabel: "Email",
        emailPlaceholder: "your@email.com",
        subjectLabel: "Subject",
        subjectDefault: "Select a topic...",
        subjects: [
          "Job opportunity",
          "Freelance project",
          "Collaboration",
          "Just saying hello",
        ],
        messageLabel: "Message",
        messagePlaceholder: "Tell me about your project or opportunity...",
        send: "Send Message",
        sending: "Opening email client...",
        successTitle: "Your email client is ready!",
        successText:
          "Your message was prepared and your email client opened. I'll get back to you as soon as possible.",
        sendAnother: "Send another message",
        disclaimer:
          "This will open your email client with the message pre-filled.",
      },
      socials: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Email",
        location: "Location",
      },
    },
    footer: {
      tagline:
        "Senior Frontend Engineer building scalable, user-focused web experiences.",
      nav: "Navigation",
      connect: "Connect",
      builtWith: "Built ",
      builtUsing: "using Next.js & Tailwind CSS",
    },
  },

  es: {
    nav: {
      about: "Acerca de",
      experience: "Experiencia",
      skills: "Habilidades Técnicas",
      projects: "Proyectos",
      education: "Educación",
      contact: "Contacto",
      resume: "Currículum",
      switchLang: "Switch to English",
    },
    hero: {
      contact: "Contáctame",
      downloadCv: "Descargar CV",
      scroll: "Explorar",
    },
    about: {
      eyebrow: "Acerca de mí",
      title: "Construyendo",
      titleHighlight: "Experiencias Digitales",
      description:
        "Ingeniero de software senior con una década de experiencia construyendo aplicaciones web empresariales en FinTech, infraestructura ML y e-commerce.",
      currentRole: "Actualmente trabajo en",
      prevRole: "Anteriormente, pasé 3 años en",
      latamDesc: "la empresa de e-commerce más grande de América Latina",
      buildingMl:
        "construyendo herramientas de infraestructura ML con arquitecturas Microfrontend.",
      softSkillsLabel: "Habilidades Blandas",
    },
    experience: {
      eyebrow: "Trayectoria",
      title: "Experiencia",
      titleHighlight: "Profesional",
      description:
        "Más de 10 años entregando soluciones de software de impacto en startups, agencias y empresas de primer nivel.",
      current: "Actual",
      keyAchievements: "Logros clave",
      technologies: "Tecnologías",
    },
    skills: {
      eyebrow: "Expertise",
      title: "Habilidades",
      titleHighlight: "Técnicas",
      description:
        "Un conjunto de herramientas integral construido en más de 10 años de desarrollo profesional en el stack completo.",
      softTitle: "Habilidades Blandas",
    },
    achievements: {
      eyebrow: "Impacto",
      title: "Resultados que",
      titleHighlight: "hablan por sí mismos",
      description:
        "Resultados medibles de una década construyendo software empresarial a escala.",
      quote:
        "Ingeniero orientado a resultados, apasionado por diseñar experiencias que mejoran la vida de los usuarios y se alinean con los objetivos del negocio.",
    },
    projects: {
      eyebrow: "Trabajo",
      title: "Proyectos",
      titleHighlight: "Destacados",
      description:
        "Lo más relevante de las plataformas empresariales que he diseñado y construido — desde infraestructura ML hasta soluciones FinTech.",
      problemLabel: "Problema",
      impactLabel: "Impacto",
      othersLabel: "Otros proyectos relevantes",
    },
    education: {
      eyebrow: "Formación",
      title: "Educación y",
      titleHighlight: "Certificaciones",
      description:
        "Base académica y aprendizaje continuo a través de certificaciones y cursos profesionales.",
      academicLabel: "Académico",
      certsLabel: "Certificaciones",
      verified: "✓ Verificado",
      continuousTitle: "Aprendizaje continuo",
      continuousText:
        "explorando activamente nuevas tecnologías, patrones de diseño y buenas prácticas de ingeniería a través de proyectos prácticos y cursos vigentes.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Trabajemos",
      titleHighlight: "juntos",
      description:
        "Abierto a nuevas oportunidades, colaboraciones y desafíos de ingeniería interesantes. Conectemos.",
      roleSearch:
        "Estoy buscando activamente roles de Ingeniería Frontend Senior, Staff o Lead donde pueda contribuir a arquitecturas escalables y liderar productos web de impacto. Basado en la Ciudad de México, disponible para trabajo remoto o híbrido.",
      form: {
        heading: "Enviar un mensaje",
        nameLabel: "Nombre",
        namePlaceholder: "Tu nombre",
        emailLabel: "Correo electrónico",
        emailPlaceholder: "tu@correo.com",
        subjectLabel: "Asunto",
        subjectDefault: "Selecciona un tema...",
        subjects: [
          "Oportunidad laboral",
          "Proyecto freelance",
          "Colaboración",
          "Solo saludar",
        ],
        messageLabel: "Mensaje",
        messagePlaceholder: "Cuéntame sobre tu proyecto u oportunidad...",
        send: "Enviar Mensaje",
        sending: "Abriendo cliente de correo...",
        successTitle: "¡Tu cliente de correo está listo!",
        successText:
          "Tu mensaje fue preparado y tu cliente de correo se abrió. Me pondré en contacto contigo lo antes posible.",
        sendAnother: "Enviar otro mensaje",
        disclaimer:
          "Esto abrirá tu cliente de correo con el mensaje pre-rellenado.",
      },
      socials: {
        linkedin: "LinkedIn",
        github: "GitHub",
        email: "Correo",
        location: "Ubicación",
      },
    },
    footer: {
      tagline:
        "Ingeniero Frontend Senior construyendo experiencias web escalables centradas en el usuario.",
      nav: "Navegación",
      connect: "Conectar",
      builtWith: "Construido ",
      builtUsing: "usando Next.js y Tailwind CSS",
    },
  },
} as const;

export type UI = typeof ui.en;

export function getUi(lang: Lang): UI {
  return ui[lang] as UI;
}
