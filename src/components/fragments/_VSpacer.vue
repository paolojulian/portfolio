<template lang="html">
<div class="Spacer"
    :style="style"
>
</div>
</template>

<script type="text/javascript">
export default {
    props: {
        space: {
            type: Number,
            required: false,
            default: 1
        }
    },

    computed: {
        style () {
            return {
                marginTop: `${this.space}rem`
            }
        }
    }

}
</script>

<style scoped>

</style>
