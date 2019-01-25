<template lang="html">
<div class="CodingLevel">
    <div class="CodingLevel__name" :style="nameStyle">
        <h4>{{ name }}</h4>
    </div>
    <div class="CodingLevel__progress">
        <ProgressBar
            :percent="percent"
            :theme="theme"
            />
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        percent: {
            type: Number,
            required: true
        },
        theme: {
            type: String,
            required: true
        }
    },

    components: {
        ProgressBar: () => import('../../fragments/ProgressBar.vue')
    },

    computed: {
        nameStyle () {
            switch (this.theme) {
            case 'blue':
                return {background: `var(--my-light-blue)`}
            default:
                return {background: `var(--my-semidark-green)`}
            }
        }
    }
}
</script>

<style scoped>
.CodingLevel {
    display: flex;
}
.CodingLevel__name {
    flex: 2;
    height: 2rem;
    text-align: center;
    position: relative;
}
.CodingLevel__name h4{
    display: inline-block;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.CodingLevel__progress {
    flex-grow: 8;
}
</style>
