import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.config.productionTip = false

Vue.filter('formatDescription', (string) => {
  string = string.substring(0, 180);
  return string + '...';
})

Vue.filter('formataData', (data) =>{
  let newData = data.split('-');
  return newData[2]+'/'+newData[1]+'/'+newData[0];
})

Vue.filter('formatImage', (image) => {
  let url = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference='+image+'&key=AIzaSyBQuJbfSamozKoKyFsnhYYgZIufPYNETME'

  return url;
})

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBQuJbfSamozKoKyFsnhYYgZIufPYNETME",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
