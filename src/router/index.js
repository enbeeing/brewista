import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FaveView from '../views/FavesView.vue'
import PickCoffeeView from '../views/newBrew/PickCoffeeView.vue'
import PickMethodView from '../views/newBrew/PickMethodView.vue'
import FirstStep from '../views/newBrew/guide/FirstStepView.vue'
import SecondStep from '../views/newBrew/guide/SecondStepView.vue'
import ThirdStep from '../views/newBrew/guide/ThirdStepView.vue'
import FourthStep from '../views/newBrew/guide/FourthStepView.vue'

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
    path: '/guide/1',
    name: 'Guide1',
    component: FirstStep,
    props: true
  },
  {
    path: '/guide/2',
    name: 'Guide2',
    component: SecondStep,
    props: true
  },
  {
    path: '/guide/3',
    name: 'Guide3',
    component: ThirdStep,
    props: true
  },
  {
    path: '/guide/4',
    name: 'Guide4',
    component: FourthStep,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
