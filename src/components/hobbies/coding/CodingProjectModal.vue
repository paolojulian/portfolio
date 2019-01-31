<template lang="html">
    <VModal
        @close="$emit('close')"
        >
        <div slot="body">
            <Carousel class="CodingProjectModal__carousel">
                <slide>
                    {{ id }}
                </slide>
                <slide>
                    {{ id }}
                </slide>
                <slide>
                    {{ id }}
                </slide>
            </Carousel>
            <div class="CodingProjectModal__description">
                {{ description }}
            </div>
        </div>
    </VModal>
</template>

<script type="text/javascript">
import { Carousel, Slide } from 'vue-carousel'
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    components: {
        Carousel,
        Slide
    }
}
</script>

<style scoped>
.CodingProjectModal__carousel img{
    height: 18rem;
    width: 100%;
}
.CodingProjectModal__carousel {
    height: 20rem;
    width: 100%;
}
.CodingProjectModal__description {
    max-height: 15rem;
    overflow-y: auto;
}
</style>
