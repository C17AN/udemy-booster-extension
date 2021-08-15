<template>
  <h1>강의 정보</h1>
</template>

<script>
export default {
  props: {
    id: String,
  },
  methods: {
    async fetchLectureCurriculum() {
      const proxyURLForDev = `/courses/?page=1&page_size=1`;
      const res = await fetch(proxyURLForDev, {
        method: "GET",
        headers: {
          Authorization: `Basic ${this.encodedSecret}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      // const data = await res.json();
      if (res.ok) {
        this.$store.commit("verifyApiKey");
      } else {
        this.isError = true;
        setTimeout(() => {
          this.isError = false;
        }, 3000);
      }
    },
  },
};
</script>

<style></style>
