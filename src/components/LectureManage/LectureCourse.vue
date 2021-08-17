<template>
  <div class="curriculum-container">
    <h1>
      강의 목록 <span>[총 {{ lectureList.flat().length }}강]</span>
    </h1>
    <nav>
      <div v-if="isLoading">데이터를 불러오는 중입니다...</div>
      <ul v-else>
        <li v-for="(chapter, index) in chapterList" :key="chapter.id">
          <CourseChapter :title="chapter.title" :SubLectureList="lectureList[index + 1]" />
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import CourseChapter from "./CourseChapter.vue";

export default {
  components: {
    CourseChapter,
  },
  props: {
    id: Number,
  },
  data() {
    return {
      isLoading: false,
      curriculumList: [],
      chapterList: [],
      lectureList: [],
    };
  },
  methods: {
    async fetchLectureCurriculum() {
      this.isLoading = true;
      const proxyURLForDev = `/courses/${this.id}/public-curriculum-items/?page=1&page_size=1000`;
      const res = await fetch(proxyURLForDev, {
        method: "GET",
        headers: {
          Authorization: `Basic ${this.encodedSecret}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      this.isLoading = false;
      this.curriculumList = data.results;
      this.chapterList = this.curriculumList.filter((item) => item._class === "chapter");
      let tempList = [];
      this.curriculumList.forEach((item, idx) => {
        if (item._class === "lecture") {
          tempList.push(item);
        }
        if (item._class === "chapter" || this.curriculumList.length - 1 === idx) {
          this.lectureList = [...this.lectureList, tempList];
          tempList = [];
        }
        // console.log(this.lectureList);
      });
    },
  },
  created() {
    this.fetchLectureCurriculum();
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
