import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from './pages/Index.vue'
//import Team from './pages/Team.vue'
import Committees from "./pages/Committees.vue";
import Resources from "./pages/Resources.vue";
import CommitteePage from "./pages/CommitteePage.vue"
import * as comms from './committees.json'

const routes:RouteRecordRaw[] = [
    {path: '/', component: Index},
    //{path: '/team', component: Team},
    {path: '/committees', component: Committees},
    {path: '/resources', component: Resources},
    {path: '/:pathMatch(.*)*', redirect: "/",}
]

comms.list.forEach(element => {
    routes.push({path: `/committees/${element.id}`, component: CommitteePage, props: element})
});

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        return {top:0, left:0}
    }
})

export default router