
export const profile = {
  name: "Anais Valverde",
  role: "Software Developer",
  focus: "Backend / Java · Frontend / JavaScript",
  location: "Lima, Perú",
  availability: "Disponible · abierta a nuevos retos en desarrollo",
  email: "valverdeanais31@gmail.com",
  github: "https://github.com/AnaisVApolinario",
  linkedin: "https://www.linkedin.com/in/anais-valverde-06aa27248/",
  summary:
    "Desarrolladora Full Stack con experiencia en aplicaciones con Java, Spring Boot y bases de datos. He desarrollado sistemas de gestión, plataformas de venta y herramientas internas para organizaciones. Me adapto con facilidad a nuevos entornos, disfruto aprender tecnologías nuevas y me enfoco en crear soluciones útiles y eficientes.",
};

export type EducationItem = {
  school: string;
  program: string;
  period: string;
};

export const education: EducationItem[] = [
  {
    school: "Digital House",
    program: "Programa de Formación en Línea · Desarrollo Full Stack",
    period: "Jul 2023 – Mar 2025",
  },
  {
    school: "Laboratoria",
    program: "Bootcamp · Desarrollo Web",
    period: "May 2022 – Nov 2022",
  },
  {
    school: "IDAT",
    program: "Instituto · Desarrollo de Sistemas de Información",
    period: "Abr 2021 – Abr 2024",
  },
];

export type StackGroup = {
  label: string;
  items: string[];
  highlight?: boolean;
};

export const stack: StackGroup[] = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "APIs REST"],
    highlight: true,
  },
  {
    label: "Bases de datos",
    items: ["MySQL", "SQL Server", "Oracle"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Angular", "HTML", "CSS", "TailwindCSS"],
  },
  {
    label: "Herramientas",
    items: ["Docker", "CI/CD", "JUnit", "Git", "Figma", "Jira", "Trello"],
  },
  {
    label: "Habilidades",
    items: [
      "Trabajo en equipo",
      "Responsabilidad",
      "Adaptabilidad",
      "Perseverante",
      "Autodidacta",
    ],
  },
  {
    label: "Idiomas",
    items: ["Inglés · A2"],
  },
];
