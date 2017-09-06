<template>
    <transition name="slide-fade" appear>
        <div class="padding-10">

            <page-title name="Modules"></page-title>

            <div class="columns" v-for="modules in chunkedModules">
                <div v-for="module  in modules" class="column" :class="'is-'+ (12 / columnsSize)">
                    <a :href="'#'+module.url">
                        <div class="box text-center">
                            <nav class="level">
                                <div class="level-left">
                                    <div class="level-item">
                                        <i class="fa-2x" :class="module.icon"></i>
                                    </div>
                                    <div class="level-item">
                                        <div class="content">
                                            <h3 class="margin-bottom-0">{{ module.name }}</h3>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
    import AppModulesRepository from "../../data/repositories/AppModulesRepository";
    import PageTitle from "./../commons/PageTitle.vue"
    import chunk from "chunk";

    export default
    {
        data: function ()
        {
            return {
                columnsSize: 4,
                modules: AppModulesRepository.all(),
            };
        },

        computed: {
            chunkedModules() {
                return chunk(this.modules, this.columnsSize)
            }
        },

        components: {PageTitle}
    }
</script>
