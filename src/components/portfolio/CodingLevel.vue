<template lang="html">
<div class="CodingLevel" :class="{ 'small': size === 'small', 'medium': size === 'medium' }">
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
        },
        size: {
            type: String,
            default: 'medium'
        }
    },

    components: {
        ProgressBar: () => import('@/components/fragments/ProgressBar.vue')
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
.CodingLevel.medium .CodingLevel__name {
    flex: 2;
    height: 2rem;
    text-align: center;
    position: relative;
}
.CodingLevel.medium .CodingLevel__name h4 {
    display: inline-block;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.CodingLevel.medium .CodingLevel__progress {
    flex-grow: 8;
}
/** SMALL **/
.CodingLevel.small .CodingLevel__name{
    flex: 2;
    height: 1.5rem;
    text-align: center;
    position: relative;
}
.CodingLevel.small .CodingLevel__name h4 {
    display: inline-block;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.CodingLevel.small .CodingLevel__progress {
    flex-grow: 8;
}
</style>
