<template>
<div class="cv-skill-bar"
    :style="style">
    <div class="cv-bar-line">
        <div class="cv-bar-percent">

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'CVSkillBar',
    props: {
        level: {
            type: Number,
            required: true
        }
    },
    computed: {
        style () {
            let style = {}
            style['--percent-width'] = `${this.level}%`
            return style
        }
    }
}
</script>

<style scoped>
/* Variables */
.cv-skill-bar {
    --bar-height: 8px;
    --bar-font-size: 15px;
    --bar-font-weight: 300;

    --percent-width: 0%;

    --dark: #17252A;
    --primary-dark: #2B7A78;
    --primary: #3AAFA9;
    --secondary: #DEF2F1;
    --secondary-light: #FEFFFF;
}

/* Styles */
.cv-bar-line {
    position: relative;

    height: var(--bar-height);
    margin: 0 auto;
    line-height: 32px;
    font-size: var(--bar-font-size);
    color: #ffffff;
    margin: 2px 0 10px 0;
}

.cv-bar-line::before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: var(--bar-height);
    background-color: var(--dark);
    z-index: 1;
    border-radius: 30px;
}

.cv-bar-line::after {
    content: '';
    background: var(--secondary-light);
    height: var(--bar-height);
    display: block;
    transition: 800ms;
    animation: animate 1.2s;
    width: var(--percent-width);
    border-radius: 30px;
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
</style>
