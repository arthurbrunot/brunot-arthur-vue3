import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import MonsterDetail from '@/views/Detail/MonsterDetail.vue'
import MonstersListView from '@/views/Listing/MonstersListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monster/:id',
      name: 'MonsterDetail',
      component: MonsterDetail
    },
    {
      path: '/monsters',
      name: 'Monsters',
      component: MonstersListView
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      const element = document.getElementById(to.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return { el: element, behavior: 'smooth' }
      }
    }
    return { x: 0, y: 0 }
  }
})

export default router
