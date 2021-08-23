<template>
    <div class="mt-14 px-4 md:w-2/3 mx-auto">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data: () => ({
        Accordion: {
            count: 0,
            active: null,
        },
    }),
    provide() {
        return {
            Accordion: this.Accordion,
        };
    },
};
</script>

<style></style>
