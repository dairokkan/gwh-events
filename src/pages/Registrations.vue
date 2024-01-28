<script setup>
const display = "active" //pending, active, elapsed
</script>

<template>
    <main>
        <div v-if="display=='pending'">
            <div class="pending">
                <h1>Registrations opening on 28th January.</h1>
                Due to unforeseen circumstances, the registration date has been pushed back. Read <a href="https://docs.google.com/document/d/1HJREGolCF2uzeF8WSqsMbv8kPYXZYY-3NFDP2BHgzgk/edit?usp=sharing" target="_blank">this notice</a> for more information.
            </div>
        </div>
        <div v-if="display=='active'" class="active-btn"> 
            <a href="https://paytm.me/W-pT3GA" target="_blank" class="reglink">
                <h2>Registrations</h2>
                Registrations will close once requisite numbers are reached, so register quickly!
                <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45"><path class="right-arrow" d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
            </a>
            <div class="reg-note">
                <div><h2>Note:</h2></div>
                <div>1. Due to a character limit in the email entry field, simply enter as many characters as will fit. Our registrations department will make the necessary changes. </div>
                <div>2. If your section is not present in the dropdown, add it in as a clarification in the MUN experience part of the form. </div>
                <div>3. Confirmation mails are currently not being sent - rest assured that if the PayTM screen is displayed, the payment has gone through. If you have not received your allocation past February 7th, feel free to reach out.</div>
            </div>
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

div.pending {
    text-align: center;
    padding: 250px 0
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
