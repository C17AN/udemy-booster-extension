import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import "./style.css";

const store = createStore({
  state() {
    return {};
  },
  mutations: {},
});

const app = createApp(App);

app.use(store);
app.mount("#app");
