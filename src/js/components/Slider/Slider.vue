<template>
  <div>
    <div class="flex items-center justify-between space-x-8">
      <div
        @click="prevSlide"
        class="text-gray-500 cursor-pointer transition p-2 hover:bg-indigo-100 rounded-full"
      >
        <v-icon name="fa-arrow-left" scale="2" />
      </div>
      <transition name="slide" appear mode="out-in">
        <div
          class="h-96 bg-white flex-1 rounded-md p-4 shadow"
          :key="currentSlide"
        >
          <slot></slot>
        </div>
      </transition>
      <div
        @click="nextSlide"
        class="text-gray-500 cursor-pointer transition p-2 hover:bg-indigo-100 rounded-full"
      >
        <v-icon name="fa-arrow-right" scale="2" />
      </div>
    </div>
    <div class="flex mt-10 justify-center space-x-4">
      <div
        @click="clickonDot(index)"
        v-for="(item, index) in slides"
        class="text-gray-400 cursor-pointer"
        :class="{ 'text-indigo-500': index + 1 === currentSlide }"
      >
        <v-icon :key="item" name="fa-circle" scale=".75" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    currentSlide: 1,
    slides: [1, 2, 3]
  }),
  computed: {
    displayedSlide() {
      return this.slides[this.currentSlide - 1];
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlide == 1) return;
      this.currentSlide -= 1;
    },
    nextSlide() {
      if (this.currentSlide == this.slides.length) return;
      this.currentSlide += 1;
    },
    clickonDot(index) {
      this.currentSlide = index+1;
    }
  }
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
