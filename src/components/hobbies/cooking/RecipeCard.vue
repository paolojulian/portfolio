<template lang="html">
<div class="RecipeCard"
    @click="$emit('view-recipe')">
    <div class="RecipeCard__box">
        <div class="RecipeCard__view_recipe">
            <span>View Recipe</span>
        </div>
        <!-- <div class="RecipeCard__img" /> -->
        <img
            class="RecipeCard__img"
            :src="imagePathOrDefault"
        />
    </div>
    <div class="RecipeCard__content">
        <div class="RecipeCard__name">
            {{ recipeName }}
        </div>
        <div class="RecipeCard__duration">
            <font-awesome-icon icon="clock" />
            {{ durationFrom | duration(durationTo) }}
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
library.add(faClock)
export default {
    name: 'RecipeCard',
    props: {
        recipeId: {
            type: Number,
            required: true
        },
        recipeName: {
            type: String,
            required: true
        },
        imagePath: {
            type: String,
            required: true
        },
        durationFrom: {
            type: Number,
            required: true
        },
        durationTo: {
            type: Number,
            required: true
        },
        dateCreated: {
            type: String,
            required: true
        }
    },

    filters: {
        duration: function (from, to) {
            if (from <= 0 && to <= 0) {
                return ''
            }

            if (from >= to) {
                return `${from}m`
            }

            return `${from}m - ${to}m`
        }
    },

    data () {
        return {
            test: '',
            defaultImg: require('../../../assets/img/cooking/default.png')
        }
    },
     
    computed: {
        imagePathOrDefault () {
            var path
            try {
                // path = require(`../../../assets/img/cooking/${this.imagePath}`)
                path = this.imagePath
            } catch (err) {
                path = this.defaultImg
            }
            return path
        }
    }
}
</script>

<style scoped>
.RecipeCard {
    position: relative;
    margin-bottom: 0.5rem;
    width: 100%;
    height: 250px;
    background-color: #fff;
    overflow: hidden;
}
.RecipeCard__box {
    position: relative;
    overflow: hidden;
    height: 100%;
}
.RecipeCard__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: auto;
}
.RecipeCard__content {
    position: absolute;
    height: 25%;
    width: 100%;
    top: 75%;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.75);
    color: #ffffff;
}
.RecipeCard__name {
    font-weight: 600;
    height: 15%;
    padding: 0.5rem;
}
.RecipeCard__duration {
    position: absolute;
    right: 0;
    bottom: 0;
    padding: 0.5rem;
}
.RecipeCard__buttons {
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
}
@media screen and (min-width: 600px){
    .RecipeCard {
        cursor: pointer;
        display: inline-block;
        background-color: #fff;
        overflow: hidden;
        margin: 0.5rem;
        box-shadow: 0 5px 10px #131313;
        width: 300px;
        height: 300px;
        border-radius: 5px;
        transition: transform 300ms ease-in-out, box-shadow 200ms linear;
    }
    .RecipeCard:hover{
        transform: scale(1.05);
        box-shadow: 0 10px 15px #131313;
    }

    .RecipeCard__box {
        height: 70%;
    }

    .RecipeCard__img{
        transition: transform 300ms ease-in-out;
    }

    .RecipeCard__content {
        height: 30%;
        top: 70%;
        text-align: left;

        background-color: unset;
        color: unset;
    }

    .RecipeCard__name {
        font-weight: 600;
        height: 15%;
        padding: 0.5rem;
    }

    .RecipeCard__view_recipe {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        transition: all 300ms ease-in-out;
        background-color: rgba(50, 50, 50, 0.60);
    }

    .RecipeCard__view_recipe span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1.5rem;
        font-weight: 600;
        color: #ffffff;
    }

    .RecipeCard:hover .RecipeCard__img{
        transform: scale(1.3);
    }

    .RecipeCard:hover .RecipeCard__view_recipe{
        z-index: 1;
    }
}
</style>
