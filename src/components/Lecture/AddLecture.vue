<template>
  <form class="container">
    <div class="add-lecture">
      <input type="text" id="add-lecture-input" placeholder="강의번호 입력" />
      <button class="add-lecture-btn">강의 추가</button>
    </div>
    <div class="add-lecture-description">
      <font-awesome-icon icon="question-circle" />
      <p>강의번호를 잘 모르겠다면, 메뉴얼을 참고해 주세요.</p>
    </div>
  </form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  margin-bottom: 20px;
  flex-direction: column;
}

.add-lecture {
  margin-bottom: 14px;

  #add-lecture-input {
    padding: 8px 6px;
    border-radius: 8px;
    margin-right: 12px;
    width: 250px;
    border: 1px solid #cdcdcd;
    transition: border 0.1s ease;
    &:focus {
      transition: border 0.1s ease;
      border: 1px solid var(--skyblue-500);
    }
  }
  .add-lecture-btn {
    padding: 8px 12px;
    outline: none;
    background-color: var(--skyblue-300);
    color: white;
    border: 1px solid #cdcdcd;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      transition: all 0.2s ease;
      background-color: var(--skyblue-500);
    }
  }
}

.add-lecture-description {
  font-size: 13px;
  svg {
    display: inline-block;
    margin-right: 6px;
    color: var(--gray-500) !important;
  }
  p {
    display: inline-block;
    color: var(--gray-500);
  }
}
</style>
