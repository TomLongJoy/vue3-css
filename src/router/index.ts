import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import  TwoSection from "../views/two/TwoSection.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path:"/two",
      name:"two",
      component:TwoSection
    }
  ]
})

export default router
