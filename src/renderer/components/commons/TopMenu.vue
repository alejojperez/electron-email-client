<template>
    <div class="top-menu-container">
        <nav class="navbar">
            <div class="navbar-brand">
                <a class="navbar-item" href="#/">{{ name }}</a>
            </div>

            <div class="navbar-menu">
                <div class="navbar-start">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link is-active" href="/documentation/overview/start/">Docs</a>
                        <div class="navbar-dropdown">
                            <a class="navbar-item " href="/documentation/overview/start/">Overview</a>
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <a class="navbar-item" href="https://github.com/jgthms/bulma" target="_blank">
                        <span class="icon" style="color: #333;"><i class="fa fa-github"></i></span>
                    </a>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    import Constants from "./../../core/constants";

    export default {
        data: function () {
            return {
                name: Constants.APP_NAME,
            };
        }
    }
</script>

<style lang="scss" scoped>
    .navbar {
        border-bottom: 1px solid rgba(0, 0, 0, .2);
    }
</style>
