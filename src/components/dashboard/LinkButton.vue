<template>
    <router-link class="LinkButton"
        :style="style"
        :to="{ name: linkName }"
    >
        <span>{{ this.text }}</span>
    </router-link>
</template>

<script>
export default {
    name: 'LinkButton',

    props: {
        // The Color of the button (Hex Format ex. #010101)
        backgroundColor: {
            type: String,
            required: false,
            default: '#FAFAFA'
        },
        // The color of the font of the button (Hex format)
        color: {
            type: String,
            required: false,
            default: '#131313'
        },
        // The Text to be displayed by the button
        text: {
            type: String,
            required: true
        },
        // The Link upon clicking the button
        linkName: {
            type: String,
            required: true
        }
    },

    computed: {
        style () {
            this.validateStyles()

            const style = {
                backgroundColor: this.backgroundColor,
                color: this.color
            }
            return style
        }
    },

    methods: {
        /**
         * VALIDATES the styles to be given in the button
         */
        validateStyles () {
            // IF COLOR IS NOT HEX
            if (this.color.length !== 6) {
                // eslint-disable-next-line
                console.error('The Color should be in hex-format. Given - ' + this.color);
            }
        },

        handleLink () {

        }
    }
}
</script>

<style scoped>
.LinkButton {
    padding: 10px 30px;
    cursor: pointer;

    font-size: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    box-shadow: 0 2px 5px 0px #131313;
}
</style>
