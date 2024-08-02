<script setup>
import { useHead } from '@unhead/vue';
const display = "active" //pending, active, elapsed

useHead({
    title: 'Registrations | GWHMUN 2024'
})
</script>

<template>
    <main>
        <div v-if="display=='pending'">
            <div class="pending">
                <h1>Registrations not yet open.</h1>
            </div>
        </div>
        <div v-if="display=='active'" class="active-btn"> 
            <a href="https://forms.gle/Gh3uKRvYpeR2kgDZ8" target="_blank" class="reglink">
                <h2>Delegation Registrations</h2>
                Registrations will close once requisite numbers are reached, so register quickly!
                <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </a>
            <div class="reg-note">
                <div><h2>Requirements for Delegation Registrations:</h2></div>
                <div>1. The delegation needs to be associated with a school.</div>
                <div>2. There needs to be a minimum of 3 delegates and a maximum of 20 delegates </div>
                <div>3. The delegation must have a faculty advisor.</div>
            </div>
        </div>
        <div v-if="display=='elapsed'" class="pending">
            <h1>Registrations have closed.</h1>
            <p>Thank you for the overwhelming response.</p>
            <p>Allocations are out!</p>
        </div>
    </main>
</template>

<style scoped>
main {
    padding: 10px;
}

div.pending {
    text-align: center;
    padding: 250px 0;
    font-size: 1.25em;
}

div.pending > h1 {
    font-size: 2.5em
}

a.reglink {
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

a.reglink > svg {
    height: 40px;
    padding: 10px;
}

path.right-arrow {
    fill: #fff;
}

.active-btn {
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

a > h2 {
    font-size: 2.25em;
    font-weight: bold;
    margin: 10px
}

.reg-note {
    text-align: center;
    padding: 10px 10%;
}

.reg-note > div {
    padding: 5px 0;
    font-size: 1.1em;
}
</style>
