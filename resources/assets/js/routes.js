import VueRouter from 'vue-router'

import HomeIndex from './components/pages/home/HomeIndex'
import ComplainsIndex from './components/pages/complains/ComplainsIndex'
import PetitionsIndex from './components/pages/petitions/PetitionsIndex'
import MunicipalitiesIndex from './components/pages/municipalities/MunicipalitiesIndex'

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
        },
        {
            path: '/municipalities',
            name: 'municipalities',
            components: {
                default: MunicipalitiesIndex
            }
        },
    ]
});

export default router;

