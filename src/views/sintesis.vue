<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4 La implementación de la estrategia de entorno hogar saludable integra procesos operativos, educativos y comunitarios que permiten llevar a la práctica las acciones planeadas con las familias. A lo largo del componente se abordan la ejecución del plan de acción, las intervenciones en el entorno hogar, el seguimiento de las acciones, el uso de planillas de registro, el análisis de la información, la evaluación de resultados y la formulación de acciones de mejora. El siguiente mapa conceptual presenta, de manera visual, la organización de los contenidos y la relación entre los ejes temáticos que orientan la intervención en el territorio.
    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado “Implementación, seguimiento y mejora de la estrategia entorno hogar saludable” se desarrolla a través de seis ejes: implementación de acciones en el entorno hogar, seguimiento del plan de acción, indicadores en la estrategia, gestión de la información en salud, análisis y evaluación de indicadores, y acciones de mejora continua. El mapa permite comprender cómo la estrategia pasa de la ejecución de acciones al registro, análisis, evaluación y fortalecimiento de las intervenciones realizadas con las familias en el entorno hogar.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
