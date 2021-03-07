import { createRouter, createWebHistory } from "vue-router";
// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"
const routerHistory = createWebHistory()
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
// 路由数组
const routes = [
    { path: '/', redirect: '/home' }, //    { path: '', redirect: '/home' },
    // { path: '/home', component: Home },
    // { path: '/about/:aboutId', component: About },
    // { path: '/user/:abc', component: User },

    //方式一直接引用 
    // { path: '/home', component: () => import('../components/Home') },
    // { path: '/about/:aboutId', component: () => import('../components/About') },
    // { path: '/user/:abc', component: () => import('../components/User') },

    //方式二
    { path: '/home', component: Home },
    { path: '/about/:aboutId', component: About },
    { path: '/user/:abc', component: User },
]

const router = createRouter({
    history: routerHistory,
    routes: routes,
    linkActiveClass: 'active',
});
export default router