<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad
        <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema:
        'Implementación, seguimiento y mejora de la estrategia entorno hogar saludable',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> aplicar el proceso de implementación, seguimiento, análisis y mejora de las intervenciones en el entorno hogar, mediante el uso de información, indicadores y herramientas de registro, con el fin de fortalecer la toma de decisiones y optimizar las acciones en salud de acuerdo con las necesidades identificadas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la implementación de acciones en el entorno hogar?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Registrar información.', esCorrecta: false },
            { id: 'b', texto: 'Diseñar indicadores.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Ejecutar intervenciones según el plan de acción.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Elaborar informes.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La implementación permite llevar a la práctica las acciones definidas en el plan de acción.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué permite el seguimiento de las intervenciones?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eliminar actividades.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Verificar el cumplimiento de las acciones.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Rediseñar el programa.', esCorrecta: false },
            { id: 'd', texto: 'Crear nuevos indicadores.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. El seguimiento permite controlar y verificar el desarrollo de las intervenciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto: '¿Cuál es la función principal de los indicadores?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Medir resultados y avances.', esCorrecta: true },
            { id: 'b', texto: 'Diseñar estrategias.', esCorrecta: false },
            { id: 'c', texto: 'Clasificar población.', esCorrecta: false },
            { id: 'd', texto: 'Registrar actividades.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Los indicadores permiten medir el desempeño de las intervenciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto: '¿Qué tipo de indicador mide la ejecución de actividades?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Proceso.', esCorrecta: true },
            { id: 'b', texto: 'Estructural.', esCorrecta: false },
            { id: 'c', texto: 'Impacto.', esCorrecta: false },
            { id: 'd', texto: 'Resultado.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Los indicadores de proceso evalúan la ejecución de actividades.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto: '¿Qué permite la recolección de información?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Evaluar resultados.', esCorrecta: false },
            { id: 'b', texto: 'Definir políticas.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Obtener datos del entorno hogar.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Diseñar el plan.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La recolección permite obtener datos sobre condiciones y acciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto: '¿Cuál es el objetivo del registro en planillas?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Definir metas.', esCorrecta: false },
            { id: 'b', texto: 'Crear estrategias.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Organizar y documentar información.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Analizar indicadores.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Las planillas permiten organizar y evidenciar la información.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Qué implica la sistematización de la información?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Eliminar registros.', esCorrecta: false },
            { id: 'b', texto: 'Ordenar y analizar datos.', esCorrecta: true },
            { id: 'c', texto: 'Crear indicadores.', esCorrecta: false },
            { id: 'd', texto: 'Guardar datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La sistematización permite organizar la información para su análisis.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto: '¿Cuál es una característica de la calidad de la información?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Exactitud.', esCorrecta: true },
            { id: 'b', texto: 'Velocidad.', esCorrecta: false },
            { id: 'c', texto: 'Cantidad.', esCorrecta: false },
            { id: 'd', texto: 'Complejidad.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La exactitud garantiza que los datos reflejen la realidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué se requiere para calcular un indicador?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Planillas.', esCorrecta: false },
            { id: 'b', texto: 'Variables y fórmulas.', esCorrecta: true },
            { id: 'c', texto: 'Actividades.', esCorrecta: false },
            { id: 'd', texto: 'Diagnóstico.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. El cálculo requiere variables claras y una fórmula definida.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto: '¿Qué implica interpretar resultados?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear indicadores.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Analizar el significado de los resultados.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Diseñar actividades.', esCorrecta: false },
            { id: 'd', texto: 'Registrar datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Interpretar permite comprender el significado de los resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto: '¿Qué aporta el análisis territorial de indicadores?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear informes.', esCorrecta: false },
            { id: 'b', texto: 'Registrar actividades.', esCorrecta: false },
            { id: 'c', texto: 'Medir variables.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Comprender el contexto de los resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Correcto. Permite interpretar resultados según el contexto del territorio.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto: '¿Para qué sirve el uso de resultados?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear indicadores.', esCorrecta: false },
            { id: 'b', texto: 'Clasificar datos.', esCorrecta: false },
            { id: 'c', texto: 'Registrar información.', esCorrecta: false },
            { id: 'd', texto: 'Tomar decisiones.', esCorrecta: true },
          ],
          mensaje_correcto:
            'Correcto. Los resultados orientan la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto: '¿Qué define el plan de seguimiento?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Resultados.', esCorrecta: false },
            { id: 'b', texto: 'Cómo y cuándo evaluar.', esCorrecta: true },
            { id: 'c', texto: 'Actividades.', esCorrecta: false },
            { id: 'd', texto: 'Indicadores.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. El plan de seguimiento organiza el control de las acciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto: '¿Qué permite el análisis de acciones implementadas?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar indicadores.', esCorrecta: false },
            { id: 'b', texto: 'Registrar datos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Evaluar la efectividad de las intervenciones.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Crear estrategias.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Permite valorar el impacto de las acciones realizadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto: '¿Qué implica la evaluación del plan de acción?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar estrategias.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Medir el cumplimiento y resultados.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Registrar actividades.', esCorrecta: false },
            { id: 'd', texto: 'Crear indicadores.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Evalúa el logro de objetivos y resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto: '¿Qué se identifica en la mejora continua?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Problemas y oportunidades.', esCorrecta: true },
            { id: 'b', texto: 'Datos.', esCorrecta: false },
            { id: 'c', texto: 'Estrategias.', esCorrecta: false },
            { id: 'd', texto: 'Indicadores.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Permite identificar aspectos a mejorar o fortalecer.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto: '¿Qué se hace en la definición de acciones de mejora?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Registrar información.', esCorrecta: false },
            { id: 'b', texto: 'Evaluar resultados.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Establecer soluciones concretas.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Analizar datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Se definen acciones para mejorar el proceso.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto: '¿Qué implica el ajuste del plan de acción?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear indicadores.', esCorrecta: false },
            { id: 'b', texto: 'Incorporar mejoras al plan.', esCorrecta: true },
            { id: 'c', texto: 'Diseñar estrategias.', esCorrecta: false },
            { id: 'd', texto: 'Eliminar actividades.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Permite actualizar el plan según los resultados.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto: '¿Qué permite la articulación del proceso?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Diseñar indicadores.', esCorrecta: false },
            { id: 'b', texto: 'Registrar datos.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Integrar implementación, seguimiento y evaluación.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Separar actividades.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. Permite un proceso continuo y coherente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el resultado de usar la información en la gestión en salud?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear actividades.', esCorrecta: false },
            { id: 'b', texto: 'Diseñar indicadores.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Tomar decisiones basadas en evidencia.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Registrar datos.', esCorrecta: false },
          ],
          mensaje_correcto:
            'Correcto. La información permite decisiones fundamentadas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        'El resultado obtenido evidencia un adecuado nivel de comprensión sobre la implementación, seguimiento, análisis y mejora de las intervenciones en el entorno hogar. Se reconoce la capacidad para interpretar información, utilizar indicadores y relacionar los diferentes elementos del proceso de intervención.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
