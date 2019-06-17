<template>
<div class="Cooking clearfix">
    <div class="dashboard-title"
        data-aos="fade-up">
        MY ART OF COOKING
    </div>
    <div class="cooking-content">
        <div class="cooking-images relative">
            <img
                class="cooking-content-img cooking-fire"
                :src="images.fire.imagePath"
                />
            <img
                class="cooking-content-img cooking-pan"
                :src="images.pan.imagePath"
                />
        </div>
        <div class="cooking-footer relative">
            <div class="cooking-footer-description">
                <LinkButton
                    data-aos="fade-up"
                    :text="`CHECK MY RECIPES`"
                    :backgroundColor="`#219653`"
                    :color="`#FFFFFF`"
                    :linkName="'HobbyCooking'"/>
                <br />
                <div class="cooking-footer-txt"
                    data-aos="fade-up">
                    I Love cooking good food for everyone, from different cuisines and different spices
                </div>
            </div>
        </div>
    </div>
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
                fire: new S3IMG('Fire.png')
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
    margin-bottom: 2rem;
    height: 800px;
}
.cooking-content-img {
    position: absolute;
    left: 45%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 20;
}
.cooking-pan {
    animation: movePan 1s infinite;
}
.cooking-footer-description {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.cooking-images {
    width: 100%;
    height: 70%;
}
.cooking-footer {
    width: 100%;
    height: 30%;
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 1000px) {
}

@keyframes movePan {
    0% {
        left: 45%;
    }
    30% {
        left: 47%;
    }
    60% {
        left: 45%;
    }
    100% {
        left: 45%;
    }
}
</style>
