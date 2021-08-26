<template>
  <div v-if="navigation.length" class="fixed inset-y-1/4 right-8 space-y-4">
    <Item v-for="(item,index) in navigation" :key="index" :item="item" />
  </div>
</template>

<script>
export default {
  props: {
    navigation: {
      type: Array,
      required:true,
    }
  },
  components: {
    Item: () => import("@/js/components/Navigation/Item")
  }
};
</script>

<style scoped></style>
