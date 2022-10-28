import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import firebase from "firebase/app";
import { BootstrapVue } from "bootstrap-vue";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import { initializeApp } from "firebase/app";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);

Vue.config.productionTip = false;
const firebaseConfig = {
  apiKey: "AIzaSyD3yKZml6J-i3aLOKwxhZ3GkXfbDNn95sM",
  authDomain: "brecafamily-dcb88.firebaseapp.com",
  databaseURL:
    "https://brecafamily-dcb88-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "brecafamily-dcb88",
  storageBucket: "brecafamily-dcb88.appspot.com",
  messagingSenderId: "361721884685",
  appId: "1:361721884685:web:8c32b96e956642a8202544",
};

initializeApp(firebaseConfig);
// export default { firebaseApp };
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
