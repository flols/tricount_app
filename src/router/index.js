import { createRouter, createWebHistory } from "vue-router"
import Depense from '../components/Depense.vue'
//import Equilibre from '../components/Equilibre.vue'


const routes = [
  { path: '/', name: 'Depense', component: Depense },
  //{path: '/equilibre', name: 'Equilibre', component: Equilibre}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router