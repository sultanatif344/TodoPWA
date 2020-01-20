import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './views/router'
import firebase from 'firebase'
import './components/firebaseInit'

let app;
Vue.config.productionTip = false
firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app = new Vue({
  router,
  render: h => h(App)
  }).$mount('#app')
  }
});