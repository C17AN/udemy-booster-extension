<template>
  <form class="container">
    <div class="add-lecture">
      <input
        type="text"
        id="add-lecture-input"
        placeholder="강의 제목으로 찾기"
        autocomplete="off"
        @input="onQueryChange"
      />
      <button class="add-lecture-btn" @click.prevent="fetchLectureList">
        <img src="/assets/icons/search.svg" width="16" height="16" />
      </button>
    </div>
    <div class="add-lecture-description">
      <font-awesome-icon icon="question-circle" />
      <p>강의번호를 잘 모르겠다면, 메뉴얼을 참고해 주세요.</p>
    </div>
  </form>
</template>

<script>
import base64 from "base-64";
export default {
  data() {
    return {
      query: "",
      clientId: localStorage.getItem("clientId") || "",
      clientSecret: localStorage.getItem("clientSecret") || "",
    };
  },
  methods: {
    onQueryChange(e) {
      this.query = e.target.value;
      console.log(this.query);
    },
    fetchLectureList: async function() {
      const proxyUrl = `/courses/?search=${this.query}`;
      const res = await fetch(proxyUrl, {
        headers: {
          Authorization: `Basic ${this.encodedSecret}`,
        },
      });
      const data = await res.json();
      console.log(this.encodedSecret);
      console.log(data);
    },
  },
  computed: {
    encodedSecret() {
      return base64.encode(`${this.clientId}:${this.clientSecret}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
}

.add-lecture {
  display: flex;
  margin-bottom: 14px;

  #add-lecture-input {
    padding: 8px 8px;
    border-radius: 8px 0 0 8px;
    width: 250px;
    border: 1px solid #cdcdcd;
    border-right: none;
    transition: border 0.2s ease;
    &:focus {
      transition: border 0.2s ease;
      border-color: var(--skyblue-500);
    }
  }
  .add-lecture-btn {
    padding: 8px 12px;
    outline: none;
    background-color: var(--skyblue-300);
    color: white;
    border: 1px solid #cdcdcd;
    border-left: none;
    border-radius: 0 8px 8px 0;
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
