import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home"
import About from "../components/About"
import User from "../components/User"
const routerHistory = createWebHistory()
// 路由数组
const routes = [
    { path: '/', redirect: '/home' }, //    { path: '', redirect: '/home' },
    // { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about/:aboutId', component: About },
    { path: '/user/:abc', component: User }
]

const router = createRouter({
    history: routerHistory,
    routes: routes,
    linkActiveClass: 'active',
});
export default router