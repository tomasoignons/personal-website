import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

// Height of the fixed header, so anchors don't end up hidden behind it
const HEADER_OFFSET = 80

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'Emmanuel - Software Engineer' }
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/Projects.vue'),
      meta: { title: 'Emmanuel Omont - Projects' }
    },
    {
      path: '/project/:id',
      name: 'project-detail',
      component: () => import('../views/ProjectDetailGeneric.vue')
    },
    {
      path: '/cv',
      name: 'cv',
      component: () => import('../views/CV.vue'),
      meta: { title: 'Emmanuel Omont - CV' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFound.vue'),
      meta: { title: 'Page Not Found - Emmanuel Omont' }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, top: HEADER_OFFSET, behavior: 'smooth' }
    return { top: 0 }
  }
})

router.afterEach((to) => {
  if (to.meta.title) document.title = to.meta.title
})

export default router
