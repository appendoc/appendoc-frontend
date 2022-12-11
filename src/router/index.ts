import {createRouter, createWebHistory, Router, RouterOptions} from "vue-router";
import routes from "@/router/routes";

const routerOptions: RouterOptions = {
    history: createWebHistory(),
    routes: routes
}

const router: Router = createRouter(routerOptions)

router.beforeEach((to, from, next) => {
    document.title = (to.meta.title || "Appendoc") as string
    next();
});

export default router;
