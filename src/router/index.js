import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaveView from '../views/FavesView.vue'
import PickCoffeeView from '../views/newBrew/PickCoffeeView.vue'
import PickMethodView from '../views/newBrew/PickMethodView.vue'
import GuideView from '../views/newBrew/GuideView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/favorites',
    name: 'Faves',
    component: FaveView
  },
  {
    path: '/coffee',
    name: 'Coffee',
    component: PickCoffeeView
  },
  {
    path: '/method',
    name: 'Method',
    component: PickMethodView,
    props: true
  },
  {
    path: '/guide',
    name: 'Guide',
    component: GuideView,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
