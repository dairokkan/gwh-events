<script setup>
const display = "pending" //pending, active, elapsed
</script>

<template>
    <main>
        <div v-if="display=='pending'">
            <h1>Registrations opening on 24th January.</h1>
        </div>
        <div v-if="display=='active'" class="active-btn"> 
            <a href="https://paytm.me/W-pT3GA" target="_blank">
                <h2>Registrations</h2>
                Registrations will close once requisite numbers are reached, so register quickly!
                <div></div>
                <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </a>
        </div>
        <div v-if="display=='elapsed'">
            <h1>Registrations have closed.</h1>
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 10px;
}

h1 {
    font-size: 2.5em;
    text-align: center;
    padding: 250px 0
}

a {
    border: 2px solid #3b3b3b;
    border-radius: 25px;
    padding: 60px;
    text-decoration: none;
    color: #fff;
    font-size: 1.25em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

a > svg {
    height: 40px;
    padding: 10px;
}

path.right-arrow {
    fill: #fff;
}

.active-btn {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

a > h2 {
    font-size: 2.25em;
    font-weight: bold;
    margin: 10px
}
</style>