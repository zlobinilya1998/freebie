<template>
  <div class="text-gray-400 active relative" @mouseenter="showText = true" @mouseleave="showText = false">
    <v-icon name="fa-circle" scale=".75" />
    <transition name="fade">
      <p v-if="showText" class="absolute -left-16 top-0 p-2 bg-white rounded-md">Text</p>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      href: String,
      text: String
    }
  },
  data: () => ({
    showText: false
  })
};
</script>

<style scoped>
.active {
  color: red;
}
</style>
