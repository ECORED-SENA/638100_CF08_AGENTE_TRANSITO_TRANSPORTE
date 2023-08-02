<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Primeros auxilios

    p(data-aos="fade") Son aquellas técnicas y procedimientos que se llevan a cabo en el lugar donde sucede un incidente, con el propósito de ayudar a una persona que se encuentra ante una situación de emergencia o de urgencia, bien sea producto de una crisis médica, un accidente en el hogar, en el trabajo o en la vía pública; es importante conocer cómo actuar y cómo reaccionar oportunamente brindando la asistencia necesaria para garantizar la preservación la vida de las personas afectadas, esta atención minimizará la gravedad de los riesgos y posibles consecuencias a la salud de la víctima.
    p.mb-4(data-aos="fade") Además de lo anterior, se debe diferenciar una situación de emergencia de una urgencia:

    .row.justify-content-center 
      .col-lg-6.col-md-10.mb-4(data-aos="fade-right") 
        .bg-3.h-100
          img(src='@/assets/curso/temas/t5/tarj-img1.png', alt='')
          .p-4
            h5 Emergencia
            p.mb-0 Es un incidente donde la salud de la víctima se encuentra en inminente peligro y riesgo de muerte, donde se requiere atención inmediata.
      .col-lg-6.col-md-10.mb-4(data-aos="fade-left") 
        .bg-3.h-100
          img(src='@/assets/curso/temas/t5/tarj-img2.png', alt='')
          .p-4
            h5 Urgencia
            p.mb-0 Situación donde hay riesgos y la salud puede empeorar y convertirse en una emergencia; algunas se pueden tratar con primeros auxilios básicos sin necesidad de maniobras más especializadas y otras se pueden resolver mientras llegan los profesionales de la salud.

    .row.justify-content-center 
      .col-lg-8.mb-4(data-aos="fade-right") 
        p Generalmente se considera que solo el personal de servicio médico, cruz roja, defensa civil, atención de desastres, etc., son quienes deben enfrentar estas situaciones; si bien ellos intervienen en estos incidentes, son las personas del común quienes están generalmente presenciando estas situaciones, bien sea familiares, transeúntes, compañeros de trabajo, de estudio y no poseen la capacitación, ni el conocimiento adecuado para enfrentar dicha situación; sin embargo, todas las personas como ciudadanos que somos tenemos la responsabilidad y obligación de auxiliar a la víctima, de hecho la omisión puede ser castigada de acuerdo al Código Penal Colombiano, pues en su artículo 152 habla de la Omisión de Medidas de socorro y asistencia humanitaria, el cual textualmente dice lo siguiente:
        .bloque-texto-d.color-primario.p-4.pt-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p.mb-0 El que con ocasión y en desarrollo de…. Y estando obligado a prestarlas, omita las medidas de socorro y asistencia humanitarias a favor de las personas protegidas, incurrirá en prisión de (48) a (90) meses y multas de (66.66) a (150) salarios mínimos legales mensuales vigentes.
            i.fas.fa-quote-right
      .col-lg-4.col-md-10.mb-4(data-aos="fade-left") 
        img(src='@/assets/curso/temas/t5/img1.png', alt='')

    p.mb-4(data-aos="fade") Es decir, donde las intervenciones en situaciones de emergencia están contempladas como deber y conducta solidaria por parte de los ciudadanos, es importante tener conocimientos en atención básica y primeros auxilios, ya que de ellos dependerá la evolución favorable o no en la salud de la víctima o la persona a ser auxiliada.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1.pe-lg-0
              img.px-lg-2(src="@/assets/curso/temas/t5/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Código Penal Artículo 152
                  p.text-small.mb-0 Dichos aspectos están contenidos en el Código Penal Colombiano en su artículo 152 y los puede consultar en la siguiente página
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://leyes.co/codigo_penal/152.htm#&#58;~&#58;text=El%20que%2C%20con%20ocasi%C3%B3n%20y,seis%20&#40;66.66&#41;%20a%20ciento%20cincuenta')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link

    p(data-aos="fade") Ahora bien, a la hora de brindar los primeros auxilios se debe tener como objetivo claro la preservación de la vida, tratando de evitar posibles complicaciones físicas y psicológicas, garantizando el traslado del herido o lesionado al centro asistencial.
    p.mb-4(data-aos="fade") Algunos aspectos relevantes que debe tener en cuenta antes de atender a una persona que requiere los primeros auxilios son los presentados en el siguiente video:

    figure(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3D2UEF-Y-yo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Atención a víctimas con primeros auxilios


    Separador

    #t_5_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.1 Características

    .row.justify-content-center 
      .col-lg-4.col-md-10.mb-4(data-aos="fade-right") 
        img(src='@/assets/curso/temas/t5/img2.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left") 
        p Los primeros auxilios se convierten en la diferencia entre la vida y la muerte, de la oportuna, rápida y adecuada prestación dependerá la vida de una persona, su objetivo y característica principal es conservar o preservar la vida del ser humano. En la atención de los primeros auxilios en la vía, es muy importante que se delimite y se señalice la zona, para que los cuerpos de ayuda o los profesionales de la salud y otros cuerpos de apoyo tengan la claridad de donde deben llegar a apoyar.
        .bg-1.p-4
          p.mb-0 Se debe evaluar la situación y observar los riesgos que pueden existir en el lugar del accidente, tanto para el socorrista y los ocupantes del vehículo, como para los que se encuentran en el exterior, los posibles peligros que el propio vehículo puede producir, como son: la inestabilidad del mismo (por lo cual una de las primeras acciones será colocar el freno de mano, de este modo se evitará un desplazamiento que puede generar más problemas) pérdida de combustible, fuego, vidrios rotos, etc.

    p.mb-4(data-aos="fade") #[b La señalización], son esas ayudas que nos permitirán hacer posible la visualización del accidente y que van a alertar a otros usuarios de la vía de la situación de emergencia que se está presentando, para que tomen las medidas pertinentes. Existen varios tipos de señalización que son las que se exponen a continuación:

    .row.fondo-1.align-items-center.py-4.pt-5
      .col-lg-12.col-12.px-lg-5.px-md-5.px-4
        .row.justify-content-center.align-items-center
          
          .col-lg-5.col-md-10.mb-4(data-aos="fade-right") 
            img(src='@/assets/curso/temas/t5/img3.svg', alt='')
          .col-lg-7.mb-4(data-aos="fade-left") 
            .bg-acento-contenido.p-2.mb-3
              h4.text-white.text-center.mb-0 Tipos de señalización
            .tarjeta.bg-white.p-3.mb-3
              .row.align-items-center.justify-content-center
                .col-lg-2.col-md-3
                  img(src='@/assets/curso/temas/t5/ico1.svg', alt='')
                .col-lg-10.col-md-9
                  h5.mb-1 Encendido de luces
                  p Encender las luces de emergencia del vehículo, independientemente si es de día o noche, especialmente si hay poca visibilidad, se deben mantener encendidas, ya que serán luces de seguridad auxiliar que otros conductores podrán ver y adicionalmente indicar que algo está sucediendo.
            .tarjeta.bg-white.p-3.mb-3
              .row.align-items-center.justify-content-center
                .col-lg-2.col-md-3
                  img(src='@/assets/curso/temas/t5/ico2.svg', alt='')
                .col-lg-10.col-md-9
                  h5.mb-1 Chaleco reflectivo 
                  p Este artículo es obligatorio y hace parte del kit de carreteras que debe llevar todo vehículo que transite el territorio colombiano, el llevar el chaleco reflectivo dentro del vehículo puede ser de utilidad para hacer más visible a la persona que lo lleve puesto.
            .tarjeta.bg-white.p-3.mb-3
              .row.align-items-center.justify-content-center
                .col-lg-2.col-md-3
                  img(src='@/assets/curso/temas/t5/ico3.svg', alt='')
                .col-lg-10.col-md-9
                  h5.mb-1 Triángulos o conos de seguridad 
                  p Los triángulos son de uso obligatorio y fundamentales para la señalización del lugar del accidente, estos hacen parte del kit de carretera y consiste en dos señales con forma triangular o los conos ubicados a 30 metros de las partes delanteras y traseras del vehículo involucrado.


    Separador

    #t_5_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.2 Atención básica y procedimientos

    .row.justify-content-center 
      .col-lg-8.mb-4(data-aos="fade-right") 
        p Es la atención primaria que recibe un herido o lesionado en lugar del incidente y es la ayuda elemental que se brinda mientras llegan los profesionales especializados en el manejo de emergencia y atención a víctimas.
        p Existen unos aspectos importantes y esenciales que se deben tener en cuenta en el momento de brindar los primeros auxilios, luego de evaluar la zona como ya se mencionó en un tema anterior, es momento de auxiliar a la víctima o a las víctimas, por lo cual, se recomienda prestar mucha atención a los puntos que se describen a continuación, en caso de que sea usted quien se encuentre en la zona en el momento y deba auxiliarlos, estos son:
      .col-lg-4.col-md-10.mb-4(data-aos="fade-left") 
        img(src='@/assets/curso/temas/t5/img4.png', alt='')

    .tarjeta.bg-slider.p-4.p-lg-5.pb-lg-3.mb-5(data-aos="fade-down")
      SlyderA(tipo="b")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Ubique a la víctima en un lugar seguro, lo primordial es evitar movilizarla, pero si el herido se encuentra en peligro de muerte como atrapamiento, asfixia, electrocución, inundación, incendio y urge su traslado debe realizarse de la manera más cuidadosa que se pueda, evitando que el cuerpo se mueva lo menos posible.
          .col-md-5
            img(src='@/assets/curso/temas/t5/slide1.png', alt='')
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Una vez ubicada la víctima en un lugar o posición segura, debe verificar su estado general, si se encuentra alerta y consciente, se le pueden formular preguntas sencillas cómo: ¿Me escucha? ¿Cómo se siente? ¿En qué áreas tiene dolor?, tranquilizar al herido, decirle que ya tiene comunicación con los servicios de emergencia, se debe tratar de mantenerlo despierto, hablar en con tono de voz alto y claro para que la víctima entienda lo que se le está indicando.
          .col-md-5
            img(src='@/assets/curso/temas/t5/slide2.png', alt='')
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Confirmar sí está respirando o si hay objetos extraños que estén obstruyendo las vías respiratorias o exista otro factor que no le está permitiendo respirar, en ese caso deberá ponerse de rodillas, colocar la mano en la frente de la víctima e inclinar cuidadosamente la cabeza hacia atrás, así la boca del lesionado se abrirá y se podrá observar si hay algo que está obstruyendo la respiración de ser así y los medios se lo permiten proceda a extraerlo.
          .col-md-5
            img(src='@/assets/curso/temas/t5/slide3.png', alt='')
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Revisar si tiene signos vitales, si están débiles (puede estar presentando un shock) o si no hay (puede estar presentando un paro cardiaco).
          .col-md-5
            img(src='@/assets/curso/temas/t5/slide4.png', alt='')
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Revise si hay herida en el tórax deberá cubrirla, si presume que la víctima tiene fractura o lesiones en las costillas, cabeza, espalda, debe inmovilizar al herido, pero para ello debe contar con la ayuda especializada, ya que este tipo de fracturas cuentan con sus propias técnicas de inmovilización
          .col-md-5
            img(src='@/assets/curso/temas/t5/slide5.png', alt='')
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Una vez evaluado el estado de conciencia del herido, solicítele que mueva cada una de las extremidades para chequear si tiene sensibilidad y movimiento.
          .col-md-5
            img(src='@/assets/curso/temas/t5/slide6.png', alt='')
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Observe si presenta hemorragias externas que signifiquen una importante pérdida de sangre y que pongan en  riesgo la salud del herido; por ejemplo, si hay una arteria que ha sufrido una lesión el herido podría desangrarse por lo cual el socorrista deberá mantener presión sobre el lugar que está presentando la hemorragia haciendo uso de una tela limpia y evitar sobre todo que el herido se vea expuesto a nuevas lesiones o posibles infecciones.
          .col-md-5
            img(src='@/assets/curso/temas/t5/slide7.png', alt='')
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            p Trate de mantener la temperatura corporal de la víctima y no suministre medicamentos, líquidos ni alimentos  hasta no recibir la debida autorización médica.
          .col-md-5
            img(src='@/assets/curso/temas/t5/slide8.png', alt='')

    p.mb-4(data-aos="fade") De igual manera, es importante apoyarse en las personas presentes y especialmente si tienen conocimientos en primeros auxilios, solicitar su colaboración y repartir tareas si se determina que la emergencia es muy grave o hay varios heridos que requieren atención inmediata; se debe dar prioridad a las víctimas llevando a cabo el siguiente orden:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg.col-md-4.mb-3.mb-lg-0
        .tarjeta.bg-3.p-4.text-center.h-100
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj2-img1.svg', alt='' style="width: 140px;")
          h4 Primero
          p.mb-0 A las personas que no presentan señales de vida o cuyos signos vitales están muy débiles.
      .col-lg.col-md-4.mb-3.mb-lg-0
        .tarjeta.bg-3.p-4.text-center.h-100
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj2-img2.svg', alt='' style="width: 140px;")
          h4 Segundo
          p.mb-0 A las que presentan hemorragia severa.    
      .col-lg.col-md-4.mb-3.mb-lg-0
        .tarjeta.bg-3.p-4.text-center.h-100
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj2-img3.svg', alt='' style="width: 140px;")
          h4 Tercero
          p.mb-0 A los que presentan quemaduras graves.   
      .col-lg.col-md-4.mb-3.mb-lg-0
        .tarjeta.bg-3.p-4.text-center.h-100
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj2-img4.svg', alt='' style="width: 140px;")
          h4 Cuarto
          p.mb-0 A los que presentan fracturas.
      .col-lg.col-md-4.mb-3.mb-lg-0
        .tarjeta.bg-3.p-4.text-center.h-100
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj2-img5.svg', alt='' style="width: 140px;")
          h4 Quinto
          p.mb-0 A los que presentan heridas leves o superficiales.


    Separador

    #t_5_3
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.3 Características de los escenarios

    .row.justify-content-center 
      .col-lg-6.col-md-10.mb-4(data-aos="fade-right") 
        img(src='@/assets/curso/temas/t5/img5.png', alt='')
      .col-lg-6.mb-4(data-aos="fade-left") 
        p Las características de escenarios que se encuentran en eventos de tránsito, son la confluencia de una serie de elementos que están distorsionados, salidos de contexto y pueden generar caos, ya que se puede encontrar actores viales como: personas observando, heridos, personal de primeros auxilios, autoridades, etc. además de daños, elementos retorcidos, fuego, entre otros, que generan un ambiente de confusión. Es por esto que se debe tener claridad en los procedimientos a seguir, con el fin de resolver de la mejor manera las consecuencias en estos escenarios de accidentes de tránsito y transporte, con las mejores condiciones de seguridad posibles.
        p En este punto se ahondará en el tema del procedimiento organizativo, pues lo relacionado con la asistencia ya han sido abordadas en los procedimientos de primeros auxilios vistos anteriormente; por lo que se debe realizar la valoración de la escena y para ello, hay que tener en cuenta lo expuesto en la siguiente tabla:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido
        p.mb-0 #[b Tabla 7.] Mecanismo lesional
      .tabla-a.sin-borde.tema4 
        table
          thead
            tr.bg-2
              th.col-30 TIPO MECANISMO
              th VALORACIÓN
              th SOSPECHA DE LESION
          tbody
            tr
              td.text-center COLISIÓN
              td Víctimas mortales.
              td Se debe presumir que los demás pacientes están graves, debido a la energía cinética generada en el choque.
            tr
              td.text-center CHOQUE FRONTAL
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Revisar araña de parabrisas.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    span.mb-0 Deformaciones en el volante, cinturón, #[em airbag].
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Deformación de la cabina.
              td Trauma facial y cervical.
            tr
              td.text-center CHOQUE FRONTAL CON UNA TRAYECTORIA ASCENDENTE
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Revisar araña de parabrisas.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    span.mb-0 Deformaciones en el volante, cinturón, #[em airbag].
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Deformación de la cabina.
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Trauma cráneo encefálico.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Lesión cervical.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Neumotórax, hemotorax.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Contusión miocardio.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Trauma abdominal.
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Daños diafragma y aorta.
            tr
              td.text-center CHOQUE FRONTAL CON UNA TRAYECTORIA DESCENDENTE
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Revisar araña parabrisas.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Deformaciones en el volante.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Deformidad en las salpicaderas. Vehículo.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    span.mb-0 Deformidad en pedales, cinturón, #[em airbag].
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Deformación de la cabina.
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Trauma cráneo encefálico.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Lesión cervical.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Daños en miembros inferiores y cadera.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Neumotórax, hemotorax.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Contusión miocardio.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Trauma abdominal.
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Daños diafragma y aorta.
            tr
              td.text-center CHOQUE LATERAL
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    span.mb-0 Revisar daños en vidrios laterales, cinturón, #[em airbag].
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Deformación de la cabina.
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Trauma cráneo encefálico.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Lesión cervical.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Daños en miembros inferiores y cadera.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Neumotórax, hemotorax.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Ruptura de hígado o bazo.
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Daños tórax.
            tr
              td.text-center CHOQUE POR ALCANCE
              td
                ul.lista-ul--color.fa-ul
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    span.mb-0 Revisar altura en reposacabezas, cinturón, #[em airbag], cabina.
              td Lesión cervical.
            tr
              td.text-center EXPULSIÓN FUERA DEL VEHÍCULO
              td
              td Posibilidad de todo tipo de daños por mecanismos traumáticos y alta posibilidad de muerte.
            tr
              td.text-center ACCIDENTE MOTOCICLETA
              td
                ul.lista-ul--color.fa-ul
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Revisar lesiones que produce la propia motocicleta contra el objeto que se choca y su recorrido.
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Posibilidad de todo tipo de daños por mecanismos traumáticos.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Quemaduras por la fricción.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Fracturas miembros superiores e inferiores.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Traumas de tórax y abdominal.
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Alta posibilidad de muerte.
            tr
              td.text-center ATROPELLAMIENTO PRIMERA FASE
              td Deformidad de parachoques.
              td Trauma en miembros inferiores.
            tr
              td.text-center ATROPELLAMIENTO SEGUNDA FASE
              td Deformidad de capó y daño parabrisas.
              td Trauma cráneo encefálico.<br>Traumas de tórax y abdominal.
            tr
              td.text-center ATROPELLAMIENTO TERCERA FASE
              td Deformidad de capó y daño parabrisas.
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Posibilidad de todo tipo de daños por mecanismos traumáticos.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Efecto látigo en el organismo genera alta transferencia de energía, generando lesiones graves.
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Alta posibilidad de muerte
            tr
              td.text-center CAÍDA DE ALTURAS
              td Revisar altura y lugar de caída.
              td
                ul.lista-ul--color.fa-ul
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Posibilidad de todo tipo de daños por mecanismos traumáticos.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Trauma cráneo encefálico.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Traumas pelvis.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Fracturas miembros superiores e inferiores.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Traumas de tórax y abdominal.
                  li.mb-1
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Lesiones columna y medular.
                  li
                    <i class="fas fa-check" style="color:#F88F05"></i>
                    | Alta posibilidad de muerte.


    p.mb-4(data-aos="fade") Para la atención de emergencias es importante contar con los elementos de protección personal que el sistema de seguridad y salud en el trabajo recomienda, según sea el caso, los elementos deben proteger el cuerpo del rescatista de cualquier riesgo que se pueda presentar, algunos de estos elementos son:

    .tarjeta.bg-1.p-4(data-aos="fade-down")
      .row.align-items-center 
        .col-lg-4
          img(src='@/assets/curso/temas/t5/img6.png', alt='')
        .col-lg-8
          ul.lista-ul--color.fa-ul.circulo
            li.mb-3 
              i.fas.fa-circle
              | Cascos de seguridad con cinta para ajustarlo, que no se derritan y con aislamiento térmico, estos protegerán la cabeza de golpes por caída de material, salpicadura de contaminantes, entre otros.
            li.mb-3 
              i.fas.fa-circle
              | Caretas para cara y ojos, gafas protectoras, tapabocas con filtro que protegerán de salpicaduras, gases, vapores, producidos por la presencia de sustancias químicas.
            li.mb-3 
              i.fas.fa-circle
              | Protectores auditivos como tapa oídos o tapones que protegerán los oídos de ruidos fuertes.
            li.mb-3 
              i.fas.fa-circle
              | Guantes de seguridad que protegerán las manos y brazos de cortes, altas temperaturas, descargas eléctricas.
            li.mb-3 
              i.fas.fa-circle
              | Botas de seguridad con puntera protectora con suela de goma que protegerá el pie de golpes por caída de objetos, descargas eléctricas.
            li.mb-3 
              i.fas.fa-circle
              | Overoles que protegerán el cuerpo de temperaturas altas, salpicadura de productos contaminantes.
            li 
              i.fas.fa-circle
              | Deben contar con chaleco de brigadista, linterna, silbatos, radioteléfonos.


    Separador

    #t_5_4
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.4 Aseguramiento del lugar

    .row.justify-content-center 
      .col-lg-8.mb-4(data-aos="fade-right") 
        p Dentro de los protocolos de emergencia es fundamental la preservación y el cuidado inicial de la escena y los peligros que en lugar se puedan presentar al momento de brindar los primeros auxilios, por lo que es primordial realizar el debido aseguramiento de la escena teniendo en cuenta las medidas de precaución, delimitación y señalización del área donde se está atendiendo la contingencia, buscando con esto tener el control absoluto del lugar del acontecimiento y evitar así que se presenten efectos secundarios al personal que esté prestando sus servicio en atención a la emergencia, a las víctimas involucradas o a las personas que se encuentran cerca de la escena.
        p Previo a cualquier intervención en el área de emergencia, viene la valoración que debe tener en cuenta los siguientes puntos claves:
      .col-lg-4.col-md-10.mb-4(data-aos="fade-left") 
        img(src='@/assets/curso/temas/t5/img7.png', alt='')

    .row.mb-2(data-aos="fade-down")
      .col-md-6.col-lg-3.mb-4
        .tarjeta.h-100.p-4.fondo-hover2.text-center
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj3-img1.svg', alt='' style="width: 110px;")
          h4 Control del tráfico
          p.mb-0 Se debe realizar el respectivo control de tráfico antes de la intervención para minimizar los riesgos de exposición a un nuevo accidente.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.h-100.p-4.fondo-hover2.text-center
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj3-img2.svg', alt='' style="width: 110px;")
          h4 Condiciones de vehículos
          p.mb-0 Se deben verificar las condiciones de los vehículos involucrados, corroborando la inestabilidad de los mismos o si existen riesgos de incendio por derrame de combustible.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.h-100.p-4.fondo-hover2.text-center
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj3-img3.svg', alt='' style="width: 110px;")
          h4 Valorar la escena
          p.mb-0 Se debe valorar si en la escena está implicado materiales peligrosos como por ejemplo gases inflamables que puedan provocar una emergencia mayor.
      .col-md-6.col-lg-3.mb-4
        .tarjeta.h-100.p-4.fondo-hover2.text-center
          img.mx-auto.mb-3(src='@/assets/curso/temas/t5/tarj3-img4.svg', alt='' style="width: 110px;")
          h4 Evaluar estructuras
          p.mb-0 Se deben evaluar las estructuras eléctricas de alta tensión que puedan tener influencia en el área de emergencia.

    p.mb-4(data-aos="fade") Una vez se efectué la inspección y reconocimiento visual de la escena y antes de proceder a intervenir en el accidente, se transmitirá a la central de comunicaciones o emergencias la siguiente información:

    .row.justify-content-center
      .col-lg-5.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img8.png', alt='')
      .col-lg-7.mb-4(data-aos="fade-left")
        .tarjeta.bg-color-primario.p-4.py-lg-3
          ul.lista-ul--color.fa-ul.circulo.mb-0
            li.mb-1
              i.fas.fa-circle
              | Ubicación exacta del accidente.
            li.mb-1
              i.fas.fa-circle
              | Número de víctimas o involucrados en la emergencia.
            li.mb-1
              i.fas.fa-circle
              | Mecanismo lesional; es decir, evaluar si hay víctimas mortales, si fue colisión o choque frontal, choque lateral, embestida, si se presentó expulsión de los pasajeros fuera de los vehículos, si fue un accidente que involucra motociclistas o ciclistas, si se presentó atropello de peatón o precipitación de vehículos, entre otras otros.
            li.mb-0
              i.fas.fa-circle
              | Riesgos secundarios por exposición en la escena.

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p De acuerdo a lo planteado anteriormente, cuando se realice la identificación del mecanismo lesional presente en la escena, se deberá valorar los parámetros que intervienen en el mecanismo, como estado del vehículo y de acuerdo al mecanismo y evaluación de los factores analizados se plantea la sospecha de lesiones en los involucrados permitiendo encaminar los primeros auxilios hacia las necesidades del paciente.  
        p La adecuada señalización del área de emergencia es fundamental para garantizar el alistamiento de la escena, evitando y controlando que los espectadores intervengan o generen demora en las acciones de primeros auxilios, así mismo evitar nuevos accidentes o mayores afectaciones en la escena existente, dando un mayor acceso al personal que atenderá la emergencia que de acuerdo al tipo de accidente deben valorar los siguientes parámetros:    
      .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img9.png', alt='')

    .row.fondo-t5.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-md-5.px-4
        .row.justify-content-center.align-items-center

          .d-md-block.d-none(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Valoración de la escena, según el tipo de accidente
            figure
              img(src='@/assets/curso/temas/t5/fig2-pc.svg', alt='Diagrama que expone los tres tipos de accidentes: accidente en vía pública, intervenciones en domicilio y enfermedad en vía pública. En los tres casos se vincula la valoración de condiciones, ubicación, riesgos, entre otros.')
          .d-block.d-md-none.px-4(data-aos="fade-down")
            .titulo-sexto.color-acento-contenido
              p.mb-0 #[b Figura 2.] Valoración de la escena, según el tipo de accidente
            figure
              img(src='@/assets/curso/temas/t5/fig2-mob.svg', alt='Diagrama que expone los tres tipos de accidentes: accidente en vía pública, intervenciones en domicilio y enfermedad en vía pública. En los tres casos se vincula la valoración de condiciones, ubicación, riesgos, entre otros.')


    Separador

    #t_5_5
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.5 Evaluar víctimas

    .row.justify-content-center.mb-2
      .col-lg-8.mb-4(data-aos="fade-right")
        .tarjeta.bg-1.p-4.h-100
          p Es muy importante revisar el estado y nivel de conciencia como parte de las condiciones del paciente en los accidentes de tránsito, realizando una exploración neurológica lo cual es llamado técnicas de evaluación neurológica manual, donde se revisa: 
          ul.lista-ul.mb-0
            li.mb-0 
              i.fas.fa-check
              span.fw-bold.mb-0 La apertura de ojos frente a estímulos. 
            li.mb-0 
              i.fas.fa-check
              span.fw-bold.mb-0 Las respuestas verbales. 
            li.mb-0 
              i.fas.fa-check
              span.fw-bold.mb-0 La posición de los ojos cuando este en reposo. 
            li.mb-0 
              i.fas.fa-check
              span.fw-bold.mb-0 La dilatación de la pupila frente a estímulos como la luz. 
            li.mb-0 
              i.fas.fa-check
              span.fw-bold.mb-0 La respuesta de sus extremidades frente a los estímulos, etc.                        
      .col-lg-4.col-md-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img10.png', alt='')     

    p.mb-4(data-aos="fade") Esto debe realizarse en varias ocasiones para detectar cambios en su estado de conciencia, en adición debe hacerse como se describe a continuación: 

    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IGdW2S0WMJw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Detección de cambios en el paciente

    p.mb-5(data-aos="fade") Luego de la evaluación anterior es muy importante definir las condiciones del paciente, ya que esta permite de manera preventiva reducir los riesgos y minimizar posibles errores que se puedan generar en el proceso de asistencia médica. Estas se pueden clasificar de la siguiente manera: 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Condiciones del paciente

    p.mb-4(data-aos="fade") Estas se pueden clasificar de la siguiente manera:

    SlyderF.mb-4(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj4-img1.png')
        .p-4
          h5.mb-1 Condición indeterminada
          p.mb-0 Esta se presenta cuando el paciente se encuentra en espera de una adecuada evaluación médica.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj4-img2.png')
        .p-4
          h5.mb-1 Condición buena
          p.mb-0 Una vez se realiza la evaluación se determina que los signos vitales están estables y están dentro de los parámetros y de los límites normales. En esta condición, generalmente el paciente se encuentra consciente y en general en un estado de comodidad.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj4-img3.png')
        .p-4
          h5.mb-1 Condición regular
          p.mb-0 En esta condición los signos vitales del paciente son estables y se registran dentro de los parámetros normales, al igual que en la condición anterior el paciente se encuentra en estado consciente, pero se siente incómodo, a pesar que los indicadores de su condición sean favorables.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj4-img4.png')
        .p-4
          h5.mb-1 Condición grave
          p.mb-0 En este caso, los signos vitales son inestables y están fuera de los parámetros normales, se puede observar que el paciente se encuentra gravemente enfermo y sus indicadores de condición son cuestionables.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj4-img5.png')
        .p-4
          h5.mb-1 Condición crítica
          p.mb-0 En este estado los signos vitales son inestables y están fuera de los parámetros o límites normales. Se puede dar la condición en que el paciente esté inconsciente y los indicadores de su condición sean muy desfavorables.

    p.mb-5(data-aos="fade") Además, existen algunas características para determinar las condiciones generales del paciente, basados en las facies o expresiones de la cara, que se pueden evidenciar en un examen físico general, pues orienta a ciertos rasgos característicos de alguna enfermedad determinada, entre las cuales se encuentran:

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Facies o expresiones de la cara

    SlyderF.mb-4(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img1.png')
        .p-4
          h5.mb-1 Facie acromegálica
          p.mb-0 Se caracteriza por prominencia de la mandíbula, crecimiento de huesos y tejidos blandos, lengua grande. Esta condición se da en pacientes con tumores hipofisarios debido a hormonas de crecimiento.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img2.png')
        .p-4
          h5.mb-1 Facie cushingoide
          p.mb-0Una vez se realiza la evaluación se determina que los signos vitales están estables y están dentro de los parámetros y de los límites normales. En esta condición, generalmente el paciente se encuentra consciente y en general en un estado de comodidad.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img3.png')
        .p-4
          h5.mb-1 Facie hipertiroidia
          p.mb-0 Mirada expresiva por retracción del párpado superior; la piel se aprecia fina y húmeda. Se asocia a un exceso de hormonas tiroideas.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img4.png')
        .p-4
          h5.mb-1 Facie hipotiroidia o mixedematosa
          p.mb-0 Destaca la poca expresividad del rostro, asociado a déficit de hormona tiroidea.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img5.png')
        .p-4
          h5.mb-1 Facie hipocrática
          p.mb-0 En enfermedades como peritonitis o shock (colapso circulatorio). Se caracteriza por un perfil enjuto (delgado), con ojos hundidos, ojeras, palidez y sudor frío.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img6.png')
        .p-4
          h5.mb-1 Facie mongólica
          p.mb-0 Facie del síndrome de Down.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img7.png')
        .p-4
          h5.mb-1 Facie parkinsoniana
          p.mb-0 Se ve en pacientes con enfermedad de Parkinson. 
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img8.png')
        .p-4
          h5.mb-1 Facie febril
          p.mb-0 Se caracteriza por rubor en las mejillas, ojos brillantes.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj5-img9.png')
        .p-4
          h5.mb-1 Facie mitralica
          p.mb-0 Las mejillas se presentan con un rubor cianótico.

    p.mb-4(data-aos="fade") Se debe incluir en esta serie de procedimientos una valoración global del estado del paciente:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .d-md-block.d-none
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 3.] Valoración global del estado del paciente
          figure
            img(src='@/assets/curso/temas/t5/fig3-pc.svg', alt='Esquema que señala los procedimientos en la valoración global de un paciente: la valoración global determina el grado de lesiones, la valoración primaria incluye valoración y observación de riesgos del paciente y, finalmente, la valoración secundaria vincula comunicación e intercambio de información con el paciente.')
        .d-block.d-md-none
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 3.] Valoración global del estado del paciente
          figure
            img(src='@/assets/curso/temas/t5/fig3-mob.svg', alt='Esquema que señala los procedimientos en la valoración global de un paciente: la valoración global determina el grado de lesiones, la valoración primaria incluye valoración y observación de riesgos del paciente y, finalmente, la valoración secundaria vincula comunicación e intercambio de información con el paciente.')
    
    p.mb-5(data-aos="fade") Uno de los elementos más importantes en este momento del proceso es conocer el estado actual del paciente por lo que es importante conocer exactamente cómo se encuentra, por lo que se le hace una revisión de pies a cabeza, la cual se describe a continuación:

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Valoración secundaria del paciente     

    p.mb-4(data-aos="fade") Uno de los elementos más importantes en este momento del proceso es conocer el estado actual del paciente por lo que es importante conocer exactamente cómo se encuentra, por lo que se le hace una revisión de pies a cabeza, la cual se describe a continuación:

    .row.justify-content-center.mb-3
      .col-lg-6.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img11.svg', alt='')
      .col-lg-6.mb-4(data-aos="fade-left")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="1. Cabeza")
            p.mb-0 Se revisan heridas o contusiones debajo del cabello y la cara, hemorragias, sangrado por los oídos, lesiones en los ojos y aspecto general del rostro.
          .row(titulo="2. Cuello")
            p.mb-0 Tocarlo con suavidad, en caso de tener que movilizar a los pacientes se tiene que mantener en el mismo sentido de la cabeza y tronco, revisar pulso carotideo y aflojar las prendas de vestir.
          .row(titulo="3. Torax")
            p.mb-0 Revisar heridas o deformaciones de la caja torácica y revisar movimientos respiratorios.
          .row(titulo="4. Abdomen")
            p.mb-0 Revisar heridas, localizar dolores presentes, palpar si el abdomen está duro o depresible, prever posibles lesiones internas.
          .row(titulo="5. Extremidades")
            p.mb-0 Evitar moverlas, compararlas visualmente, buscar heridas, deformaciones, inflamaciones, explorar sensibilidad y movimientos.
          .row(titulo="6. Espalda")
            p.mb-0 Revisa posibles fracturas vertebrales y lesiones en la médula.

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Clasificación de las hemorragias 

    p.mb-4(data-aos="fade") Por otro lado, en una situación donde la vida de una persona peligra, es importante tener en cuenta que cuando hay heridos producto de los accidentes viales, en especial con hemorragias abundantes (hace referencia a la salida de sangre de los vasos sanguíneos por traumatismos de manera cortante o por contusión) que pueden causar el desangre de la persona y por último la pérdida de la vida, se debe tener sumo cuidado, por lo que es imperativo conocer su clasificación para poder en un momento dado saber manejarlas adecuadamente. 

    .row.fondo-t5-5.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-4.mb-3.mb-lg-0
            .tarjeta.bg-8.h-100
              img(src='@/assets/curso/temas/t5/img12.png', alt='')
              .p-3
                ol.lista-ol.fa-ul
                  li 
                    span.text-bold 1. 
                    span #[b Capilar: ]
                      | afecta a vasos superficiales que irrigan la piel, generalmente se manifiesta por hematomas. 
                  li 
                    span.text-bold 2. 
                    span #[b Venosa: ]
                      | caracterizada por sangre roja y oscura.
                  li 
                    span.text-bold 3. 
                    span #[b Arterial: ]
                      | sangre brillante sale de forma abundante e intermitente.
          .col-lg-4.mb-3.mb-lg-0
            img.mx-auto(src='@/assets/curso/temas/t5/img13.png', alt='' style="width: 280px;")
          .col-lg-4.mb-3.mb-lg-0
            .tarjeta.bg-8.h-100
              img(src='@/assets/curso/temas/t5/img14.png', alt='')
              .p-3
                ol.lista-ol.fa-ul
                  li 
                    span.text-bold 1. 
                    span #[b Externa: ]
                      | sangre sale al exterior.
                  li 
                    span.text-bold 2. 
                    span #[b Interna: ]
                      | la sangre se acumula debajo de la piel. 
                  li 
                    span.text-bold 3. 
                    span #[b Exteriorizadas: ]
                      | hemorragias internas y salen al exterior por los orificios corporales, como oídos, nariz o boca.


    p.mb-4(data-aos="fade") Si bien las hemorragias, deben tenerse en cuenta al momento de hacer la evaluación de un paciente producto de un accidente de tránsito, estas se pueden controlar de acuerdo a su localización:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 8.] Condiciones generales del paciente, hemorragia externa
        .tabla-a.sin-borde.tema4
          table
            thead
              tr.bg-acento-contenido
                th.t-yellow(colspan="2") HEMORRAGIA EXTERNA
            tbody
              tr
                td.bg-3.text-bold.text-center LOCALIZACIÓN 
                td.bg-3.text-bold.text-center CONTROL 
              tr
                td.bg-7.text-bold.text-center COMPRESIÓN DIRECTA 
                td.bg-6 Fuerte presión a la herida con una gasa o sustituirla por un vendaje cuando la herida pare de sangrar.  
              tr
                td.bg-7.text-bold.text-center EN EXTREMIDADES 
                td.bg-2 Elevar el miembro afectado, esto puede ser doloroso.
              tr
                td.bg-7.text-bold.text-center COMPRESIÓN ARTERIAL 
                td.bg-6 Se localizan las arterias principales para detener la circulación.  
              tr
                td.bg-7.text-bold.text-center TORNIQUETE 
                td.bg-2 Es un método para detener el sangrado de una parte del cuerpo, por lo general una extremidad, al realizarlo se deben dejar espacios intermitentes de presión sobre el tejido para que le llegue oxígeno.

    p.mb-4(data-aos="fade") Observe los siguientes casos:

    .row.justify-content-center.t5-5.mb-5(data-aos="fade-down") 
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj6-img1.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              p.mb-0 Si sale por la boca y proviene de vías digestivas se coloca a la persona boca arriba y se aplica hielo en el abdomen. 
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj6-img2.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              p.mb-0 Si es nasal, colocar al herido con la cabeza inclinada hacia delante y comprimir las fosas nasales.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj6-img3.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              p.mb-0 Si es exteriorizada y sangra por el oído, no hay que intentar detenerla para evitar acumulaciones en el cráneo, se debe acostar al paciente de lado de la salida de la hemorragia con una gasa y llevarlo al hospital.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj6-img4.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              p.mb-0 Si la hemorragia es venosa o arterial se debe revisar el abdomen, si está sensible, rígido, presenta mareos, palidez o vómito con sangre, es vital llevarlo al médico etc.
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj6-img5.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              p.mb-0 Si la hemorragia es interna se controla al aplicar frío local sobre la piel, pues contrae los vasos sanguíneos y reduce la formación de hematomas.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/pdf.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Primeros auxilios. Manual de primeros auxilios
                  p.text-small.mb-0 Para profundizar en el tema le invito a revisar el Manual de primeros auxilios.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/manual_primeros_auxilios.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


    Separador

    #t_5_6
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.6 Características de las heridas
    
    p.mb-4(data-aos="fade") Las heridas son lesiones producto de un traumatismo en la piel, las cuales pueden presentar diferentes características teniendo en cuenta factores de valoración como:

    .row.justidy-content-center.mb-3(data-aos="fade-down")
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img1.svg', alt='' style="width: 85px;")
          p.mb-0 Diámetro
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img2.svg', alt='' style="width: 85px;")
          p.mb-0 Profundidad
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img3.svg', alt='' style="width: 85px;")
          p.mb-0 Bordes
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img4.svg', alt='' style="width: 85px;")
          p.mb-0 Ángulos
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img5.svg', alt='' style="width: 85px;")
          p.mb-0 Paredes
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img6.svg', alt='' style="width: 85px;")
          p.mb-0 Fondo
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img7.svg', alt='' style="width: 85px;")
          p.mb-0 Piel circundante
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img8.svg', alt='' style="width: 85px;")
          p.mb-0 Compromiso del tejido
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img9.svg', alt='' style="width: 85px;")
          p.mb-0 Coloración de la herida
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img10.svg', alt='' style="width: 85px;")
          p.mb-0 Cantidad de tejido
      .col-lg-2.col-6.col-md-3.mb-4
        .tarjeta.fondo-hover2.h-100.p-4.text-center
          img.mx-auto.mb-2(src='@/assets/curso/temas/t5/tarj7-img11.svg', alt='' style="width: 85px;")
          p.mb-0 Calidad de la secreción

    p.mb-4(data-aos="fade") Las heridas se pueden clasificar de acuerdo a las siguientes categorías:

    .row.justify-content-center 
      .col-lg-5.mb-4(data-aos="fade-right")
        .tarjeta.bg-1.h-100.p-4.d-lg-flex.align-items-center
          .row.justify-content-center 
            .col-md-8.col-lg-12.mb-lg-5.mb-4
              img(src='@/assets/curso/temas/t5/img15.png', alt='')
            .col-md-6.mb-3
              .tarjeta.bg-acento-contenido.p-3.text-center
                h5.text-white.mb-0 Heridas abiertas
            .col-md-6.mb-3
              .tarjeta.bg-acento-contenido.p-3.text-center
                h5.text-white.mb-0 Heridas abrasivas
            .col-md-6.mb-3
              .tarjeta.bg-acento-contenido.p-3.text-center
                h5.text-white.mb-0 Heridas cerradas
            .col-md-6.mb-3
              .tarjeta.bg-acento-contenido.p-3.text-center
                h5.text-white.mb-0 Heridas avulsivas
            .col-md-6.mb-3
              .tarjeta.bg-acento-contenido.py-3.px-2.text-center
                h5.text-white.mb-0 Heridas con laceraciones
            .col-md-6.mb-3
              .tarjeta.bg-acento-contenido.p-3.text-center
                h5.text-white.mb-0 Heridas amputación
      .col-lg-7.mb-4(data-aos="fade-left")
        .tarjeta.bg-2.h-100.p-4
          .bg-acento-contenido.p-2.mb-3
            h4.t-yellow.text-center.mb-0 Clasificación de las heridas
          .pb-3
            h5 Heridas abiertas
            p.mb-0 Aquellas en las cuales se presenta separación de la piel, en este tipo de heridas se debe tener en cuenta la distancia entre los bordes y su profundidad, pues de esto dependerá la necesidad de sutura.
          .border-bottom2
          .py-3
            h5 Heridas cerradas
            p.mb-0 En estas no se presenta separación de piel, pero generalmente hay hematoma o evidencias de la lesión.
          .border-bottom2
          .py-3
            h5 Heridas con laceraciones
            p.mb-0 Estas se producen cuando el tejido o la piel del paciente se rasga, debido a la fuerza que ocasionó la lesión, en estas heridas se presenta abundante sangrado.
          .border-bottom2
          .py-3
            h5 Heridas abrasivas
            p.mb-0 Son aquellas que son producidas por fricción con algún elemento que ocasiona abrasiones leves, generalmente de tratamiento en casa.
          .border-bottom2
          .py-3
            h5 Heridas avulsivas
            p.mb-0 En este tipo de heridas se separa el tejido del cuerpo y se rasga, de igual manera se presenta un sangrado abundante, uno de los ejemplos más descriptivos son las mordeduras de perro.
          .border-bottom2
          .pt-3
            h5 Heridas amputación
            p.mb-0 Es la pérdida de alguna extremidad del cuerpo, por lo general son las que producen locomoción o movimiento, como lo son manos, brazos, piernas o los pies.

    p.mb-4(data-aos="fade") Para poder realizar una adecuada caracterización de las heridas es importante tener en cuenta que pueden clasificarse según el espesor de los tejidos afectados, según la dirección, según la forma, según los agentes que la provocan y según su grado de contaminación; de acuerdo a lo anterior, a continuación, se realizará la descripción de las clasificaciones mencionadas.

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Heridas según el espesor de los tejidos afectados

    p.mb-4(data-aos="fade") En el momento de evaluar el espesor de una herida se deben tener en cuenta las siguientes características:

    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj8-img1.png')
        .p-4
          h5.mb-1 Rasguños
          p Herida de aspecto epidérmico.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj8-img2.png')
        .p-4
          h5.mb-1 Con erosión
          p Herida con pérdida o no de sustancia de la epidermis.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj8-img3.png')
        .p-4
          h5.mb-1 Superficial
          p Herida con ausencia de penetración en la cavidad o afectación únicamente en tejido subcutáneo.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj8-img4.png')
        .p-4
          h5.mb-1 Profunda
          p Herida penetrante que pueda afectar las cavidades torácicas, cervicales, articulaciones, etc.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj8-img5.png')
        .p-4
          h5.mb-1 Perforante
          p Herida que pueda penetrar cavidades provocando lesiones en vísceras huecas.

    p.mb-4(data-aos="fade") En adición, es necesario mencionar otros tipos de categorías y sus correspondientes características para que al observarlas pueda reconocerlas, por lo que le invito a revisar el siguiente contenido:

    .row.justify-content-center
      .col-lg-6.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img16.svg', alt='')
      .col-lg-6.mb-4(data-aos="fade-left")
        .bg-acento-contenido.p-2.mb-3
          h4.t-yellow.text-center.mb-0 Heridas, otros tipos de categorías 
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Heridas según la dirección")
            p.mb-0 En el momento de valorar las heridas según su dirección es indispensable tener en cuenta los siguientes aspectos: la longitud, si está en forma transversal, si tiene dirección oblicua o por el contrario está en forma espiroidea. 
          .row(titulo="Heridas según la forma")
            p.mb-0 En este tipo de heridas se evalúa si son: simples o angulares, si la herida presenta colgajos o si son arqueadas o angulares, si son estrelladas, punzantes o con aspecto crateriforme.
          .row(titulo="Heridas según el agente que las provocan")
            p.mb-0 Dentro de las mismas se evalúa si son contusas o incisas, si son cortantes o punzantes, si tienen atrición o abrasión, si presentan colgajos, arrancamiento o si son heridas por quemaduras.
          .row(titulo="Heridas según su grado de contaminación")
            p.mb-0 En estas heridas se evalúa:
            ul.lista-ul--color.fa-ul.circulo.mb-4
              li.mb-0
                i.fas.fa-circle
                | Si son limpias con mínimo daño en los tejidos orgánicos.
              li.mb-0
                i.fas.fa-circle
                | Sucias con mayor daño y penetración en los tejidos orgánicos.  


    Separador

    #t_5_7
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.7 Aplicación de técnicas de reanimación

    .row.justify-content-center.mb-2
      .col-lg-4.col-md-9.mb-4.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img16.png', alt='')
      .col-lg-8.mb-4.ps-lg-0(data-aos="fade-left")
        .bg-4.h-100.p-4.py-lg-3
          p Ante la posibilidad de vernos enfrentados a una situación donde la vida de un ser humano esté en riesgo y se requiera aplicar los primeros auxilios, como ciudadanos debemos estar en la capacidad de brindar esa primera atención inmediata que requiere la persona en cuestión.
          p.mb-0 Una vez valorado el estado general y se determine que la víctima no está respirando o no tiene pulso, se debe proceder a hacer reanimación cardiopulmonar, para esto es muy importante conocer el concepto de reanimación y aplicación de técnicas de reanimación, como a continuación se expone:

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Reanimación 

    .row.justify-content-center
      .col-lg-7.mb-4(data-aos="fade-right")
        p Generalmente conocida como RCP y significa Reanimación Cardiopulmonar, es un conjunto de maniobras y técnicas que se utiliza en situaciones de emergencia en procura de salvar la vida de una persona víctima de una descarga eléctrica, un ataque cardiaco o ahogo, por lo que se evidencia ausencia de respiración o que el corazón ha dejado de palpitar, además hay estado de inconsciencia, lo cual, es una señal de alarma muy importante que indica que se debe actuar de manera inmediata.
        p Entre más rápido se actué incrementará la posibilidad de mantener con vida a la persona afectada, por lo que cada minuto cuenta, por eso se hace énfasis en que quien decida intervenir y auxiliar a la víctima debe mantener la calma, tomar las mejores decisiones y actuar oportunamente, cada minuto se vuelve vital, por lo que si se retrasa la aplicación de la reanimación podría disminuir en un 10% la posibilidad de supervivencia del individuo.
        p Por lo anterior, se hace necesario enseñar los dos tipos de técnicas de reanimación que existen:
      .col-lg-5.col-md-10.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img17.png', alt='')                 

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/6fDvRfIwDbw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Técnicas de reanimación
    
    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Técnicas de reanimación, pasos
    
    p.mb-4(data-aos="fade") En adición, existen 3 pasos básicos que hacen parte de estas técnicas de reanimación RCP, los cuales se describen a continuación:

    TabsA.color-acento-botones.mb-5(data-aos="fade-down") 
      .tarjeta.bg-5.p-4(titulo="Compresión") 
        .row.justify-content-center.align-items-start 
          .col-lg-6.col-md-12.mb-md-4.mb-sm-4.mb-lg-0
            h4 Compresión 
            p Cuando el corazón para de latir, deja de recibir la sangre oxigenada, por lo cual se puede ocasionar muerte o daño cerebral en muy poco tiempo, por ello el objetivo de la reanimación es precisamente mantener la circulación de esa sangre oxigenada hacia el cerebro y demás órganos vitales del cuerpo humano, hasta que se logre restablecer el ritmo cardiaco.
            p Para esto se debe aplicar presión rítmica y fuerte sobre el pecho de la víctima de paro cardiorrespiratorio, la característica de esta maniobra básica es que no requiere equipo especial ni personal entrenado para realizarla, esta simple técnica puede ser la diferencia entre la vida y la muerte de un individuo.          
          .col-lg-6.col-md-12          
            img(src='@/assets/curso/temas/t5/tab1.png', alt='')
      .tarjeta.bg-5.p-4(titulo="Despeje de vías respiratorias")              
        .row.justify-content-center.align-items-start 
          .col-lg-6.col-md-12.mb-md-4.mb-sm-4.mb-lg-0
            h4 Despeje de vías respiratorias 
            p Estas se abren o despejan con la maniobra conocida como: <i><b>Frente-Mentón</b></i>, la cual consiste en colocar los dedos sobre la frente de la víctima e inclinarse levemente hacia atrás la cabeza, con la otra mano levantar suavemente el mentón, esto abrirá sus vías respiratorias.          
          .col-lg-6.col-md-12          
            img(src='@/assets/curso/temas/t5/tab2.png', alt='')
      .tarjeta.bg-5.p-4(titulo="Respiración de rescate")              
        .row.justify-content-center.align-items-start 
          .col-lg-6.col-md-12.mb-md-4.mb-sm-4.mb-lg-0
            h4 Respiración de rescate 
            p Comúnmente conocida como respiración boca-boca, también puede ser boca-nariz (este caso es para cuando la boca de la víctima está severamente lesionada o no se puede abrir).
            p El propósito de esta maniobra es suministrar oxígeno a los pulmones de la víctima, una vez despejadas las vías aéreas, utilizando los dedos que están inclinando la cabeza proceda a cerrar la nariz de la víctima, con la otra mano deberá mantener el mentón elevado para que la boca de la víctima permanezca abierta, tome aire y coloque sus labios sobre los labios de la persona afectada, haciendo un sello, proporcione aire firmemente dentro de la víctima por un tiempo de duración de un segundo, observe si el pecho se eleva, sí el pecho no se eleva deberá proporcionar una segunda respiración.          
          .col-lg-6.col-md-12          
            img(src='@/assets/curso/temas/t5/tab3.png', alt='') 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Aplicación de técnicas de reanimación

    .row.justify-content-center
      .col-lg-4.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img18.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p La combinación de estas técnicas mencionadas anteriormente serán la herramienta perfecta para ayudar a mantener con vida a la víctima y que las posibilidades de sufrir daños cerebrales disminuyan, lo primordial es lograr estabilizar a la persona mientras llega el personal especializado.
        p Antes de iniciar con PCR se deberá revisar si el lugar donde se encuentra es seguro, de no ser así se deberá desplazar a un lugar donde se pueda maniobrar con mayor facilidad, teniendo en cuenta que se debe mover lo menos posible a la persona, revisar el estado de conciencia o inconciencia y en la medida de lo posible llamar a los servicios de emergencias, porque la situación se puede agravar y se necesitará ayuda de personal y equipo calificado. 

    p.mb-4(data-aos="fade") Algunos aspectos importantes a tener en cuenta al momento de aplicar estas técnicas son:

    SlyderF.mb-5(columnas="col-md-6 col-lg-4" data-aos="fade-down")
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj9-img1.png')
        .p-4
          h5.mb-1 Compresiones
          p.mb-0 Treinta compresiones de pecho seguidas de dos respiraciones de rescate o salvamento constituyen un ciclo, las respiraciones no se deben aplicar con mucha fuerza.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj9-img2.png')
        .p-4
          h5.mb-1 Maniobra Frente-mentón
          p.mb-0 Si se observa que el pecho de la víctima no se eleva, se debe repetir la maniobra de inclinar la cabeza y levantar el mentón de la víctima (maniobra frente-mentón) e iniciar un ciclo nuevamente.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj9-img3.png')
        .p-4
          h5.mb-1 Combinación
          p.mb-0 Lo recomendable es combinar 30 compresiones torácicas con dos respiraciones de rescate.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj9-img4.png')
        .p-4
          h5.mb-1 RCP
          p.mb-0 La RCP se debe proporcionar hasta que se restablezca la respiración y el corazón comience a latir nuevamente.
      .tarjeta.justify-content-center.bg-3
        img.mb-2(src='@/assets/curso/temas/t5/tarj9-img5.png')
        .p-4
          h5.mb-1 Variantes 
          p.mb-0 Estas técnicas varían según la edad y tamaño de la víctima, pero sus pasos básicos y fundamentales son los mismos: compresión, vía respiratoria y respiración.

    p.mb-5(data-aos="fade") Teniendo en cuenta los elementos anteriores es describir la técnica según la edad, ya que se realiza de diferente manera:

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Aplicación de Técnicas de RCP en bebés de menos de cuatro semanas

    .row.justify-content-center.mb-2
      .col-lg-4.col-md-9.mb-4.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img19.png', alt='')
      .col-lg-8.mb-4.ps-lg-0(data-aos="fade-left")
        .bg-4.h-100.p-4.d-lg-flex.align-items-center
          p.mb-0 Generalmente el paro cardiaco en un bebe se origina por falta de oxígeno, puede ser producto de un atragantamiento, si es por este motivo se debe tratar de sacar el objeto que está obstruyendo las vías respiratorias, si no es por ese motivo se debe iniciar las técnicas de RCP, se debe tocar al bebe y esperar una respuesta, puede ser un movimiento, si no responde iniciar con otro ciclo de RCP y seguir llamando al servicio de emergencias.

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Aplicación de Técnicas de RCP en bebés menores de un año 

    .row.justify-content-center.mb-2
      .col-lg-8.mb-4(data-aos="fade-right")
        p Se debe colocar al bebe boca arriba sobre una superficie rígida y plana, si no la hay se debe sostener firmemente al bebe sobre la pierna o brazo, imagine una línea horizontal entre el pecho del bebe, coloque dos dedos justo debajo de esa línea en el centro del pecho, luego comprima el pecho del bebe cuidadosamente unos cuatro centímetros, se deben realizar compresiones por espacio de un minuto, realizar entre 100 y 120 compresiones firmes, contando en voz alta a un ritmo rápido.
        p Luego de 30 compresiones, se debe inclinar la cabeza hacia atrás y levantar el mentón con una mano y ejercer presión con la otra mano, ahora se procede a dar respiración, se debe cubrir la boca y nariz del bebe con la boca del socorrista, se deben hacer dos respiraciones de rescate, la respiración debe ser suave y lenta, tomando un segundo para la respiración, proceda a observar el pecho del bebe, si se eleva, se dará la otra respiración de rescate, en caso contrario y el pecho del bebe no se eleva, se repite la maniobra frente-mentón y se proporciona la segunda respiración.
        p Si persiste la situación y el pecho del bebe no se eleva, se debe continuar con las compresiones sobre su pecho, dar dos respiraciones después de 30 compresiones de pecho hasta que haya signos de vida o llegue la asistencia médica.
      .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img20.png', alt='')

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Aplicación de Técnicas de RCP en bebés mayores de un año hasta edad adulta

    p(data-aos="fade") En este grupo los tres pasos a seguir son los mismos, se deben llevar a cabo compresiones por dos minutos, se coloca al individuo boca arriba en una superficie plana y firme, arrodillarse junto al cuello y hombros del afectado, colocar las manos sobre la parte de debajo de la caja torácica, se presiona el pecho, no más de 5 centímetros, ejercer presión de manera rápida y firme, hacer entre 100 y 120 compresiones por minuto.
    p(data-aos="fade") Luego proceda a abrir vías respiratorias, utilizando la maniobra frente-mentón, realice respiración boca a boca, haciendo una respiración en la boca del individuo por un segundo, observe su pecho, si se eleva, haga una segunda respiración, si su pecho no se eleva, repita la acción de inclinar la cabeza y levantar el mentón y proporcione la segunda respiración, después de darle las dos respiraciones, continúe con un nuevo ciclo de compresión/respiración, continúe con estas maniobras hasta que haya movimiento en el individuo o llegue el personal de asistencia media.
    p.mb-4(data-aos="fade") Tenga en cuenta al momento de brindar RCP, el apoyarse en otra persona (si la hay) que también sepa brindar primeros auxilios para que se turnen y tomen descansos para poder ofrecer un mejor servicio al individuo afectado, la otra persona también puede insistir en la comunicación con los servicios de emergencia, la reanimación debe brindarse hasta que los signos vitales del afectado sean restablecidos o hasta que llegue ayuda profesional y equipo especializado.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Reanimación cardiopulmonar. Fundación Valle de Lili TV.
                  p.text-small.mb-0 Reanimación cardiopulmonar en niños, jóvenes y adultos.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=7xzKkzUmj_s')" target="_blank")
                    span Ver video
                    i.far.fa-play-circle


    Separador

    #t_5_8
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.8 Primer respondiente y técnicas de inmovilización

    p.mb-4(data-aos="fade") En los casos en los que se presentan situaciones que involucran una persona accidentada que requiera atención inmediata, antes de que se presente personal profesional que pueda brindarle atención médica, es fundamental que la persona que vaya a prestar los primeros auxilios tenga presente que la evolución médica de la persona lesionada dependerá de la forma de reacción, por lo cual es importante tener en cuenta los siguientes puntos clave:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      SlyderF(columnas="col-lg-6 col-xl-4 col-md-12")
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img1.svg' alt='')
          .h4.text-center PSICOLÓGICO
          p.text-center.mb-0 En caso de requerir los primeros auxilios con urgencia es importante conservar la calma.
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img2.svg' alt='')
          .h4.text-center RESPETAR LA VIDA
          p.text-center.mb-0 La prioridad es preservar la vida del accidentado.
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img3.svg' alt='')
          .h4.text-center MOVILIDAD
          p.text-center.mb-0 De no ser necesario no se deberá mover a la persona accidentada.
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img4.svg' alt='')
          .h4.text-center EVITAR EXPOSICIONES
          p.text-center.mb-0 Se debe evitar que el accidentado se vea expuesto a nuevas infecciones o a nuevas lesiones.
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img5.svg' alt='')
          .h4.text-center PROHIBICIONES
          p.text-center.mb-0 No dar alimentos, ni bebidas al paciente.
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img6.svg' alt='')
          .h4.text-center MEDICAMENTOS
          p.text-center.mb-0 No medicar al accidentado, si no es una persona del servicio de salud con certificación profesional.
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img7.svg' alt='')
          .h4.text-center ESPERAR AL PROFESIONAL
          p.text-center.mb-0 Hacer solo lo estrictamente necesario hasta que se presente un profesional que pueda brindar los primeros auxilios.
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img8.svg' alt='')
          .h4.text-center TRASLADO
          p.text-center.mb-0 Se debe realizar un traslado adecuado, tenga en cuenta que debe conocer el estado del paciente para poder movilizarlo y no causarle lesiones mayores.
        .bg-3.p-4.h-100.tarjeta
          .row.justify-content-center.mb-3
            .col-6
              img(src='@/assets/curso/temas/t5/tarj10-img9.png' alt='')
          .h4.text-center RESPONSABILIDAD LEGAL
          p.text-center.mb-0 Si no sabe cómo proceder, abstenerse de actuar, llame a emergencias.

    p.mb-4(data-aos="fade") Por último, se debe realizar un traslado adecuado, por lo que es importante resaltar que este solo se debe efectuar en casos en casos extremos en los que el accidentado se encuentre en riesgo de muerte como incendios, electrocución, asfixia, inundación o atrapamiento, entre otros.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src="@/assets/curso/temas/t5/img21.png")
      .col-lg-8(data-aos="fade-left")
        p Por lo cual, en dichos casos el traslado se debe efectuar teniendo como prioridad salvaguardar la vida, procurando que el cuerpo se mueva lo menos posible, por lo anterior se deben tener en cuenta los siguientes pasos:
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Estabilización cuello y cabeza") El primer paso es realizar la estabilización manual de la cabeza y el cuello.
          p(numero="2" titulo="Definir rotación") Se debe establecer el lado de rotación del paciente teniendo en cuenta las lesiones que presenta.
          p(numero="3" titulo="Alineación de extremidades") Se deberán alinear las extremidades superiores con los mínimos movimientos sin ejercer presión en el cuerpo, así mismo se alinearán las extremidades inferiores sujetando la pelvis y las rodillas del paciente.
          p(numero="4" titulo="Rotación decúbito lateral") Se rotará el cuerpo del paciente hasta decúbito lateral, si se dispone de una camilla o elemento que pueda cumplir su función se debe colocar en la espalda del paciente.
          p(numero="5" titulo="Rotación decúbito supino o dorsal") Se rotará el cuerpo hasta decúbito supino con la ayuda de la camilla de manera que se efectúe la inmovilización cervical y se tenga control de las vías aéreas.
          p(numero="6" titulo="Inmovilización del cuello") De contarse con un collarín cervical se procederá a inmovilizar el cuello del paciente, de no contarse con el mismo se debe procurar mantener la postura del cuello de manera manual.

    p.mb-4(data-aos="fade") A continuación, encontrará un video sobre las responsabilidades del primer respondiente en Colombia, y cuál debe ser el proceder para evaluar una escena, comenzar la revisión del o los lesionados o pacientes y activar el sistema de emergencias médicas con el fin de salvar las vidas de las personas involucradas, este proceso es de carácter voluntario, pero todo el contexto legal debe ser aprendido con anterioridad, por lo que le invito a ver el siguiente video:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Primer respondiente 
                  p.text-small Primer respondiente, gente que ayuda. Video de la Alcaldía de Bogotá.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=J4mDxdKaLRw')" target="_blank")
                    span Reproducir video
                    i.far.fa-play-circle
          .border-bottom.pb-4.ps-lg-4
          .row.justify-content-around.align-items-center.pt-4
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Curso virtual a nivel nacional
                  p.text-small Agencia Nacional de Seguridad Vial Primer respondiente.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://ansv.gov.co/es/escuela/7914')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link

    Separador

    #t_5_9
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.9 Mantener vigilancia de signos vitales

    p.mb-4(data-aos="fade") Los signos vitales son un conjunto de indicadores fisiológicos que reflejan el estado de salud de una persona, ya que son funciones esenciales del ser humano como son:

    .row.mb-4(data-aos="fade-down")
      .col-lg-3.col-6.mb-lg-0.mb-4
        .tarjeta.fondo-hover2.p-3.h-100
          .row.align-items-center.justify-content-center
            .col-md-5.col-8
              img(src='@/assets/curso/temas/t5/tarj11-img1.svg')
            .col-md-7
              h5.mb-0 La frecuencia cardíaca
      .col-lg-3.col-6.mb-lg-0.mb-4
        .tarjeta.fondo-hover2.p-3.h-100
          .row.align-items-center.justify-content-center
            .col-md-5.col-8
              img(src='@/assets/curso/temas/t5/tarj11-img2.svg')
            .col-md-7
              h5.mb-0 La respiración
      .col-lg-3.col-6.mb-lg-0.mb-4
        .tarjeta.fondo-hover2.p-3.h-100
          .row.align-items-center.justify-content-center
            .col-md-5.col-8
              img(src='@/assets/curso/temas/t5/tarj11-img3.svg')
            .col-md-7
              h5.mb-0 La presión arterial
      .col-lg-3.col-6.mb-lg-0.mb-4
        .tarjeta.fondo-hover2.p-3.h-100
          .row.align-items-center.justify-content-center
            .col-md-5.col-8
              img(src='@/assets/curso/temas/t5/tarj11-img4.svg')
            .col-md-7
              h5.mb-0 El reflejo pupilar 

    p(data-aos="fade") Previamente a brindar los primeros auxilios se deben revisar y controlar los signos vitales del lesionado, ya que deberá comunicar esta información a los profesionales de la salud que lleguen a atender la emergencia.
    p.mb-4(data-aos="fade") A continuación, se indica cómo se deben tomar los signos anteriormente mencionados:

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Frecuencia cardiaca o pulso

    .row.justify-content-center
      .col-lg-5.col-md-9.mb-4.pe-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img22.png', alt='')
      .col-lg-7.mb-4.ps-lg-0(data-aos="fade-left")      
        .bg-4.h-100.p-4
          p Es la velocidad a la que late el corazón, cuando:
          ul.lista-ul--color.fa-ul.circulo.mb-0
            li.mb-0
              i.fas.fa-circle
              | Late rápidamente produce taquicardia,
            li.mb-0
              i.fas.fa-circle
              | Cuando late lentamente se genera una bradicardia o 
            li.mb-0
              i.fas.fa-circle
              | Simplemente puede latir de manera irregular, estos cambios en la frecuencia de los latidos pueden generar una arritmia cardiaca.

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p Para tomar el pulso usted debe colocar las puntas de sus dedos índice y medio en la parte interna de la muñeca del lesionado, por debajo de la base del pulgar, allí se presiona ligeramente, en adición debe hacer uso de un reloj que le permita contar los latidos durante espacio de un minuto. 
        p El pulso puede ser tomado en diferentes zonas del cuerpo como lo son: el cuello, la ingle, la sien, la parte posterior de las rodillas y la muñeca, ésta última,  con frecuencia es la más usada, ya que es un área del cuerpo de fácil y rápido acceso.
        p En la siguiente tabla se muestra la frecuencia cardiaca según la edad, en personas sanas y en estado de reposo, esta referencia le servirá para saber sí el corazón de la víctima está trabajando a ritmo normal.
      .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img23.png', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 9.] Frecuencia Cardiaca según la edad
        .tabla-a.sin-borde.tema4
          table
            caption Nota. Construcción propia, Frecuencia Cardiaca según edad.
            thead
              tr.bg-3
                th EDAD
                th FRECUENCIA CARDIACA
            tbody.text-center.bg-6
              tr
                td Recién nacido
                td 80 - 160 latidos por minuto (lpm)
              tr
                td Lactante Menor (de 1 a 12 meses)
                td 80 - 130 latidos por minuto (lpm)
              tr
                td Lactante Mayor (de 12 a 24 meses)
                td 110 - 130 latidos por minuto (lpm)
              tr
                td Niños entre 3 y 6 años
                td 80 - 120 latidos por minuto (lpm)
              tr
                td Niños entre 7 y 10 años
                td 70 - 110 latidos por minuto (lpm)
              tr
                td Adultos
                td 60 - 100 latidos por minuto (lpm)

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Respiración

    p(data-aos="fade") Es un proceso metabólico de intercambio de gases, donde se recibe oxígeno del ambiente liberando dióxido de carbono al medio externo, este proceso tiene lugar en el interior de los pulmones, debido a que el tórax y las costillas hacen parte de este proceso es muy importante revisar y controlar este signo vital en caso de sufrir lesiones en estas áreas del cuerpo.
    p.mb-4(data-aos="fade") Con respecto a este signo vital, se debe revisar:

    .row.justify-content-center.mb-3(data-aos="fade-down")
      .col-lg-5.mb-4
        .bg-3.h-100
          img(src='@/assets/curso/temas/t5/tarj12-img1.png', alt='')
          .p-4
            p.mb-0 Que la zona del tórax del lesionado sube y baja como producto de la respiración.
      .col-lg-5.mb-4
        .bg-3.h-100
          img(src='@/assets/curso/temas/t5/tarj12-img2.png', alt='')
          .p-4
            p.mb-0 Otra opción es acercar nuestra oreja a la boca y nariz del herido y comprobar que efectivamente está respirando. 

    p(data-aos="fade") Si se presenta una respiración por encima o por debajo de los siguientes rangos significa que hay algo anormal y se requerirá de una evolución médica. 
    p.mb-4(data-aos="fade") En la tabla se puede observar la frecuencia respiratoria según la edad en personas sanas y en reposo.

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 10.] Frecuencia Respiratoria
        .tabla-a.sin-borde.tema4
          table
            caption Nota. Construcción propia, Frecuencia Cardiaca según edad.
            thead
              tr.bg-3
                th EDAD
                th FRECUENCIA RESPIRATORIA
            tbody.text-center.bg-6
              tr
                td Recién nacido hasta un año
                td 30 - 60 respiraciones por minuto (rpm)
              tr
                td Niños entre 1 y 3 años
                td 25 - 40 respiraciones por minuto (rpm)
              tr
                td Niños entre 3 y 6 años
                td 22 - 34 respiraciones por minuto (rpm)
              tr
                td Niños entre 6 a 12 años
                td 18 - 30 respiraciones por minuto (rpm)
              tr
                td Adolescentes entre 12 - 18 años
                td 12 - 16 respiraciones por minuto (rpm)
              tr
                td Adultos
                td 12 - 18 respiraciones por minuto (rpm)

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Temperatura
    
    p.mb-4(data-aos="fade") Indica que tan caliente está el cuerpo, se mide con un termómetro. Los puntos corporales donde se puede tomar la temperatura son: 

    .row.mb-4(data-aos="fade-down")
      .col-lg-3.col-6.mb-lg-0.mb-4
        .tarjeta.fondo-hover2.p-3.h-100.py-lg-2
          .row.align-items-center.justify-content-center
            .col-md-5.col-8
              img(src='@/assets/curso/temas/t5/tarj13-img1.svg')
            .col-md-7
              h5.mb-0 Boca
      .col-lg-3.col-6.mb-lg-0.mb-4
        .tarjeta.fondo-hover2.p-3.h-100.py-lg-2
          .row.align-items-center.justify-content-center
            .col-md-5.col-8
              img(src='@/assets/curso/temas/t5/tarj13-img2.svg')
            .col-md-7
              h5.mb-0 Nariz
      .col-lg-3.col-6.mb-lg-0.mb-4
        .tarjeta.fondo-hover2.p-3.h-100.py-lg-2
          .row.align-items-center.justify-content-center
            .col-md-5.col-8
              img(src='@/assets/curso/temas/t5/tarj13-img3.svg')
            .col-md-7
              h5.mb-0 Axila
      .col-lg-3.col-6.mb-lg-0.mb-4
        .tarjeta.fondo-hover2.p-3.h-100.py-lg-2
          .row.align-items-center.justify-content-center
            .col-md-5.col-8
              img(src='@/assets/curso/temas/t5/tarj13-img4.svg')
            .col-md-7
              h5.mb-0 Recto

    p.mb-5(data-aos="fade") La temperatura varía dependiendo de la edad y el sexo de la persona, pero el rango debe estar entre los 36.5° y 37.2°, con un promedio de 37°, una temperatura por encima de este valor puede significar que hay fiebre y una temperatura desciende por debajo de los 35° recibe el nombre de hipotermia.

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Presión arterial

    p.mb-4(data-aos="fade") Esta indica la fuerza de la sangre al empujar contra las paredes de los vasos sanguíneos, al tomar este signo irá acompañado de 2 números, el primero corresponde a la presión cuando el corazón late al bombear la sangre, y recibe el nombre de presión sistólica y cuando el corazón se relaja y se llena de sangre entre los latidos la presión arterial baja, recibe el nombre de presión diastólica.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-1.p-4
          .row
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-3(src='@/assets/curso/temas/t1/alert.svg', alt='')
            .col-lg-10.col-md-10
              p Generalmente el tensiómetro (aparato que mide la presión arterial) muestra primero la presión sistólica (número mayor) y luego la presión diastólica (número menor), así: 90/60, lo cual quiere decir: #[b que la presión sistólica es de 90 y la presión diastólica es de 60.]
              p.mb-0 Una presión arterial mayor a estos rangos puede generar factores de riesgo y por eso es importante consultar al profesional de la salud.

    p.mb-5(data-aos="fade") Si se dispone del equipo para tomar la tensión arterial, se debe anotar la tensión del lesionado y hacer tres tomas para verificar los valores. El rango normal es 90/60 mm Hg hasta 120/80 mm Hg (milímetros de mercurio)

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Reflejo pupilar
            
    .row.justify-content-center
      .col-lg-5.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img24.png', alt='')
      .col-lg-7.mb-4(data-aos="fade-left")
        p Es la respuesta de la pupila a la 
          b estimulación de la luz
          | , estos reflejos reciben el nombre de miosis, que se presenta cuando la estructura ocular recibe mucha luz, produciendo la 
          b contracción de la pupila 
          | y disminuyendo su diámetro. El otro reflejo que se presenta es cuando el ojo está en un lugar oscuro, entonces la 
          b pupila se dilata 
          | para intensificar la agudeza visual.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-1.p-4.py-3
          .row.align-items-center
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-3(src='@/assets/curso/temas/t1/alert.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 Si las pupilas están muy dilatadas el lesionado puede estar presentando shock o una hemorragia severa y si las pupilas no están de igual tamaño puede indicar una parálisis o una herida en la cabeza.

    p.mb-4(data-aos="fade") En cuanto al reflejo pupilar, se debe revisar si la pupila está dilatada o contraída, se puede presentar también que carece de reflejo fotomotor (contracción de la pupila a la estimulación de la luz). Por lo que el ojo puede ser alumbrado con el haz de luz de una linterna para observar cómo se contrae la pupila, si no se cuenta en el lugar con dicho elemento puede subir el párpado superior y observar la reacción.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Primeros Auxilios en Accidentes de Tránsito 
                  p.text-small.mb-0 Primeros auxilios en un accidente de tránsito
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=T8mBPOxcQrc')" target="_blank")
                    span Ver video
                    i.far.fa-play-circle


    Separador

    #t_5_10
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.10 Comunicaciones entre el medio de transporte y el centro hospitalario

    .row.justify-content-center
      .col-lg-4.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img25.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p La comunicación entre el medio de transporte que atiende la emergencia y el centro hospitalario, permite y facilita que se pueda coordinar en tiempo real el trabajo entre ambos espacios médicos y obtener la asesoría necesaria para brindar los primeros auxilios adecuados en cada caso para gestionar la atención de acuerdo a las condiciones del paciente una vez llegue al centro hospitalario, con el fin de optimizar y organizar los recursos para brindar un mejor servicio.
        p La difusión de los mensajes de manera bidireccional entre los medios de transporte de emergencia y los centros hospitalarios, se puede efectuar por los siguientes medios de transmisión:

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Equipo radiotransmisor para la comunicación por radio   

    p.mb-4(data-aos="fade") Este tipo de comunicación se debe efectuar por una frecuencia libre de interferencia, con un lenguaje claro y conciso, es importante para asegurar que el mensaje sea recibido por la otra parte involucrada que se solicite confirmación de que el mensaje fue recibido, en adición se debe procurar brindar el mensaje lentamente de manera que se permita una clara recepción del mismo, para este tipo de comunicación se tiene previsto la implementación de tres tipos de equipos:

    .row.justify-content-center.mb-5
      .col-lg-10
        .d-md-block.d-none(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 4.] Equipo radiotransmisor
          figure
            img(src='@/assets/curso/temas/t5/fig4-pc.svg', alt='Esquema que destaca los tres tipos de equipos radiotransmisores, que son: equipos de base, equipos móviles y equipos portátiles.')
        .d-block.d-md-none(data-aos="fade-down")
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 4.] Equipo radiotransmisor
          figure
            img(src='@/assets/curso/temas/t5/fig4-mob.svg', alt='Esquema que destaca los tres tipos de equipos radiotransmisores, que son: equipos de base, equipos móviles y equipos portátiles.')

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Equipos de comunicación médica

    p.mb-4(data-aos="fade") En adición se cuentan con otra serie de equipos de comunicación que se describen a continuación:

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-4.col-md-6.mb-3
        .bg-4.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/t5/tarj14-img1.png', alt='')
          h4 Telefonía móvil
          p.mb-0 Teléfonos móviles de tecnología digital, con capacidad de difusión y transmisión de información en diferentes modos (audios, videos, ubicación, entre otros), en algunos vehículos de emergencia se está implementando el sistema de tercera generación UMTS (#[em Universal Mobile Telecommunications System]).
      .col-lg-4.col-md-6.mb-3
        .bg-4.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/t5/tarj14-img2.png', alt='')
          h4 #[em Red Trunking]
          p.mb-0 Sistema implementado por medio de antenas de repetición y microondas digitales que abarcan amplias áreas geográficas, permitiendo acceder a diferentes usuarios de forma simultánea, marcando directamente al número de destino de comunicación, permitiendo dar prioridad entre las llamadas recibidas.
      .col-lg-4.col-md-6.mb-3
        .bg-4.p-4.h-100
          img.mb-3(src='@/assets/curso/temas/t5/tarj14-img3.png', alt='')
          h4 #[em GPS (Global Positioning System)]
          p.mb-0 Sistema de recepción de información de los satélites, el cual permite determinar la posición en el momento en el que se capta la señal transferida por los satélites.


    Separador

    #t_5_11
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.11 Técnicas y protocolo para traslado de víctimas

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p Al evaluar situaciones de emergencia que requiera la implementación del protocolo de traslado de víctimas, se deben evaluar dos condiciones que se pueden encontrar en el lugar del accidente y de las cuales depende la toma de decisiones para efectuar el traslado:
        .bg-1.p-4.py-lg-3
          p.mb-0 La primera situación a contemplar se da cuando una vez ocurrido el accidente los ocupantes del vehículo accidentado, se encuentran atrapados en el vehículo o aprisionados por alguna parte del mismo, para tal situación se requiere que la extracción de las víctimas se efectúe por personas con el conocimiento y los equipos adecuados para evitar que presenten daños secundarios en las condiciones médicas de las víctimas.
      .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img26.png', alt='')

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Traslado de víctima

    p.mb-4(data-aos="fade") Para los casos en que la persona que este brindando los primeros auxilios no tenga el conocimiento para efectuar la extracción de la víctima, se tendrán en cuenta las siguientes recomendaciones:     

    .row.mb-5(data-aos="fade-down") 
      .col-md-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj15-img1.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              h5.mb-1 Solicitar ayuda
              p Se solicitará ayuda de organismos de emergencia para que acudan al lugar del accidente.
      .col-md-6.col-lg-3.mb-4.mb-lg-0  
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj15-img2.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              h5.mb-1 Verificar estado
              p Se verificará el estado físico de las víctimas, realizando la evaluación inicial de sus condiciones físicas y el grado de conciencia.
      .col-md-6.col-lg-3.mb-4.mb-lg-0  
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj15-img3.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              h5.mb-1 Prestar primeros auxilios
              p Se brindarán los primeros auxilios prioritarios que la situación permita, permaneciendo junto a las víctimas.
      .col-md-6.col-lg-3.mb-4.mb-lg-0  
        .tarjeta-avatar.t5-11
          img(src='@/assets/curso/temas/t5/tarj15-img4.png' alt='')
          .tarjeta.bg-3
            .text-center.p-4
              h5.mb-1 Prohibición
              p No se debe permitir que personas sin el conocimiento necesario para realizar la extracción intervengan arriesgando la vida de las víctimas.

    p(data-aos="fade") En la segunda situación en la cual las condiciones físicas de la víctima permitan ser extraída del vehículo o realizar el traslado sin comprometer de forma secundaria su estado físico, se tendrán en cuenta las siguientes consideraciones:
    p.mb-4(data-aos="fade") De no considerarse necesario el mover un herido de un lugar a otro para realizar algún tipo de reanimación o maniobra indispensable, se debe procurar no mover a la víctima del lugar inicial hasta que sea atendido por personal especializado en la atención de primeros auxilios.
    
    h5(data-aos="fade") Cuando la víctima presente:

    .row.justify-content-center.mb-1
      .col-lg-10.mb-4(data-aos="fade-right")
        .bg-1.p-4.h-100
          ul.lista-ul--color.fa-ul.circulo.mb-0
            li.mb-1
              i.fas.fa-circle
              | Falta de movimiento o pérdida de sensibilidad en alguna parte del cuerpo,
            li.mb-1
              i.fas.fa-circle
              | Pérdida de conciencia, 
            li.mb-1
              i.fas.fa-circle
              | Señales de traumatismo o
            li.mb-0
              i.fas.fa-circle
              | Daño en la columna cervical, previo al traslado se debe efectuar la inmovilización del eje de la cabeza, cuello y tronco de la víctima.
      .col-lg-2.mb-4(data-aos="fade-left")
        .tarjeta.h-100.bg-4
          img(src='@/assets/curso/temas/t5/img27.svg', alt='')

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-1.p-4.p-lg-3
          .row.align-items-center
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/t1/alert.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 En el momento de efectuar el traslado de las víctimas, este se realizará en vehículos especializados para emergencias como lo son las ambulancias, ya que cuentan con el equipo y personal capacitado para la atención en todo el trayecto hasta el centro de médico de atención más cercano, garantizando que, en caso de requerirse maniobras de reanimación, el personal capacitado pueda efectuarlas y garantizar que la víctima no sufra mayores complicaciones en el traslado.

    p.mb-4(data-aos="fade") Dentro del marco de consideraciones para efectuar el traslado de la víctima a un centro médico, se plantean las siguientes excepciones en las cuales se hace necesario realizarlo en un vehículo particular sin equipamiento ni personal calificado para la atención de la emergencia:
    
    figure.mb-4(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/IFaF9jAMkOM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Excepciones en el traslado de un paciente

    p(data-aos="fade") A manera de conclusión es vital que una persona que preste los primeros auxilios y que haga las veces de primer respondiente tenga conocimientos claros sobre cómo hacer el manejo del paciente de forma adecuada, lo cual necesariamente incluye estar en capacidad de hacer una evaluación del estado básico del paciente, tener los conocimientos suficientes para tomar las decisiones adecuadas para moverlo o trasladarlo si se requiere, o sí es preferible esperar al personal de emergencias.
    p(data-aos="fade") Por otro lado, cuando es llevado al centro de salud más cercano es recibido por el personal médico donde le hacen una evaluación del estado de salud general, es decir un triage y definen el procedimiento a seguir, según las condiciones del paciente, si es remitido a uno de mayor nivel o si continúa en el mismo sitio y con cual tipo de atención requiere.


    Separador

    #t_5_12
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.12 Valoración de la víctima (triage) concepto de anamnesis

    .row.justify-content-center
      .col-lg-4.col-md-8.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img28.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p Dentro del proceso de valoración y como un mecanismo para tener de primera mano la información del paciente, aparece la anamnesis, la cual básicamente es un proceso de la exploración clínica que recopila datos a través de un interrogatorio-diálogo con el fin de conocer directamente del paciente aspectos relevantes de su situación de salud.
        p Lo anterior, es diferente al triage, que proviene de la palabra francesa trier definida como separar o clasificar, utilizada desde las batallas napoleónicas para priorizar la atención urgente de los heridos y pacientes.	

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Anamnesis

    p.mb-4(data-aos="fade") Dentro del proceso de anamnesis se deben tener en cuenta los siguientes elementos al realizar el proceso:   

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        .tarjeta.bg-2.p-4
          .pb-3
            h5 Datos personales
            p.mb-0 Se deben preguntar: nombres completos, sexo y números de contacto.
          .border-bottom2
          .py-3
            h5 Carácter de la consulta
            p.mb-0 Se debe preguntar de manera clara los motivos que generan la consulta y registrarlos correctamente.
          .border-bottom2
          .py-3
            h5 Historia de la dolencia
            p.mb-0 Se debe tener conocimiento claro sobre el momento de la vida del paciente en que aparecieron los síntomas, bajo qué situación y cuánto tiempo han durado.
          .border-bottom2
          .py-3
            h5 Efectos en su vida cotidiana
            p.mb-0 Se debe preguntar por los efectos de estas dolencias en su vida normal, es decir: limitaciones o cambios que le ha producido, etc.
          .border-bottom2
          .py-3
            h5 Situación personal
            p.mb-0 Es muy importante conocer la existencia de enfermedades previas y su efecto en los hábitos de vida.
          .border-bottom2
          .py-3
            h5 Aspectos psicosociales
            p.mb-0 Es necesario conocer los problemas evidenciados en la historia de vida del individuo a nivel psicoemocional, ya que podrían estar ligados a algunas dolencias, por eso es importante identificar los eventos que puedan haber marcado cambios en la personalidad. 
          .border-bottom2
          .py-3
            h5 Historia familiar
            p.mb-0 Este dato proporciona posibles factores de riesgo o causas ya predeterminadas que puedan evidenciar la existencia de problemas de salud.
          .border-bottom2
          .pt-3
            h5 Expectativas frente a los resultados del tratamiento
            p.mb-0 Aquí se cuestiona que espera el paciente que suceda en su proceso de tratamiento con el fin de conocer sus expectativas frente a la terapia y los resultados.
      .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img29.png', alt='')

    p.mb-4(data-aos="fade") Una vez se define lo anterior, el <em>triage</em> va a permitir la priorización de los pacientes según el riesgo clínico, lo que permite dar un manejo a la cantidad de pacientes cuando la demanda y las necesidades clínicas desbordan los recursos disponibles.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-1.p-4.p-lg-3
          .row.align-items-center
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-4(src='@/assets/curso/temas/t1/alert.svg', alt='')
            .col-lg-10.col-md-10
              p.mb-0 El triage maneja unas escalas, #[b 5 niveles de categorización], aplicando la máxima que dice que lo urgente no siempre es grave y lo grave no es siempre urgente y así se logra realizar una clasificación de pacientes de acuerdo a su grado de urgencia, de tal manera que los más urgentes serán atendidos primero y el resto serán evaluados en varias ocasiones hasta ser valorados por el área médica.

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Triage 
                  p.text-small Sabe qué es el triage y por qué es importante en un servicio de salud… Secretaria de salud de Zipaquirá
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.youtube.com/watch?v=85qzAbncauM')" target="_blank")
                    span Reproducir video
                    i.far.fa-play-circle
          .border-bottom.pb-4.ps-lg-4
          .row.justify-content-around.align-items-center.pt-4
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t5/cta.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Estudio de caso 
                  p.text-small Correlación clínica del triage con el diagnóstico clínico de ingreso y egreso realizado con los pacientes que acuden al servicio médico en urgencias de un hospital privado.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="('https://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0186-48662017000400466')" target="_blank")
                    span Ir al sitio
                    i.fas.fa-link

                    
    Separador

    #t_5_13
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 5.13 Fundamentos Legales en primeros auxilios

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p Cuando se presentan accidentes o eventos que involucran la salud y comprometen la vida y que requieren atención de manera inmediata, los primeros auxilios son el primer mecanismo de reacción en la atención sanitaria.
        p Por lo que se hace indispensable que las personas que intervengan en esta atención sean conscientes que el estado y la posterior evolución de aquellas lesiones que presenten los pacientes dependerá en gran medida de la calidad y de la pertinencia en la atención que reciban en esta primera fase (primeros auxilios).
        p Aunque existe una cantidad de bibliografía y material de consulta en cuanto a la fundamentación legal, este contenido está orientado a la ética y la responsabilidad mientras se atiende a los lesionados o los heridos.
      .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img30.png', alt='')

    p.mb-4(data-aos="fade") De acuerdo a lo anterior, se hace necesario definir primeros auxilios  para comprender el significado real y el alcance del mismo:

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t5/img31.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 #[b Primeros auxilios]
          br
          br
          | Son todas las #[b medidas, acciones, protocolos y procedimientos] que se ejecutan de manera inmediata o inicial a una persona que está enferma, lesionada o accidentada, hasta que pueda ser atendido por #[b personal capacitado y especializado de manera definitiva], es por esto que la atención que se brinde en los momentos iniciales es tan crucial, pues determina la posibilidad #[b de estabilizar al paciente y minimizar las lesiones posteriores]. 

    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-right")
        p Las personas que intervienen en la primera atención y  brindan los primeros auxilios, deben tener ciertas capacidades y habilidades orientadas a la toma de decisiones en situaciones de presión y riesgo; es importante tener presente las consecuencias de estos actos. Actuar sin la capacitación o sin el conocimiento apropiado puede llegar a tener consecuencias legales. 
        p Es importante, actuar  ante este tipo de situaciones con tranquilidad, calma y autocontrol, pues estas emergencias pueden generar que se pierda la serenidad y se alteren los nervios.  La estabilidad emocional, es fundamental para lograr la toma de decisiones a pesar de lo difíciles que sean, consciente de las limitaciones propias y del entorno que se tengan en el momento. 
      .col-lg-6.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img32.png', alt='')

    .row.justify-content-center
      .col-lg-2.col-md-6.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img33.svg', alt='')
      .col-lg-10.mb-4(data-aos="fade-left")
        p Otro aspecto importante, es mostrar firmeza y cortesía, para lograr la cooperación de los testigos y otras personas para conseguir mejores resultados para la víctima. Todo esto debe estar de la mano con los conocimientos en atención de primeros auxilios, técnicas, maniobras y rescates para que el desempeño en la emergencia sea el mejor en pro de preservar la vida de los involucrados.
        p Una vez dicho lo anterior, cada intervención es vital, pues pone en juego la vida de los intervinientes y por lo tanto recaen algunos aspectos legales consagrados en la Constitución política de Colombia de 1991, como el derecho fundamental a la vida. 

    .row.justify-content-center 
      .col-lg-8.mb-4(data-aos="fade-right") 
        .tarjeta.bg-1.p-4
          p También, la omisión puede ser castigada de acuerdo al Código Penal Colombiano (2000)., pues en su artículo 152, pág 157 habla de la omisión de medidas de socorro y asistencia humanitaria, el cual textualmente dice:
          .bloque-texto-d.color-primario.p-4.pt-3.pb-1.px-lg-0.t5-13
            .bloque-texto-d__texto.mb-2
              i.fas.fa-quote-left
              p.mb-0 El que con ocasión y en desarrollo de…. Y estando obligado a prestarlas, omita las medidas de socorro y asistencia humanitarias a favor de las personas protegidas, incurrirá en prisión de (48) a (90) meses y multas de (66.66) a (150) salarios mínimos legales mensuales vigentes.
              i.fas.fa-quote-right
      .col-lg-4.col-md-10.mb-4(data-aos="fade-left") 
        img(src='@/assets/curso/temas/t5/img34.png', alt='')

    p.mb-4(data-aos="fade") En la Constitución Política de Colombia se consagra en el artículo 49, pág 8  lo siguiente:

    .row.justify-content-center
      .col-lg-6.mb-4(data-aos="fade-right")
        .bg-5.h-100
          .bloque-texto-b.color-secundario.t5-13.p-4
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h5.mb-0 …la atención de la salud y el saneamiento ambiental son servicios públicos a cargo del estado. Se garantiza a todas las personas el acceso a los servicios de promoción, protección y recuperación de la salud…
              i.fas.fa-quote-right
      .col-lg-6.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img35.svg', alt='')

    p.mb-4(data-aos="fade") Esto orientado a la atención de las personas en las instituciones de salud, para el caso que compete, de heridos o lesionados en accidentes asociados a operaciones de transporte y equipos, o en accidentes de tránsito. Sumado a lo anterior, la persona que presta los primeros auxilios tiene la responsabilidad fundamental de responder por sus actos propios en lo legal y en la ética como se verá a continuación, de acuerdo a los siguientes preceptos: 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-6")
          .row(titulo="Conocimientos básicos")
            p.mb-0 La persona que intervenga en este tipo de situaciones debe tener los conocimientos básicos apropiados para lograr atender de manera adecuada a las víctimas.
          .row(titulo="Prohibiciones")
            p.mb-0 La persona que brinde los primeros auxilios, no debe estar bajo efectos del alcohol o de ningún otro tipo de sustancias alucinógenas.
          .row(titulo="Disponibilidad")
            p.mb-0 Cuando llegan los cuerpos especializados en atención de emergencias, la persona que brindó los primeros auxilios debe estar a disposición para responder preguntas acerca de los síntomas, mecanismos y protocolos ocurridos durante la atención inicial.
          .row(titulo="Control")
            p.mb-0 La persona que atiende de manera inicial siempre debe primero preservar su salud e integridad y la de la zona en donde se atiende al paciente, también debe permanecer atento en todo momento a la víctima y ofrecer tranquilidad e información a los familiares en lo posible.
          .row(titulo="Responsabilidad social")
            p.mb-0 No puede existir discriminación por la razón que fuere, para la atención a una víctima.
      .col-lg-5.col-10.d-none.d-lg-flex(data-aos="fade-left")
        img(src="@/assets/curso/temas/t5/img36.png")
      
    p.mb-4(data-aos="fade") En el siguiente video de manera general, se presenta un listado de la normatividad más importante, relacionada con la atención a primeros auxilios y su soporte jurídico: 

    figure.mb-5(data-aos="fade-down")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/1tO9JDdCc-4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Marco normativo para atención de eventos primeros auxilios

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-4.p-4
          .row  
            p Para profundizar en el tema revise  los siguientes documentos como parte de su aprendizaje autónomo.
            .col-lg-6.mb-3
              a.anexo(:href="obtenerLink('/downloads/ley_769_2002.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo.] Ley 769 Código Nacional de Tránsito Terrestre
            .col-lg-6.mb-3
            .col-lg-6.mb-3
              a.anexo(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=1348" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Decreto 663 de 1993 
            .col-lg-6.mb-3
              a.anexo(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=103352" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Decreto 2106 de 2019  
            .col-lg-6.mb-3
              a.anexo(href="https://colaboracion.dnp.gov.co/CDT/Normatividad/ley1438de2011.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Ley 1438 de 2011 
            .col-lg-6.mb-3
              a.anexo(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=27568" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Decreto 3990 de 2007 
            .col-lg-6.mb-3
              a.anexo(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60483" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Decreto 056 de 2015 
            .col-lg-6.mb-3
              a.anexo(href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56286" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Ley 1702 de 2013 
            .col-lg-6.mb-3
              a.anexo(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Resolucion%20No.926%20de%202017.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Resolución 926 de 2017 
            .col-lg-6.mb-3
              a.anexo(href="https://www.minsalud.gov.co/Normatividad_Nuevo/Resoluci%C3%B3n%203823%20de%202016.pdf" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] Resolución 3823 de 2016 

    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Procedimiento penal y civil

    .row.justify-content-center
      .col-lg-8.mb-4(data-aos="fade-right")
        p Cuando suceden eventos o accidentes en los que se requiera la intervención de personal que suministre los primeros auxilios, estos primeros cuidados son muy importantes, ya que la vida y muchas de las lesiones causadas en estos hechos pueden complicarse o generar la muerte de las personas afectadas, es por esto que se debe ser muy cuidadoso, ya que la ley ampara las víctimas y su derecho a la reparación. 
        .tarjeta.bg-1.p-4
          p.mb-0 Cuando se implementa y entra en vigencia el Código de Procedimiento Penal a través de la Ley 906 de 2004, este da un avance en la manera en que las víctimas interactúan en los procesos, ya que es considerada un interviniente dentro de los procesos penales y por lo tanto se le dota de las mismas garantías y elementos que a los otros intervinientes en el proceso, como lo son los abogados de la defensa, la Fiscalía, o los causantes del daño, esto es relevante sobre todo cuando se vea afectada su integridad personal y la de su familiar.
      .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img37.png', alt='')
    
    p(data-aos="fade") Pero a pesar que el Estado Colombiano había legislado ya sobre la protección de las víctimas, a través de la Ley 600 de 2000, que fue el anterior Código de Procedimiento Penal, este último les daba a estas personas una pequeña participación en el proceso para lograr legalmente algún reconocimiento o reparación a sus perjuicios, es de aclarar que había mucha reglamentación, pero no se podría aplicar.

    p.mb-4(data-aos="fade") Con la entrada en vigencia del Código de Procedimiento Penal a través de la Ley 906 de 2004, para las víctimas en su proceso legal, se debe garantizar que obtengan los tres derechos que son: la verdad, la justicia y la reparación; este último se está hasta ahora dando de una manera creciente y real En la siguiente tabla se presentan las principales diferencias entre los dos códigos.

    .row.justify-content-center.mb-4
      .col-lg-5.mb-4(data-aos="fade-right")
        .bg-1.h-100
          .bg-acento-contenido.p-3
            h5.t-yellow.text-center.mb-0 CÓDIGO LEY 600 DE 2000
          ul.lista-ul--color.fa-ul.circulo.mb-0.p-4
            li.mb-1
              i.fas.fa-circle
              | Poca participación de las víctimas en los procesos.
            li.mb-1
              i.fas.fa-circle
              | Poca reparación.
            li.mb-1
              i.fas.fa-circle
              | Existía mucha reglamentación.
      .col-lg-5.mb-4(data-aos="fade-left")
        .bg-1.h-100
          .bg-acento-contenido.p-3
            h5.t-yellow.text-center.mb-0 CÓDIGO LEY 906 DE 2004
          ul.lista-ul--color.fa-ul.circulo.mb-0.p-4
            li.mb-1
              i.fas.fa-circle
              | Las víctimas interactúan en los procesos.
            li.mb-1
              i.fas.fa-circle
              | Busca respetar los tres derechos: verdad, justicia y reparación.
            
    .row.justify-content-start.mb-4
      .col-auto(data-aos="fade")
        .list
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/t2/subt.svg', alt='')
          .list__txt.box-ico.p-0.px-4.d-flex.align-items-center
            h3.mb-0 Responsabilidad civil y penal      

    .row.justify-content-center
      .col-lg-4.col-md-9.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/t5/img38.png', alt='')
      .col-lg-8.mb-4(data-aos="fade-left")
        p Es muy importante resaltar que al entrar el Nuevo Código de Procedimiento Penal con la Ley 906 de 2004, expuesto en el punto anterior, las víctimas ya no son solo la parte civil en procesos para exigir se aplique la ley para resarcir estos perjuicios, sino que los amparan los tres derechos descritos: el derecho a la verdad, el derecho a la justicia y el derecho a la reparación.  
        p Es por esto que hay que diferenciar la Ley 600 de 2000 y la Ley 906 de 2004, correspondientes a  los códigos de procedimiento penal,, pues si se realiza una comparación, se puede demostrar la mejora en el último código pues solo satisface a uno de los tres derechos que es la verdad, dejando descubiertos los otros dos, ya que el afectado o víctima se presentaba como parte civil y tenía la responsabilidad de aportar elementos para encontrar la verdad, aportar pruebas o en caso de no contar con los mecanismos,  solicitando las mismas, teniendo en cuenta que  si no estaba de acuerdo se podía llegar a una segunda instancia.

    .tarjeta.bg-4.p-4.mb-4
      p.mb-0 Por lo tanto, en un trabajo unificado entre el fiscal y la víctima se llegaba al posible descubrimiento de la verdad y de impartirse justicia, pero estos procedimientos hicieron que la Ley 600 del año 2000 colapsara, dado los manejos tramposos de algunos abogados, dilatando las solicitudes aprovechándose de la débil estructura legislativa en Colombia que en otras condiciones pudo haber funcionado como estaba concebida.

    .row.justify-content-center(data-aos="fade")
      .col-lg-8.mb-4(data-aos="fade-right")
        .tarjeta.bg-1.p-4.p-lg-3.h-100
          .row
            .col-lg-2.col-md-2.col-4.mb-3.mb-lg-0
              img.px-lg-2(src='@/assets/curso/temas/t1/alert.svg', alt='')
            .col-lg-10.col-md-10
              h5 Clave
              p.mb-0 En casos como las #[b lesiones personales] culposas en accidente de tránsito, la inclusión en el proceso de las víctimas seda desde antes de iniciar formalmente el proceso, ya que existe la posibilidad de conciliar el daño ocasionado, evitando el proceso penal, inclusive se puede realizar una conciliación extraprocesal en las cuales en muchas ocasiones existe apoyo de las compañías aseguradoras en calidad de terceros civilmente responsables. 
      .col-lg-4.col-md-9.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/t5/img39.png', alt='')

    p.mb-4(data-aos="fade") Por tanto,  es indispensable  dejar claro que las víctimas pueden ser afectadas en cualquier proceso de su atención médica, pues ya han sido vulnerados en el mismo accidente y cualquier daño adicional puede ser objeto de procesos legales tipificados en el actual Código de Procedimiento Penal con la Ley 906 de 2004, como lo puede observar en los siguientes documentos. 

    .row.justify-content-center(data-aos="fade-down")
      .col-lg-10
        .tarjeta.bg-4.p-4
          .row  
            p Para profundizar en su aprendizaje se le invita a descargar:
            .col-lg-6
              a.anexo.mb-4(:href="obtenerLink('/downloads/Ley_906_de_2004.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo.] Ley 906 de 2004 
              a.anexo.mb-4(:href="obtenerLink('/downloads/2000_codigopenal_colombia.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo.] Ley 599 de 2000
              a.anexo.mb-4(:href="obtenerLink('/downloads/Constitucion_Politica_de_Colombia_1991.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p #[b Anexo.] Constitución Política de Colombia 1991
            .col-lg-6
              img(src='@/assets/curso/temas/t5/img40.svg', alt='')


</template>

<script>
export default {
  name: 'Tema5',
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
