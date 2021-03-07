import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home"
import About from "../components/About"
const routerHistory = createWebHistory()
const routes = [
    { path: '/', redirect: '/home' }, //    { path: '', redirect: '/home' },
    // { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/about', component: About },
]

export default createRouter({
    history: routerHistory,
    routes: routes,
    linkActiveClass: 'active',
});
