<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
#app {
    font-family: "Quicksand", sans-serif;
    overflow-y: hidden;
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
}
</style>
