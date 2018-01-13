import VueRouter from 'vue-router'

import HomeBackground from './components/pages/home/ZHomeBackground.vue'
import HomeForground from './components/pages/home/ZHomeForground.vue'

import ComplainsBackground from './components/pages/complains/ZComplainsBackground.vue'
import ComplainsForground from './components/pages/complains/ZComplainsForground.vue'

import PetitionsBackground from './components/pages/petitions/ZPetitionsBackground.vue'
import PetitionsForground from './components/pages/petitions/ZPetitionsForground.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            components: {
                default: HomeBackground,
                splash: HomeForground
            }
        },
        {
            path: '/complains',
            name: 'complains',
            components: {
                default: ComplainsBackground,
                splash: ComplainsForground
            }
        },
        {
            path: '/petitions',
            name: 'petitions',
            components: {
                default: PetitionsBackground,
                splash: PetitionsForground
            }
        }
    ]
});

export default router;

