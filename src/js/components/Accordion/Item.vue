<template>
    <div
        class="accordion__item pb-4 mb-4 border-b-2 transition"
        @click="open"
        :class="{ 'border-indigo-500': visible }"
    >
        <div
            class="flex items-center cursor-pointer transition"
            :class="{ 'text-indigo-500': visible }"
        >
            <span
                class="mr-4 transition duration-300"
                :style="{ transform: visible ? 'rotate(180deg)' : null }"
            >
                <v-icon name="fa-chevron-down" />
            </span>
            <p class="text-xl font-medium">
                <slot name="title">Default title</slot>
            </p>
        </div>
        <transition
            name="accordion"
            @enter="start"
            @after-enter="end"
            @before-leave="start"
            @after-leave="end"
        >
            <div v-if="visible" class="pl-16 text-left text-gray-500 font-medium">
                <slot name="content">Content</slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    inject: ["Accordion"],
    data: () => ({
        index: null,
    }),
    computed: {
        visible() {
            return this.index == this.Accordion.active;
        },
    },
    methods: {
        open() {
            if (this.visible) {
                this.Accordion.active = null;
            } else {
                this.Accordion.active = this.index;
            }
        },
        start(el) {
            el.style.height = el.scrollHeight + "px";
        },
        end(el) {
            el.style.height = "";
        },
    },
    created() {
        this.index = this.Accordion.count++;
    },
};
</script>

<style lang="scss">
.accordion__item {
    cursor: pointer;
    position: relative;
}
.accordion-enter-active,
.accordion-leave-active {
    transition: all 0.3s;
    overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
    height: 0 !important;
    opacity: 0;
}
</style>
