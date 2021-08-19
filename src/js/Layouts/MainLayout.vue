<template>
    <div>
        <Header />
        <slot name="content">Default content main</slot>
    </div>
</template>

<script>
export default {
    components: {
        Header: () => import("@/js/components/Header"),
    },
};
</script>

<style></style>
