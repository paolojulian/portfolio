<template lang="html">
<div id="CookingDashboard">
    <div id="CookingDashboard__gallery">
        <div>"Cooking is the most beautiful art"</div>
    </div>
    <div id="CookingDashboard__categories">
        <router-link
            :class="{'selected': $route.params.sortBy === 'asian'}"
            to="/hobby/cooking/asian"
        >
            <span>Asian</span>
        </router-link>
        <router-link
            :class="{'selected': $route.params.sortBy === 'european'}"
            to="/hobby/cooking/european"
        >
            <span>European</span>
        </router-link>
        <router-link
            :class="{'selected': $route.params.sortBy === 'favorite' || !$route.params.sortBy}"
            to="/hobby/cooking/favorite"
        >
            <span>Favorites</span>
        </router-link>
        <router-link
            :class="{'selected': $route.params.sortBy === 'american'}"
            to="/hobby/cooking/american"
        >
            <span>American</span>
        </router-link>
        <router-link
            :class="{'selected': $route.params.sortBy === 'indian'}"
            to="/hobby/cooking/indian"
        >
            <span>Indian</span>
        </router-link>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'CookingDashboard'
}
</script>

<style scoped>
#CookingDashboard {
    width: 100%;
}
#CookingDashboard__gallery {
    height: 40vh;
    position: relative;
    background-color: #000000;
    text-align: center;
    color: #ffffff;
}
#CookingDashboard__gallery div{
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    font-size: 3rem;
    font-weight: bold;
}
#CookingDashboard__categories {
    position: relative;
    height: 2em;
    background-color: rgba(0, 0, 0, 0.75);
    color: #ffffff;
    display: flex;
    text-align: center;
}
#CookingDashboard__categories a {
    color: inherit;
    flex: 1;
    height: 100%;
    position: relative;
    transition: color, background-color 400ms ease-in-out;
}
#CookingDashboard__categories a:not(.selected) { 
    cursor: pointer;
}
#CookingDashboard__categories a:hover:not(.selected) {
    background-color: #ffffff;
    color: #131313;
}
#CookingDashboard__categories a span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
#CookingDashboard__categories a.selected {
    font-weight: bold;
    color: #131313;
    background-color: rgba(255, 251, 0);
}
</style>
