import {createRouter, createWebHashHistory} from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomePage.vue')
        },
        {
            path: '/shop',
            name: 'shop',
            component: () => import('../views/ShopPage.vue')
        },
        {
            path: '/user',
            name: 'account',
            component: () => import('../views/UserPage.vue')
        },
        {
            path: '/:catchAll(.*)',
            name: '404',
            component: () => import('../views/error/NotFoundPage.vue')
        },
    ],
})
export default router