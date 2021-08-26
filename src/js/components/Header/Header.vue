<template>
  <header class="w-full fixed md:relative flex justify-end md:justify-between items-center p-2 md:p-4 z-10 border-b-2 border-indigo-500 header">
    <div class="hidden md:block">
      <ul class="flex space-x-4">
        <div v-for="item in leftMenu" :key="item.text">
          <router-link
            :to="item.link"
            class="transition text-gray-500 hover:text-indigo-500 cursor-pointer font-medium"
            >{{ item.text }}</router-link
          >
        </div>
      </ul>
    </div>
    <div class="md:hidden self-end cursor-pointer hover:text-indigo-500 transition hover:bg-indigo-200 p-2 rounded-md transition" :class="{'text-indigo-500 bg-indigo-200':navOpen}" @click="navOpen = !navOpen">
      <v-icon name="fa-bars"/>
    </div>
    <transition name="fade">
      <div class="fixed top-16 p-4 bg-indigo-200 rounded-md flex flex-col space-y-4 border-2 border-indigo-500" v-if="navOpen">
        <router-link v-for="link in leftMenu" :to="link.link" exact-path :key="link.text" class="hover:text-indigo-500 transition">{{link.text}}</router-link>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data: () => ({
    navOpen:false,
    leftMenu: [
      { text: "Home", link: "/home", icon: "fa-home" },
      { text: "Blog", link: "/blog", icon: "fa-th-large" },
      { text: "Features", link: "/features", icon: "fa-angellist" },
      { text: "Pricing", link: "/pricing", icon: "fa-dollar-sign" },
      { text: "Documentation", link: "/documentation", icon: "fa-file" }
    ],

  })
};
</script>

<style scoped>
  .header {
    background: aliceblue;
  }
  .router-link-active {
    color: #6366F1;
    font-weight: bolder;
  }
</style>
