<template>
    <section id="app-container">
        <section id="left-menu">
            <left-menu></left-menu>
        </section>

        <section id="top-menu">
            <top-menu></top-menu>
        </section>

        <section id="pages-content">
            <router-view></router-view>
        </section>
    </section>
</template>

<script>
    import LeftMenu from "./components/commons/LeftMenu.vue"
    import TopMenu from "./components/commons/TopMenu.vue"

    export default
    {
        components: {LeftMenu, TopMenu},
    }
</script>

<style lang="scss">

    /**
     * Global Scss to be included in all Vue components
     */
    @import "~bulma/css/bulma.css";
    @import "~font-awesome/css/font-awesome.css";
    @import "./assets/css/app.css";
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    body {
        background: rgba(229, 229, 229, .9) !important;
        font-family: 'Source Sans Pro', sans-serif;
        height: 100vh;
        width: 100vw;
    }

    #left-menu::before {
        background-color: rgba(37, 89, 186, 0.8);
        content: '';
        display: block;
        height: 100%;
        position: absolute;
        width: 100%;
        z-index: -1;
    }
    #left-menu {
        background: #FFF url("assets/images/left_menu_background.jpeg") no-repeat bottom;
        background-size: auto 300px;
        bottom: 0;
        box-shadow: rgba(0, 0, 0, .6) 1px 0 1px;
        position: fixed;
        top: 0;
        transition: all .5s ease;
        width: $global-left-menu-width;
    }
    #pages-content {
        bottom: 0;
        left: $global-left-menu-width;
        position: fixed;
        right: 0;
        top: $global-top-menu-height;
        transition: all .5s ease;
    }

</style>