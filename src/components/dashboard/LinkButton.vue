<template>
    <router-link class="LinkButton"
        :style="style"
        :to="{ name: linkName }"
    >
        <span>{{ this.text }}</span>
    </router-link>
</template>

<script>
/**
 * ERROR CLASSES
 */
class WrongColorFormatException extends Error{
    constructor (color, ...params) {
        super (...params)
        this.name = 'WrongColorFormatException'
        this.message = 'The Color should be in hex-format. Given - ' + color
        this.date = Date.now()
    }
}
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
            try {
                if (this.color.length !== 7) {
                    throw new WrongColorFormatException(this.color)
                }
                if (this.color[0] !== '#') {
                    throw new WrongColorFormatException(this.color)
                }
            } catch (err) {
                // eslint-disable-next-line
                console.error(err.message);
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
    font-weight: 200;

    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;

    border-radius: 5px;
    box-shadow: 0 2px 5px 0px #131313;
}
</style>
