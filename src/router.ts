import { createRouter, createWebHistory } from "vue-router";
import Index from './pages/Index.vue'
import Team from './pages/Team.vue'
import Committees from "./pages/Committees.vue";
import Resources from "./pages/Resources.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Index},
        {path: '/team', component: Team},
        {path: '/committees', component: Committees},
        {path: '/resources', component: Resources}
    ]
})

export default router