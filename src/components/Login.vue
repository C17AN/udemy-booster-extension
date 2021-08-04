<template>
  <div class="container">
    <h1>API 정보 입력</h1>
    <div class="login-input">
      <label for="clientId">발급받은 클라이언트 아이디를 입력해 주세요.</label>
      <input id="clientId" type="text" />
    </div>
    <div class="login-input">
      <label for="clientPw">발급받은 비밀 키를 입력해 주세요.</label>
      <input id="clientPw" type="password" />
    </div>
    <button class="check-id-btn">아이디 확인</button>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  background-color: var(--white);
  padding: 16px;
}
.login-input {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  input {
    transition: all 0.2s ease-in-out;
    padding: 6px 6px 6px 0;
    border: 1px solid transparent;
    border-bottom: 1px solid #cdcdcd;
  }
  input:focus {
    transition: all 0.2s ease-in-out;
    outline: none;
    border-bottom: 1px solid red;
  }
}

.check-id-btn {
  padding: 8px;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: turquoise;
}
</style>
