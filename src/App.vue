<script setup lang="ts">

</script>

<template>
    <header class="navbar">
        <div class="navbar-container">
            <img src="./assets/gwhmun_logo.png" class="navbar-logo">
        </div>
        <ul class="links">
            <li><RouterLink to="/">Home</RouterLink></li>
            <!--<li><RouterLink to="/team">Team</RouterLink></li>-->
            <li><RouterLink to="/committees">Committees</RouterLink></li>
            <li><RouterLink to="/resources">Resources</RouterLink></li>
        </ul>
    </header>
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
    width: 100%;
    height: 60px;
    background-color: #1a1a1a;
    position: sticky;
    display: flex;
    align-items: center;
    top: 0;
}

.navbar-container {
    padding: 0 10px;
}

.navbar-logo {
    height: 45px;
    width: auto;
}

ul.links {
    display: inline;
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
</style>