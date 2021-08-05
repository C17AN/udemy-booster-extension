import { createApp } from "vue";
import { createStore } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "./style.css";

const store = createStore({
  state() {
    return {
      count: 0,
      verified: false,
    };
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    change(state, value) {
      state.count = value;
    },
    verifyApiKey(state) {
      state.verified = true;
    },
  },
  actions: {
    increaseAction(context) {
      setTimeout(() => {
        context.commit("increase");
      }, 1000);
    },
  },
});

library.add(faUserSecret);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.mount("#app");
