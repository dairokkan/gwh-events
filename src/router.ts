import { createRouter, createWebHistory } from "vue-router";
import Index from './pages/Index.vue'
//import Team from './pages/Team.vue'
import Committees from "./pages/Committees.vue";
import Resources from "./pages/Resources.vue";
import CommitteePage from "./pages/CommitteePage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Index},
        //{path: '/team', component: Team},
        {path: '/committees', component: Committees},
        {path: '/resources', component: Resources},
        {path: '/committees/unsc', component: CommitteePage, props: {
            committee: "United Nations Security Council (UNSC)",
            agenda: "Discussing the current state of affairs of the Israel-Hamas war",
            bgpath: "bg-unsc",
            chair: "Harihar Prasad",
            vicechair: "Arya Poddar",
            moderator: "Nitesh Kothari"
        }},
        {path: '/committees/unhrc', component: CommitteePage, props: {
            committee: "United Nations Human Rights Council (UNHRC)",
            agenda: "Addressing the human rights crisis in Myanmar after the military coup of 2021",
            bgpath: "bg-unhrc",
            chair: "Veena Karthik",
            vicechair: "Anusha Baghla",
            moderator: "Anita Bhat"
        }},
        {path: '/committees/nato', component: CommitteePage, props: {
            committee: "North Atlantic Treaty Organization (NATO)",
            agenda: "Addressing Russian military activity in the Baltic states and Eastern Europe",
            bgpath: "bg-nato",
            chair: "Mukul N Kumar",
            vicechair: "Garvit Shah",
            moderator: "Vishruth Jasti"
        }},
        {path: '/committees/disec', component: CommitteePage, props: {
            committee: "Disarmament and International Security Council (DISEC)",
            agenda: "Discussing the state of nuclear proliferation in the Middle East concerning the presence of private military companies",
            bgpath: "bg-disec",
            chair: "Samhita Madakshira",
            vicechair: "Ashmit Singh",
            moderator: "Ishani Srinivas"
        }},
        {path: '/committees/unep', component: CommitteePage, props: {
            committee: "United Nations Environmental Programme (UNEP)",
            agenda: "Management of UN environmental goals in conflict-ridden areas with special reference to mercury, lead and nuclear waste",
            bgpath: "bg-unep",
            chair: "Riana Kapoor",
            vicechair: "Suhani Singh",
            moderator: "Prishaa Dharmarha"
        }},
        {path: '/committees/sochum', component: CommitteePage, props: {
            committee: "Social, Humanitarian and Cultural Committee (SOCHUM)",
            agenda: "Addressing the situation pertaining to the use of illegal human labour with special emphasis on Asia-Pacific-based and South Asian nations",
            bgpath: "bg-sochum",
            chair: "Riti Prabhu",
            vicechair: "Ayaan Gupta",
            moderator: "Sparsh Bhowmick"
        }},
        {path: '/committees/ccc', component: CommitteePage, props: {
            committee: "Continuous Crisis Committee (CCC)",
            agenda: "Beginning of operation \"Rolling Thunder\" [Freeze date - March 8, 1965]",
            bgpath: "bg-ccc",
            chair: "Ricardo Kesh",
            vicechair: "Daksh Aggarwal",
            moderator: "Anish Vivek"
        }},
        {path: '/committees/ipc', component: CommitteePage, props: {
            committee: "International Press Corps",
            agenda: "To report on contemporary geopolitics while representing different viewpoints",
            bgpath: "bg-ipc",
            chair: "Aarush Vyas",
            vicechair: "Anya Sapru",
            moderator: "Aarav Kejiriwal"
        }},
    ]
})

export default router