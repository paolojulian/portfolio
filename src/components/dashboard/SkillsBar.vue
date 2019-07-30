<template>
<div class="skills-bar"
    ref="skillsBar"
    :class="{ 'scrolled': isScrolled }"
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
    data () {
        return {
            isScrolled: false,
        }
    },
    methods: {
        handleScroll () {
            let targetPosition = this.$refs.skillsBar.getBoundingClientRect().top
            let startPosition = window.pageYOffset
            let distance = targetPosition - startPosition

            if (distance < 0) {
                this.triggerAnimation()
            }
        },
        triggerAnimation () {
            this.isScrolled = true
            window.removeEventListener('scroll', this.handleScroll)
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
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
    opacity: 0;
    transition: all 400ms ease-in-out;
}
.scrolled {
    opacity: 1;
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
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}
.skills-bar.scrolled .bar-line::after {
    animation: animate 1.2s;
}

@keyframes animate {
    0% {
        width: 0;
    }
    100% {
        width: 100;
    }
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
