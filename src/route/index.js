import MyHome from "@/components/MyHome.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [{
    path: '/MyHome',
    name: MyHome,
    component: MyHome
}, {
    path: '/',
    redirect: '/MyHome'
}, {
    path: '/TheWelcome',
    component: TheWelcome
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router