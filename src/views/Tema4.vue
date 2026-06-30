<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Gestión de la información en salud
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema4/img1.png', alt='')
      .col-lg-9
        p.mb-4 La gestión de la información en salud en el entorno hogar corresponde al conjunto de procesos orientados a organizar, sistematizar y utilizar los datos generados durante la implementación de las intervenciones, con el fin de facilitar su análisis y apoyar la toma de decisiones en el territorio.
        .p-4.tarjeta.bg5
          p.mb-0 Este proceso permite transformar la información registrada en conocimiento útil, garantizando que los datos recopilados durante la ejecución de las acciones sean organizados de manera coherente y estén disponibles para su uso en el seguimiento y la evaluación. En este sentido, la gestión de la información no se limita al almacenamiento de datos, sino que implica su organización y aprovechamiento en el proceso de intervención.
    p.mb-4 En el contexto del entorno hogar, la información puede provenir de diferentes fuentes que ayudan a comprender cómo se desarrolla la intervención y qué situaciones requieren atención. Para facilitar su lectura, estas fuentes se organizan de la siguiente manera:
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.bg1.mb-4
          ul.lista-ul--color
            li 
              i.fas.fa-certificate
              p.mb-0 #[b Planillas de seguimiento:] registran actividades realizadas, avances, dificultades y acciones de ajuste.
            li 
              i.fas.fa-certificate
              p.mb-0 #[b Herramientas de caracterización:] permiten reconocer condiciones del hogar, necesidades familiares y riesgos presentes.
            li 
              i.fas.fa-certificate
              p.mb-0 #[b Indicadores:] transforman los datos registrados en evidencias para medir avances y resultados.
            li 
              i.fas.fa-certificate
              p.mb-0 #[b Visitas domiciliarias:] permiten observar directamente las condiciones del hogar y orientar acciones pertinentes.
            li 
              i.fas.fa-certificate
              p.mb-0 #[b Registros educativos:] documentan orientaciones, compromisos y actividades realizadas con las familias.
        .p-4.cajon.color-secundario 
          p.mb-0 Estas fuentes permiten construir una visión integral del proceso de intervención. Su uso articulado facilita reconocer avances, identificar dificultades y tomar decisiones orientadas al mejoramiento de las condiciones del entorno hogar.
    p.mb-4 Después de reconocer las fuentes de información, es necesario comprender cómo se transforman esos datos en insumos útiles para el seguimiento. Este proceso se desarrolla mediante momentos organizados que permiten reunir, ordenar, analizar y utilizar la información durante la intervención:
    .row.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").mb-4
          .row(titulo="Recolección de información")
            .col-md-12.mb-4.mb-md-0
              p Consiste en reunir datos obtenidos durante visitas, entrevistas, planillas, herramientas de caracterización e indicadores. Ejemplo: durante una visita domiciliaria, se registra si la familia cuenta con agua segura, manejo adecuado de residuos y prácticas básicas de higiene.
          .row(titulo="Organización de la información")
            .col-md-12.mb-4.mb-md-0
              p Permite clasificar y ordenar los datos para facilitar su consulta, revisión y análisis posterior. Ejemplo: el equipo de salud agrupa los registros por barrio, vereda, fecha de visita, tipo de riesgo identificado o acción realizada con la familia.
          .row(titulo="Análisis de la información")
            .col-md-12.mb-4.mb-md-0
              p Implica revisar los datos registrados para identificar avances, dificultades, necesidades frecuentes o situaciones que requieren atención. Ejemplo: al revisar varias planillas, se identifica que varias familias presentan dificultades en el almacenamiento de agua, por lo que se prioriza una acción educativa.
          .row(titulo="Uso de la información")
            .col-md-12.mb-4.mb-md-0
              p Corresponde a la aplicación de los resultados del análisis para orientar decisiones, ajustar actividades y fortalecer el seguimiento. Ejemplo: si los registros muestran bajo cumplimiento en prácticas de higiene, se programa una nueva orientación familiar y se coordina apoyo con actores del territorio.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema4/img2.png', alt='')   
    p.mb-4 corresponde a la aplicación de los resultados del análisis para orientar decisiones, ajustar actividades y fortalecer el seguimiento. Ejemplo: si los registros muestran bajo cumplimiento en prácticas de higiene, se programa una nueva orientación familiar y se coordina apoyo con actores del territorio.
    p.mb-4 Para facilitar la comprensión del proceso, la gestión de la información puede organizarse en una ruta sencilla:
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.bg1
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.order-lg-1
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  | Recolectar datos durante la intervención.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  | Ordenar la información según criterios definidos.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  | Revisar los datos para identificar hallazgos.
                li 
                  .lista-ol--cuadro__vineta
                    span D
                  | Interpretar los resultados obtenidos.
                li 
                  .lista-ol--cuadro__vineta
                    span E
                  | Usar la información para orientar decisiones.
                li 
                  .lista-ol--cuadro__vineta
                    span F
                  | Ajustar las acciones según las necesidades identificadas.
            .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema4/img3.png', alt='')   
    .row.justify-content-center
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema4/img4.svg', alt='')
      .col-lg-8
        p.mb-4 Esta ruta permite comprender que la gestión de la información es un proceso continuo. Cada paso aporta claridad al seguimiento, fortalece la calidad de los registros y facilita decisiones más pertinentes para mejorar las condiciones del entorno hogar.
        p.mb-0 La primera etapa de este proceso corresponde a la recolección de información, porque permite obtener los datos necesarios para conocer la situación del hogar, documentar las acciones realizadas y contar con insumos confiables para el análisis posterior.
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.1 Recolección de información
    .row.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .p-4.tarjeta.bg5.mb-4
          p.mb-0 La recolección de la información en el entorno hogar corresponde al proceso mediante el cual se obtienen datos relevantes durante la ejecución de las intervenciones, con el fin de disponer de insumos confiables para su posterior organización, análisis y uso en la toma de decisiones en salud.
        p.mb-0 A diferencia del registro, que se centra en la consignación de la información, la recolección se orienta a la obtención directa de datos a partir de la interacción con las familias, la observación del entorno y la aplicación de instrumentos durante el desarrollo de las actividades. Este proceso permite captar información contextualizada que refleja las condiciones reales del entorno hogar.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema4/img5.svg', alt='')
    p.mb-4 Para comprender la recolección de información en el entorno hogar, es necesario reconocer las formas que permiten obtener datos claros, verificables y relacionados con la realidad de las familias. Estas formas ayudan a identificar condiciones del entorno, prácticas cotidianas y situaciones que requieren atención durante la intervención:
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema4/img6.png', alt='')
      .col-lg-7
         LineaTiempoD.color-acento-botones.especial.mb-4
          .row(numero="1" titulo="Visita domiciliaria")
            p.mb-4 Permite acercarse al hogar para reconocer las condiciones reales en las que vive la familia y recoger información directamente en su contexto.
            p.mb-0 #[b Ejemplo:] verificar si la vivienda cuenta con ventilación adecuada; identificar si el agua para consumo se almacena en recipientes limpios y protegidos.
          .row(numero="2" titulo="Observación del entorno")
            p.mb-4 Consiste en revisar las condiciones físicas, ambientales y sociales que pueden influir en la salud de la familia.
            p.mb-0 #[b Ejemplo:] observar presencia de residuos cerca de la vivienda; reconocer riesgos por humedad, hacinamiento, mala ventilación o presencia de vectores en el espacio habitacional.
          .row(numero="3" titulo="Interacción con la familia")
            p.mb-4 Facilita el diálogo respetuoso con los integrantes del hogar para conocer sus prácticas, necesidades y acuerdos frente al cuidado.
            p.mb-0 #[b Ejemplo:] conversar sobre hábitos de higiene antes de preparar alimentos; preguntar cómo se organizan para cuidar a niñas, niños, personas mayores o personas enfermas.
          .row(numero="4" titulo="Aplicación de instrumentos")
            p.mb-4 Permite obtener información organizada mediante formatos, listas de chequeo, encuestas o herramientas de caracterización.
            p.mb-0 #[b Ejemplo:] diligenciar una ficha familiar para identificar riesgos; aplicar una lista de verificación sobre saneamiento básico, almacenamiento de alimentos y acceso a servicios de salud.
          .row(numero="5" titulo="Registro de información")
            p.mb-4 Consiste en documentar los datos obtenidos durante la intervención para conservar evidencia y facilitar el seguimiento.
            p.mb-0 #[b Ejemplo:] anotar hallazgos de la visita en una planilla; registrar compromisos acordados con la familia sobre manejo de residuos, higiene o almacenamiento seguro del agua.
          .row(numero="6" titulo="Análisis inicial")
            p.mb-4 permite revisar los datos recolectados para reconocer necesidades prioritarias y orientar acciones pertinentes
            p.mb-0 #[b Ejemplo:] identificar que varias familias requieren educación sobre lavado de manos; reconocer que un sector necesita articulación con servicios públicos por dificultades de acceso al agua.
    .row.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .p-4.tarjeta.bg2.mb-4
          p.mb-0 La combinación de estas formas permite obtener una visión más completa de las condiciones del entorno hogar. Además, facilita que la información recolectada sea clara, útil y pertinente para orientar el seguimiento, priorizar necesidades y fortalecer las acciones desarrolladas con las familias colombianas.
        p.mb-4 En un contexto territorial, por ejemplo, la observación de las condiciones del hogar, junto con la información proporcionada por la familia y el uso de instrumentos estructurados, permite consolidar datos que reflejan tanto la realidad del entorno como las dinámicas familiares.
        p.mb-0 Una vez obtenidos los datos durante la intervención, es necesario darles un orden que facilite su consulta y análisis. Por ello, la organización y sistematización permiten clasificar la información recolectada, reconocer relaciones entre los hallazgos y preparar los datos para su uso en el seguimiento de las acciones.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema4/img7.svg', alt='')
          
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.2 Organización y sistematización de datos
    p.mb-4 La organización y sistematización de datos corresponde al proceso mediante el cual la información recolectada en el entorno hogar se clasifica, ordena y consolida, con el fin de facilitar su análisis y uso en la toma de decisiones. Este proceso permite transformar los registros obtenidos en datos estructurados, útiles para el seguimiento de las intervenciones y la medición de resultados.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el entorno hogar, la información recolectada puede ser amplia y diversa, porque proviene de visitas, observaciones, registros familiares y actividades de acompañamiento. Por esta razón, organizarla permite evitar datos dispersos, reconocer relaciones entre las condiciones del hogar y facilitar una lectura más clara de las necesidades identificadas durante la intervención.
    p.mb-4 Una vez registrada la información, es necesario agruparla mediante criterios que faciliten su consulta, comparación y análisis. Esta organización permite reconocer con mayor claridad qué tipo de intervención se realizó, en qué condiciones se encontraba el hogar y cuáles situaciones requieren seguimiento:
    .row.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .row.mb-4
          .col-lg-6.mb-4.mb-lg-0
            .p-4.tarjeta.bg3.h-100
              .row.justify-content-center
                .col-lg-auto.col-3
                  img(src='@/assets/curso/temas/tema4/img9.svg', alt='')
                .col-lg-8.col-9
                  h5 Tipo de intervención
                  p.mb-0 Clasifica la acción realizada, como visita, orientación, seguimiento o actividad educativa.
          .col-lg-6
            .p-4.tarjeta.bg3.h-100
              .row.justify-content-center
                .col-lg-auto.col-3
                  img(src='@/assets/curso/temas/tema4/img10.svg', alt='')
                .col-lg-8.col-9
                  h5 Condiciones del hogar
                  p.mb-0 Organiza datos sobre vivienda, servicios, higiene, riesgos y prácticas familiares.
        .row.mb-4
          .col-lg-6.mb-4
            .p-4.tarjeta.bg3
              .row.justify-content-center
                .col-lg-auto.col-3
                  img(src='@/assets/curso/temas/tema4/img11.svg', alt='')
                .col-lg-8.col-9
                  h5 Factores de riesgo
                  p.mb-0 Identifica situaciones que pueden afectar la salud o el bienestar familiar.
          .col-lg-6
            .p-4.tarjeta.bg3
              .row.justify-content-center
                .col-lg-auto.col-3
                  img(src='@/assets/curso/temas/tema4/img12.svg', alt='')
                .col-lg-8.col-9
                  h5 Población intervenida
                  p.mb-0 Reconoce a las personas o grupos familiares que recibieron acompañamiento.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema4/img13.png', alt='')
    p.mb-4 Esta forma de organizar los datos permite visualizar la información de manera más clara y establecer relaciones entre los hallazgos. Además, facilita el análisis posterior y contribuye a tomar decisiones pertinentes durante la intervención en el entorno hogar.
    p.mb-4 La sistematización implica, además, la consolidación de la información en formatos que faciliten su análisis, como bases de datos o registros agrupados, lo que permite identificar patrones, tendencias y comportamientos en la población. Este proceso es fundamental para dar coherencia a los datos y evitar su dispersión.
    p.mb-4 En el contexto de la intervención, la adecuada organización y sistematización de la información permite:
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.bg1
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.order-lg-1
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  | Facilitar el cálculo de indicadores. 
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  | Identificar avances y dificultades en las intervenciones. 
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  | Comparar resultados en diferentes periodos. 
                li 
                  .lista-ol--cuadro__vineta
                    span D
                  | Apoyar la toma de decisiones en salud. 
                li 
                  .lista-ol--cuadro__vineta
                    span E
                  | Generar insumos para la evaluación del plan de acción.
            .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema4/img14.svg', alt='')  
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema4/img15.png', alt='')
      .col-lg-9
        p.mb-4 Asimismo, este proceso requiere mantener criterios de consistencia en el manejo de la información, garantizando que los datos sean organizados de manera uniforme y que su interpretación sea clara.
        .p-4.tarjeta.bg2
          .row.justify-content-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema4/img16.svg', alt='')
            .col-lg-10
              p.mb-0 En consecuencia, la organización y sistematización de los datos permiten transformar la información recolectada en insumos útiles para el análisis del proceso de intervención. A partir de esta base, se hace posible avanzar hacia el cálculo y análisis de los indicadores, etapa en la cual se interpretan los resultados obtenidos.
    p.mb-0 Una vez organizada y sistematizada la información, es necesario verificar que los datos sean claros, completos, coherentes y útiles para el análisis. Por ello, la calidad de la información se convierte en un criterio fundamental para asegurar registros confiables, evitar interpretaciones erróneas y fortalecer las decisiones durante la intervención en el entorno hogar.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 4.3 Calidad de la información
    .row.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 La calidad de la información en salud constituye un elemento fundamental para garantizar la confiabilidad de los procesos de seguimiento, análisis y toma de decisiones en el entorno hogar. La utilidad de los datos recolectados no depende únicamente de su cantidad, sino de la precisión, coherencia y pertinencia con la que son obtenidos y gestionados durante la intervención.
        .p-4.tarjeta.bg1
          p.mb-0 En este sentido, la calidad de la información se relaciona con la capacidad de los datos para reflejar de manera fiel las condiciones del entorno, las acciones realizadas y los resultados observados. Esto implica que la información debe ser clara, verificable y consistente con la realidad del contexto en el que se desarrollan las intervenciones.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema4/img17.png', alt='')
    p.mb-4 Durante la implementación, la calidad de la información se garantiza cuando existe coherencia entre lo observado en el entorno hogar, lo registrado en los instrumentos y lo reportado en los procesos de seguimiento. Esta relación permite evitar inconsistencias y facilita el uso de la información en etapas posteriores del proceso.
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.tarjeta.bg3
          p.mb-0 La información actualizada, completa y confiable permite tomar decisiones oportunas durante la intervención, fortalece el análisis de las condiciones del entorno hogar y evita que los datos incompletos o desactualizados afecten la pertinencia de las acciones.
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema4/img18.svg', alt='')
      .col-lg-9
        p.mb-4 A partir de estos elementos, la calidad de la información se consolida como un componente transversal en el proceso de intervención, que permite fortalecer la gestión de la información y garantizar su utilidad en la toma de decisiones en el entorno hogar.
        p.mb-0 A partir de la calidad de la información, es necesario reconocer algunos criterios que ayudan a valorar si los datos registrados pueden utilizarse de manera confiable durante la intervención. Estos criterios permiten revisar la claridad, oportunidad, coherencia y utilidad de la información antes de emplearla en el análisis y en la toma de decisiones:
    .BG04.px-5.p-5.mb-4
      .tarjeta.tarjeta--blanca.p-4
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              p #[b Claridad de los datos:] permite que la información registrada sea comprensible para el equipo de intervención y para quienes realizan el seguimiento. Un dato claro evita interpretaciones diferentes y facilita reconocer lo ocurrido en el hogar.
              p #[b Ejemplos:] registrar “recipiente de agua sin tapa” es más preciso que escribir “problema con el agua”.
            .col-md-6.mb-4.mb-md-0.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema4/img19.png', alt='')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              p #[b Oportunidad del registro:] consiste en documentar la información en el momento adecuado, evitando retrasos que puedan afectar su utilidad. Cuando los datos se registran a tiempo, es posible actuar con mayor rapidez frente a situaciones identificadas.
              p #[b Ejemplos:] reportar durante la visita la presencia de residuos acumulados permite orientar acciones inmediatas de limpieza.
            .col-md-6.mb-4.mb-md-0.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema4/img20.png', alt='')
          .row.justify-content-center.align-items-center
            .col-md-6.order-2.order-lg-1
              p #[b Coherencia de la información:] implica que los datos registrados coincidan con lo observado, lo informado por la familia y lo consignado en los instrumentos. Esta relación evita contradicciones y fortalece la confiabilidad del proceso.
              p #[b Ejemplos:] si se reporta una orientación sobre higiene, el registro debe relacionarse con prácticas de lavado de manos o manipulación de alimentos.
            .col-md-6.mb-4.mb-md-0.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema4/img21.png', alt='')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              p #[b Pertinencia para la intervención:] significa que la información recolectada debe aportar al seguimiento, al análisis o al ajuste de las acciones desarrolladas. No se trata de registrar datos sin propósito, sino de conservar aquellos que orientan decisiones.
              p #[b Ejemplos:] identificar dificultades de acceso al agua ayuda a priorizar acompañamiento y articulación con actores del territorio.
            .col-md-6.mb-4.mb-md-0.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema4/img22.png', alt='')
          .row.justify-content-center.align-items-center
            .col-md-6.mb-4.mb-md-0.order-2.order-lg-1
              p #[b Confidencialidad de los datos:] consiste en proteger la información personal y familiar obtenida durante la intervención. Este criterio evita usos inadecuados de los datos y promueve un manejo respetuoso de la información.
              p #[b Ejemplos:] los datos de una familia se registran solo en los formatos autorizados y se usan para fines de seguimiento.
            .col-md-6.mb-4.mb-md-0.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema4/img23.png', alt='')
    p.mb-4 El cumplimiento de estos criterios fortalece la calidad de la información y facilita su uso responsable durante el proceso de intervención. Además, permite que los datos registrados sean comprensibles, verificables y pertinentes para reconocer necesidades, valorar resultados y orientar acciones de mejora en el entorno hogar.
    p.mb-4 Para aplicar estos criterios de manera sencilla, se pueden tener en cuenta los siguientes aspectos:
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.bg1
          .row.justify-content-center.align-items-center
            .col-lg-8.order-2.order-lg-1
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span A
                  | Registrar datos claros y verificables.
                li 
                  .lista-ol--cuadro__vineta
                    span B
                  | Actualizar la información en el momento oportuno.
                li 
                  .lista-ol--cuadro__vineta
                    span C
                  | Revisar que los datos coincidan con lo observado.
                li 
                  .lista-ol--cuadro__vineta
                    span D
                  | Conservar solo información útil para el seguimiento.
                li 
                  .lista-ol--cuadro__vineta
                    span E
                  | Proteger la información personal y familiar.
                li 
                  .lista-ol--cuadro__vineta
                    span F
                  | Utilizar los datos para orientar acciones de mejora.
            .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema4/img24.svg', alt='')   
        .p-4.cajon.color-secundario
          p.mb-0 Este listado permite recordar que la calidad de la información depende tanto de la forma en que se registran los datos como del uso que se les da durante la intervención. Por ello, cada registro debe aportar al análisis, al seguimiento y al fortalecimiento de las acciones desarrolladas con las familias colombianas.
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
