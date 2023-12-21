<script setup lang="ts">
import { useHead } from '@unhead/vue';

const props = defineProps({
    name: String,
    id: String,
    agenda: String,
    chair: String,
    vicechair: String,
    moderator: String
})

useHead({
    title: props.name + " | GWH JMUN 2024"
})
</script>

<template>
    <main>
        <div class="mainimg" :class="'bg-'+props.id">
            <h1 class="commname">{{ props.name }}</h1>
            <div class="agenda">Agenda: {{ props.agenda }}</div>
        </div>
        <h1 class="eb-title">Executive Board</h1>
        <div class="eb">
            <div class="mem">
                <img src="">
                <h2 class="name">{{ props.chair }}</h2>
                <h3 class="tl">Head Chair</h3>
                <span class="desc"></span>
            </div>
            <div class="mem">
                <img src="">
                <h2 class="name">{{ props.vicechair }}</h2>
                <h3 class="tl">Vice Chair</h3>
                <span class="desc"></span>
            </div>
            <div class="mem">
                <img src="">
                <h2 class="name">{{ props.moderator }}</h2>
                <h3 class="tl">Moderator</h3>
                <span class="desc"></span>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 10px;
}

.mainimg {
    margin: 0 10px;
    border: 2px solid #3b3b3b;
    border-radius: 20px;
    padding: 125px 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
}

h1.commname {
    font-size: 3.5em;
    margin: 0;
}

.agenda {
    font-size: 1.75em;
}

h1.eb-title {
    text-align: center;
    font-size: 2.5em;
}

.eb {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0 15%;
    text-align: center;
}

.mem {
    width: 20%;
}

h2.name {
    font-size: 1.75em;
    margin: 0;
}

h3.tl {
    font-size: 1.25em;
    margin: 0;
    font-weight: normal;
}
</style>