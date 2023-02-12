<template>
    <header class="header" id= "header">
        <nav class="nav container">
                <router-link to="/profile" href="#" class="nav_logo">
                    <img src="../assets/flitter-icon-whiteBgr.png">
                </router-link>
                
            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list">
                    <li class="nav__item">
                        <router-link to= "/" href="#home" class="nav__link">
                            <svg class= "nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                            <span class="nav__name">Logout</span>
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to= "/" href="#home" class="nav__link">
                            <svg class= "nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                            <span class="nav__name">Home</span>
                        </router-link>
                    </li>
                    <li class="nav__item">
                        <router-link to= "/profile" href="#home" class="nav__link">
                            <svg class= "nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg>
                            <span class="nav__name">Profile</span>
                        </router-link>
                    </li>

                    <!--  <li class="nav__item">
                        <router-link to="/test" href="#test" class="nav__link">
                            <svg class= "nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m13.293 2.707.818.818L3.318 14.318C2.468 15.168 2 16.298 2 17.5s.468 2.332 1.318 3.183C4.169 21.532 5.299 22 6.5 22s2.331-.468 3.182-1.318L20.475 9.889l.818.818 1.414-1.414-8-8-1.414 1.414zm3.182 8.354-2.403-2.404-1.414 1.414 2.403 2.404-1.414 1.415-.99-.99-1.414 1.414.99.99-1.415 1.415-2.403-2.404L7 15.728l2.403 2.404-1.136 1.136c-.945.944-2.59.944-3.535 0C4.26 18.795 4 18.168 4 17.5s.26-1.295.732-1.768L15.525 4.939l3.535 3.535-2.585 2.587z"></path></svg>
                            <span class="nav__name">TestView</span>
                        </router-link>
                    </li> -->

                    <li class="nav__item" v-if="!token">
                        <router-link to="/signup" href="#create" class="nav__link">
                            <svg class= "nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M16 2H8C4.691 2 2 4.691 2 8v13a1 1 0 0 0 1 1h13c3.309 0 6-2.691 6-6V8c0-3.309-2.691-6-6-6zm1 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></svg>
                            <span class="nav__name">Create/signup</span>
                        </router-link>
                    </li>

                    <li class="nav__item" v-if="!token">
                        <router-link to="/login" href="#about" class="nav__link">
                            <svg class= "nav__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M19 2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h4l3 3 3-3h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm-7 3c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zM7.177 16c.558-1.723 2.496-3 4.823-3s4.266 1.277 4.823 3H7.177z"></path></svg>
                            <span class="nav__name">Profile/login</span>
                        </router-link>
                    </li>

                </ul>
            </div>

            <!-- <img class="nav__img" src= "/assets/img/perfil.png" alt=""> -->
        </nav>
    </header>
</template>

<script>

export default {
    name: 'FooterNav',
    setup() {
        const token = localStorage.getItem("token")
    
    return {token}
    }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap");

:root {
--header-height: 50px;
--hue: 174;
--sat: 63%;
--first-color: hsl(var(--hue), var(--sat), 40%);
--first-color-alt: hsl(var(--hue), var(--sat), 36%);
--title-color: hsl(var(--hue), 12%, 15%);
--text-color: hsl(var(--hue), 8%, 35%);
--body-color: hsl(var(--hue), 100%, 99%);
--container-color: #FFF;

/*========== Font and typography ==========*/
--body-font: 'Open Sans', sans-serif;
--h1-font-size: 1.5rem;
--normal-font-size: .938rem;
--tiny-font-size: 13px;

/*========== z index ==========*/
--z-tooltip: 10;
--z-fixed: 100;
}

* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
html {
    scroll-behavior: smooth;
}

body {
    margin: var(--header-height) 0 0 0;
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    background-color: var(--body-color);
    color: var(--text-color);
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
}

header img {
    max-width: 20%;
    height: auto;
    
}

/*=============== REUSABLE CSS CLASSES ===============*/
.section {
    padding: 4.5rem 0 2rem;
}

.section__title {
    font-size: var(--h1-font-size);
    color: var(--title-color);
    text-align: center;
    margin-bottom: 1.5rem;
}

.section__height {
    height: 100vh;
}

.container {
    max-width: 968px;
    margin-left: 1rem;
    margin-right: 1rem;
}

/*=============== HEADER ===============*/
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background-color: black;
    }

    #nav__logo > img {
        width: 50px;
        position: absolute;
        align-self: flex-start;
    }

    img {
        border-radius: 50%;
    }

.nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

.nav__img {
    width: 32px;
    border-radius: 50%;
    }

.nav__logo {
    color: var(--title-color);
    font-weight: 600;
    }

@media screen and (max-width: 767px) {
.nav__menu {
        position: fixed;
        bottom: 0;
        left: 0;
        background-color: var(--container-color);
        box-shadow: 0 -1px 12px hsla(var(--hue), var(--sat), 15%, 0.15);
        width: 100%;
        height: 4rem;
        padding: 0 1rem;
        display: grid;
        align-content: center;
        border-radius: 1.25rem 1.25rem 0 0;
        transition: .4s;
    }
    }

.nav__list, 
.nav__link {
    display: flex;
    }

.nav__link {
    flex-direction: column;
    align-items: center;
    row-gap: 4px;
    color: var(--title-color);
    font-weight: 600;
    }

.nav__list {
    justify-content: space-around;
    }

.nav__name {
    font-size: var(--tiny-font-size);
    color: black;
    }

.nav__icon {
    font-size: 18px;
    }
</style>