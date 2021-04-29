import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/views/PageNotFound';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    linkExactActiveClass: 'active', // active class for *exact* links.
    routes: [
        {
            path: '/',
            redirect: '/search',
        },
        {
            path: '/search',
            name: 'search',
            component: () =>
                import('./views/Videos.vue'),
        },
        {
            path: '/channel/:id',
            name: 'channel-page',
             props: true,
            component: () =>
                import('./views/Channel.vue'),
        },
        {
            path: '*',
            component: PageNotFound,
        },
    ],
});
