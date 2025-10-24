import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectDetail from '../views/ProjectDetail.vue'
import ProjectDetailGeneric from '../views/ProjectDetailGeneric.vue'

// Import individual project detail components (if they exist)
import DatINDetail from '../views/projects/DatINDetail.vue'
import MemeHaterDetail from '../views/projects/MemeHaterDetail.vue'
import HolyBotDetail from '../views/projects/HolyBotDetail.vue'
import MisterPowerPointDetail from '../views/projects/MisterPowerPointDetail.vue'
import DiscoDetail from '../views/projects/DiscoDetail.vue'
import BoundaryAIDetail from '../views/projects/BoundaryAIDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    // Specific project detail routes
    {
      path: '/project/datin',
      name: 'datin-detail',
      component: DatINDetail
    },
    {
      path: '/project/memehater',
      name: 'memehater-detail',
      component: MemeHaterDetail
    },
    {
      path: '/project/holybot',
      name: 'holybot-detail',
      component: HolyBotDetail
    },
    {
      path: '/project/mister-powerpoint',
      name: 'mister-powerpoint-detail',
      component: MisterPowerPointDetail
    },
    {
      path: '/project/disco-platform',
      name: 'disco-detail',
      component: DiscoDetail
    },
    {
      path: '/project/boundaryai-backend',
      name: 'boundaryai-detail',
      component: BoundaryAIDetail
    },
    // Generic fallback for any other project IDs
    {
      path: '/project/:id',
      name: 'project-detail-generic',
      component: ProjectDetailGeneric,
      props: true
    }
  ]
})

export default router