<script setup lang="ts">
import { useHead } from '@unhead/vue';

useHead({
    title: 'GWH JMUN 2024'
})
</script>

<template>
    <main>
        <div class="mainimg">
            <h1 class="title">GWH JMUN 2024</h1>
            <h2 class="subtitle">For grades 6-8 only</h2>
            <h2 class="subtitle">Dates TBA</h2>
        </div>
        <h1>FLOW OF EVENTS</h1>
        <h1>LETTER FROM SECGEN</h1>
        <h1>LETTER FROM DIRGEN</h1>
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

h1.title {
    font-size: 3.5em;
    margin: 5px;
}

h2.subtitle {
    font-weight: normal;
    font-size: 1.75em;
    margin: 5px
}
</style>