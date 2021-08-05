<template>
  <div class="container">
    <h1>Udemy Tracker</h1>
    <h3>check your udemy lecture progress</h3>
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
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 20px;
  h1 {
    font-size: 1.8rem;
    font-weight: 500;
    text-align: center;
    margin: 12px 0;
  }
  h3 {
    text-align: center;
    font-size: 1.05rem;
    font-weight: 400;
    color: var(--gray-400);
    margin-bottom: 32px;
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
