<template>
    <transition name="slide-fade" appear>
        <div class="padding-10">

            <page-title name="WebMail"></page-title>

            <div>test</div>

        </div>
    </transition>
</template>

<script>
    import PageTitle from "./../../commons/PageTitle.vue"

    export default
    {
        components: {PageTitle}
    }
</script>
