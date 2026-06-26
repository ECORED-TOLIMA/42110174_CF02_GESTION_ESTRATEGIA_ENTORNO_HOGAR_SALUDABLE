export default {
  global: {
    Name:
      'Implementación, seguimiento y mejora de la estrategia entorno hogar saludable',
    Description:
      'Este componente orienta la implementación, seguimiento y evaluación de las acciones en el entorno hogar saludable, mediante la ejecución del plan de acción, el uso de indicadores y el análisis de resultados, con el fin de fortalecer la toma de decisiones y promover intervenciones efectivas en salud.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Implementación de acciones en el entorno hogar',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Ejecución del plan de acción',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Aplicación de intervenciones en el entorno hogar',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Uso de herramientas de caracterización y educación',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Gestión intersectorial en la implementación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Seguimiento del plan de acción',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Plan de seguimiento', hash: 't_2_1' },
          {
            numero: '2.2',
            titulo: 'Planillas para el seguimiento de las intervenciones',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Registro de información en el entorno hogar',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Indicadores en la estrategia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Ficha técnica de los indicadores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Importancia de los indicadores en la toma de decisiones',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de la información en salud',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Recolección de información',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Organización y sistematización de datos',
            hash: 't_4_2',
          },
          { numero: '4.3', titulo: 'Calidad de la información', hash: 't_4_3' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Análisis y evaluación de indicadores',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Cálculo de indicadores', hash: 't_5_1' },
          {
            numero: '5.2',
            titulo: 'Interpretación de resultados',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Análisis de indicadores en el contexto',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Uso de resultados para la toma de decisiones',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Acciones de mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Identificación de oportunidades de mejora',
            hash: 't_6_1',
          },
          { numero: '6.2', titulo: 'Ajuste del plan de acción', hash: 't_6_2' },
          {
            numero: '6.3',
            titulo: 'Integración del proceso de intervención',
            hash: 't_6_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [],
  glosario: [
    {
      termino: 'Acción de mejora',
      significado:
        'medida definida para corregir, ajustar o fortalecer las intervenciones, con el fin de optimizar los resultados en el entorno hogar.',
    },
    {
      termino: 'Análisis de información',
      significado:
        'proceso mediante el cual se interpretan los datos recolectados para identificar avances, dificultades, tendencias y necesidades de ajuste.',
    },
    {
      termino: 'Calidad de la información',
      significado:
        'condición que garantiza que los datos registrados sean completos, claros, oportunos, confiables y útiles para la toma de decisiones.',
    },
    {
      termino: 'Caracterización del hogar',
      significado:
        'proceso de recolección y análisis de información sobre las condiciones familiares, sociales, ambientales y territoriales del entorno hogar.',
    },
    {
      termino: 'Criterio de verificación',
      significado:
        'referente que permite comprobar si una actividad, compromiso o intervención se cumplió de acuerdo con lo planificado.',
    },
    {
      termino: 'Evidencia de seguimiento',
      significado:
        'registro, dato, documento o soporte que demuestra el avance, cumplimiento o resultado de una acción implementada.',
    },
    {
      termino: 'Gestión intersectorial',
      significado:
        'articulación entre diferentes sectores, instituciones y actores comunitarios para responder de manera integral a las necesidades del territorio.',
    },
    {
      termino: 'Intervención en el entorno hogar',
      significado:
        'conjunto de acciones planificadas que buscan fortalecer prácticas de cuidado, reducir riesgos y mejorar condiciones de bienestar familiar.',
    },
    {
      termino: 'Periodicidad del seguimiento',
      significado:
        'frecuencia definida para revisar el avance de las acciones, verificar compromisos y actualizar la información registrada.',
    },
    {
      termino: 'Plan de seguimiento',
      significado:
        'herramienta que organiza qué acciones se verifican, quién realiza el control, cuándo se revisan y qué información se registra.',
    },
    {
      termino: 'Trazabilidad del proceso',
      significado:
        'posibilidad de seguir el desarrollo de una intervención mediante registros claros, fechas, responsables, avances y resultados verificables.',
    },
    {
      termino: 'Validación de la información',
      significado:
        'revisión que permite confirmar que los datos registrados sean coherentes, completos y acordes con lo observado en el territorio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2016). Política de Atención Integral en Salud (PAIS). Bogotá, Colombia: MSPS.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018a). Modelo de Acción Integral Territorial (MAITE). Bogotá, Colombia: MSPS.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2018b). Resolución 3280 de 2018 por la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención en Salud (RIAS). Bogotá, Colombia: MSPS.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2015). Plan Decenal de Salud Pública 2012–2021. Bogotá, Colombia: MSPS.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Laura Briguitte Perea Possos ',
          cargo: 'Experta temática ',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez ',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Melendez',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña  ',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
