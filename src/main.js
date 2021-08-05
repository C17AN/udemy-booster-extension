import { createApp } from "vue";
import { createStore } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "./style.css";

const store = createStore({
  state() {
    return {
      count: 0,
      verified: false,
      currentPage: "myPage",
    };
  },
  mutations: {
    verifyApiKey(state) {
      state.verified = true;
    },
    toMyPage(state) {
      state.currentPage = "myPage";
    },
    toLectureManage(state) {
      state.currentPage = "lectureManage";
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

library.add(faUserSecret, faCog);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.mount("#app");
