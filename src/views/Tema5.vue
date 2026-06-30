<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Análisis y evaluación de indicadores
    .row.justify-content-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p.mb-4 El análisis y la evaluación de indicadores en el entorno hogar permiten interpretar la información obtenida durante el seguimiento de las intervenciones, con el fin de valorar los resultados alcanzados y orientar la toma de decisiones en el proceso de atención en salud.
        .row.justify-content-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            img(src='@/assets/curso/temas/tema5/img1.svg', alt='')
          .col-lg-10
            p.mb-0 Este proceso implica examinar los datos generados a partir del cálculo de indicadores, identificar tendencias, comportamientos y variaciones en los resultados. A partir de esta interpretación, es posible establecer relaciones entre las acciones implementadas y los cambios observados en las condiciones de las familias.
        p.mb-0 Para comprender cómo se aplica este proceso, es necesario reconocer los elementos que permiten analizar los datos, valorar los resultados y definir acciones de mejora durante la intervención:
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema5/img2.svg', alt='')
    .row.justify-content-center.mb-4
      .col-lg-10
         LineaTiempoD.color-acento-botones.especial.mb-4
          .row(numero="1" titulo="Análisis de indicadores")
            p.mb-4 Consiste en interpretar los datos obtenidos durante el seguimiento para reconocer comportamientos, tendencias y variaciones en los resultados. Este análisis permite comprender qué acciones funcionan y cuáles requieren ajuste.
            p.mb-0 #[b Ejemplo:] si varias familias mejoran el almacenamiento del agua, se evidencia un avance en prácticas de autocuidado.
          .row(numero="2" titulo="Evaluación de indicadores")
            p.mb-4 Corresponde a la valoración del cumplimiento de los objetivos y metas definidos para la intervención. Permite comparar los resultados esperados con los alcanzados y establecer si las acciones fueron efectivas.
            p.mb-0 #[b Ejemplo:] verificar si el 80 % de los hogares acompañados adoptó prácticas de higiene acordadas.
          .row(numero="3" titulo="Identificación de avances")
            p.mb-4 Permite reconocer los cambios positivos generados durante la intervención, a partir de los datos registrados y los resultados obtenidos. Esta identificación ayuda a mantener las acciones que han funcionado.
            p.mb-0 #[b Ejemplo:] evidenciar que más familias separan residuos y mantienen recipientes de agua limpios y protegidos.
          .row(numero="4" titulo="Reconocimiento de dificultades")
            p.mb-4 Permite detectar situaciones que limitan el cumplimiento de los objetivos, como barreras de acceso, prácticas no sostenidas o falta de recursos. Este reconocimiento orienta ajustes oportunos.
            p.mb-0 #[b Ejemplo:] identificar que algunas familias no aplican recomendaciones por falta de agua potable o recipientes adecuados.
          .row(numero="5" titulo="Definición de acciones de mejora")
            p.mb-4 Consiste en establecer ajustes a partir de los resultados analizados y evaluados. Estas acciones buscan fortalecer la intervención y responder mejor a las necesidades identificadas.
            p.mb-0 #[b Ejemplo:] programar una nueva orientación sobre higiene de alimentos cuando los resultados muestran baja adopción de esta práctica.
    p.mb-4 En conjunto, estos elementos permiten comprender que el análisis y la evaluación de indicadores no se limitan a revisar datos, sino que ayudan a interpretar los resultados de la intervención. Su aplicación facilita reconocer avances, identificar dificultades y definir acciones de mejora acordes con las condiciones del entorno hogar.
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.tarjeta.bg3
          p.mb-0 El análisis de indicadores permite comprender el comportamiento de las intervenciones y reconocer si las acciones desarrolladas generan cambios positivos en las condiciones de las familias.
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema5/img3.png', alt='')
      .col-lg-8
        p.mb-4 La lectura de los indicadores debe considerar el contexto territorial, las condiciones del hogar y las dinámicas familiares que pueden influir en los resultados. Por esta razón, los datos no se interpretan de forma aislada, sino en relación con las situaciones observadas durante el seguimiento.
        .p-4.tarjeta.bg5.mb-4
          p.mb-0 En este proceso, la información obtenida facilita identificar brechas entre lo planificado y lo alcanzado. Asimismo, permite tomar decisiones fundamentadas para mantener las acciones efectivas, corregir dificultades y fortalecer la continuidad de las intervenciones en el territorio.
        p.mb-0 La relación entre análisis y evaluación permite comprender mejor el comportamiento de las intervenciones. Para facilitar su lectura, esta relación puede organizarse en los siguientes aspectos:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img4.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Visión integral]
              p.text-center.mb-0 Permite comprender el proceso completo de intervención, desde los datos registrados hasta los resultados obtenidos.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img5.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Comprensión de resultados]
              p.text-center.mb-0 Facilita interpretar si las acciones desarrolladas responden a los objetivos y metas establecidas.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img6.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Orientación de decisiones]
              p.text-center.mb-0 Ayuda a definir ajustes oportunos con base en información clara, organizada y verificable.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img7.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0 #[b Fortalecimiento de mejoras]
              p.text-center.mb-0 Permite proponer acciones pertinentes para aumentar la efectividad de las intervenciones realizadas.
    .row.justify-content-center
      .col-lg-10
        .p-4.cajon.color-secundario
          p.mb-0 En conjunto, estos aspectos muestran que los indicadores no solo permiten medir resultados, sino también comprenderlos y utilizarlos para mejorar la intervención. A partir de esta comprensión, el cálculo de indicadores permite transformar los datos registrados en valores medibles, interpretar los resultados obtenidos y valorar el cumplimiento de las metas establecidas.
    Separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.1 Cálculo de indicadores
    p.mb-4 El cálculo de indicadores permite pasar de los datos registrados a resultados medibles que ayudan a valorar el avance de las intervenciones. Para que este proceso sea confiable, no basta con aplicar una fórmula; también se requiere revisar la calidad de la información, reconocer las variables y presentar el resultado de manera clara.
    p.mb-4 Para que el cálculo de indicadores sea comprensible, a continuación, se presentan los pasos básicos que orientan este proceso y permiten obtener resultados claros, verificables y útiles para el análisis:
    .row.justify-content-center.mb-4
      .col-lg-10
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul").mb-4
          .row(titulo="Identificar las variables")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Consiste en reconocer los datos que forman parte del indicador, especialmente el numerador y el denominador. Esta identificación permite definir qué se va a medir, sobre qué grupo se realizará el cálculo y cuál será la relación entre los datos. En el entorno hogar, este paso ayuda a evitar confusiones entre actividades realizadas, hogares atendidos y resultados obtenidos.
              p.mb-4 #[b Ejemplo 1:] número de hogares que adoptaron prácticas saludables frente al total de hogares intervenidos.
              p.mb-4 #[b Ejemplo 2:] número de familias que recibieron orientación sobre manejo de residuos frente al total de familias programadas en una vereda.
          .row(titulo="Verificar la calidad de los datos")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Implica revisar que la información esté completa, actualizada, organizada y sin inconsistencias antes de realizar el cálculo. Este paso permite confirmar que los datos registrados en planillas, formatos o instrumentos corresponden a la realidad observada durante la intervención. En el contexto colombiano, esta revisión ayuda a evitar duplicidades, omisiones o registros incompletos que puedan alterar los resultados.
              p.mb-4 #[b Ejemplo 1:] confirmar que las planillas incluyan fecha, responsable, actividad y resultado observado.
              p.mb-4 #[b Ejemplo 2:] verificar que las familias registradas como intervenidas pertenezcan al territorio priorizado y no estén repetidas en diferentes formatos.
          .row(titulo="Aplicar la fórmula establecida")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Corresponde a utilizar la operación definida para obtener el resultado del indicador, respetando las variables, la unidad de medida y el propósito de la medición. Este paso permite transformar los datos recolectados en un valor cuantificable, útil para analizar el avance de las intervenciones. En el entorno hogar, aplicar correctamente la fórmula evita interpretaciones erróneas y facilita comparar los resultados con las metas definidas.
              p.mb-4 #[b Ejemplo 1:] calcular el porcentaje de hogares con prácticas saludables: (40 / 50) × 100 = 80 %.
              p.mb-4 #[b Ejemplo 2:] calcular el porcentaje de visitas realizadas frente a las visitas programadas durante el mes.
          .row(titulo="Expresar el resultado correctamente")
            .col-md-12.mb-4.mb-md-0
              p.mb-4 Permite presentar el valor obtenido de forma clara y comprensible, según la unidad correspondiente: porcentaje, razón, tasa o número absoluto. Este paso facilita que el equipo de intervención interprete el resultado, lo compare con la meta establecida y lo utilice para orientar decisiones. En Colombia, una presentación clara del resultado favorece el seguimiento territorial y la comunicación entre actores de salud.
              p.mb-4 #[b Ejemplo 1:] indicar que el 80 % de los hogares intervenidos adoptó prácticas saludables.
              p.mb-4 #[b Ejemplo 2:] señalar que 25 de 30 familias programadas recibieron acompañamiento durante la jornada territorial.
        .p-4.bg1
          p.mb-0 El desarrollo ordenado de estos pasos permite que el cálculo de indicadores sea confiable y útil para valorar los avances de la intervención. Además, facilita comprender los resultados obtenidos, compararlos con las metas establecidas y orientar decisiones de mejora en el entorno hogar.
    p.mb-4 Para garantizar la confiabilidad del cálculo, también es importante aplicar algunos criterios básicos:
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.bg1
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span A
              p.mb-0 #[b Usar datos completos y verificados:] permite evitar errores en el resultado final del indicador.
            li 
              .lista-ol--cuadro__vineta
                span B
              p.mb-0 #[b Aplicar correctamente la fórmula:] asegura que el cálculo corresponda al indicador definido.
            li 
              .lista-ol--cuadro__vineta
                span C
              p.mb-0 #[b Mantener coherencia en las unidades de medida:] evita comparar datos expresados en formatos diferentes.
            li 
              .lista-ol--cuadro__vineta
                span D
              p.mb-0 #[b Registrar los resultados de manera clara:] facilita la consulta, el análisis y la interpretación posterior.
    .row.justify-content-center
      .col-lg-3.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema5/img8.svg', alt='')
      .col-lg-9
        p.mb-4 Estos criterios ayudan a fortalecer la precisión del cálculo y la utilidad de los resultados. De esta manera, los indicadores se convierten en una base confiable para valorar avances, reconocer dificultades y orientar acciones de mejora durante la intervención en el entorno hogar.
        .p-4.tarjeta.bg2
          .row.justify-content-center
            .col-lg-auto.d-none.d-lg-block
              img(src='@/assets/curso/temas/tema5/img9.svg', alt='')
            .col-lg-10
              p.mb-0 A partir del cálculo, se hace necesario interpretar los resultados obtenidos. Esta interpretación permite comprender el significado de los valores, relacionarlos con las metas establecidas y valorar su aporte al seguimiento de las acciones desarrolladas.
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.2 Interpretación de resultados
    p.mb-4 La interpretación de resultados permite comprender qué significan los datos obtenidos durante el seguimiento de las acciones realizadas en el hogar. No se trata solo de mirar un número, sino de entender si las actividades ayudaron a mejorar las condiciones de salud, cuidado e higiene de las familias.
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img10.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cuando se interpreta un resultado, es necesario revisar si lo planeado se cumplió y si las acciones realizadas generaron cambios visibles. Por ejemplo, se puede analizar si las familias almacenan mejor el agua, separan los residuos, aplican prácticas de higiene o mantienen los acuerdos definidos durante las visitas.
    p.mb-4 Este proceso también ayuda a reconocer qué acciones deben continuar y cuáles necesitan ajuste. Si los resultados muestran avances, se pueden fortalecer las actividades que funcionaron. Si muestran dificultades, se deben revisar las causas y proponer nuevas acciones de acompañamiento.
    p.mb-4 Para interpretar los resultados de manera clara, se deben considerar los siguientes aspectos:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Comparación con la meta]
              p.text-center.mb-0 Permite revisar si el resultado alcanzado corresponde a lo que se esperaba lograr en la intervención. En los hogares colombianos, este análisis ayuda a identificar si las acciones sobre higiene, agua segura, manejo de residuos o autocuidado cumplieron el propósito definido, o si todavía se requieren ajustes para fortalecer el acompañamiento.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img12.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Condiciones del hogar]
              p.text-center.mb-0 Ayuda a comprender cómo la vivienda, el acceso al agua, la ventilación, la higiene, la disposición de residuos o la convivencia familiar influyen en los resultados. Esta revisión permite interpretar los datos de acuerdo con la realidad de cada hogar, evitando conclusiones generales que no reconozcan las diferencias entre territorios urbanos, rurales o dispersos.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img13.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Cambios observados]
              p.text-center.mb-0 Permite reconocer si durante el seguimiento se evidencian mejoras, dificultades o situaciones que continúan igual. En el entorno hogar, este aspecto ayuda a valorar si las orientaciones brindadas se aplican en la vida cotidiana, por ejemplo, en el lavado de manos, el almacenamiento del agua o la limpieza de los espacios familiares.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img14.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Relación con las acciones realizadas]
              p.text-center.mb-0 ayuda a identificar si las actividades desarrolladas contribuyeron al cambio esperado en el hogar. Esta relación permite revisar si una visita, una orientación educativa o un acuerdo familiar generaron avances reales en las prácticas de cuidado, o si es necesario reforzar el seguimiento con nuevas estrategias de acompañamiento.
    p.mb-4 Estos aspectos permiten comprender mejor los resultados y tomar decisiones más adecuadas. Así, la información recogida durante el seguimiento se convierte en una guía para mejorar las acciones realizadas con las familias.
    p.mb-4 Cuando un indicador muestra que el 80 % de los hogares implementa prácticas saludables, este resultado debe analizarse con cuidado. Para comprenderlo mejor, se pueden revisar los siguientes puntos:
    .row.justify-content-center.mb-4
      .col-lg-6.order-2.order-lg-1
        .p-4.bg2
          ul.lista-ul--color
            li 
              i.fas.fa-certificate
              | Si el porcentaje alcanzado cumple la meta esperada.
            li 
              i.fas.fa-certificate
              | Qué prácticas saludables fueron adoptadas por las familias.
            li 
              i.fas.fa-certificate
              | Qué hogares necesitan mayor acompañamiento.
            li 
              i.fas.fa-certificate
              | Qué dificultades impidieron alcanzar mejores resultados.
            li 
              i.fas.fa-certificate
              | Qué acciones deben mantenerse, reforzarse o cambiarse.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema5/img15.svg', alt='')     
    p.mb-4 En este caso, el resultado puede considerarse favorable si se acerca a la meta definida o la supera. Sin embargo, también permite reconocer que algunos hogares pueden necesitar más orientación, visitas de seguimiento o apoyo de otros actores del territorio.
    p.mb-4 La interpretación de resultados ayuda a comprender si las acciones realizadas realmente aportan al bienestar de las familias. Además, permite reconocer avances, atender dificultades y orientar nuevas decisiones para fortalecer la intervención en los hogares colombianos.
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.tarjeta.bg3
          p.mb-0 Interpretar los resultados permite reconocer avances, identificar necesidades de apoyo y orientar decisiones que fortalezcan las acciones desarrolladas en los hogares colombianos.
    p.mb-0 A partir de esta comprensión, se hace necesario analizar los indicadores según el contexto, porque los resultados pueden variar de acuerdo con las condiciones del hogar, el acceso a servicios, las prácticas familiares y las realidades de cada territorio.
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.3 Análisis de indicadores en el contexto
    .row.justify-content-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 El análisis de indicadores en el contexto territorial permite comprender los resultados obtenidos más allá de los valores numéricos, integrando las condiciones sociales, económicas, culturales y ambientales que influyen en el comportamiento de los datos. Este enfoque amplía la comprensión de los resultados y evita interpretaciones aisladas.
        .p-4.cajon.color-secundario
          p.mb-0 Los indicadores deben analizarse considerando las particularidades del territorio, ya que factores como el acceso a servicios, las condiciones de la vivienda, las dinámicas comunitarias y las barreras sociales pueden incidir directamente en los resultados. De esta manera, un mismo valor puede tener significados distintos según el contexto en el que se presenta.
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema5/img16.svg', alt='')
    p.mb-4 A continuación, se presenta un ejemplo de comparación de indicadores entre diferentes territorios, con el fin de evidenciar las variaciones en los resultados y facilitar el análisis de las condiciones que influyen en su comportamiento.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Comparación de resultados del indicador por zona territorial
        .d-none.d-lg-block.mb-4
          ImagenInfografica.color-acento-botones
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema5/img17.svg', alt='Figura 3. Comparación de resultados del indicador por zona territorial. La figura presenta una comparación del valor del indicador en cuatro zonas territoriales. La Zona 3 muestra el resultado más alto, cercana al 90 %; le siguen la Zona 1, con cerca del 80 %; la Zona 2, con aproximadamente el 60 %, y la Zona 4, con el valor más bajo, cercano al 55 %. Esta comparación permite identificar diferencias entre territorios y orientar acciones de mejora según las condiciones de cada zona.')
        .d-block.d-lg-none
          figure
            img(src='@/assets/curso/temas/tema5/img17_1.svg', alt='Figura 3. Comparación de resultados del indicador por zona territorial. La figura presenta una comparación del valor del indicador en cuatro zonas territoriales. La Zona 3 muestra el resultado más alto, cercana al 90 %; le siguen la Zona 1, con cerca del 80 %; la Zona 2, con aproximadamente el 60 %, y la Zona 4, con el valor más bajo, cercano al 55 %. Esta comparación permite identificar diferencias entre territorios y orientar acciones de mejora según las condiciones de cada zona.')
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img18.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este análisis permite identificar diferencias entre territorios o grupos poblacionales, factores externos que afectan el cumplimiento de metas, condiciones estructurales que limitan o favorecen las intervenciones y necesidades específicas del entorno que requieren ajustes en la acción. Asimismo, el análisis territorial facilita la priorización de acciones, orientando la intervención hacia los contextos con mayores necesidades o riesgos. Esto permite optimizar recursos y enfocar los esfuerzos en poblaciones que requieren mayor atención.
    p.mb-4 Desde esta perspectiva, los indicadores no solo sirven para medir resultados, sino también para comprender mejor las condiciones del territorio. Su análisis permite reconocer dónde se requiere mayor apoyo, qué acciones deben fortalecerse y cómo orientar las intervenciones de manera más pertinente:
    .row.justify-content-center.mb-4
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img19.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Comprensión del territorio]
              p.text-center.mb-0 Permite relacionar los resultados con las condiciones sociales, económicas y ambientales que influyen en cada zona.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img20.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Pertinencia de las acciones]
              p.text-center.mb-0 Ayuda a ajustar las intervenciones según las necesidades reales identificadas en los hogares y comunidades.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img21.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Priorización de apoyos]
              p.text-center.mb-0 Facilita reconocer los territorios que requieren mayor acompañamiento, seguimiento o articulación con otros actores.
      .col-10.col-md-6.col-lg-3.mb-4.mb-md-0(data-aos="fade-right")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema5/img22.svg' alt='AvatarTop')
          .tarjeta.color-primario.shadow
            .p-4
              .row.justify-content-center.mb-3
                .col-auto
                  .py-2.px-3
                    p.mb-0.text-center #[b Mejora de las intervenciones]
              p.text-center.mb-0 Permite usar los resultados para fortalecer las acciones que funcionan y corregir aquellas que requieren ajuste.
    p.mb-0 En conjunto, estos aspectos permiten que los indicadores orienten una lectura más clara del territorio y apoyen la definición de acciones pertinentes. A partir de esta comprensión, los resultados obtenidos se convierten en insumos para tomar decisiones, priorizar recursos y fortalecer las intervenciones en salud.
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 5.4 Uso de resultados para la toma de decisiones
    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        img(src='@/assets/curso/temas/tema5/img23.png', alt='')
      .col-lg-8
        p.mb-4 El uso de los resultados obtenidos a partir de los indicadores permite orientar la toma de decisiones en el proceso de intervención en el entorno hogar, facilitando la definición de acciones ajustadas a las necesidades identificadas en el territorio. Este proceso convierte la información analizada en un insumo estratégico para la gestión de las intervenciones.
        .p-4.tarjeta.bg2
          p.mb-0 En este sentido, los resultados se interpretan como evidencia que permite valorar el avance del plan de acción, reconocer situaciones que requieren intervención prioritaria y ajustar las acciones desarrolladas. Esta interpretación favorece decisiones fundamentadas en información objetiva y contextualizada, fortaleciendo la pertinencia de las intervenciones.
    p.mb-4 Para comprender cómo los resultados apoyan la toma de decisiones, es importante reconocer algunas acciones que permiten usar la información de manera práctica durante la intervención. Estas acciones ayudan a priorizar necesidades, ajustar actividades, fortalecer logros y orientar recursos hacia los hogares o territorios que requieren mayor acompañamiento:
    .row.justify-content-center.mb-4
      .col-lg-7.order-2.order-lg-1
         LineaTiempoD.color-acento-botones.especial
          p.text-small(numero="1" titulo="Priorizar intervenciones según las necesidades identificadas")
            | Permite seleccionar las acciones más urgentes de acuerdo con los resultados obtenidos y las condiciones observadas en el territorio. En el entorno hogar, esta priorización ayuda a enfocar el acompañamiento en situaciones que afectan la salud, como manejo inadecuado de residuos, dificultades de acceso al agua o prácticas de higiene que requieren fortalecimiento.
          p.text-small(numero="2" titulo="Ajustar actividades que no generan los resultados esperados")
            | Consiste en revisar las acciones desarrolladas cuando los indicadores muestran bajo cumplimiento o pocos avances. Este ajuste permite modificar la forma de orientar, acompañar o hacer seguimiento. En los hogares, puede implicar reforzar una actividad educativa, cambiar la estrategia de comunicación o programar una nueva visita de acompañamiento.
          p.text-small(numero="3" titulo="Fortalecer acciones que evidencian impacto positivo")
            | Permite mantener y ampliar las actividades que muestran buenos resultados en el seguimiento. Cuando una intervención favorece cambios en prácticas de autocuidado, higiene o manejo del entorno, se convierte en una experiencia útil para replicar en otros hogares o territorios con necesidades similares, respetando sus condiciones y dinámicas propias.
          p.text-small(numero="4" titulo="Redirigir recursos hacia contextos con mayor necesidad")
            | Implica orientar tiempo, talento humano, materiales educativos o apoyos institucionales hacia los hogares y territorios que presentan mayores dificultades. Esta acción permite responder con mayor pertinencia a situaciones de vulnerabilidad, bajo cumplimiento o riesgo identificado, evitando distribuir esfuerzos sin considerar las necesidades reales de la población intervenida.
          p.text-small(numero="5" titulo="Definir acciones de mejora continua")
            | Consiste en establecer nuevas decisiones a partir de los resultados analizados, con el fin de fortalecer la intervención. Estas acciones permiten corregir dificultades, mantener avances y mejorar el acompañamiento. En el entorno hogar, pueden incluir nuevos acuerdos familiares, seguimiento adicional o articulación con actores del territorio.
      .col-lg-3.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        img(src='@/assets/curso/temas/tema5/img24.png', alt='')
    p.mb-4 El uso de los resultados permite tomar decisiones más pertinentes, fortalecer las acciones que funcionan y ajustar aquellas que requieren mejora, según las condiciones reales de los hogares y territorios.
    p.mb-4 De esta manera, los datos registrados se convierten en una guía para actuar, orientar los esfuerzos institucionales y responder con mayor precisión a las necesidades identificadas durante la intervención.
    .row.justify-content-center.mb-4
      .col-lg-10
        .p-4.tarjeta.bg3
          p.mb-0 Cuando un indicador muestra bajo cumplimiento, se deben revisar las causas y reforzar el acompañamiento a los hogares que lo requieren. Cuando los resultados son favorables, es posible mantener y ampliar las acciones que ayudan a mejorar las condiciones de salud y bienestar de las familias.
    p.mb-4 De esta manera, el uso estratégico de los resultados fortalece la toma de decisiones, asegurando la adaptación de las intervenciones y contribuyendo al mejoramiento progresivo de las condiciones de salud de la población. 
    .p-4.bg5
      p.mb-0 A partir de la evaluación del plan de acción, los resultados obtenidos permiten reconocer qué aspectos deben mantenerse, ajustarse o fortalecerse durante la intervención. Esta revisión orienta la toma de decisiones y prepara la implementación de acciones de mejora continua, entendidas como ajustes organizados que buscan responder mejor a las necesidades identificadas, fortalecer los avances logrados y mejorar la pertinencia de las intervenciones en salud.
</template>

<script>
export default {
  name: 'Tema5',
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
