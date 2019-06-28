<template lang="html">
<div class="RecipeCard"
    @click="$emit('view-recipe')">
    <div class="RecipeCard__img">
        <div class="RecipeCard__information">
            <div class="RecipeCard__info_circle">
                <font-awesome-icon icon="info-circle"/>
            </div>
            <div class="RecipeCard__info_details">
                <div class="prep-time">
                    PREPARATION TIME:
                </div>
                <div class="cooking-time">
                    COOKING TIME:
                </div>
                <div class="btn-view-recipe">
                    View Recipe
                </div>
            </div>
        </div>
        <img
            :src="imagePath"
            @error="imageLoadError($event)"
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
import { getDefaultRecipeImg } from '../../../helpers/constants.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
library.add(faClock, faInfoCircle)
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
    
    methods: {
        imageLoadError (event) {
            // Change the image of the recipe card to the default image
            event.error = null
            event.target.src = getDefaultRecipeImg
        }
    }
}
</script>

<style scoped>
.RecipeCard {
    cursor: pointer;
    height: 400px;
    width: 300px;
    background-color: var(--google-light-light);
    margin: 10px;

    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
}

.RecipeCard__img {
    height: 300px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.RecipeCard__img img{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: transform 400ms ease-in-out;
}

.RecipeCard__information {
    position: absolute;
    top: -20px;
    right: -20px;
    background-color: rgba(255, 255, 255, 0.70);
    width: 80px;
    height: 80px;
    z-index: 1;
    border-bottom-left-radius: 50%;
    transition: all 400ms ease-in-out;
}
.RecipeCard__information .RecipeCard__info_circle {
    position: absolute;
    top: 60%;
    left: 40%;
    transform: translate(-50%, -50%);
}

.RecipeCard__information .RecipeCard__info_details {
    opacity: 0;
    transition: opacity 400ms ease-out 0ms;
}

.RecipeCard__content {
    color: var(--google-grey-primary);
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.RecipeCard__name {
    font-size: 18px;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 600;
}
.RecipeCard__duration {
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 200;
}

/*
    HOVER EFFECTS
*/

.RecipeCard:hover .RecipeCard__img img {
    transform: scale(1.15);
}

.RecipeCard:hover .RecipeCard__information {
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: unset;
}
.RecipeCard:hover .RecipeCard__information .RecipeCard__info_circle {
    opacity: 0;
}
.RecipeCard:hover .RecipeCard__information .RecipeCard__info_details {
    opacity: 1;
    transition: opacity 400ms ease-in 200ms;
}
</style>
