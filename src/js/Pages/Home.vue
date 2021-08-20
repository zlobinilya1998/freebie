<template>
    <main-layout>
        <template #content>
            <section class="productivity text-center h-96 pt-16">
                <p class="text-sm text-indigo-800 font-bold" data-aos="fade-right">
                    PLAN YOUR LIFE
                </p>
                <h2 class="mt-5 text-4xl text-indigo-300" data-aos="fade-left">
                    Increase your <span class="text-indigo-500 font-medium">productivity</span>
                </h2>
                <p class="mt-5 text-gray-500 line-clamp-3">
                    Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem
                    an, insolens gubergren similique est cu. Et vel modus congue vituperata.
                </p>
            </section>
            <section class="h-32">
                <div class="container"></div>
            </section>
            <section class="plan py-32">
                <div class="container">
                    <div>
                        <p class="text-sm text-indigo-800 font-bold">DESKTOP AND MOBILE APP</p>
                        <h2 class="mt-5 text-4xl text-indigo-500">
                            Plan <span class="text-indigo-300">and</span> manage
                        </h2>
                        <p class="mt-5 text-indigo-400 opacity-75 line-clamp-3 w-2/6">
                            Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu
                            atqui laudem an, insolens gubergren similique est cu. Et vel modus
                            congue vituperata.
                        </p>
                        <div class="mt-10 flex">
                            <button
                                class="border-2 hover:text-gray-300 hover:bg-white hover:border-0 text-white bg-blue-500 p-4 flex items-center rounded-md transition mr-3"
                            >
                                <p class="mr-3 font-bold">View video</p>
                                <v-icon name="fa-play" scale=".75" />
                            </button>
                            <button
                                class="border-2 hover:text-gray-300 hover:bg-white hover:border-0 text-white bg-blue-500 p-4 flex items-center rounded-md transition mr-3"
                            >
                                <p class="font-bold">See features</p>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about py-32">
                <div class="container">
                    <div class="text-center">
                        <p class="text-sm text-indigo-600 font-bold">ABOUT US</p>
                        <h3 class="text-4xl mt-3 text-indigo-600 font-bold" data-aos="zoom-in">
                            Read about our app
                        </h3>
                    </div>

                    <div class="my-16 grid grid-cols-4 gap-16">
                        <div
                            v-for="(item, index) in about"
                            :key="item.text"
                            class="flex flex-col items-center mt-5"
                            data-aos="fade-up"
                            :data-aos-delay="500 + index * 100"
                        >
                            <div
                                class="rounded-full h-20 w-20 flex items-center justify-center bg-blue-50 text-blue-500"
                            >
                                <v-icon :name="item.icon" scale="1.5" />
                            </div>
                            <p class="mt-10 text-blue-500 font-bold">{{ item.text }}</p>
                            <p class="mt-5 text-center text-gray-400">{{ item.description }}</p>
                        </div>
                    </div>

                    <div class="flex justify-center mt-28">
                        <button
                            class="hover:text-gray-300 hover:bg-white hover:border-2 text-red-500 bg-red-200 p-4 flex items-center rounded-md transition mr-3"
                        >
                            <p class="font-bold">Read more</p>
                        </button>
                        <div class="flex mx-4 items-center">
                            <div class="w-8 h-0.5 bg-gray-200" />
                            <p class="mx-4 text-gray-400">OR</p>
                            <div class="w-8 h-0.5 bg-gray-200" />
                        </div>
                        <button
                            class="hover:text-gray-300 hover:bg-white text-blue-600 bg-blue-300 p-4 flex items-center rounded-md transition mr-3"
                        >
                            <p class="font-bold">Get started</p>
                        </button>
                    </div>
                </div>
            </section>
            <section class="flex">
                <div
                    class="w-1/2 bg-indigo-400 py-16 pr-20 flex flex-col items-end text-blue-100"
                    data-aos="fade-right"
                >
                    <v-icon name="fa-poll" scale="4" />
                    <div class="text-right pr-3">
                        <p class="text-4xl mt-3 font-bold">89%</p>
                        <p class="text-xl mt-3 font-medium">
                            Customers who have increased their productivity
                        </p>
                    </div>
                </div>
                <div class="w-1/2 bg-blue-100 py-16 pl-20 text-indigo-400" data-aos="fade-left">
                    <v-icon name="fa-users" scale="4" />
                    <div class="pl-3">
                        <p class="text-4xl mt-3 font-bold">3310</p>
                        <p class="text-xl mt-3 font-medium">Users who have used our application</p>
                    </div>
                </div>
            </section>
            <section class="py-24 questions">
                <div class="container text-center">
                    <p class="text-sm text-indigo-500 text-xl">Customer help</p>
                    <h3 class="text-lg text-indigo-500 font-bold text-3xl mt-4" data-aos="zoom-in">
                        Frequently asked questions
                    </h3>
                    <Accordion>
                        <AccordionItem v-for="item in accordion" :key="item.title">
                            <template #title>{{ item.title }}</template>
                            <template #content>{{ item.text }}</template>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </template>
    </main-layout>
</template>

<script>
export default {
    data: () => ({
        about: [
            {
                icon: "fa-home",
                text: "Overview",
                description: "Brute laoreet efficiendi id his, ea illum nonumes luptatum pro.",
            },
            {
                icon: "fa-file-alt",
                text: "Files",
                description:
                    "No vim nulla vitae intellegat. Ei enim error ius, solet atomorum conceptam ex has.",
            },
            {
                icon: "fa-comments",
                text: "Meeting chats",
                description: "Vim ne tacimates neglegentur. Erat diceret omittam at est.",
            },
            {
                icon: "fa-upload",
                text: "Save events",
                description: "Nisl idque mel ea, nominati voluptatum.",
            },
        ],
        accordion: [
            {
                title: "Reque insolens in vel?",
                text:
                    "So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?",
            },
            {
                title: "Vis rebum error graecis ea, id sit postea accusamus?",
                text:
                    "Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with unicode; an industry standard which creates the specification for thousands of different symbols and characters. All the characters that you see on your electronic devices, and printed in books, are likely specified by the unicode standard.",
            },
            {
                title: "Lorem repudiandae ne nec?",
                text:
                    "Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with unicode; an industry standard which creates the specification for thousands of different symbols and characters. All the characters that you see on your electronic devices, and printed in books, are likely specified by the unicode standard.",
            },
            {
                title: "Ad dicit numquam vel. Et eos iudico feugait percipitur?",
                text:
                    "Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. The explanation starts with unicode; an industry standard which creates the specification for thousands of different symbols and characters. All the characters that you see on your electronic devices, and printed in books, are likely specified by the unicode standard.",
            },
        ],
    }),
    components: {
        MainLayout: () => import("@/js/Layouts/MainLayout"),
        Accordion: () => import("@/js/components/Accordion/Index"),
        AccordionItem: () => import("@/js/components/Accordion/Item"),
    },
};
</script>

<style scoped lang="scss">
.plan {
    background: right top url("../../assets/background/plan/wave.png") no-repeat,
        linear-gradient(180deg, #f4f7ff 0%, #f1f5ff 100%);
    background-size: cover;
    background-attachment: fixed;
}
.productivity {
    background: left center url("../../assets/background/productivity/Ellipse.png") no-repeat,
        right top url("../../assets/background/productivity/Group 82.png") no-repeat,
        right 20% bottom url("../../assets/background/productivity/Group.png") no-repeat,
        left 20% bottom 20% url("../../assets/background/productivity/Group 83.png") no-repeat,
        right bottom 15% url("../../assets/background/productivity/Ellipse2.png") no-repeat,
        left 15% top 20% url("../../assets/background/productivity/Ellipse1.png") no-repeat, #f5f8ff;
}
.about {
    background: left top url("../../assets/background/about/Group81.png") no-repeat,
        right top url("../../assets/background/about/Group80.png") no-repeat,
        left bottom url("../../assets/background/about/Frame1.png") no-repeat;
}
.questions {
    background: right bottom url("../../assets/background/questions/clouds.png") no-repeat;
    background-size: contain;
}
</style>
