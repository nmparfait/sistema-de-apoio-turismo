

<template>
  <div>
    <Cabecalho />

    <!-- servico -->
        <!--service section-->
    <section id="services">
        <!-- title -->
        <div class="title">
            <div class="title-text">
                <h1>Serviços</h1>
            </div>
            <div class="title-underline"></div>
        </div>
        <!-- end of title -->

        <div class="services-container">
        <!-- article-->
          <article class="service-item service-item-black">
            <div class="front-text">
              <i class="fas fa-cogs"></i>
                <h1>Turismo</h1>
            </div>

            <div class="back-text">
              <h1>Turismo</h1>
                <p>Encontrar os melhores locais para tornar a sua viagem incrível e com direto ao uso de Google Maps.</p>
            </div>
          </article>
            <!-- end of article-->

            <!-- article-->
          <article class="service-item service-item-white">
            <div class="front-text">
              <i class="far fa-edit"></i>
              <h1>Restaurações</h1>
            </div>

            <div class="back-text">
              <h1>Restaurações</h1>
              <p>Encontrar ambientes familiares assim como bares e restaurantes conceituados. no Rio de Janeiro </p>       
            </div>
          </article>
          <!-- end of article-->


          <!-- article-->
          <article class="service-item service-item-black">
            <div class="front-text">
              <i class="fas fa-chart-pie"></i>
              <h1>Segurança</h1>
            </div>

            <div class="back-text">
              <h1>Segurança</h1>
              <p>Viagens tranquilas com segurança e qualidade. Evitar circuitos perigosos, acompanhando nossas dicas</p>
                    
            </div>
          </article>
          <!-- end of article-->

          <!-- article-->
          <article class="service-item service-item-white">
            <div class="front-text">
              <i class="far fa-chart-bar"></i>
              <h1>Referência</h1>
            </div>

            <div class="back-text">
              <h1>Referência</h1>
              <p>Referencia em criação e dicas em roteiros de viagens em todas as regiões do Rio</p>
              </div>
          </article>
          <!-- end of article-->
        </div>
    </section>
    <!--end of service section-->
    <!--end of servico-->

    <!-- title -->
    <div class="title">
      <div class="title-text">
        <h1>SUGESTÕES</h1>
      </div>
      <div class="title-underline"></div>
    </div>
    <!-- end of title -->
    <router-view></router-view>
    
    <Rodape />
  </div>
</template>

<script>
import Cabecalho from "./components/Cabecalho.vue";
import Rodape from "./components/Rodape.vue";


export default {
  name: "App",

  components: {
    Cabecalho,
    Rodape
  }
};
</script>
<style>

/* services */
  .title {
      margin: 40px 0;
  }

  #services h1 {
    color: white;
  }

  .title-text {
      text-align: center;
      font-size: 40px;
      color: #353438;
      font-style: italic;
      text-transform: uppercase;
  }

  .title-underline {
      width: 200px;
      border: 3px solid #fba800;
      ;
      margin: 0 auto;
  }

  #services {
      min-height: 80vh;
      background: url('./assets/maracana.jpg');
      background-image: linear-gradient(to right top, #fba800, #ae840c, #6e5e16, #3a3817, #121211);
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      
      padding: 20px 0 80px 0;
  }

  .services-container {
      max-width: 90vw;
      margin: 0 auto;
      color: #F5F3F5;
  }

  .service-item {
      overflow: hidden;
      position: relative;
      padding: 60px;
  }

  .service-item-black {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
      color: rgba(251,168,0,255)ç
  }

  .service-item-white {
      background: linear-gradient(rgba(206, 208, 206, 0.6), rgba(206, 208, 206, 0.6));
      color: #191716;
  }

  .front-text {
      text-align: center;
      transition: transform 2s;
  }

  .back-text {
      position: absolute;
      bottom: -15em;
      width: 75%;
      margin: 0 auto;
      height: 100%;
      transition: bottom 2s;
      padding: 30px 0;
      color: black;
  }

  .back-text h1 {
      margin-bottom: 20px;
  }

  .back-text p {
      color: black;
  }

  .service-item-white:hover {
      color: #191716;
  }


  .service-item:hover .front-text {
      transform: translateX(-400px);
  }

  .service-item:hover .back-text {
      bottom: 0;
  }

  @media screen and (min-width:776px) {
      .services-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
      }

      .services-container .service-item:nth-of-type(1) {
          order: 1
      }

      .services-container .service-item:nth-of-type(2) {
          order: 2
      }

      .services-container .service-item:nth-of-type(3) {
          order: 4
      }

      .services-container .service-item:nth-of-type(4) {
          order: 3
      }
  }

</style>
