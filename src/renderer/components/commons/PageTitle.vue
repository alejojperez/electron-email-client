<template>
    <section class="margin-bottom-15">
        <h1 class="title">{{ title }}</h1>
    </section>
</template>

<script>
    import Constants from "./../../core/constants";

    export default {

        props: ["name"],

        computed: {
            title() {
                return this.name || "No Title"
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
