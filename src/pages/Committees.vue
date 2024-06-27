<script setup lang="ts">
import { useHead } from '@unhead/vue';
import * as comms from '../committees.json'

useHead({
    title: 'Committees | GWH JMUN 2024'
})
</script>

<template>
    <main>
        <div v-for="item in comms.list">
            <RouterLink :to="'/committees/'+item.id">
                <div class="commlink" :style="`background: url('/assets/bg_imgs/${item.id}-img.webp'); background-size: cover;  background-position: center; background-repeat: no-repeat;`">
                    <div class="detail">
                        <img :src="`/assets/committee_logos/${item.id}.png`" class="commlogo">
                        <h1 class="commname">{{ item.id.split('-').join(' ').toUpperCase() }}</h1>
                        <span class="agenda">
                            Agenda: {{ item.agenda }}
                        </span>    
                        <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                    </div>
                </div>
            </RouterLink>
        </div>
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

.commlogo {
    width: 100px;
}

.commlink > .detail {
    width: inherit;
    height: inherit;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

@media(min-width: 500px) {
    .commlink > .detail {
        flex-direction: row;
    }
}

@media(max-width:500px) {
    .commlink > .detail {
        flex-direction: column;
    }
}

.commlink > .detail > .commname {
    padding: 25px;
    width: 150px;
    margin: 0;
    text-align: center;
}

@media(min-width: 500px) {
    .commlink > .detail > .commname {
        border-right: 1px solid #5b5b5b;
    }
}

@media(max-width: 500px) {
    .commlink > .detail > .commname {
        border-bottom: 1px solid #5b5b5b;
    }
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