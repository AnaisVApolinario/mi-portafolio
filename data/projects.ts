export type Project = {
 slug: string;
  title: string;
  description: string;
  stack: string[];
  /** Opcionales para la página de detalle */
  about?: string;
  highlights?: string[];
  repoUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  docsUrl?: string;
  image?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "amero-burger",
    title: "Amero Burger",
    description:
      "App web para gestionar pedidos de una hamburguesería: mesero, cocina y administración.",
    stack: ["Angular 14", "TypeScript", "RxJS", "Reactive Forms", "Karma + Jasmine", "json-server"],
    about:
      "El mesero arma el pedido y lo envía a cocina, la cocina lo prepara y lo marca como listo, y el administrador mantiene el menú y el equipo. Proyecto de Laboratoria (LIM018) hecho en equipo.",
    highlights: [
      "Tres roles con rutas protegidas por guards (mesero, cocina, administración).",
      "Cocina se actualiza cada 10 s y muestra el tiempo de preparación.",
      "Autenticación con token, y cierre de sesión automático si expira.",
      "CRUD de usuarios y productos, con formularios validados.",
      "Pruebas unitarias en cada componente, servicio y guard.",
    ],
    repoUrl: "https://github.com/AnaisVApolinario/LIM018-burger-queen-api-client",
    demoUrl: "https://anaisvapolinario.github.io/LIM018-burger-queen-api-client/",
    image: "/proyectos/amero-burger.png",
  },
  {
    slug: "terranova",
    title: "Terranova",
    description:
      "Plataforma full stack para buscar y reservar tours por Latinoamérica, con panel de administración.",
    stack: ["React 19", "Vite", "Tailwind CSS", "Java 17", "Spring Boot", "Spring Security + JWT", "MySQL", "Docker"],
    about:
      "Los viajeros buscan tours por país, fechas y categoría, ven el detalle con calendario de disponibilidad y reservan. Los administradores crean y editan tours con imágenes y gestionan los roles de los usuarios. Nació como proyecto grupal en Digital House (Certified Tech Developer); esta es mi versión, que se levanta con un solo comando de Docker. Participé en el diseño UX/UI y en el backend (CRUD de tours, fechas y disponibilidad), y después rediseñé todas las pantallas y agregué favoritos.",
    highlights: [
      "API REST con autenticación JWT y dos roles (usuario y administrador).",
      "Búsqueda por país y fechas, con filtro por categoría.",
      "Reservas con calendario de disponibilidad.",
      "Panel de administración con carga de imágenes.",
      "Todo se levanta con Docker Compose: base de datos, backend y frontend.",
    ],
    repoUrl: "https://github.com/AnaisVApolinario/fullstack-reservas-terranova",
    videoUrl: "https://github-production-user-asset-6210df.s3.amazonaws.com/105659228/710023709-84811a01-5689-4d94-8e4a-186646721403.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20261122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20261122T132234Z&X-Amz-Expires=300&X-Amz-Signature=c37b009e3417bde0d151c3fffc8fcb703185483f493481b335a117777698cc1a&X-Amz-SignedHeaders=host&response-content-type=video%2Fmp4",
    image: "/proyectos/terranova.png",
  },
];