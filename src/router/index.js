import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HabitList from '@/components/HabitList.vue'
import HabitsView from '@/views/HabitsView.vue'
import StatsView from '@/views/StatsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/stats',
    name:'stats',
    component:StatsView
  },
  {
    path:'/habits',
    name:'habits',
    component:HabitsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
