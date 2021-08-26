<template>
  <div class="bg-gray-100 py-6 pl-3">
    <p class="font-medium text-sm text-indigo-500">Created by <span class="font-bold">Ilya Zlobin</span></p>
    <ul class="flex space-x-2 mt-3">
      <a :href="item.link" v-for="item in rightMenu" :key="item.icon">
        <v-icon
          :name="item.icon"
          scale="1.2"
          class="text-gray-600 hover:text-blue-500 transition"
        />
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    rightMenu: [
      { link: "https://github.com/zlobinilya1998", icon: "fa-github"},
      { link: "https://t.me/zlobinilya", icon: "fa-telegram-plane"},
      { link: "https://vk.com/id90455749", icon: "fa-vk"}
    ]
  })
};
</script>

<style scoped></style>
