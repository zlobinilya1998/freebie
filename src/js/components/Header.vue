<template>
    <header class="h-20 flex justify-between px-16 items-center">
        <div class="w-6/12">
            <ul class="flex justify-evenly">
                <div
                    v-for="item in leftMenu"
                    :key="item.text"
                    class="transition text-gray-500 hover:text-indigo-500 cursor-pointer"
                >
                    <v-icon v-if="item.icon" :name="item.icon" class="mr-2" />
                    <router-link :to="item.link">{{ item.text }}</router-link>
                </div>
            </ul>
        </div>
        <div class="w-4/12">
            <router-link to="/introduction" class="px-6 py-4 bg-blue-300 text-blue-700"
                >Get started</router-link
            >
        </div>
    </header>
</template>

<script>
export default {
    data: () => ({
        leftMenu: [
            { text: "Home", link: "/", icon: "fa-home" },
            { text: "Blog", link: "/blog", icon: "fa-th-large" },
            { text: "Features", link: "/features", icon: "fa-angellist" },
            { text: "Pricing", link: "/pricing", icon: "fa-dollar-sign" },
            { text: "Documentation", link: "/documentation", icon: "fa-file" },
        ],
    }),
};
</script>

<style scoped lang="scss"></style>
