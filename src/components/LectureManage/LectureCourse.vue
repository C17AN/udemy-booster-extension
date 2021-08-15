<template>
  <h1>강의 목록</h1>
  <div>{{ id }}</div>
  <ul>
    <li v-for="curriculum in curriculumList" :key="curriculum.id">
      <span>{{ curriculum.title }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    id: String,
  },
  data() {
    return {
      curriculumList: [],
    };
  },
  methods: {
    async fetchLectureCurriculum() {
      const proxyURLForDev = `/courses/${this.id}/public-curriculum-items/`;
      const res = await fetch(proxyURLForDev, {
        method: "GET",
        headers: {
          Authorization: `Basic ${this.encodedSecret}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      this.curriculumList = data.results;
    },
  },
  created() {
    this.fetchLectureCurriculum();
    console.log(this.id);
  },
};
</script>

<style></style>
