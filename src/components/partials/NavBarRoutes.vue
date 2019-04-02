<template lang="html">
    <router-link
        :class="{ 'active': $route.path === link }"
        :to="link"
        @click.native="$emit('click', link)"
    >
        <span class="li__img">
             <font-awesome-icon :icon="icon" />
        </span>
        <span class="li__text">
            {{ name }}
        </span>
    </router-link>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faGamepad, faNewspaper, faMusic, faKeyboard, faFire } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faGamepad, faNewspaper, faMusic, faKeyboard, faFire)

export default {
    name: 'NavBarRoutes',
    props: {
        // link of the route
        link: {
            type: String,
            required: true
        },
        // name of route
        name: {
            type: String,
            required: true
        },
        // icon of the route(if using phones)
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
#NavBar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
}
#NavBar ul li{
    list-style: none;
    padding: 0 15px;
    transition: transform, color 100ms;
}
#NavBar ul li a {
    line-height: 7vh;
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    outline: none;
    cursor: default;
}
.li__img {
    font-size: 1.5rem;
    flex: 1;
}
.li__text {
    display: none;
}
#NavBar ul {
    position:absolute;
    left: 50%;
    transform: translateX(-50%);
}
@media screen and (min-width: 600px) {
    .li__img {
        display: none;
    }
    .li__text {
        display: inline-block;
    }
    #NavBar ul {
        position: static;
        left: unset;
        transform: unset;
        float: right;
    }
}
@media screen and (min-width: 1000px) {
    #NavBar ul {
        padding-right: 5vw;
    }
}
</style>
