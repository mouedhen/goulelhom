import VueRouter from 'vue-router'

import HomeIndex from './components/pages/home/HomeIndex'

import ComplainsIndex from './components/pages/complains/ComplainsIndex'

import PetitionsIndex from './components/pages/petitions/PetitionsIndex'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: HomeIndex
            }
        },
        {
            path: '/complains',
            name: 'complains',
            components: {
                default: ComplainsIndex
            }
        },
        {
            path: '/petitions',
            name: 'petitions',
            components: {
                default: PetitionsIndex
            }
        }
    ]
});

export default router;

