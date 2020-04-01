<template>
<button class="pipz-fab"
    :style="style"
    @click="$emit('click', $event)"
    @mouseover="$emit('mouseover', $event)"
    @mouseout="$emit('mouseout', $event)"
>
    <slot>
    </slot>
</button>
</template>

<script>
export default {
    props: {
        // Size of FAB
        size: {
            type: String,
            required: false,
            default: '2rem'
        },
        // Color of icon
        color: {
            type: String,
            required: false,
            default: 'inherit'
        },
        // Color of button
        backgroundColor: {
            type: String,
            required: false,
            default: '#29B6F6'
        }
    },

    computed: {
        /**
         * Style of the FAB Button
         */
        style () {
            let fontSize = { 'fontSize': `calc(${this.size} * 0.4)` }
            let width = { 'width': this.size }
            let height = { 'height': this.size }
            let backgroundColor = { 'backgroundColor': this.backgroundColor }
            let color = { 'color': this.color }
            return {
                ...width,
                ...height,
                ...backgroundColor,
                ...color,
                ...fontSize
            }
        }
    }
}
</script>

<style scoped>
.pipz-fab {
    border-radius: 50%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
    border: none;
}
@media screen and (min-width: 600px){
    .pipz-fab {
        cursor: pointer;
        margin: 0 0.1rem;
        transition: opacity linear 100ms;
    }
    .pipz-fab:hover {
        opacity: 0.8
    }
}
</style>
