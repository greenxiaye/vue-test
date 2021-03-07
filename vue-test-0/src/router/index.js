import { createRouter, createWebHistory } from "vue-router";
// import Home from "../components/Home"
// import About from "../components/About"
// import User from "../components/User"
const routerHistory = createWebHistory()
// 路由懒加载
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
// 路由数组
const routes = [
    { path: '', redirect: '/home' }, //    { path: '', redirect: '/home' },
    // { path: '/home', component: Home },
    // { path: '/about/:aboutId', component: About },
    // { path: '/user/:abc', component: User },

    //方式一直接引用 
    // { path: '/home', component: () => import('../components/Home') },
    // { path: '/about/:aboutId', component: () => import('../components/About') },
    // { path: '/user/:abc', component: () => import('../components/User') },

    //方式二
    {
        path: '/home', component: Home, children: [
            // 注意这里重定向绝对不要写'/',因为重定向想的路径和news和message属于同级目录
            { path: '', redirect: '/home/home_news' },
            { path: 'home_news', component: HomeNews },
            { path: 'home_message', component: HomeMessage }
        ]
    },
    { path: '/about/:aboutId', component: About },
    { path: '/user/:abc', component: User },
    { path: "/profile", component: Profile }
]

const router = createRouter({
    history: routerHistory,
    routes: routes,
    linkActiveClass: 'active',
});
export default router