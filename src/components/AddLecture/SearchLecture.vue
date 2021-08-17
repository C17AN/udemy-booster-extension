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
      <div class="add-lecture-description" v-if="searchResult.length > 0">
        <div>
          <font-awesome-icon icon="question-circle" />
          <p>검색 결과</p>
          <p v-if="resultCount > 0 === true" class="result-count">(총 {{ resultCount }} 건)</p>
        </div>
        <div class="query-btn-container">
          <button @click.prevent="fetchPrevPage" class="query-next-btn" v-if="prevPage !== null">이전</button>
          <button @click.prevent="fetchNextPage" class="query-prev-btn" v-if="nextPage !== null">다음</button>
        </div>
      </div>
    </form>
    <SearchResultList :searchResult="searchResult" v-if="searchResult.length > 0" />
    <p class="search-tip" v-else>
      <ul>
         <li>수강하고 있는 강의명을 검색해 관리 목록에 추가할 수 있습니다.</li>
         <li>강의 또는 강사명을 그대로 복사해서 입력하는 것을 권장합니다.</li>
      </ul>
    </p>
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
      nextPage: null,
      prevPage: null
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
      this.prevPage = data.previous;
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
  align-items: center;
  flex:1;
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
  align-items: center;
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

.query-btn-container {
  button {
    border: none;
    border-radius: 4px;
    padding: 4px 8px;
    cursor: pointer;
    font-size: 12px;
    color: white;
    background-color: var(--skyblue-200);
    transition: background-color 0.2s ease-in-out;
    &:hover {
      transition: background-color 0.2s ease-in-out;
      background-color: var(--skyblue-400);
    }
  }
  .query-next-btn {
    margin-right: 8px;
  }


}
  .search-tip {
    font-size: 13px;
    color: #555;
    li {
      list-style-type: disc;
      margin: 6px 0;
    }
  }
</style>
