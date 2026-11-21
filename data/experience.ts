export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  points: string[];
  stack: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Proyectos Freelance",
    period: "May 2025 – Actualidad",
    points: [
      "Desarrollé una aplicación de gestión de inventario para la empresa RYVA, que permite registrar productos y controlar el stock con React.js y Firebase para el almacenamiento de datos.",
      "Desarrollé páginas web de venta de productos para negocios.",
      "Diseñé prototipos de interfaces en Figma para proyectos de clientes.",
    ],
    stack: ["React.js", "Firebase", "Figma"],
  },
  {
    role: "Full Stack Developer",
    company: "Digital House",
    period: "Nov 2024 – Feb 2025",
    points: [
      "Desarrollé un sistema de reservas con Next.js, Spring Boot y MySQL.",
      "Implementé una API REST para la gestión de reservas y disponibilidad.",
    ],
    stack: ["Next.js", "Spring Boot", "MySQL", "API REST"],
  },
  {
    role: "Frontend Developer",
    company: "GEOR",
    period: "Mar 2023 – May 2023",
    points: [
      "Trabajé en equipos de desarrollo ágil aplicando Scrum, para lograr entregas iterativas y eficientes.",
      "Contribuí al desarrollo de aplicaciones web con Angular e Ionic.",
      "Participé en la gestión de tareas y el seguimiento del progreso con JIRA y Trello.",
    ],
    stack: ["Angular", "Ionic", "Scrum", "Jira", "Trello"],
  },
];
