const lifeguard = {
  id: 1,

  slug: "lifeguard-costa-rica",

  nombre: "Lifeguard Costa Rica",

  titulo: "Healthcare Operations Platform",

  destacado: true,

  categoria: "Full Stack",

  descripcionCorta:
    "Plataforma integral para la gestión de asistencia médica, operaciones, documentación y facturación.",

  descripcion:
    "Sistema desarrollado para centralizar y automatizar la operación de una empresa de asistencia médica, conectando en un mismo flujo la gestión de pacientes, casos, prestadores, atención médica, documentación y facturación.",

  frase:
    "De una operación fragmentada a un flujo digital centralizado.",

  contexto:
    "La plataforma fue desarrollada para gestionar una operación real de asistencia médica, donde diferentes equipos necesitaban trabajar sobre la misma información y mantener trazabilidad sobre cada caso.",

  problema: [
    "La operación dependía de múltiples herramientas y procesos manuales.",
    "La información de cada caso estaba distribuida entre diferentes áreas.",
    "La generación de documentación requería tareas repetitivas.",
    "La coordinación de prestadores y atención médica necesitaba mayor control.",
    "La facturación y comunicación requerían procesos más integrados.",
  ],

  solucion:
    "Se desarrolló una plataforma centralizada que conecta todo el ciclo operativo de un caso, desde la recepción del paciente hasta la atención, generación de documentación, facturación y emisión del comprobante electrónico.",

  stats: [
    {
      valor: "30–40",
      label: "Usuarios",
    },
    {
      valor: "Desde 0",
      label: "Desarrollo",
    },
    {
      valor: "MVC",
      label: "Arquitectura",
    },
    {
      valor: "E2E",
      label: "Flujo integral",
    },
  ],

  roles: [
    "Administración",
    "Facturación",
    "Operaciones",
    "Equipo médico",
  ],

  flujo: [
    {
      numero: "01",
      titulo: "Paciente",
      descripcion:
        "Información del paciente que solicita o recibe asistencia.",
    },
    {
      numero: "02",
      titulo: "Caso",
      descripcion:
        "Apertura y gestión del expediente de asistencia.",
    },
    {
      numero: "03",
      titulo: "Prestador",
      descripcion:
        "Selección y coordinación del proveedor adecuado.",
    },
    {
      numero: "04",
      titulo: "Atención médica",
      descripcion:
        "Coordinación y registro de la atención.",
    },
    {
      numero: "05",
      titulo: "Reporte + IA",
      descripcion:
        "Generación asistida del reporte médico.",
    },
    {
      numero: "06",
      titulo: "Documentación",
      descripcion:
        "Generación y envío de documentos asociados al caso.",
    },
    {
      numero: "07",
      titulo: "Facturación",
      descripcion:
        "Procesamiento de costos y facturación.",
    },
    {
      numero: "08",
      titulo: "Hacienda / AFECR",
      descripcion:
        "Emisión y validación del comprobante electrónico.",
    },
  ],

  modulos: [
    "Pacientes",
    "Casos / Expedientes",
    "Prestadores",
    "Seguros / Clientes",
    "Tarifarios",
    "Reportes médicos",
    "Facturación",
    "Pagos",
    "Usuarios y permisos",
    "Dashboard",
  ],

  funcionalidades: [
    {
      titulo: "Gestión integral de casos",
      descripcion:
        "Administración centralizada del expediente y seguimiento de cada asistencia.",
    },
    {
      titulo: "Geolocalización de prestadores",
      descripcion:
        "Localización de prestadores según la ubicación requerida para la asistencia.",
    },
    {
      titulo: "Reportes médicos asistidos por IA",
      descripcion:
        "Generación asistida de reportes médicos utilizando integración con ChatGPT.",
    },
    {
      titulo: "Facturación electrónica",
      descripcion:
        "Procesamiento y emisión de comprobantes electrónicos.",
    },
    {
      titulo: "Generación de documentos",
      descripcion:
        "Creación automática de documentación asociada a los casos.",
    },
    {
      titulo: "Comunicación automatizada",
      descripcion:
        "Envío automatizado de documentación y comunicaciones relacionadas con la operación.",
    },
    {
      titulo: "Dashboard operativo",
      descripcion:
        "Visualización centralizada del estado y evolución de la operación.",
    },
    {
      titulo: "Parametrización",
      descripcion:
        "Configuración de elementos del sistema para adaptar los procesos a las necesidades de la operación.",
    },
  ],

  integraciones: [
    {
      nombre: "Google API",
      descripcion:
        "Integración con servicios de Google utilizados dentro de los procesos operativos.",
    },
    {
      nombre: "ChatGPT API",
      descripcion:
        "Integración utilizada para asistir la generación de reportes médicos.",
    },
    {
      nombre: "Hacienda / AFECR",
      descripcion:
        "Integración para la emisión y validación de comprobantes electrónicos.",
    },
  ],

  automatizaciones: [
    "Generación de reportes médicos asistidos mediante IA",
    "Generación automática de documentación PDF",
    "Envío de documentación por correo electrónico",
    "Localización de prestadores según ubicación",
    "Procesamiento de facturación",
    "Integración con Hacienda / AFECR",
    "Seguimiento de estados",
    "Procesos automatizados de comunicación y cobranza",
  ],

  arquitectura: {
    tipo: "MVC",

    titulo: "Una base sólida para crecer.",

    descripcion:
      "La plataforma fue estructurada para separar responsabilidades y mantener organizada la lógica de negocio a medida que el sistema crecía.",

    diagrama: [
      {
        nombre: "Model",
        descripcion: "Datos + lógica",
      },
      {
        nombre: "Controller",
        descripcion: "Reglas + procesos",
      },
      {
        nombre: "View",
        descripcion: "Interfaz",
      },
    ],
  },

  stack: [
    "PHP",
    "MySQL",
    "MVC",
    "PHPMailer",
    "Google API",
    "ChatGPT API",
    "Nginx",
    "PHP-FPM",
    "TCPDF",
    "Hacienda / AFECR",
  ],

  impacto:
    "La plataforma centralizó una operación que anteriormente se encontraba fragmentada entre diferentes procesos y herramientas, permitiendo gestionar el ciclo completo de asistencia desde un único sistema.",

  participacion: {
    descripcion:
      "Desarrollo integral desde la arquitectura y base de datos hasta los módulos, lógica de negocio, automatizaciones e integraciones externas.",

    responsabilidades: [
      "Diseño de arquitectura y estructura general",
      "Diseño y desarrollo de base de datos",
      "Desarrollo de módulos principales",
      "Implementación de lógica de negocio y flujos",
      "Desarrollo de automatizaciones y generación de documentos",
      "Integración con Google API, ChatGPT API y Hacienda / AFECR",
      "Implementación de facturación electrónica",
      "Desarrollo de interfaces y herramientas para los diferentes roles",
    ],
  },

  privacidad:
    "El sistema se encuentra actualmente en producción y trabaja con información médica y sensible, por lo que el código fuente y los datos reales no son públicos. Las demostraciones utilizan información ficticia o anonimizada.",

  imagenPrincipal: "/img/lifeguard/dashboard.png",

  imagenes: [
  {
    id: "dashboard",
    src: "/img/lifeguard/dashboard.png",
    categoria: "Dashboard",
    titulo: "Vista general de la operación.",
    descripcion:
      "Panel centralizado para visualizar el estado de los casos y principales indicadores de la operación.",
  },
  {
    id: "caseview",
    src: "/img/lifeguard/caseview.png",
    categoria: "Casos",
    titulo: "Gestión de expedientes.",
    descripcion:
      "Vista para administrar la información y el seguimiento de cada caso de asistencia.",
  },
  {
    id: "prestadores",
    src: "/img/lifeguard/prestadores.png",
    categoria: "Prestadores",
    titulo: "Gestión de prestadores.",
    descripcion:
      "Herramienta para consultar y administrar los prestadores disponibles para la atención.",
  },
  {
    id: "finder",
    src: "/img/lifeguard/finder.png",
    categoria: "Geolocalización",
    titulo: "Localización de prestadores.",
    descripcion:
      "Búsqueda y localización de prestadores según la ubicación requerida para la asistencia.",
  },
  {
    id: "admin",
    src: "/img/lifeguard/admin.png",
    categoria: "Administración",
    titulo: "Administración del sistema.",
    descripcion:
      "Herramientas de configuración y administración para controlar los diferentes elementos de la plataforma.",
  },
],

video: {
  src: "/video/lifeguard-demo-optimized.mp4",
  titulo: "Recorrido por la plataforma",
  descripcion:
    "Demostración del flujo operativo de la plataforma y sus principales módulos.",
},
};

export default lifeguard;