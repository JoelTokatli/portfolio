import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  es: {
    nav: ["Inicio", "Sobre mí", "Experiencia", "Skills", "Proyectos", "Contacto"],
    hero: {
      role: "Full-Stack Developer",
      desc: "Especializado en JavaScript, Cloud & Fintech. Más de 3 años construyendo soluciones escalables con Angular, Node.js, AWS y Docker.",
      cta1: "Contactar",
      cta2: "Ver Experiencia",
    },
    about: {
      subtitle: "Sobre mí",
      title: "Resumen Profesional",
      p1: "Desarrollador Full-Stack con más de 3 años de experiencia especializado en el ecosistema JavaScript (Angular, Node.js, React, Vue.js) e infraestructura Cloud. Experto en el diseño de soluciones fintech escalables y automatización de flujos de backend mediante AWS y Docker.",
      p2: "Historial comprobado en optimización de rendimiento de sistemas y gestión de datos transaccionales de alto volumen. He diseñado y mantenido plataformas que procesan miles de transacciones mensuales para comercios activos en múltiples sucursales.",
      lang1: "Inglés Fluido (C1)",
      lang2: "Español Nativo",
      stats: [
        { value: "3+", label: "Años de experiencia" },
        { value: "5K+", label: "Transacciones/mes" },
        { value: "30%", label: "Optimización rendimiento" },
        { value: "99.9%", label: "Uptime garantizado" },
      ],
    },
    experience: {
      subtitle: "Trayectoria",
      title: "Experiencia Profesional",
      eduSubtitle: "Educación",
      eduTitle: "Ingeniería de Software — Especialización Autodidacta",
      eduDesc: "Arquitectura de Software · DevOps · Sistemas Cloud Escalables",
      eduDate: "2021 — Presente",
      jobs: [
        {
          company: "Payphone México",
          role: "Desarrollador Full-Stack",
          period: "2023 — 2026",
          tags: ["Angular", "Node.js", "AWS", "Docker", "PostgreSQL"],
          achievements: [
            "Plataforma fintech: +5,000 transacciones/mes, +1,000 comercios, 200 sucursales",
            "Apps contenedorizadas con Docker en AWS EC2 — 99.9% uptime",
            "Automatización de conciliación financiera con Cron Jobs y AWS Lambda",
            "Reportes SQL avanzados y tableros de analítica en tiempo real",
            "Pipelines CI/CD y pruebas unitarias para fiabilidad en producción",
            "Optimización del 30% en tiempos de carga y rendimiento de consultas",
          ],
        },
        {
          company: "Cabana Finance",
          role: "Desarrollador Frontend",
          period: "2022 — 2023",
          tags: ["Vue.js", "Tailwind CSS", "JWT", "REST API"],
          achievements: [
            "Motor de reservas de alto rendimiento para gestión de propiedades",
            "State management complejo con datos asíncronos en tiempo real",
            "Autenticación JWT y guardias de rutas protegidas",
            "Diseño 100% responsivo en todos los dispositivos",
          ],
        },
        {
          company: "COMEX360",
          role: "Desarrollador Full-Stack",
          period: "2021 — 2022",
          tags: ["AngularJS", "Node.js", "RBAC", "REST API"],
          achievements: [
            "Marketplace P2P para comercio de maquinaria industrial y recursos naturales",
            "Flujos de transacciones seguros y verificación de usuarios",
            "Control de Acceso Basado en Roles (RBAC) para entidades internacionales",
            "APIs RESTful para seguimiento de recursos y documentación comercial",
          ],
        },
      ],
    },
    skills: {
      subtitle: "Tecnologías",
      title: "Stack Técnico",
      categories: [
        { title: "Lenguajes", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML/CSS"] },
        { title: "Frontend", skills: ["Angular", "React", "Vue.js", "Tailwind CSS", "NestJS"] },
        { title: "Backend", skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MySQL"] },
        { title: "Cloud & DevOps", skills: ["AWS (EC2, Lambda, S3)", "Docker", "CI/CD Pipelines", "Cron Jobs"] },
        { title: "Herramientas", skills: ["Git", "JWT Auth", "RESTful APIs", "Agile/Scrum", "Claude 3.5/Codex"] },
      ],
    },
    projects: {
      subtitle: "Portfolio",
      title: "Proyectos",
      codeBtn: "Código",
      siteBtn: "Ver sitio",
      items: [
        {
          title: "Space Landing Page",
          description: "Landing page dinámica con diseño responsivo y animaciones. Configura tu viaje, conoce la tripulación y explora el espacio.",
          techNames: ["React", "Tailwind CSS", "JavaScript"],
          image: "../src/assets/space.png",
          url: "https://joeltokatli.github.io/space-travel/",
          githubUrl: "https://github.com/JoelTokatli/space-travel",
          id: 0,
        },
        {
          title: "IP Address Tracker",
          description: "Aplicación de geolocalización de direcciones IP con mapa interactivo en tiempo real usando LeafletJS.",
          techNames: ["JavaScript", "LeafletJS", "API REST"],
          image: "../src/assets/Ip-Tracker.png",
          url: "https://joeltokatli.github.io/vanillaJS-ip-address-tracker/",
          githubUrl: "https://github.com/JoelTokatli/vanillaJS-ip-address-tracker/",
          id: 1,
        },
        {
          title: "Weather App",
          description: "Pronóstico del clima para cualquier ciudad del mundo con transiciones dinámicas según la temperatura.",
          techNames: ["React", "Tailwind CSS", "Weather API"],
          image: "../src/assets/weather.png",
          url: "https://joeltokatli.github.io/react-weather-app/",
          githubUrl: "https://github.com/JoelTokatli/react-weather-app",
          id: 2,
        },
      ],
    },
    contact: {
      subtitle: "Hablemos",
      title: "Contacto",
      desc: "¿Tienes un proyecto en mente? Envíame un mensaje.",
      name: "Nombre",
      namePh: "Tu nombre",
      email: "Email",
      emailPh: "tu@email.com",
      message: "Mensaje",
      messagePh: "Cuéntame sobre tu proyecto...",
      submit: "Enviar mensaje",
    },
  },
  en: {
    nav: ["Home", "About", "Experience", "Skills", "Projects", "Contact"],
    hero: {
      role: "Full-Stack Developer",
      desc: "Specialized in JavaScript, Cloud & Fintech. 3+ years building scalable solutions with Angular, Node.js, AWS and Docker.",
      cta1: "Contact",
      cta2: "View Experience",
    },
    about: {
      subtitle: "About me",
      title: "Professional Summary",
      p1: "Full-Stack Developer with 3+ years of experience specialized in the JavaScript ecosystem (Angular, Node.js, React, Vue.js) and Cloud infrastructure. Expert in designing scalable fintech solutions and automating backend workflows using AWS and Docker.",
      p2: "Proven track record in optimizing system performance and managing high-volume transactional data. Designed and maintained platforms processing thousands of monthly transactions for active merchants across multiple branches.",
      lang1: "English Fluent (C1)",
      lang2: "Spanish Native",
      stats: [
        { value: "3+", label: "Years of experience" },
        { value: "5K+", label: "Transactions/month" },
        { value: "30%", label: "Performance optimization" },
        { value: "99.9%", label: "Guaranteed uptime" },
      ],
    },
    experience: {
      subtitle: "Career",
      title: "Professional Experience",
      eduSubtitle: "Education",
      eduTitle: "Software Engineering — Self-taught Specialization",
      eduDesc: "Software Architecture · DevOps · Scalable Cloud Systems",
      eduDate: "2021 — Present",
      jobs: [
        {
          company: "Payphone México",
          role: "Full-Stack Developer",
          period: "2023 — 2026",
          tags: ["Angular", "Node.js", "AWS", "Docker", "PostgreSQL"],
          achievements: [
            "Fintech platform: +5,000 transactions/month, +1,000 merchants, 200 branches",
            "Containerized apps with Docker on AWS EC2 — 99.9% uptime",
            "Automated financial reconciliation with Cron Jobs and AWS Lambda",
            "Advanced SQL reports and real-time analytics dashboards",
            "CI/CD Pipelines and unit testing for production reliability",
            "30% optimization in load times and query performance",
          ],
        },
        {
          company: "Cabana Finance",
          role: "Frontend Developer",
          period: "2022 — 2023",
          tags: ["Vue.js", "Tailwind CSS", "JWT", "REST API"],
          achievements: [
            "High-performance booking engine for property management system",
            "Complex state management with async real-time data fetching",
            "JWT authentication and protected route guards",
            "100% responsive design across all device types",
          ],
        },
        {
          company: "COMEX360",
          role: "Full-Stack Developer",
          period: "2021 — 2022",
          tags: ["AngularJS", "Node.js", "RBAC", "REST API"],
          achievements: [
            "P2P Marketplace for industrial machinery and natural resources trading",
            "Secure transaction flows and user verification modules",
            "Role-Based Access Control (RBAC) for international legal entities",
            "RESTful APIs for resource tracking and trade documentation",
          ],
        },
      ],
    },
    skills: {
      subtitle: "Technologies",
      title: "Tech Stack",
      categories: [
        { title: "Languages", skills: ["JavaScript (ES6+)", "TypeScript", "Python", "SQL", "HTML/CSS"] },
        { title: "Frontend", skills: ["Angular", "React", "Vue.js", "Tailwind CSS", "NestJS"] },
        { title: "Backend", skills: ["Node.js", "Express", "NestJS", "PostgreSQL", "MySQL"] },
        { title: "Cloud & DevOps", skills: ["AWS (EC2, Lambda, S3)", "Docker", "CI/CD Pipelines", "Cron Jobs"] },
        { title: "Tools", skills: ["Git", "JWT Auth", "RESTful APIs", "Agile/Scrum", "Claude 3.5/Codex"] },
      ],
    },
    projects: {
      subtitle: "Portfolio",
      title: "Projects",
      codeBtn: "Code",
      siteBtn: "Live site",
      items: [
        {
          title: "Space Landing Page",
          description: "Dynamic landing page with responsive design and animations. Set up your travel, meet the crew and explore space.",
          techNames: ["React", "Tailwind CSS", "JavaScript"],
          image: "../src/assets/space.png",
          url: "https://joeltokatli.github.io/space-travel/",
          githubUrl: "https://github.com/JoelTokatli/space-travel",
          id: 0,
        },
        {
          title: "IP Address Tracker",
          description: "IP address geolocation app with real-time interactive map using LeafletJS.",
          techNames: ["JavaScript", "LeafletJS", "REST API"],
          image: "../src/assets/Ip-Tracker.png",
          url: "https://joeltokatli.github.io/vanillaJS-ip-address-tracker/",
          githubUrl: "https://github.com/JoelTokatli/vanillaJS-ip-address-tracker/",
          id: 1,
        },
        {
          title: "Weather App",
          description: "Weather forecast for any city in the world with dynamic transitions based on temperature.",
          techNames: ["React", "Tailwind CSS", "Weather API"],
          image: "../src/assets/weather.png",
          url: "https://joeltokatli.github.io/react-weather-app/",
          githubUrl: "https://github.com/JoelTokatli/react-weather-app",
          id: 2,
        },
      ],
    },
    contact: {
      subtitle: "Let's talk",
      title: "Contact",
      desc: "Have a project in mind? Send me a message.",
      name: "Name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@email.com",
      message: "Message",
      messagePh: "Tell me about your project...",
      submit: "Send message",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("es");
  const t = translations[lang];
  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
