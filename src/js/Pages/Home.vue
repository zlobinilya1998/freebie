<template>
    <main-layout>
        <template #content>
            <div class="introduction text-center h-96 pt-16">
                <p class="text-sm text-indigo-800 font-bold">PLAN YOUR LIFE</p>
                <h2 class="mt-5 text-4xl text-indigo-300">
                    Increase your <span class="text-indigo-500">productivity</span>
                </h2>
                <p class="mt-5 text-gray-500 line-clamp-3">
                    Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem
                    an, insolens gubergren similique est cu. Et vel modus congue vituperata.
                </p>
            </div>
        </template>
    </main-layout>
</template>

<script>
export default {
    components: {
        MainLayout: () => import("@/js/Layouts/MainLayout"),
    },
};
</script>

<style scoped lang="scss">
.introduction {
    background: linear-gradient(180deg, #f4f7ff 0%, #f1f5ff 100%);
}
</style>
