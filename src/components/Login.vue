<template>
  <div class="container">
    <div class="title-container">
      <img src="/rocket.svg" alt="rocket" width="28" height="28" />
      <h1>Udemy Booster</h1>
    </div>
    <h3>Boost your study motivation</h3>
    <div class="input-container">
      <div class="login-input">
        <label for="clientId">발급받은 클라이언트 아이디를 입력해 주세요.</label>
        <input id="clientId" type="text" />
      </div>
      <div class="login-input">
        <label for="clientPw">발급받은 비밀 키를 입력해 주세요.</label>
        <input id="clientPw" type="password" />
      </div>
    </div>
    <div class="bottom-container">
      <p class="language">
        <span class="lang-en">English</span> / <span class="lang-ko">한글</span>
      </p>
      <button class="check-id-btn" @click="verify">아이디 확인</button>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "./Footer.vue";
export default {
  components: {
    Footer,
  },
  name: "Login",
  props: {
    msg: String,
  },
  methods: {
    verify() {
      this.$store.commit("verifyApiKey");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 0 16px 24px 16px;
  margin: 1rem;

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-right: 10px;
      margin-bottom: 6px;
    }
  }

  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
    margin: 14px 0;
  }
  h3 {
    text-align: center;
    font-size: 1.05rem;
    font-weight: 400;
    color: var(--gray-400);
    margin-bottom: 20px;
  }
}

.login-input {
  display: flex;
  flex-direction: column;
  margin: 20px 0;

  label {
    margin-bottom: 4px;
    color: #444;
    font-size: 15px;
  }
  input {
    transition: all 0.2s ease-in-out;
    padding: 6px 6px 6px 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #cdcdcd;
  }
  input:focus {
    transition: all 0.2s ease-in-out;
    outline: none;
    border-bottom: 1px solid var(--skyblue-500);
  }
  &:nth-child(2) {
    margin-top: 24px;
  }
}

.bottom-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .language {
    font-weight: 400;
    font-size: 14px;
  }
  .lang-en {
    color: var(--skyblue-400);
  }
}

.check-id-btn {
  padding: 8px 12px;
  margin-left: auto;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: var(--skyblue-200);
  transition: all 0.15s ease-in;
}

.check-id-btn:hover {
  transition: all 0.15s ease-in;
  background-color: var(--skyblue-400);
}
</style>
