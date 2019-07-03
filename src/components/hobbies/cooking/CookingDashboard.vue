<template lang="html">
<div id="CookingDashboard">
    <!-- <div id="CookingDashboard__gallery">
        <div class="CookingDashboard__logo"/>
        <div class="CookingDashboard__saying">
            "Cooking is the most satisfying art to master"
        </div>
    </div> -->
    <CookingSearchBar/>
    <div id="CookingDashboard__categories">
        <router-link
            :class="{'selected': $route.params.sortBy === 'hors'}"
            to="/hobby/cooking/hors"
        >
            <span>Hors</span>
        </router-link>
        <router-link
            :class="{'selected': $route.params.sortBy === 'appetizer'}"
            to="/hobby/cooking/appetizer"
        >
            <span>Appetizer</span>
        </router-link>
        <router-link
            :class="{'selected': $route.params.sortBy === 'salad'}"
            to="/hobby/cooking/salad"
        >
            <span>Salad</span>
        </router-link>
        <router-link
            :class="{'selected': $route.params.sortBy === 'mainCourse' || !$route.params.sortBy}"
            to="/hobby/cooking/mainCourse"
        >
            <span>Main Course</span>
        </router-link>
        <router-link
            :class="{'selected': $route.params.sortBy === 'dessert'}"
            to="/hobby/cooking/dessert"
        >
            <span>Dessert</span>
        </router-link>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'CookingDashboard',
    components: {
        CookingSearchBar: () => import('./CookingSearchBar.vue')
    }
}
</script>

<style scoped>
#CookingDashboard {
    width: 100%;
}
#CookingDashboard__gallery {
    display: none;
}
#CookingDashboard__categories {
    position: fixed;
    top: 7vh;
    left: 0;
    z-index: 1;

    width: 100%;
    height: 4rem;

    background-color: var(--google-light-light);
    color: var(--pipz-font);
    display: flex;
    text-align: center;
    font-weight: 300;
}
#CookingDashboard__categories a {
    color: inherit;
    flex: 1;
    height: 100%;
    position: relative;
    transition: color, background-color 400ms ease-in-out;
}
#CookingDashboard__categories a:not(:last-child) {
    border-right: 1px solid rgba(0, 0, 0, 0.6)
}
#CookingDashboard__categories a span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#CookingDashboard__categories a.selected {
    color: #131313;
    background-color: var(--my-yellow);
}
@media screen and (min-width: 600px) {
    .CookingDashboard__logo {
        background-image: url('../../../assets/img/ChefPipzLogo.png');
        background-position: left;
        background-repeat: no-repeat;
        background-size: contain;
        height: 100%;
        width: 30%;
    }
    #CookingDashboard__gallery {
        display: block;
        height: 300px;
        position: relative;
        background-color: #000000;
        text-align: center;
        color: #ffffff;
    }

    .CookingDashboard__saying {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50%;
        transform: translate(-50%, -50%);
        font-size: 2.5rem;
        font-weight: bold;
    }

    #CookingDashboard__categories {
        position: relative;
        top: 0;
        left: 0;
    }
    #CookingDashboard__categories a:not(.selected) { 
        cursor: pointer;
    }
    #CookingDashboard__categories a:hover:not(.selected) {
        background-color: #ffffff;
        color: #131313;
    }
}
@media screen and (min-width: 1000px) {
    #CookingDashboard__categories {
        height: 2rem;
    }
}
</style>
