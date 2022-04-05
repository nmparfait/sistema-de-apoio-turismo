<template>
  <div>
    <div>
      <label>
        <h4>{{ nomeEvento }}</h4>
      </label>
    </div>
    <gmap-map :center="center" :zoom="15" style="width:100%;  height: 400px;">
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 45.508, lng: -73.587 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  computed: {
    lat() {
      return this.$store.state.eventoAtual.lat;
    },
    lng() {
      return this.$store.state.eventoAtual.lng;
    },
    nomeEvento() {
      return this.$store.state.eventoAtual.lugar;
    }
  },

  mounted() {
    this.addMarker();
  },

  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      const marker = {
        lat: this.lat,
        lng: this.lng
      };
      this.markers.push({ position: marker });
      this.places.push(this.currentPlace);
      this.center = marker;
      this.currentPlace = null;
    }
  }
};
</script>