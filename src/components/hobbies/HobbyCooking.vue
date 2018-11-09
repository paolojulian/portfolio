<template lang="html">
<div id="HobbyCooking">
    <recipe-card
        v-for="recipe in hobbyCooking.list"
        :recipe-id="recipe.id"
        :recipe-name="recipe.name"
        :date-created="recipe.date_created"
        :date-modified="recipe.date_modified"
    />
</div>
</template>

<script type="text/javscript">
import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapActions } from 'vuex'
export default {
    components: {
        recipeCard: () => import('./utils/RecipeCard')
    },
    computed: {
        ...mapGetters($hobbies, [
            'hobbyCooking',
        ])
    },
    methods: {
        ...mapActions($hobbies, [
            'getHobbyCooking'
        ])
    },
    created () {
        this.getHobbyCooking()
    }
}
</script>

<style scoped>
#HobbyCooking {
    clear: both;
    background-color: rgba(0,0,0,0.1)
}
@media screen and (max-width: 600px){
    #HobbyCooking >>> .RecipeCard{
        margin-bottom: 5px;
        width: 100%;
        height: 500px;
    }
}
@media screen and (min-width: 600px){
    #HobbyCooking {
        padding: 10px;
    }
    #HobbyCooking >>> .RecipeCard{
        margin: 10px;
        margin-bottom: 15px;
        box-shadow: 0 5px 10px #131313;
        width: 300px;
        height: 300px;
        padding: 5px;
    }
    #HobbyCooking >>> .RecipeCard:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 15px #131313;
    }
}
#HobbyCooking >>> .RecipeCard{
    position: relative;
    float: left;
    background-color: #fff;
    transition: transform 300ms ease-in-out, box-shadow 200ms linear;
}
#HobbyCooking >>> .RecipeCard__img {
    background-color: #131313;
    height: 70%;
}
#HobbyCooking >>> .RecipeCard__content {
    padding: 5px;
}
#HobbyCooking >>> .RecipeCard__name {
    font-weight: 600;
}
#HobbyCooking >>> .RecipeCard__buttons {
    position: absolute;
    right: 5px;
    bottom: 5px;
}
</style>
