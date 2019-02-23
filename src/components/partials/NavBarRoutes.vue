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
import { faHome, faGamepad, faNewspaper } from '@fortawesome/free-solid-svg-icons'
library.add(faHome, faGamepad, faNewspaper)

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
@media (max-width: 530px) {
    #NavBar__icon {
        display: none;
    }
    .li__img {
        font-size: 30px;
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
}
@media (min-width: 530px) {
    .li__img {
        display: none;
    }
    .li__text {
        display: inline-block;
    }
    #NavBar ul {
        float: right;
    }
}
#NavBar__icon {
    line-height: 7vh;
    padding: 0px 10px;
    font-size: 20px;
    height: 5vh;
    float: left;
    cursor: default;
}
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
</style>
