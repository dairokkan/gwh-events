<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
    title: 'Committees | GWH JMUN 2024'
})
</script>

<template>
    <main>
        <RouterLink to="/committees/unsc">
            <div class="commlink bg-unsc">
                <div class="detail">
                    <h1 class="commname">
                        UNSC
                    </h1>
                    <span class="agenda">
                        Agenda: Discussing the current state of affairs of the Israel-Hamas war
                    </span>    
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/committees/unhrc">
            <div class="commlink bg-unhrc">
                <div class="detail">
                    <h1 class="commname">
                        UNHRC
                    </h1>
                    <span class="agenda">
                        Agenda: Addressing the human rights crisis in Myanmar after the military coup of 2021
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/committees/nato">
            <div class="commlink bg-nato">
                <div class="detail">
                    <h1 class="commname">
                        NATO
                    </h1>
                    <span class="agenda">
                        Agenda: Addressing Russian military activity in the Baltic states and Eastern Europe
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/committees/disec">
            <div class="commlink bg-disec">
                <div class="detail">
                    <h1 class="commname">
                        DISEC
                    </h1>
                    <span class="agenda">
                        Agenda: Discussing the state of nuclear proliferation in the Middle East concerning the presence of private military companies
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/committees/unep">
            <div class="commlink bg-unep">
                <div class="detail">
                    <h1 class="commname">
                        UNEP
                    </h1>
                    <span class="agenda">
                        Agenda: Management of UN environmental goals in conflict-ridden areas with special reference to mercury, lead and nuclear waste
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/committees/sochum">
            <div class="commlink bg-sochum">
                <div class="detail">
                    <h1 class="commname">
                        SOCHUM
                    </h1>
                    <span class="agenda">
                        Agenda: Addressing the situation pertaining to the use of illegal human labour with special emphasis on Asia-Pacific-based and South Asian nations
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/committees/ccc">
            <div class="commlink bg-ccc">
                <div class="detail">
                    <h1 class="commname">
                        CCC
                    </h1>
                    <span class="agenda">
                        Agenda: Beginning of operation "Rolling Thunder" [Freeze date - March 8, 1965]
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </div>
            </div>
        </RouterLink>
        <RouterLink to="/committees/ipc">
            <div class="commlink bg-ipc">
                <div class="detail">
                    <h1 class="commname">
                        IPC
                    </h1>
                    <span class="agenda">
                        Agenda: To report on contemporary geopolitics while representing different viewpoints
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                </div>
            </div>
        </RouterLink>
    </main>
</template>

<style scoped>
main {
    padding: 10px
}

.commlink {
    border: 2px solid #3b3b3b;
    border-radius: 25px;
    padding: 10px;
    margin-bottom: 15px;
}

.commlink > .detail {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

.commlink > .detail > .commname {
    margin: 0;
    padding: 25px;
    width: 150px;
    border-right: 1px solid #5b5b5b;
}

.commlink > .detail > .agenda {
    padding: 25px;
    width: 50%;
    font-size: 1.2em;
    text-align: center;
}

a {
    text-decoration: none;
    color: #fff;
}

path.right-arrow {
    fill: #fff;
}
</style>

<style>

.bg-unsc {
    background: url('../assets/unsc-img.png');
    background-size: 100%;
    background-position: center;
}

.bg-unhrc {
    background: url('../assets/unhrc-img.png');
    background-size: 100%;
    background-position: center;
}

.bg-nato {
    background: url('../assets/nato-img.png');
    background-size: 100%;
    background-position: center;
}

.bg-disec {
    background: url('../assets/disec-img.png');
    background-size: 100%;
    background-position: center;
}

.bg-unep {
    background: url('../assets/unep-img.png');
    background-size: 100%;
    background-position: center;
}

.bg-sochum {
    background: url('../assets/sochum-img.png');
    background-size: 100%;
    background-position: center;
}

.bg-ccc {
    background: url('../assets/ccc-img.png');
    background-size: 100%;
    background-position: bottom;
}

.bg-ipc {
    background: url('../assets/ipc-img.png');
    background-size: 100%;
    background-position: center;
}
</style>