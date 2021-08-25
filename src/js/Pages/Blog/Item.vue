<template>
  <div
    class="flex flex-col justify-between bg-gray-100 p-4 rounded-md shadow-xl item relative"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="flex-1">
      <h3 class="font-bold text-blue-600">{{ item.title }}</h3>
      <p class="mt-5">{{ item.description }}</p>
    </div>
    <div
      class="flex text-indigo-500 p-2 bg-gray-200 justify-between items-center space-x-2 rounded-md mt-4"
    >
      <p class="font-bold">{{ item.source.name }}</p>
      <span class="flex space-x-2 items-center text-indigo-600">
        <v-icon name="fa-calendar-alt" />
        <p>{{ parseTime }}</p>
      </span>
    </div>
    <div
      class="animation flex items-center justify-end text-white pr-4 space-x-2"
      ref="animation"
    >
      <p class="font-bold">Read in source</p>
      <v-icon name="fa-arrow-circle-right" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  computed: {
    parseTime() {
      if (!this.item) return;
      return new Date(this.item.publishedAt).toLocaleDateString("en-Us", {
        year: "numeric",
        month: "short",
        day: "2-digit"
      });
    }
  },
  methods: {
    mouseEnter() {
      this.$refs.animation.style.bottom = "0";
    },
    mouseLeave() {
      this.$refs.animation.style.bottom = "-100px";
    }
  }
};
</script>

<style scoped>
.item {
  overflow: hidden;
}
.animation {
  position: absolute;
  background: #5050f6;
  height: 60px;
  width: 100%;
  left: 0;
  bottom: -100px;
  transition: all 0.3s;
  cursor: pointer;
}
</style>
