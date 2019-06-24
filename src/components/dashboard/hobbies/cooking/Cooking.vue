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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </span>
            </div>
        </div>
        <div class="cooking-chalkboard">
            <div>
                <span>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
