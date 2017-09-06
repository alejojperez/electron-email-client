import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/modules',
            name: 'modules-page',
            component: require('@/components/pages/ModulesPage'),
        },
        {
            path: '/modules/web-mail',
            name: 'modules-web-mail-page',
            component: require('@/components/pages/modules/WebMailPage')
        },
        {
            path: '*',
            redirect: '/modules'
        }
    ],
    mode: "hash"
});
