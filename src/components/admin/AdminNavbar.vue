<template>
<header class="admin-header">
    <div class="admin-header-logo">
        <router-link to="/admin">
            chef.PIPZ
        </router-link>
    </div>
    <nav class="admin-navbar"
        :class="{ 'active': sidebar }"
    >
        <ul>
            <li v-for="(link, index) in links"
                :key="index"
            >
                <router-link
                    :class="{ 'active': $route.name === link.path }"
                    :to="{ name: link.path }"
                >
                    {{ link.name }}
                </router-link>
            </li>
            <li>
                <a href="javascript:;" @click="logout">
                    Logout
                </a>
            </li>
        </ul>
    </nav>
    <div class="admin-menu-toggle"
        @click="toggleSideBar"
    >
        <font-awesome-icon icon="bars"/>
    </div>
</header>
</template>

<script>
import { mapActions } from 'vuex'
import { $auth } from '@/helpers/constants'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add( faBars )
export default {
    data () {
        return {
            sidebar: false,
            links: [
                { path: 'AdminRecipe', name: 'Recipe' },
                { path: 'AdminMusic', name: 'Music' },
                { path: 'AdminSkills', name: 'Skills' },
                { path: 'AdminProjects', name: 'Projects' },
            ]
        }
    },
    methods: {
        ...mapActions($auth, [
            'logout'
        ]),
        toggleSideBar () {
            this.sidebar = ! this.sidebar
        }
    }
}
</script>

<style scoped>
header.admin-header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 0 20px;
    background-color: var(--pipz-primary-dark);
    box-sizing: border-box;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.50);
}
.admin-header-logo {
    height: 50px;
    line-height: 50px;
    float: left;
    font-weight: 500;
    font-size: 1.2rem;
}
nav.admin-navbar {
    position: absolute;
    width: 100%;
    height: calc(100vh - 50px);
    background-color: var(--pipz-primary-dark); 
    top: 50px;
    left: -100%;
    transition: 500ms;
    border-top: 1px solid var(--pipz-font);
}
nav.admin-navbar.active {
    left: 0;
}
nav.admin-navbar ul {
    letter-spacing: 1px;
    text-transform: uppercase;
    display: block;
}
nav.admin-navbar ul li{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid var(--pipz-font);
}
nav.admin-navbar ul li a {
    display: block;
    padding: 0 10px;
}

.admin-menu-toggle {
    height: 50px;
    line-height: 50px;
    float: right;
    cursor: pointer;
}
nav.admin-navbar ul li a:hover,
nav.admin-navbar ul li a.active
{
    background-color: var(--pipz-font);
    color: var(--pipz-primary);
}

@media screen and (min-width: 800px) {
    header.admin-header {
        padding: 0 100px 0 10px;
    }
    .box-shadow {
        display: none;
    }
    nav.admin-navbar {
        display: flex;
        float: right;
        width: unset;
        height: 100%;
        position: static;
        background-color: unset;
        transition: unset;
        border-top: none;
    }
    nav.admin-navbar ul {
        display: flex;
    }
    nav.admin-navbar ul li {
        border-bottom: none;
    }
    nav.admin-navbar ul li a {
        padding: 0 20px;
    }
    .admin-menu-toggle {
        display: none;
    }
}
</style>
