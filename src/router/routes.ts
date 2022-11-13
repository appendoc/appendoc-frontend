import {RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        name: "Home",
        path: "/",
        component: () => import("@/views/Home.vue"),
        meta: {
            title: "홈"
        }
    },
    {
        name: "Page",
        path: "/page",
        component: () => import("@/views/Page.vue"),
        meta: {
            title: "페이지"
        }
    }
]

export default routes;
