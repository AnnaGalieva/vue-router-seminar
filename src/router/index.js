import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Contact from '@/pages/Contact.vue'
import NotFound from '@/pages/NotFound.vue'
import Catalog from '@/pages/Catalog.vue'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/About',
        name: 'About',
        component: About
    },
    {
        path: '/Contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/Catalog/:pageNumber?',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router