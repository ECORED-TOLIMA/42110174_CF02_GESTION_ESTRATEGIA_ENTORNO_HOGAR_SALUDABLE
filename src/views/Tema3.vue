<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Indicadores en la estrategia
    p.mb-4 El desarrollo de las intervenciones en el entorno hogar requiere la incorporación de indicadores que permitan medir el avance de las acciones ejecutadas y valorar los resultados obtenidos en el proceso. Estos indicadores constituyen herramientas fundamentales para el seguimiento, al facilitar la cuantificación de aspectos relacionados con el cumplimiento de actividades y los cambios generados en las familias.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En este contexto, los indicadores permiten transformar la información registrada durante la implementación en datos medibles, lo que favorece el análisis de resultados y la toma de decisiones en salud. Su uso contribuye a identificar avances, reconocer dificultades y orientar ajustes en las intervenciones desarrolladas en el territorio.
    .row.justify-content-center.mb-4
      .col-lg-auto.d-none.d-lg-block
        img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
      .col-lg-10
        p.mb-4 Desde esta perspectiva, la aplicación de indicadores no se limita al cálculo de datos, sino que implica su interpretación en relación con las condiciones del entorno hogar, lo que permite valorar la efectividad de las acciones implementadas.
        p.mb-0 Para comprender el uso de los indicadores en la estrategia, es necesario reconocer que no todos cumplen la misma función. Algunos permiten revisar cómo se ejecutan las actividades, otros ayudan a valorar los cambios alcanzados y otros muestran el alcance de la intervención en el territorio colombiano:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Indicador de proceso]
              p.text-center.mb-0 Mide el desarrollo de las actividades ejecutadas, verificando cantidad, oportunidad y cumplimiento de acciones programadas en el entorno hogar colombiano.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Indicador de resultado]
              p.text-center.mb-0 Valora cambios generados en la población, como prácticas de higiene, autocuidado y adopción de hábitos saludables en las familias colombianas.
      .col-10.col-md-6.col-lg-4.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img5.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Indicador de cobertura]
              p.text-center.mb-0 Relaciona la población atendida con la programada, identificando alcance, acceso y participación de familias priorizadas en el territorio colombiano asignado.
    p.mb-4 El uso de estos indicadores permite analizar la intervención desde diferentes dimensiones. Además, facilita reconocer si las acciones se están desarrollando según lo previsto, si generan cambios en las familias y si llegan a la población definida en el territorio.
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.tarjeta.bg3
          p.mb-0 Los indicadores permiten transformar la información registrada en evidencias útiles para valorar avances, reconocer resultados y orientar decisiones de mejora en el entorno hogar.
    p.mb-4 Para aplicar los indicadores de manera organizada, es importante identificar los aspectos que permiten definir qué se mide, para qué se mide, de dónde se obtiene la información y cómo se interpretan los resultados. Estos elementos facilitan el seguimiento de las intervenciones y apoyan la toma de decisiones en el entorno hogar:
    .row.justify-content-center.mb-4
      .col-lg-10
         LineaTiempoD.color-acento-botones.especial.mb-4
          .row(numero="1" titulo="Nombre del indicador")
            p.mb-4 Permite identificar de manera clara el aspecto que se va a medir dentro de la intervención. Debe ser breve, preciso y relacionado con la acción evaluada, para evitar confusiones durante el seguimiento.
            p.mb-0 #[b Ejemplo:] porcentaje de familias con agua almacenada de forma segura; número de visitas domiciliarias realizadas; proporción de hogares orientados en higiene de alimentos.
          .row(numero="2" titulo="Propósito de medición")
            p.mb-4 Explica para qué se usa el indicador y qué información aporta al proceso de seguimiento. Ayuda a comprender si el dato permite verificar cumplimiento, valorar cambios o identificar necesidades de ajuste.
            p.mb-0 #[b Ejemplo:] medir la adopción de prácticas saludables; verificar el cumplimiento de visitas programadas; identificar avances en el manejo adecuado de residuos en hogares rurales o urbanos.
          .row(numero="3" titulo="Fuente de información")
            p.mb-4 Señala el documento, registro o evidencia de donde se obtiene el dato necesario para calcular el indicador. Esta fuente debe ser confiable, verificable y estar disponible para consulta.
            p.mb-0 #[b Ejemplo:] planillas de seguimiento, registros de visitas domiciliarias, formatos de caracterización familiar, listados de asistencia, actas comunitarias o reportes del equipo de salud territorial.
          .row(numero="4" titulo="Periodicidad del registro")
            p.mb-4 Define cada cuánto se recopila, actualiza o revisa la información del indicador. Esta frecuencia permite mantener datos vigentes y reconocer cambios durante la intervención.
            p.mb-0 #[b Ejemplo:] registro semanal de visitas realizadas, revisión mensual de familias intervenidas, actualización quincenal de compromisos familiares o verificación periódica de prácticas de higiene en el hogar.
          .row(numero="5" titulo="Responsable del seguimiento")
            p.mb-4 Identifica la persona o equipo encargado de recopilar, revisar y reportar la información del indicador. Esta claridad evita duplicidad de funciones y favorece la continuidad del proceso.
            p.mb-0 #[b Ejemplo:] promotor de salud, auxiliar de intervención, equipo de atención primaria, líder comunitario autorizado o profesional responsable del acompañamiento familiar en el territorio.
          .row(numero="6" titulo="Resultado esperado")
            p.mb-4 Describe el cambio, avance o cumplimiento que se espera alcanzar con la intervención. Debe relacionarse con el propósito del indicador y con las condiciones identificadas en el entorno hogar.
            p.mb-0 #[b Ejemplo:] aumento de familias que almacenan agua segura, reducción de residuos cerca de la vivienda, cumplimiento de visitas programadas o mejora en prácticas de autocuidado.
    p.mb-4 La definición de estos aspectos permite que los indicadores sean comprensibles, comparables y útiles para el seguimiento. Además, ayuda a organizar la medición de las intervenciones, interpretar los resultados obtenidos y orientar acciones de mejora acordes con las necesidades de los hogares colombianos.
    p.mb-4 A partir de esta comprensión, resulta necesario profundizar en la ficha técnica de los indicadores, la cual permite estandarizar su definición, cálculo, fuente de información e interpretación dentro del proceso de seguimiento.          
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Ficha técnica de los indicadores
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema3/img6.png', alt='')
      .col-lg-9
        p.mb-4 La ficha técnica de indicadores constituye una herramienta que permite estandarizar la medición de las intervenciones en el entorno hogar, facilitando la definición, cálculo e interpretación de los resultados obtenidos. Su uso garantiza la claridad en los indicadores y la coherencia entre la información registrada y el análisis realizado.
        .p-4.tarjeta.bg2
          p.mb-0 La estructura presentada organiza los datos necesarios para definir, calcular e interpretar un indicador de manera clara. En la tabla se identifican el nombre, objetivo, fórmula, unidad de medida, variables, fuente de información, frecuencia, responsable, meta, línea base, interpretación y uso, con el fin de facilitar la medición y el análisis de las intervenciones en el entorno hogar.
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Ficha técnica del indicador 
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a.color-acento-contenido
            table
              thead
                tr
                  th Elemento
                  th Descripción
              tbody
                tr(style="background-color:#F6F6F6")
                  th Nombre del indicador
                  td Porcentaje de hogares que implementan prácticas saludables.
                tr
                  th Objetivo del indicador
                  td Medir el nivel de adopción de prácticas saludables en los hogares intervenidos.
                tr(style="background-color:#F6F6F6")
                  th Definición
                  td Proporción de hogares que aplican prácticas saludables en relación con el total de hogares intervenidos.
                tr
                  th Tipo de indicador
                  td Resultado.
                tr(style="background-color:#F6F6F6")
                  th Fórmula
                  td (Número de hogares con prácticas saludables / Total de hogares intervenidos) × 100.
                tr
                  th Unidad de medida
                  td Porcentaje (%).
                tr(style="background-color:#F6F6F6")
                  th Variables
                  td Hogares con prácticas saludables, hogares intervenidos.
                tr
                  th Fuente de información
                  td Planillas de seguimiento, registros de visitas domiciliarias.
                tr(style="background-color:#F6F6F6")
                  th Frecuencia de medición
                  td Mensual.
                tr
                  th Responsable
                  td Equipo de intervención en salud.
                tr(style="background-color:#F6F6F6")
                  th Meta
                  td ≥ 80 % de hogares con prácticas saludables.
                tr
                  th Línea base
                  td Valor inicial identificado en la caracterización.
                tr(style="background-color:#F6F6F6")
                  th Interpretación
                  td Valores altos indican mayor adopción de prácticas saludables; valores bajos evidencian necesidad de fortalecer las intervenciones.
                tr
                  th Uso del indicador
                  td Seguimiento de resultados, toma de decisiones y ajuste del plan de acción.
    .bloque-texto-gg.tarjeta.bg1.mb-4
      .bloque-texto-gg__texto.p-4
        p.mb-4 La estructuración de estos elementos permite asegurar que los indicadores sean comprensibles, medibles y aplicables en el contexto del entorno hogar. Asimismo, facilita la comparación de resultados en el tiempo y la identificación de tendencias en el desarrollo de las intervenciones.
        p.mb-0 En la práctica, por ejemplo, el cálculo de este indicador permite evidenciar si las acciones educativas implementadas han generado cambios en las prácticas de higiene de las familias, lo que orienta la continuidad o ajuste de las intervenciones.
      .bloque-texto-gg__img(
      :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img7.png')})`}"
      )
    p.mb-4 Para garantizar su utilidad, la ficha técnica debe cumplir con criterios de:
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.bg2
          .row.justify-content-center
            .col-lg-8.order-2.order-lg-1
              ul.lista-ul--color
                li 
                  i.fas.fa-certificate
                  | Claridad en la definición del indicador. 
                li 
                  i.fas.fa-certificate
                  | Coherencia entre objetivo, fórmula y resultado.
                li 
                  i.fas.fa-certificate
                  | Disponibilidad de información para su cálculo. 
                li 
                  i.fas.fa-certificate
                  | Pertinencia frente a las intervenciones realizadas.
                li 
                  i.fas.fa-certificate
                  | Facilidad de interpretación para la toma de decisiones.
            .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
              img(src='@/assets/curso/temas/tema3/img8.svg', alt='')
    .row.justify-content-center
      .col-lg-9.order-2.order-lg-1
        .p-4.tarjeta.bg3
          p.mb-4 La ficha técnica también facilita que los indicadores sean comparables entre diferentes momentos del proceso. Cuando se registran los mismos criterios de medición, es posible revisar si las acciones mantienen continuidad, si los resultados mejoran o si se presentan cambios que requieren análisis por parte del equipo responsable.
          p.mb-0 Asimismo, su aplicación favorece la transparencia en el seguimiento, porque permite justificar las decisiones con información organizada y verificable. De esta manera, los resultados obtenidos no se interpretan de forma aislada, sino como evidencias que orientan la mejora de las intervenciones y preparan el análisis sobre la toma de decisiones.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema3/img9.png', alt='')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Importancia de los indicadores en la toma de decisiones
    .row.justify-content-center.mb-4
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema3/img10.svg', alt='')
      .col-lg-9
        p.mb-4 El uso de indicadores en el entorno hogar permite orientar la toma de decisiones en salud a partir de información objetiva sobre el desarrollo de las intervenciones. Estos datos facilitan la identificación de avances, la detección de dificultades y la priorización de acciones que requieren ajuste en el proceso.
        .p-4.tarjeta.bg2
          p.mb-0 En este contexto, los indicadores convierten la información registrada en elementos de análisis para orientar decisiones durante la intervención. Su uso permite reconocer qué ocurre en el entorno hogar, valorar los resultados y definir acciones pertinentes:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Analizar información registrada]
              p.text-center.mb-0 Permite revisar los datos obtenidos durante el seguimiento y comprender el avance de las intervenciones.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img12.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Evitar decisiones basadas en percepciones]
              p.text-center.mb-0 Favorece el uso de evidencias verificables para orientar ajustes y mejoras.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img13.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Reconocer tendencias en los resultados]
              p.text-center.mb-0 Ayuda a identificar avances, dificultades o situaciones que se repiten en las familias acompañadas.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema3/img14.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Definir acciones de mejora]
              p.text-center.mb-0 permite establecer decisiones orientadas a fortalecer las condiciones de salud en el entorno hogar.
    p.mb-4 La lectura organizada de los indicadores fortalece la toma de decisiones, porque permite actuar con base en información clara y no solo en apreciaciones generales. De esta manera, se favorece una intervención más pertinente, verificable y ajustada a las necesidades de las familias colombianas.
    p.mb-4 Para comprender cómo los indicadores orientan la toma de decisiones, se presenta un recurso interactivo que relaciona los niveles de cumplimiento con las acciones que pueden desarrollarse durante el seguimiento de las intervenciones en el entorno hogar:
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img15.svg', alt='Texto que describa la imagen')
            .tarjeta.color-acento-botones.p-3(x="29.7%" y="51%" numero="+")
              p Las acciones están generando resultados positivos. Se recomienda mantener las intervenciones, fortalecer las prácticas que funcionan y continuar el seguimiento para conservar los avances logrados con las familias.
            .tarjeta.color-acento-botones.p-3(x="50%" y="51%" numero="+")
              p Existen avances, pero también se identifican limitaciones. Se requiere revisar las dificultades, ajustar las estrategias educativas y reforzar el acompañamiento para mejorar los resultados de la intervención.
            .tarjeta.color-acento-botones.p-3(x="70.5%" y="51%" numero="+")
              p No se evidencian los resultados esperados. Es necesario reorientar las acciones, definir nuevos apoyos y articular esfuerzos con actores del territorio para responder a las necesidades identificadas.
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema3/img16.svg', alt='Figura 2. Proceso formativo para la participación social en salud. Pirámide que representa el proceso formativo para la participación social. Incluye cuatro niveles: información básica sobre derechos en salud, comprensión del sistema de salud, desarrollo de liderazgo comunitario e incidencia en decisiones públicas.')
    .row.justify-content-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema3/img17.png', alt='')
      .col-lg-9
        .p-4.tarjeta.bg5.mb-4
          p.mb-0 La interpretación de estos niveles permite tomar decisiones con base en evidencias. De esta manera, los indicadores ayudan a mantener lo que funciona, ajustar lo que requiere mejora y fortalecer la intervención en el entorno hogar.
        .row.justify-content-center
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema3/img18.svg', alt='')
          .col-lg-10
            p.mb-0 A partir de la interpretación de los indicadores, la información obtenida adquiere mayor valor cuando se organiza, conserva y utiliza de manera adecuada. Por ello, la gestión de la información en salud permite transformar los datos del seguimiento en insumos claros para comprender la situación del entorno hogar, orientar acciones pertinentes y fortalecer la calidad de las intervenciones.
</template>

<script>
export default {
  name: 'Tema3',
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
