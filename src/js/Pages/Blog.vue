<template>
  <main-layout>
    <template #content>
      <div>Blog</div>
    </template>
  </main-layout>
</template>

<script>
export default {
  components: {
    MainLayout: () => import("@/js/Layouts/MainLayout.vue")
  },
  mounted() {
    this.axios.get('https://newsapi.org/v2/everything?q=Apple&from=2021-08-23&sortBy=popularity&apiKey=bf9f65ad89b443759e0124b73eec4815').then(res=>console.log(res));
  }
};
</script>

<style scoped></style>
