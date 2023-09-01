<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Red vial nacional

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p La Red Vial Nacional, también llamada Sistema Nacional de Carreteras, hace referencia a la conformación de las vías (autopistas, troncales, transversales, etc.) que se integran para conectar las diferentes zonas del territorio nacional.
        p El ente encargado de determinar a qué categoría pertenecen, según parámetros técnicos y su respectiva regulación, es el Ministerio de Transporte, por medio del Instituto Nacional de Vías.
      .col-lg-4.col-md-11.col-12.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t1/img.png', alt='')
    
    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-1.p-4
          .row.align-items-center
            .col-lg-2.col-md-2.col-3.mb-3.mb-lg-0.mx-auto
              img.px-lg-3(src='@/assets/curso/temas/t1/alert.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 El Decreto 1735 de agosto de 2001 fija la Red Nacional de Carreteras a cargo de la Nación, Instituto Nacional de Vías y adopta el Plan de Expansión de la Red Nacional de Carreteras, contando también con las direcciones territoriales y empresas privadas que tienen a cargo vías en concesión
    
    p.mb-4(data-aos="fade") Entre otros aspectos, la importancia de conocer esta clasificación y su pertenencia es porque:

    .row.mb-2(data-aos="fade-down")
      .col-md-6.col-lg-3.mb-4
        .tarjeta.h-100.p-4.fondo-hover
          .num-hover
            h4 1
          p De esto dependerá la jurisdicción administrativa de las mismas.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.h-100.p-4.fondo-hover
          .num-hover
            h4 2
          p A jurisdicción administrativa hace referencia al hecho de estar a cargo del gobierno nacional, o gobierno departamental, o gobierno municipal o distritos especiales.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.h-100.p-4.fondo-hover
          .num-hover
            h4 3
          p Así mismo, también establece la colaboración que deben prestar las distintas autoridades de tránsito.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.h-100.p-4.fondo-hover
          .num-hover
            h4 4
          p Las autoridades ejercerán sus funciones en el territorio de su jurisdicción, según el artículo 57 de la ley 2197 de enero de 2022.

    p.mb-4(data-aos="fade") La red vial está compuesta por las redes primaria, secundaria y terciaria, que constituyen alrededor de 206.102 Kilómetros (km) de vías en el territorio nacional, así:

    .tarjeta.bg-slider.p-4.p-lg-5.pb-lg-3.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Red vial primaria o vías de primer orden
            p Estas vías, denominadas arterias, dan acceso a ciudades capitales de departamentos e integran las principales zonas de producción y consumo del país y de este con otros países. Están a cargo de la nación, con entidades como el Instituto Nacional de vías (INVIAS) y la Agencia Nacional de Infraestructura (ANI), suman aproximadamente 16.983 km equivalente al 6.9% del total de la red, deben estar pavimentadas y pueden tener doble calzada o calzada sencilla mayor o igual a 7.5 metros de ancho.
          .col-lg-5
            img(src='@/assets/curso/temas/t1/slide1.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Red vial secundaria o vías de segundo orden
            p Reciben el nombre de vías intermunicipales, son vías de acceso que unen cabeceras municipales entre sí o provienen de una cabecera municipal y conectan con una vía primaria. En su gran mayoría están a cargo de los departamentos, representan alrededor del 21% del total de la red que equivalen a 44.000 mm, de los cuales, en la actualidad, 10560 km se encuentran pavimentados, 21120 km se encuentran en afirmado y 12320 km se encuentran destapados. Tienen una calzada sencilla menor de 7.30 m de ancho.
          .col-lg-5
            img(src='@/assets/curso/temas/t1/slide2.png', alt='')
        .row.justify-content-center
          .col-lg-6.mb-4.mb-md-0
            h5 Red vial terciaria o de tercer orden
            p Unen cabeceras municipales con veredas o unen veredas entre sí. En su mayoría están a cargo de los municipios, pero se pueden encontrar algunas a cargo del INVIAS, de los departamentos y distritos especiales. Es la red más extensa del país con una longitud estimada entre los 142000 km y 143000 km equivalente al 69.46% de la red total (por su difícil acceso en algunos casos y por estar a cargo de los municipios no se tiene un valor exacto). Hacen parte de esta red los caminos veredales y vías privadas; tienen una calzada inferior a los seis metros de ancho, en su gran mayoría se encuentran en afirmado y tan solo 1400 km se encuentran en pavimento.
          .col-lg-5
            img(src='@/assets/curso/temas/t1/slide3.png', alt='')

    p.mb-4(data-aos="fade") En la red vial nacional se pueden catalogar y diferenciar algunos tipos de vías, de manera muy concreta. Aprópiese de las clases de vías que se enuncian y definen a continuación:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 1.] Tipos de vías en la red vial nacional de Colombia
        .tabla-a.sin-borde.tema4 
          table
            thead
              tr.bg-2
                th.col-30 Tipo de vía
                th Descripción
            tbody
              tr
                td.text-center Autopista 
                td Vía de rápida circulación, tiene por lo menos dos o más de un carril para cada sentido de circulación, con calzadas separadas.
              tr
                td.text-center Arteria 
                td Hace parte de las vías urbanas, tiene prelación (orden de prioridad) de circulación de tránsito sobre las demás vías, con excepción de las autopistas y las vías férreas.
              tr
                td.text-center Avenida 
                td Es una vía de importancia dentro de una ciudad, suelen ser más anchas que las otras calles de la ciudad, usualmente tiene doble sentido de circulación.
              tr
                td.text-center Calles
                td Vías que atraviesan la ciudad o municipio de oriente a occidente y viceversa, generalmente tienen un sentido de circulación.
              tr
                td.text-center Caminos interveredales
                td Son vías que unen el casco urbano con veredas del municipio y vías que conectan veredas entre sí.
              tr
                td.text-center Carreras
                td Vías que atraviesan la ciudad o municipio de sur a norte y viceversa, generalmente tienen un sentido de circulación.
              tr
                td.text-center Colectoras
                td Vías que dan acceso de las vías locales a las vías principales.
              tr
                td.text-center Diagonales
                td Vías que van de suroccidente a noroccidente y viceversa.
              tr
                td.text-center Transversales
                td Vías que van de noroccidente a suroriente y viceversa.
              tr
                td.text-center Troncales
                td Vías principales que conectan dos o más ciudades, aeropuertos, puertos, son vías recomendadas para transporte de carga.
              tr
                td.text-center Vías locales
                td Vías que hacen parte del sistema vial urbano, dan acceso a los barrios, son de distancias cortas.
              tr
                td.text-center Vías principales
                td Vías troncales, transversales y accesos a capitales que integran las principales zonas o centros de producción y consumo del país.
              tr
                td.text-center Vías urbanas
                td Vías que se encuentran dentro del perímetro urbano.
              tr
                td.text-center Vías rurales
                td Vías que unen el casco urbano con las veredas de un municipio.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-1.p-4
          .row.align-items-center
            .col-lg-2.col-md-2.col-3.mb-3.mb-lg-0.mx-auto
              img.px-lg-3(src='@/assets/curso/temas/t1/alert.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 En Colombia, el Ministerio de Transporte mediante Resolución 339 del 26 de febrero de 1999 Artículo 10, creó el Sistema Integral Nacional de Información de Carreteras "SINC", como un sistema público de información único nacional que ofrece toda la información correspondiente a vías a cargo de la Nación, de los departamentos, los municipios y los distritos especiales y que conformarán el inventario nacional de carreteras.

    p.mb-4(data-aos="fade") Este sistema registra cada una de las carreteras existentes identificadas por su categoría, ubicación, especificaciones, extensión, puentes, poblaciones a las que sirven, estado de las mismas, proyectos nuevos, intervenciones futuras. Presenta información acerca de inventario vial del país, proyectos viales en ejecución, cifras, entre otros.


      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
