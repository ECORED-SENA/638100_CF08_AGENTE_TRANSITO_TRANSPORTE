export default {
  global: {
    componenteFormativo: 'Control del tránsito y asistencia a víctimas',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave sobre red vial nacional, entes de control y normatividad, en función del uso correcto del espacio público. Con su estudio, el aprendiz podrá aplicar apropiadamente planes de manejo de tránsito, de movilidad de usuarios en las vías y sabrá responder pertinentemente a eventos que requieran prestar primeros auxilios y preservar la vida, según implicaciones y normatividad.',
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Red vial nacional',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manual de señalización vial',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Características del espacio público',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Derechos y deberes ciudadanos en el espacio público',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Infracciones al espacio público',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Planes de manejo de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Aplicación de planes de manejo de tránsito',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Señales corporales para la regulación del tránsito',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Dispositivos para la regulación del tránsito',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Primeros auxilios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Atención básica y procedimientos',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Características de los escenarios',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Aseguramiento del lugar',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Evaluar víctimas',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Características de las heridas',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Aplicación de técnicas de reanimación',
            hash: 't_5_7',
          },
          {
            numero: '5.8',
            titulo: 'Primer respondiente y técnicas de inmovilización ',
            hash: 't_5_8',
          },
          {
            numero: '5.9',
            titulo: 'Mantener vigilancia de signos vitales',
            hash: 't_5_9',
          },
          {
            numero: '5.10',
            titulo:
              'Comunicaciones entre el medio de transporte y el centro hospitalario ',
            hash: 't_5_10',
          },
          {
            numero: '5.11',
            titulo: 'Técnicas y protocolo para traslado de víctimas ',
            hash: 't_5_11',
          },
          {
            numero: '5.12',
            titulo:
              'Valoración de la víctima (<em>triage</em>) concepto de anamnesis ',
            hash: 't_5_12',
          },
          {
            numero: '5.13',
            titulo: 'Fundamentos legales en primeros auxilios',
            hash: 't_5_13',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/638100_CF08_DU.zip',
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
  complementario: [
    {
      tema: 'Características y condiciones generales del paciente',
      referencia:
        'Ministerio de salud de Argentina. (2016). Manual de primeros auxilios y prevención de lesiones. ',
      tipo: 'PDF',
      link:
        'https://www.argentina.gob.ar/sites/default/files/manual_1ros_auxilios_web.pdf ',
    },
    {
      tema: 'Valoración de la víctima (<em>triage</em>) concepto de anamnesis ',
      referencia:
        'Vásquez Guzmán, M.A & Morales, Hernández A.E. et al. (2017). Correlación clínica del triage con el diagnóstico clínico de ingreso y egreso realizado con los pacientes que acuden al servicio médico en urgencias de un hospital privado.',
      tipo: 'Web-artículo',
      link:
        'https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0186-48662017000400466',
    },
    {
      tema: 'Planes de manejo de tránsito',
      referencia: 'Leyes.co (2014 – 2021). Código penal.',
      tipo: 'Normativa ',
      link:
        'https://leyes.co/codigo_penal/152.htm#:~:text=El%20que%2C%20con%20ocasi%C3%B3n%20y,seis%20(66.66)%20a%20ciento%20cincuenta',
    },
    {
      tema: 'Planes de manejo de tránsito',
      referencia:
        'Ley 769 de 2002. [Poder público, Rama legislativa]. Por lo cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Agosto 6 de 2002.',
      tipo: 'Normativa',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.htm',
    },
  ],
  glosario: [
    {
      termino: 'Afirmado',
      significado:
        'Capa compactada de material granular natural o procesado con gradación específica que soporta directamente las cargas y esfuerzos del tránsito.',
    },
    {
      termino: 'Cabecera municipal',
      significado:
        'Área geográfica que está delimitada por un perímetro urbano, la cual está definida como un polo de atracción en el cual se genera el mayor número de viajes en periodos determinados.',
    },
    {
      termino: 'Calzada',
      significado:
        'Zona de la vía destinada a la circulación de vehículos. Generalmente pavimentada o acondicionada con algún tipo de material de afirmado.',
    },
    {
      termino: 'Carril',
      significado:
        'Parte de la calzada destinada al tránsito de una sola fila de vehículos.',
    },
    {
      termino: 'Concesión vial',
      significado:
        'Es la adjudicación de una vía por medio de licitación por parte de la administración pública a una entidad privada que se encargará de la construcción, rehabilitación, mantenimiento y conservación de una vía por un cierto periodo de tiempo. ',
    },
    {
      termino: 'Mobiliario urbano',
      significado:
        'Elementos que constituyen el equipamiento de la vía pública para mejorar las condiciones de servicio de esta, entre ellos están: luminarias, bolardos, paraderos, bancas, etc.',
    },
    {
      termino: 'Pavimento',
      significado:
        'Conjunto de capas superpuestas, relativamente horizontales, que se diseñan y construyen técnicamente con materiales apropiados y adecuadamente compactados.',
    },
    {
      termino: 'PMT',
      significado: ' Plan de Manejo de Tráfico',
    },
    {
      termino: 'POT',
      significado: ' Plan de ordenamiento Territorial',
    },
  ],
  referencias: [
    {
      referencia:
        'Agencia Nacional de Seguridad Vial. (2022). <em>Indicadores</em>.',
      link: 'https://ansv.gov.co/observatorio/estad%C3%ADsticas',
    },
    {
      referencia:
        'Castillo, N. & Rubiano, A. (2022). <em>Escritura de artículos científicos en atención prehospitalaria</em>.',
      link:
        'https://www.neurocienciasjournal.com/index.php/LAJPEM/article/view/380/274',
    },
    {
      referencia:
        'Díaz Polo, J. & Hurtado Fuentes, J. A. et. al. (2021). Análisis de tipo de triage a nivel prehospitalario como propuesta metodológica en el programa de atención prehospitalaria de la Universidad Militar Nueva Granada.',
      link: 'https://repository.unimilitar.edu.co/handle/10654/39352',
    },
    {
      referencia: 'Gazitúa, R. (2004). <em>Manual de semiología</em>.',
      link:
        'https://www.studocu.com/co/document/universidad-de-sucre/embriologia/manual-de-semiologia-ricardo-gazitua/10323104',
    },
    {
      referencia:
        'Graf, C. (20202). Tecnologías de información y comunicación (TIC’s). Primer paso para la implementación de telesalud y de telemedicina.',
      link: 'http://www.revista.spr.org.py/index.php/spr/article/view/114',
    },
    {
      referencia:
        'Jiménez Casares, A.P. & Guzmán Rojas, N. et.al. (2021). <em>Avances tecnológicos en salud desde el área de atención prehospitalaria</em>.',
      link: 'https://repository.ces.edu.co/handle/10946/5360',
    },
    {
      referencia: 'Ministerio de Transporte. (2022). <em>Glosario</em>.',
      link: 'https://www.mintransporte.gov.co/glosario/',
    },
    {
      referencia:
        'Urgilés Cantos, J.F. & Campoverde Carrasco, E.E. (2020). <em>Sistema de alarma y monitorio de pulso cardiaco y temperatura corporal</em>.',
      link: 'https://dspace.ups.edu.ec/handle/123456789/19610',
    },
    {
      referencia:
        'Olivero, R. & Barraez, C.(2011). <em>Importancia de la semiología médica en la adquisición de competencias de un médico</em>.',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1316-71382011000300009',
    },
    {
      referencia:
        'Organización Mundial de la Salud. (2022). <em>Traumatismos causados por el tránsito</em>.',
      link:
        'https://www.who.int/es/news-room/fact-sheets/detail/road-traffic-injuries',
    },
    {
      referencia:
        'Organización Panamericana de la Salud. (2018). <em>Nuevo informe de la OMS destaca que los progresos han sido insuficientes en abordar la falta de seguridad en las vías de tránsito de todo el mundo</em>.',
      link:
        'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=14857:new-who-report-highlights-insufficient-progress-to-tackle-lack-of-safety-on-the-world-s-roads&Itemid=0&lang=es#gsc.tab=0',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Zaida Fernanda Sotelo Peña',
          cargo: 'Experta Temática',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñador Instruccional',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
