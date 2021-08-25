<template>
  <main-layout>
    <template #content>
      <div class="wrapper">
        <div class="container">
          <div
            v-if="news && !loading"
            class="grid grid-cols-1 md:grid-cols-2 grid-rows-auto gap-8 py-24 md:py-12 px-4"
          >
            <Item v-for="(item, index) in news" :item="item" :key="index" />
          </div>
          <div v-else-if="loading" class="absolute inset-1/2 text-indigo-500">
            <v-icon name="fa-spinner" animation="spin" scale="2" />
          </div>
          <div v-else>No news</div>
        </div>
      </div>
    </template>
  </main-layout>
</template>

<script>
export default {
  data: () => ({
    news: null,
    loading: false
  }),
  components: {
    MainLayout: () => import("@/js/Layouts/MainLayout.vue"),
    Item: () => import("@/js/Pages/Blog/Item.vue")
  },
  mounted() {
    this.loading = true;
    setTimeout(() => {
      this.axios
        .get(
          "https://newsapi.org/v2/everything?q=Apple&from=2021-08-23&sortBy=popularity&apiKey=bf9f65ad89b443759e0124b73eec4815"
        )
        .then(res => (this.news = res.data.articles))
        .finally(() => (this.loading = false));
    }, 1500);
  }
};
</script>

<style scoped>
.wrapper {
  background: #f5f8ff;
  min-height: 100vh;
}
</style>
