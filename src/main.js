import { createApp } from "vue";
import { createStore } from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret, faCog, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import App from "./App.vue";
import "./style.css";

const store = createStore({
  state() {
    return {
      count: 0,
      verified: false,
      currentPage: "myPage",
      settingMenuOpened: false,
    };
  },
  mutations: {
    verifyApiKey(state) {
      state.verified = true;
    },
    toMyPage(state) {
      state.currentPage = "myPage";
    },
    toSearchLecture(state) {
      state.currentPage = "searchLecture";
    },
    toLectureManage(state) {
      state.currentPage = "lectureManage";
    },
    toScheduler(state) {
      state.currentPage = "scheduler";
    },
    openSettingMenu(state) {
      state.settingMenuOpened = true;
    },
    closeSettingMenu(state) {
      state.settingMenuOpened = false;
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

library.add(faUserSecret, faCog, faQuestionCircle);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.mount("#app");
