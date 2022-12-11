import {RouteRecordRaw} from "vue-router";

const routes: Array<RouteRecordRaw> = [
    /** redirect 정의 */
    {
        name: "Home",
        path: "/",
        redirect: "/w/메인"
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: "/page-not-found"
    },

    /** 기능성 페이지들 정의 */
    {
        name: "위키",
        path: "/w/:documentName",
        meta: {
            title: "Appendoc"
        },
        component: () => import("@/views/WikiDocument.vue")
    },
    {
        name: "Page Not Found",
        path: "/page-not-found",
        component: () => import("@/views/NotFound.vue"),
        meta: {
            title: "페이지를 찾을 수 없어요."
        }
    }
]

export default routes;
