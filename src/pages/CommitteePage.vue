<script setup lang="ts">
import { useHead } from '@unhead/vue';

const props = defineProps<{
    name: string,
    id: string,
    agenda: string,
    chair?: {
        name: string,
        desc: string,
        imgpath: string
    },
    vicechair?: {
        name: string,
        desc: string,
        imgpath: string
    },
    vicechair2?: {
        name: string,
        desc: string,
        imgpath: string
    },
    moderator?: {
        name: string,
        desc: string,
        imgpath: string
    }
}>()

useHead({
    title: props.id?.toUpperCase() + " | GWH JMUN 2024"
})
</script>

<template>
    <main>
        <div class="mainimg" :class="'bg-'+props.id">
            <img :src="`/assets/committee_logos/${props.id}.png`" class="commlogo">
            <h1 class="commname">{{ props.name }}</h1>
            <div class="agenda">Agenda: {{ props.agenda }}</div>
        </div>
        <h1 class="eb-title">Executive Board</h1>
        <div class="eb">
            <div class="mem" v-if="chair!=undefined">
                <img src="">
                <h2 class="name">{{ props.chair!.name }}</h2>
                <h3 class="tl">Head Chair</h3>
                <span class="desc"></span>
            </div>
            <div class="mem" v-if="vicechair!=null">
                <img src="">
                <h2 class="name">{{ props.vicechair!.name }}</h2>
                <h3 class="tl">Vice Chair</h3>
                <span class="desc"></span>
            </div>
            <div class="mem" v-if="vicechair2!=null">
                <img src="">
                <h2 class="name">{{ props.vicechair2!.name }}</h2>
                <h3 class="tl">Vice Chair</h3>
                <span class="desc"></span>
            </div>
            <div class="mem" v-if="moderator!=null">
                <img src="">
                <h2 class="name">{{ props.moderator!.name }}</h2>
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
    padding: 75px 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
}

.commlogo {
    width: 300px;
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