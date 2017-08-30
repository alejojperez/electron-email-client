<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'AdminUJV'
  }
</script>

<style lang="scss">

    /**
     * Global Scss to be included in all Vue components
     */

    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    };

    body {
        background: radial-gradient(
                        ellipse at top left,
                        rgba(255, 255, 255, 1) 40%,
                        rgba(229, 229, 229, .9) 100%
        ) !important;
        font-family: 'Source Sans Pro', sans-serif;
        height: 100vh;
        width: 100vw;
    }
</style>