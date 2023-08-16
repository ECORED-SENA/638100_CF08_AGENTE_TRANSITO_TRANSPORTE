<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Manual de señalización vial
    
    .row.justify-content-center
      .col-lg-2.col-md-3.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img.svg', alt='')
      .col-lg-10.col-md-9.mb-4(data-aos="fade-left")
        p El Ministerio de Transporte, como autoridad suprema de tránsito en Colombia, ha reglamentado mediante la Resolución 1885 de 2015 el 
          b “Manual de Señalización Vial, Dispositivos Uniformes para la Regulación del Tránsito en Calles, Carreteras y Ciclorrutas de Colombia”
          |, el cual es un libro técnico que cuenta con 888 páginas de las cuales se puede extractar la siguiente información sobre las señales de tránsito.

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Señales verticales
    
    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-right")
        p Estas reglamentan las limitaciones, prohibiciones, restricciones, advierten de peligros, informan acerca de rutas, direcciones, destinos y sitios de interés se clasifican de acuerdo a la función que desempeñan y pueden ser reglamentarias, preventivas, informativas y transitorias. 
      .col-lg-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img2.png', alt='')
      
    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Señales reglamentarias
    
    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-right")
        p Son 58 y su finalidad es notificar las prioridades en el uso de las vías, prohibiciones, restricciones, obligaciones y autorizaciones existentes, donde su transgresión constituye una infracción de tránsito, presentando su clasificación. En el numeral 2.2 Señales reglamentarias del Manual de señalización vial, dentro de los anexos, se pueden encontrar más información y significados de cada sigla.
        a.anexo.mb-4(:href="('https://www.mintransporte.gov.co/documentos/29/manuales-de-senalizacion-vial/')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p #[b Anexo.] Manual de Señalización Vial - 2015
      .col-lg-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img3.png', alt='')

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Tabla 2.] Señales reglamentarias y su clasificación
    .tabla-a.sin-borde.tema4.mb-5(data-aos="fade-down")
      table
        thead
          tr.bg-2
            th.col-30 Clasificación de las Señales reglamentarias 
            th Señal Reglamentaria (SR) 
        tbody
          tr
            td.text-center De prioridad
            td SR 01, SR 02.
          tr
            td.text-center Prohibición
            td SR-04, SR-06, SR-08, SR-10, SR-14, SR-14A, SR-26, SR-50.
          tr
            td.text-center Paso por Clase de Vehículos
            td SR-16,SR-18,SR-21,SR-22,SR-23,SR-24,SR-25,SR-51,SR-52,SR-53,SR-54.
          tr
            td.text-center Otras prohibiciones
            td SR-20, SR-28, SR-28A, SR-29, SR-41, SR-43, SR-47.
          tr
            td.text-center De restricción
            td SR-11, SR-12, SR-13, SR-30, SR-30A, SR-30B, SR-31, SR-32, SR-33, SR-48.
          tr
            td.text-center De obligación
            td SR-03, SR-05, SR-07, SR-09, SR-17, SR-19, SR-35, SR-36, SR-38, SR-39, SR-44, SR-45, SR-46, SR-49.
          tr
            td.text-center De autorización
            td SR-34, SR40,SR42.

    p.mb-4(data-aos="fade") A continuación se exponen en el siguiente recurso los ejemplos de cada una de las señales reglamentarias de prohibición:

    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.justify-content-center.p-4.text-center.bg-color-primario
        img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj-img1.png' style="max-width: 180px")
        h4 Señales de prohibición primer grupo
        p.mb-4 Prohibición de maniobras y giros
        .d-flex.mt-auto.justify-content-center.mb-0
          a.boton.personalizado.indicador__container(:href="obtenerLink('/downloads/ProhibicionPrimergrupo.pdf')" target="_blank" type="application/pdf" @mouseover="mostrarIndicador = false")
            span Ver señales
            .indicador--click(v-if="mostrarIndicador")
      .tarjeta.justify-content-center.p-4.text-center.bg-color-primario
        img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj-img2.png' style="max-width: 180px")
        h4 Señales de prohibición segundo grupo
        p.mb-4 Prohibición de maniobras y giros
        .d-flex.mt-auto.justify-content-center.mb-0
          a.boton.personalizado(:href="obtenerLink('/downloads/ProhibicionSegundoGrupo.pdf')" target="_blank" type="application/pdf")
            span Ver señales
      .tarjeta.justify-content-center.p-4.text-center.bg-color-primario
        img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj-img3.png' style="max-width: 180px")
        h4 Señales de prohibición tercer grupo
        p.mb-4 Otras prohibiciones relacionadas a velocidad, luces, tipo de vehículo, etc.
        .d-flex.mt-auto.justify-content-center.mb-0
          a.boton.personalizado(:href="obtenerLink('/downloads/ProhibicionTercerGrupo.pdf')" target="_blank" type="application/pdf")
            span Ver señales
      .tarjeta.justify-content-center.p-4.text-center.bg-color-primario
        img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj-img4.png' style="max-width: 190px")
        h4 Señales de prohibición cuarto grupo
        p.mb-4 Prohibición de maniobras y circulación.
        .d-flex.mt-auto.justify-content-center.mb-0
          a.boton.personalizado(:href="obtenerLink('/downloads/ProhibicionCuartoGrupo.pdf')" target="_blank" type="application/pdf")
            span Ver señales
    
    
    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Señales preventivas
    
    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-right")
        p También denominadas señales de advertencia de peligro están diseñadas para indicar previamente al conductor la existencia de riesgos o situaciones imprevistas de forma permanente o temporal presentadas en la vía o zonas adyacentes.
      .col-lg-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img4.png', alt='')
    
    p.mb-4(data-aos="fade") De acuerdo con el origen de los riesgos que previenen, las señales preventivas se clasifican en:

    .titulo-sexto.color-acento-contenido(data-aos="fade-down")
      p.mb-0 #[b Tabla 3.] Señales preventivas y su clasificación
    .tabla-a.sin-borde.tema4.mb-4(data-aos="fade-down")
      table
        thead
          tr.bg-2
            th.col-30 Clasificación de las Señales preventivas 
            th Señal Preventiva (SP)
        tbody
          tr
            td.ps-4(rowspan="2") Preventivas sobre características geométricas de la vía.
            td.ps-4 #[b De curvatura horizontal:] SP-01, SP-02, SP-03, SP-04, SP-05, SP-06, SP-07, SP-08, SP-09, SP-10, SP-69, SP-70, SP-75.
          tr
            td.ps-4 #[b Pendientes longitudinales:] SP-27, SP-27A.
          tr
            td.ps-4 Preventivas relacionadas con la superficie de rodadura.
            td.ps-4 SP-24, SP-25, SP-25A, SP-26, SP-57.
          tr
            td.ps-4 Preventivas sobre restricciones físicas de la vía.
            td.ps-4 SP-28, SP-30, SP-31, SP-32, SP-34, SP-35, SP-36, SP-38, SP-50, SP-51.
          tr
            td.ps-4 Preventivas de intersecciones con otras vías.
            td.ps-4 SP-11, SP-12, SP-13, SP-14, SP-15, SP-16, SP-17, SP-18, SP-19, SP-20, SP-21, SP-22, SP-52, SP-52a, SP-53, SP-54.
          tr
            td.ps-4 Preventivas sobre características operativas de la vía. 
            td.ps-4 SP-23, SP-29, SP-33, SP-39, SP-41, SP-43, SP-45, SP-46, SP-46ª, SP-46b, SP-47, SP-47ª, SP-47b, SP-48, SP-49, SP-55, SP-55ª, SP-56, SP-56ª, SP-59, SP-59ª, SP-59b, SP-68.
          tr
            td.ps-4 Preventivas sobre situaciones especiales. 
            td.ps-4
              span.mb-0 #[b Preventivas sobre situaciones especiales:] SP-37, SP-42.
                br
                | #[b Superficie deslizante:] SP-44.
                br
                | #[b Riesgo de accidente:] SP-67.
                br
                | #[b Proyección de gravilla:] SP-71.
                br
                | #[b Salida de vehículos de bomberos:] SP-72.
                br
                | #[b Ráfagas de viento lateral:] SP-73.
                br
                | #[b Desnivel severo:] SP-74.

    p.mb-4(data-aos="fade") A continuación puede observar la representación visual de cada una de las señales preventivas sobre características geométricas de la vía y su clasificación mencionadas en la tabla anterior.

    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.justify-content-center.p-4.text-center.bg-color-primario
        img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj2-img1.png' style="max-width: 180px")
        h4 Señales preventivas primer grupo
        p.mb-4 De curvatura horizontal
        .d-flex.mt-auto.justify-content-center.mb-0
          a.boton.personalizado.indicador__container(:href="obtenerLink('/downloads/PreventivasPrimerGrupo.pdf')" target="_blank" type="application/pdf" @mouseover="mostrarIndicador = false")
            span Ver señales
            .indicador--click(v-if="mostrarIndicador")
      .tarjeta.justify-content-center.p-4.bg-color-primario
        img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj2-img2.png' style="max-width: 180px")
        h4.text-center Señales preventivas segundo grupo
        ul.lista-ul--color.fa-ul.circulo.mb-4
          li.mb-0
            i.fas.fa-circle
            | Pendientes longitudinales.
          li.mb-0
            i.fas.fa-circle
            | Preventivas relacionadas con la superficie de rodadura.
          li.mb-0
            i.fas.fa-circle
            | Preventivas sobre restricciones  físicas de la vía.
        .d-flex.mt-auto.justify-content-center.mb-0
          a.boton.personalizado(:href="obtenerLink('/downloads/PreventivasSegundoGrupo.pdf')" target="_blank" type="application/pdf")
            span Ver señales
      .tarjeta.justify-content-center.p-4.text-center.bg-color-primario
        img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj2-img3.png' style="max-width: 180px")
        h4 Señales preventivas tercer grupo
        p.mb-4 Preventivas de Intersecciones con otras vías.
        .d-flex.mt-auto.justify-content-center.mb-0
          a.boton.personalizado(:href="obtenerLink('/downloads/PreventivasTercerGrupo.pdf')" target="_blank" type="application/pdf")
            span Ver señales
      .tarjeta.justify-content-center.p-4.bg-color-primario
        img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj2-img4.png' style="max-width: 190px")
        h4.text-center Señales preventivas cuarto grupo
        ul.lista-ul--color.fa-ul.circulo.mb-4
          li.mb-0
            i.fas.fa-circle
            | Preventivas sobre características operativas de la vía.
          li.mb-0
            i.fas.fa-circle
            | Preventivas sobre situaciones especiales.
        .d-flex.mt-auto.justify-content-center.mb-0
          a.boton.personalizado(:href="obtenerLink('/downloads/PreventivasCuartoGrupo.pdf')" target="_blank" type="application/pdf")
            span Ver señales


    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Señales informativas
    
    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-right")
        p Dan información acerca de distancias a ciudades y localidades, kilómetros de rutas, nombres de calles, lugares de interés turístico, servicios al usuario, entre otros para llegar de manera segura, simple y directa a nuestros destinos.
      .col-lg-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/img5.png', alt='')
    
    p.mb-4(data-aos="fade") A continuación se verá la representación visual de cada una de las señales informativas de distancias a ciudades y localidades.

    .row.mb-5.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta.justify-content-center.p-4.text-center.bg-color-primario.h-100
          img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj3-img1.png' style="max-width: 180px")
          h4.text-center Señales informativas primer grupo
          ul.lista-ul--color.fa-ul.circulo.mb-4
            li.mb-0
              i.fas.fa-circle
              | Direcciones hacia destinos, calles o rutas.
            li.mb-0
              i.fas.fa-circle
              | Hacia dónde conduce la vía.
            li.mb-0
              i.fas.fa-circle
              | Enlaces o empalmes con otras vías.
            li.mb-0
              i.fas.fa-circle
              | Carriles apropiados para cada destino.
            li.mb-0
              i.fas.fa-circle
              | Inicio de la salida a otras vías.
            li.mb-0
              i.fas.fa-circle
              | Distancias a que se encuentran los destinos.
            li.mb-0
              i.fas.fa-circle
              | Hito kilométrico a lo largo de la vía. 
            li.mb-0
              i.fas.fa-circle
              | Identificación de rutas y calles.
          .d-flex.mt-auto.justify-content-center.mb-0
            a.boton.personalizado.indicador__container(:href="obtenerLink('/downloads/InformativasPrimerGrupo.pdf')" target="_blank" type="application/pdf" @mouseover="mostrarIndicador = false")
              span Ver señales
              .indicador--click(v-if="mostrarIndicador")
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta.justify-content-center.text-center.p-4.bg-color-primario.h-100
          img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj3-img2.png' style="max-width: 180px")
          h4 Señales Informativas segundo grupo
          p Servicios generales.
          .d-flex.mt-auto.justify-content-center.mb-0
            a.boton.personalizado(:href="obtenerLink('/downloads/InformativasSegundoGrupo.pdf')" target="_blank" type="application/pdf")
              span Ver señales
      .col-lg-4.col-md-6.mb-3.mb-lg-0
        .tarjeta.justify-content-center.p-4.bg-color-primario.h-100
          img.mb-4.mx-auto(src='@/assets/curso/temas/t2/tarj3-img3.png' style="max-width: 180px")
          h4.text-center Señales informativas tercer grupo
          ul.lista-ul--color.fa-ul.circulo.mb-4
            li.mb-0
              i.fas.fa-circle
              | Lugares de atractivo turístico existentes en las inmediaciones de la vía.
            li.mb-0
              i.fas.fa-circle
              | Nombres de ciudades, ríos, puentes, calles, parques, lugares históricos y otros.
            li.mb-0
              i.fas.fa-circle
              | Cualquier otra información de importancia para los conductores.
          .d-flex.mt-auto.justify-content-center.mb-0
            a.boton.personalizado(:href="obtenerLink('/downloads/InformativasTercerGrupo.pdf')" target="_blank" type="application/pdf")
              span Ver señales

    .row.justify-content-center
      .col-lg-4.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t2/img6.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p Se conocen como demarcaciones la aplicación de marcas viales conformadas por líneas, flechas, símbolos y letras que se adhieren sobre el pavimento, bordillos o sardineles y estructuras de las vías de circulación o adyacentes a ellas, así como a los dispositivos que se colocan sobre la superficie de rodadura para regular, canalizar el tránsito o indicar la presencia de obstáculos.
        p A continuación, se expone la aplicación de marcas viales por líneas, flechas, símbolos, letras y su clasificación, así:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/YkheE91-VYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Manual de señalización vial - Demarcaciones






</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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
