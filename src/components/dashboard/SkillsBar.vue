<template>
<div class="skills-bar"
    ref="skillsBar"
    >
    <div class="bar-name">
        <h4><slot/></h4>
    </div>
    <div class="bar-line"
        :style="style">
        <div class="bar-percent"/>
    </div>
</div>
</template>

<script>
export default {
    name: 'SkillsBar',
    props: {
        percent: {
            type: Number,
            required: true
        }
    },
    computed: {
        style () {
            let style = {}
            style['--percent-width'] = `${this.percent}%`
            return style
        }
    }
}
</script>

<style scoped>
/* Variables */
.skills-bar {
    --bar-height: 30px;
    --bar-font-size: 15px;
    --bar-font-weight: 300;

    --percent-width: 0%;

    --dark: #363636;
    --red: #99351E;
    --light-red: #c94628;
}

/* Styles */
.skills-bar {
    display: flex;
    margin-bottom: 20px;
}
.bar-name {
    flex: 2;
    height: var(--bar-height);
    font-size: var(--bar-font-size);
    font-weight: var(--bar-font-weight);
    text-align: center;
    position: relative;
    /* background-color: var(--light-red); */
    background-image: linear-gradient(to right, var(--light-red), #b33e23);
}
.bar-name h4 {
    display: inline-block;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.bar-line {
    flex-grow: 4;
    position: relative;

    height: var(--bar-height);
    margin: 0 auto;
    line-height: 32px;
    font-size: var(--bar-font-size);
    color: #ffffff;
}

.bar-line::before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: var(--bar-height);
    background-color: var(--dark);
    z-index: 1;
}

.bar-line::after {
    content: '';
    background: var(--red);
    height: var(--bar-height);
    display: block;
    transition: 800ms;
    width: var(--percent-width);
    opacity: 0;
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

@keyframes leftToRight {
    0% {
        left: 0;
    }
    100% {
        left: 100;
    }
}
</style>
