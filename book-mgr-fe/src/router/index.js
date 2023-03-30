import { createRouter, createWebHashHistory } from 'vue-router';

// 前端路由
const routes = [{
        path: '/auth',
        name: 'Auth',
        component: () =>
            import ( /* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     component: () =>
    //         import ( /* webpackChunkName: "about" */ '../views/AboutView.vue'),
    // },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;