import { createRouter, createWebHashHistory } from 'vue-router';
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/home',
        },
        {
            path: '/home',
            component: () => import('@/pages/home/MyHome'),
        },
        {
            path: '/cart',
            component: () => import('@/pages/cart/MyCart'),
        },
        {
            path: '/me',
            component: () => import('@/pages/message/MyMessage'),
        },
        {
            path: '/order',
            component: () => import('@/pages/order/MyOrder'),
        },
        {
            path: '/store',
            component: () => import('@/pages/store/StoreInfo'),
        },
        {
            path: '/createorder',
            component: () => import('@/pages/createOrder/createOrder'),
        },
        {
            path: '/address',
            component: () => import('@/pages/address/Address'),
        },
        {
            path: '/addressEdit',
            component: () => import('@/pages/addressEdit/addressEdit'),
        }
    ],
});
export default router;
