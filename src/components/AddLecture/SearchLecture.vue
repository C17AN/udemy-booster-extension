<template>
  <div class="searchLecture-container">
    <form>
      <div class="add-lecture">
        <input
          type="text"
          id="add-lecture-input"
          placeholder="강의 제목 또는 강사명으로 찾기"
          autocomplete="off"
          @input="onQueryChange"
        />
        <button class="add-lecture-btn" @click.prevent="fetchLectureList">
          <img src="/assets/icons/search.svg" width="16" height="16" />
        </button>
      </div>
      <div class="add-lecture-description">
        <div>
          <font-awesome-icon icon="question-circle" />
          <p>검색 결과</p>
          <p v-if="resultCount > 0 === true" class="result-count">(총 {{ resultCount }} 건)</p>
        </div>
        <div>
          <button @click.prevent="fetchPrevPage">이전</button>
          <button @click.prevent="fetchNextPage">다음</button>
        </div>
      </div>
    </form>
    <SearchResultList :searchResult="searchResult" />
  </div>
</template>

<script>
import base64 from "base-64";
import SearchResultList from "./SearchResultList.vue";
export default {
  components: {
    SearchResultList,
  },
  data() {
    return {
      query: "",
      clientId: localStorage.getItem("clientId") || "",
      clientSecret: localStorage.getItem("clientSecret") || "",
      searchResult: [],
      resultCount: 0,
      pageIndex: 1,
    };
  },
  methods: {
    onQueryChange(e) {
      this.query = e.target.value;
      console.log(this.query);
    },
    fetchLectureList: async function() {
      // const proxyURLForChrome = `https://www.udemy.com/api-2.0/courses/?search=${this.query}`;
      const proxyURLForDev = `/courses/?page=${this.pageIndex}&search=${this.query}`;
      const res = await fetch(proxyURLForDev, {
        headers: {
          Authorization: `Basic ${this.encodedSecret}`,
        },
      });
      const data = await res.json();
      this.searchResult = [...data.results];
      this.resultCount = data.count;
      this.prevPage = data.prev;
      this.nextPage = data.next;
    },
    fetchNextPage: async function() {
      this.pageIndex += 1;
      await this.fetchLectureList();
    },
    fetchPrevPage: async function() {
      this.pageIndex -= 1;
      await this.fetchLectureList();
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
.searchLecture-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  flex-direction: column;
  form {
    width: 100%;
  }
}

.add-lecture {
  display: flex;
  margin-bottom: 14px;

  #add-lecture-input {
    padding: 8px 8px;
    border-radius: 8px 0 0 8px;
    width: 100%;
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
  display: flex;
  justify-content: space-between;
  .result-count {
    margin-left: 4px;
  }
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
