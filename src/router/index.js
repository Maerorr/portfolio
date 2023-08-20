import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Works from '../views/Works.vue'

const routes = [
    {
        path: '/portfolio/',
        name: 'home',
        component: Home,
    },
    {
        path: '/portfolio/works',
        name: 'works',
        component: Works,
    },
    {
        path: '/portfolio/about',
        name: 'about',
        component: About,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router