import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebaseConfig from './config/firebase'
import firebase from 'firebase'
import VuetifyConfirm from 'vuetify-confirm'

Vue.config.productionTip = false
firebase.initializeApp(firebaseConfig)

Vue.use(VuetifyConfirm, {
  vuetify,
  buttonTrueText: 'Да',
  buttonFalseText: 'Нет',
  buttonTrueColor: '#49a5b9',
  buttonFalseColor: 'grey darken-4',
  color: '#49a5b9',
  icon: 'mdi-alert-octagon-outline',
  title: 'Выход',
  width: 500,
  property: '$confirm'
})


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.dispatch('STATE_CHANGED', user);
    });
  }
}).$mount('#app')
