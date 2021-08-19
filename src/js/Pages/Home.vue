<template>
    <main-layout>
        <template #content>Content from HOME</template>
    </main-layout>
</template>

<script>
export default {
    components: {
        MainLayout: () => import("@/js/Layouts/MainLayout"),
    },
};
</script>

<style></style>
