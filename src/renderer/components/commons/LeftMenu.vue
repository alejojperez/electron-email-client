<template>
    <transition name="slide-fade-in" appear>
        <div id="left-menu-container">
            <aside class="menu padding-10">
                <p class="menu-label">Modules</p>

                <ul class="menu-list">
                    <li v-for="module in modules">
                        <a :href="'#'+module.url"><i :class="module.icon" class="margin-right-5"></i> {{ module.name }}</a>
                    </li>
                </ul>
            </aside>
        </div>
    </transition>
</template>

<script>
    import AppModulesRepository from "../../data/repositories/AppModulesRepository";
    import Constants from "./../../core/constants";

    export default {
        data: function () {
            return {
                name: Constants.APP_NAME,
                modules: AppModulesRepository.all(),
            };
        }
    }
</script>

<style lang="scss" scoped>
    .menu {
        margin-top: $global-top-menu-height;
    }
    .menu-label {
        color: aliceblue;
    }
    .menu-list a {
        color: #FFF;
    }
    .menu-list a:hover {
        background-color: rgba(31, 89, 186, .5);
    }

</style>
