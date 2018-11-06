<template lang="html">
    <button
        type="button"
        :style="styles"
        @click="$emit('click')"
    >
        <slot/>
    </button>
</template>

<script type="text/javascript">
import { theme } from '@/helpers/constants'
export default {
    name: 'VButton',
    props: {
        variant: {
            type: String,
            default: 'primary'
        },
        size: {
            type: String,
            default: 'md'
        },
        textColor: {
            type: String,
            default: theme.light
        }
    },
    data () {
        return {
            variants: {
                primary: theme.primary,
                accent: theme.accent,
                dark: theme.dark,
                light: theme.light
            },
            sizes: ['sm', 'md', 'lg', 'xl']
        }
    },
    computed: {
        styles () {
            let style = ''
            style += this.backgroundColor + '; '
            style += this.computedSize + '; '
            style += this.computedTextColor + '; '
            return style
        },
        backgroundColor () {
            let backgroundColor = 'background-color'
            return this.variants.hasOwnProperty(this.variant)
                ? backgroundColor + ': ' + this.variants[this.variant]
                : backgroundColor + ': ' + this.variant
        },
        computedSize () {
            let defaultHeight = '30px'
            return this.sizes.indexOf(this.size) !== -1
                ? 'height: ' + this.size
                : 'height: ' + defaultHeight
        },
        computedTextColor () {
            return 'color: ' + this.textColor
        }
    }
}
</script>

<style scoped>
button {
    font-size: 14px;
    padding: 10px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 5px;
}
</style>
