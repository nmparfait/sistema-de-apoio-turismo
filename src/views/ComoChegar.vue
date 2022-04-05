<template>
  <div>
    <div class="principal">
      <div
        class="image"
        v-bind:style="{ backgroundImage: 'url(' + eventoAtual.src + ')', backgroundSize: 'cover', backgroundPosition: 'center center' }"
      ></div>
      <h1>{{eventoAtual.titulo}}</h1>
      <div class="content">
        <div class="div-section">
          <section>
            <div class="section-item">
              <h2>Sobre</h2>
              <p>{{eventoAtual.descricao}}</p>
            </div>
            <div class="section-item">
              <h2>Quando</h2>
              <p v-for="(data, index) in eventoAtual.datas" :key="index">{{ data | formataData }}</p>
            </div>
            <div class="section-item">
              <h2>Ingressos</h2>
              <p>{{eventoAtual.ingressos}}</p>
            </div>
          </section>
          <section>
            <div>
              <google-map />
            </div>
          </section>
        </div>
        <h3>Onde comer:</h3>
        <div class="main">
          <ul class="cards">
            <li
              class="cards_item"
              v-for="restaurante in restaurantes[0]"
              :key="restaurante.place_id"
            >
              <Card>
                <template v-slot:imagem> <img :src=formatImage(restaurante.photos[0].photo_reference)> </template>
                <template v-slot:titulo>{{restaurante.name}}</template>
                <template v-slot:texto>{{restaurante.vicinity}}</template>
              </Card>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap";
import Card from "../components/Card";
import { mapState } from "vuex";

export default {
  name: "ComoChegar",
  components: {
    GoogleMap,
    Card
  },
  computed: {
    ...mapState(["eventoAtual", "restaurantes"])
  },
  methods: {
    formatImage(image){
      let url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+image+'&key=AIzaSyBQuJbfSamozKoKyFsnhYYgZIufPYNETME'

      return url;
    }
  }

};
</script>

<style scoped>
.principal h1 {
  margin: 0 6% 20px;
  text-align: center;
}

.principal h1,
.principal h2 {
  margin-bottom: 20px;
}

.section-item {
  margin-bottom: 30px;
}
.content {
  margin: 6%;
  text-align: left;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.section-item p {
  margin-bottom: 5px;
}

.main {
  max-width: 1200px;
  margin: 0 auto;
}

.card_image img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.image {
  height: 50vh;
  background-size: cover;
  background-position: center center;
  margin-bottom: 20px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

p {
  color: #828282;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 25%;
  }
}

.card {
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.card_content {
  padding: 1rem;
  background: #ffffff;
}

.card_title {
  color: #000000;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0 0 10px 0;
}

.card_text {
  color: #828282;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 0.75rem;
  font-weight: 400;
}

.div-section {
  margin-bottom: 60px;
}

@media (min-width: 56rem) {
  .div-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }
}
</style>