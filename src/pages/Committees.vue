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
                <div class="commlink" :class="'bg-'+item.id">
                    <div class="detail">
                        <h1 class="commname">
                            {{ item.id.toUpperCase() }}
                        </h1>
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