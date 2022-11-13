import {createRouter, createWebHistory, Router, RouteRecordRaw, RouterOptions} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        name: "Home",
        path: "/",
        component: () => import("@/views/Home.vue")
    },
    {
        name: "Page",
        path: "/page",
        component: () => import("@/views/Page.vue")
    }
]

const routerOptions: RouterOptions = {
    history: createWebHistory(),
    routes: routes
}

const router: Router = createRouter(routerOptions)
export default router;
