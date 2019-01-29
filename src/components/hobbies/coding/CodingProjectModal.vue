<template lang="html">
    <VModal
        @close="$emit('close')"
        >
        <div slot="body">
            <Carousel>
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
        }
    },
    components: {
        Carousel,
        Slide
    }
}
</script>

<style scoped>

</style>
