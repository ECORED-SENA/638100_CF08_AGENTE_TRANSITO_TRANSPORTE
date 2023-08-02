<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.fondo-intro.align-items-center.py-4.pt-5
      .col-lg-12.col-12.px-lg-5.px-md-5.px-4
        .row.justify-content-center.align-items-center

          p.mb-4(data-aos="fade") Aquí comienza el estudio del componente formativo “Control del tránsito y asistencia a víctimas”, un módulo de estudio diseñado para impulsar su configuración como Agente de tránsito y transporte. Comience esta experiencia visualizando cuidadosamente el vídeo que se muestra enseguida. ¡Adelante!

          figure(data-aos="fade-down")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/EbYbDc46eZ4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
            figcaption Video. Control del tránsito y asistencia a víctimas


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
