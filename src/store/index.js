import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    origem: "",
    destino: "",
    lat: "",
    lng: "",
    restaurantes: [],
    eventoAtual: {},
    eventos: []
  },
  getters: {
    getOrigem(state) {
      return state.origem;
    },
    getDestino(state) {
      return state.destino;
    },
    getEvento(state) {
      return state.evento;
    },
  },
  mutations: {
    SET_ORIGEM(state, payload) {
      state.origem = payload;
    },
    SET_DESTINO(state, payload) {
      state.destino = payload;
    },
    adicionarRestaurantes(state, payload){
      state.restaurantes.push(payload);
      console.log(payload);
    },
    SET_LAT(state, payload) {
      state.lat = payload;
    },
    SET_LNG(state, payload) {
      state.lng = payload;
    },
    SET_EVENTOS(state, payload) {
      state.eventos = payload;
    },
    SET_EVENTO(state, id) {
      for (let evento of state.eventos) {
        if (evento.id === id) {
          state.eventoAtual = evento
        }
      }
    }
  },
  actions: {
    setEvento(context, payload) {
      context.commit("SET_EVENTO", payload);
    },
    setEventos(context, payload) {
      context.commit("SET_EVENTOS", payload);
    },
    setOrigem(context, payload) {
      context.commit("SET_ORIGEM", payload);
    },
    setDestino(context, payload) {
      context.commit("SET_DESTINO", payload);
    },
    setLat(context, payload) {
      context.commit("SET_LAT", payload);
    },
    setLng(context, payload) {
      context.commit("SET_LNG", payload);
    },
    async restaurantes({ state }) {
      var myHeaders = new Headers();
      myHeaders.append(
        "X-API-Token",
        "f549adb222bcd6e25c72fab51d17bca95706d7098ab6ad063e9905c97561612c.1592349843"
      );
      var raw = "";
      myHeaders.append("Access-Control-Allow-Origin","*")
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      const proxyurl = "https://cors-anywhere.herokuapp.com/";
      console.log(state.eventoAtual.lat)
      console.log(state.eventoAtual.lng)

      const response = await fetch(
        proxyurl+`https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&type=restaurant&location=${state.eventoAtual.lat},${state.eventoAtual.lng}&key=AIzaSyBQuJbfSamozKoKyFsnhYYgZIufPYNETME&=`,
        requestOptions
      )
      const data = await response.json();
      let restaurantes = [];

      restaurantes.push(data.results[0], data.results[1], data.results[2], data.results[4])
      
      this.commit("adicionarRestaurantes", restaurantes);
    },
  },
  modules: {},
});
