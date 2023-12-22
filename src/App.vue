<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const width = ref(window.innerWidth)
const mobile_menu_shown = ref(false)
window.addEventListener("resize", () => {
    width.value = window.innerWidth
})

const route = useRoute()
watch(
  () => route.fullPath,
  async () => {
    mobile_menu_shown.value = false
  }
)
</script>

<template>
    <header class="navbar">
        <div class="desktop-nav" v-if="width>450">
            <img src="./assets/gwhmun_logo.png" class="navbar-logo">
            <ul class="links">
                <li><RouterLink to="/">Home</RouterLink></li>
                <!--<li><RouterLink to="/team">Team</RouterLink></li>-->
                <li><RouterLink to="/committees">Committees</RouterLink></li>
                <li><RouterLink to="/resources">Resources</RouterLink></li>
            </ul>
        </div>
        <div class="mobile-nav" v-else>
            <img src="./assets/gwhmun_logo.png" class="navbar-logo">
            <button class="nav-show" @click="mobile_menu_shown=true"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
        </div>
    </header>
    <div class="mobile-menu" v-if="mobile_menu_shown">
            <ul class="links">
                <li><button class="nav-hide" @click="mobile_menu_shown=false"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></li>
                <li><RouterLink to="/">Home</RouterLink></li>
                <!--<li><RouterLink to="/team">Team</RouterLink></li>-->
                <li><RouterLink to="/committees">Committees</RouterLink></li>
                <li><RouterLink to="/resources">Resources</RouterLink></li>
            </ul>
        </div>
    <RouterView/>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

body {
    font-family: 'Raleway', sans-serif;
    background-color: #1a1a1a;
    color: #fff;
}

header.navbar {
    height: 60px;
    background-color: #1a1a1a;
    position: sticky;
    top: 0;
    padding: 10px
}

.desktop-nav {  
    display: flex;
    align-items: center;
    flex-direction: row;
}

.mobile-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.navbar-logo {
    height: 45px;
    width: auto;
}

.mobile-menu {
    position: absolute;
    top:0;
    left:0;
    background-color: #1a1a1a;
    height: 100%;
    width: 100%;
}

ul.links {
    list-style: none;
    padding: 0;
    font-size: 1.2em;
}

ul.links li {
    padding: 10px;
    display: inline;
}

ul.links li a {
    color: #fff;
    text-decoration: none;
}

ul.links li a:hover {
    color: #b4d0d4;
}

.mobile-menu > ul.links {
    margin: 100px 50px;
    text-align: center;
    display: flex;
    flex-direction: column;
    font-size: 1.6em;
}

button.nav-show, button.nav-hide {
    background-color: #1a1a1a;
    border: 0px
}

button.nav-show path, button.nav-hide path {
    fill: #fff;
}
</style>