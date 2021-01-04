import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import firebase from 'firebase'
import { store } from './store'

const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.config.productionTip = false;

Vue.component('app-alert', AlertCmp);

new Vue({
  router,
  store,
  vuetify,
  created() {
    firebase.initializeApp({
      apiKey: "you config",
      authDomain: "you config",
      projectId: "you config",
      storageBucket: "you config",
      messagingSenderId: "you config",
      appId: "you config"
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  },
  render: h => h(App),
}).$mount('#app')
