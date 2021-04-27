import Vue from 'vue';
import Router from 'vue-router';
import PageNotFound from '@/views/page-not-found';

Vue.use(Router);

//  const parseProps = r => ({ query: parseInt(r.params.query) });

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
            // props: parseProps,
            // props: true,
            component: () =>
                import('./views/search-result.vue'),
        },
        {
            path: '/channel/:id',
            name: 'channel-page',
             props: true,
           // props: parseProps,
            component: () =>
                import('./views/channel.vue'),
        },
        {
            path: '*',
            component: PageNotFound,
        },
    ],
});
