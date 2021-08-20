<template>
    <header class="h-20 flex justify-between px-16 items-center">
        <div class="w-6/12">
            <ul class="flex justify-evenly">
                <div
                    v-for="item in leftMenu"
                    :key="item.text"
                    class="transition text-gray-500 hover:text-indigo-500 cursor-pointer font-medium"
                >
                    <v-icon v-if="item.icon" :name="item.icon" class="mr-2" />
                    <router-link :to="item.link">{{ item.text }}</router-link>
                </div>
            </ul>
        </div>
        <div class="w-4/12 flex items-center justify-between">
            <ul class="flex-1 mr-5 flex justify-evenly">
                <router-link :to="item.link" v-for="item in rightMenu" :key="item.icon">
                    <v-icon
                        :name="item.icon"
                        scale="1.2"
                        class="text-gray-600 hover:text-blue-500 transition"
                    />
                </router-link>
            </ul>
            <router-link
                to="/introduction"
                class="px-6 py-4 bg-blue-300 text-blue-700 hover:bg-indigo-200 transition duration-300 font-bold"
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
        rightMenu: [
            { link: "/", icon: "fa-facebook-f" },
            { link: "/", icon: "fa-telegram-plane" },
            { link: "/", icon: "fa-twitter" },
            { link: "/", icon: "fa-twitch" },
        ],
    }),
};
</script>

<style scoped lang="scss"></style>
