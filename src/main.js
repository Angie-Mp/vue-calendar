import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify';
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'


import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from "firebase/app";
import 'firebase/firestore';
Vue.use(VueTextareaAutosize);
firebase.initializeApp({
  apiKey: "AIzaSyC0S86n2f9h-5Stlb1m0TRS9K24dfuue48",
  authDomain: "vue-calendar-31f96.firebaseapp.com",
  projectId: "vue-calendar-31f96",
  storageBucket: "vue-calendar-31f96.appspot.com",
  messagingSenderId: "85051832538",
  appId: "1:85051832538:web:7e5c0bb9d9fa792264cde3"
});
export const db = firebase.firestore();


Vue.config.productionTip = false

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
