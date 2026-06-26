<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p
      | La implementación de la estrategia de entorno hogar saludable se orienta a la ejecución organizada de las acciones definidas en el plan de acción, con el propósito de dar respuesta a las necesidades identificadas en el territorio. Este proceso implica el desarrollo de intervenciones en el entorno hogar, articuladas con el uso de herramientas de seguimiento, registro y análisis de la información.
    p
      | En este contexto, la implementación no se limita a la realización de actividades, sino que integra la gestión de la información, el uso de indicadores y la valoración de resultados, lo que permite orientar la toma de decisiones en salud de manera oportuna. Este enfoque favorece la coherencia entre las acciones ejecutadas y las condiciones del entorno, fortaleciendo la capacidad de respuesta frente a los riesgos en salud.
    p
      | En el marco de la Atención Primaria en Salud, estos procesos contribuyen a la gestión del riesgo y al mejoramiento de los resultados en salud de la población, en concordancia con los lineamientos del Ministerio de Salud y Protección Social (MSPS, 2016).
    p
      | El desarrollo de este componente fortalece las capacidades del aprendiz para ejecutar el plan de acción, utilizar instrumentos de seguimiento, analizar indicadores y definir acciones de mejora, consolidando un proceso de intervención estructurado y orientado a resultados en el entorno hogar.
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({}),
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
