<template>
  <div class="main">
    <ul class="cards">
      <li v-for="evento in eventos" :key="evento.titulo" class="cards_item">
        <div class="card">
          <div class="card_image">
            <img :src="evento.src" />
          </div>
          <div class="card_content">
            <h2 class="card_title">{{evento.titulo}}</h2>
            <p class="card_text">{{evento.descricao | formatDescription}}</p>
            <button @click="buscarLocal(evento.id)" class="btn card_btn">Ver evento</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import router from "../router/";

const events = require("../eventos");

export default {
  name: "Home",
  data() {
    return {
      cards: []
    };
  },
  computed: {
    ...mapState(["eventos"])
  },
  methods: {
    buscarLocal(id) {
      this.$store.dispatch("setEvento", id);
      router.push({ name: "ComoChegar" });
      this.$store.dispatch("restaurantes");
    },
  },
  beforeMount() {
    events.forEach(element => {
      this.cards.push({
        titulo: element.titulo,
        id: element.id,
        src: element.src,
        lugar: element.lugar,
        lat: element.lat,
        lng: element.lng,
        descricao: element.descricao,
        datas: element.datas,
        ingressos: element.ingressos
  
      });
    });
    this.$store.dispatch("setEventos", this.cards);
  }
};
</script>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}

.card_image {
  overflow: hidden;
  background-size: cover;
  background-position: center;
  height: 55%;
}

img{
  height: 220px !important;
  width: 400px !important;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
.main {
  max-width: 1200px;
  margin: 80px auto;
}

h1 {
  font-size: 24px;
  font-weight: 400;
  text-align: center;
}

img {
  height: auto;
  max-width: 100%;
  vertical-align: middle;
}

.btn {
  color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 14px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-image: linear-gradient(to right top, #051937, #001c2b, #001b1a, #0c160f, #121211);
}

.btn:hover {
  background-color: rgba(255, 255, 255, 0.12);
}

.cards {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  border-radius: 40px;
}

.cards_item {
  display: flex;
  padding: 1rem;
}

@media (min-width: 40rem) {
  .cards_item {
    width: 50%;
  }
}

@media (min-width: 56rem) {
  .cards_item {
    width: 33.3333%;
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
  margin-bottom: 1.25rem;
  font-weight: 400;
}
</style>