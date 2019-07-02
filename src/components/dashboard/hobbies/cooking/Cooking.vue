<template>
<div class="Cooking clearfix">
    <div class="dashboard-title"
        data-aos="fade-up">
        MY ART OF COOKING
    </div>
    <div class="cooking-content">
        <div class="pan-in-fire">
            <div>
                <img
                    class="cooking-fire"
                    :src="images.fire.imagePath"
                    />
                <img
                    class="cooking-pan"
                    :src="images.pan.imagePath"
                    />
            </div>
            <div>
                <span>
                    I started cooking when i was in high school,
                    when my family always cooked the same recipe over and over again.
                    I got tired of it and started testing out different recipes from the internet.
                    I failed a lot but kept trying and trying until I got the outcome I wanted,
                    and today, guess what? I am the one who cooks for them now.
                </span>
            </div>
        </div>
        <div class="cooking-chalkboard">
            <div>
                <span>
                    Cooking is like programming, everything needs to be accurate and well designed.
                    One mistake can really cost you the whole product. Some can be fixed, some cannot be.
                    You have to put in your heart and soul when cooking and programming because if you 
                    dont like doing these things, you'll end up being unhappy and have a lower productivity.
                    So... Find that thing that you love, and eventually it'll come back at you.
                </span>
                <div class="btn-link-to-recipes">
                    <LinkButton
                        data-aos="fade-up"
                        :text="`CHECK OUT MY RECIPES`"
                        :backgroundColor="`#219653`"
                        :color="`#FFFFFF`"
                        :linkName="'HobbyCooking'"/>
                </div>
            </div>
            <div>
                <img :src="images.chalkboard.imagePath"/>
            </div>
        </div>
    </div>
    <!-- <div class="cooking-footer">
        <div class="center-absolute">
        </div>
    </div> -->
</div>
</template>

<script>
import { S3IMG } from '@/helpers/constants';
export default {
    name: 'Cooking-Dashboard',
    components: {
        LinkButton: () => import('../../LinkButton.vue')
    },
    data () {
        return {
            images: {
                pan: new S3IMG('Pan.png'),
                fire: new S3IMG('Fire.png'),
                chalkboard: new S3IMG('Cooking_chalkboard.jpg')
            }
        }
    },
}
</script>

<style scoped>
.Cooking {
    position: relative;
    background-color: var(--google-light-light);
    width: 100%;
}
.cooking-content {
    margin-bottom: 100px;
}
.pan-in-fire,
.cooking-chalkboard {
    display: flex;
    height: 500px;
    justify-content: center;
    align-items: center;
}
.pan-in-fire > div,
.cooking-chalkboard > div{
    flex: 1;
    position: relative;
    padding: 0 100px;
}
.cooking-pan,
.cooking-fire {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
}

.cooking-pan {
    animation: movePan 1s infinite;
}
.btn-link-to-recipes {
    margin-top: 3rem;
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 1000px) {
}

@keyframes movePan {
    0% {
        right: 1%;
    }
    30% {
        right: -5%
    }
    60% {
        right: 1%;
    }
    100% {
        right: 1%;
    }
}
</style>
