<template lang="html">
<div class="ProgressBar" :class="{ 'small': size === 'small', 'medium': size === 'medium' }">
    <div class="ProgressBar__name" :style="nameStyle">
        <h4>{{ name }}</h4>
    </div>
    <div class="ProgressBar__line"
        :style="style"
    >
        <div class="ProgressBar__percent float-right">
            {{ `${percent}%` }}
        </div>
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
            required: false,
            default: 'default'
        },
        size: {
            type: String,
            default: 'medium'
        }
    },
    computed: {
        nameStyle () {
            switch (this.theme) {
            case 'blue':
                return {background: `var(--my-light-blue)`}
            default:
                return {background: `var(--my-semidark-green)`}
            }
        },
        style () {
            let style = {}
            switch (this.theme) {
            case 'yellow':
                style['--line-theme'] = `rgb(237, 212, 0)`
                break
            case 'blue':
                style['--line-theme'] = `var(--my-dark-blue)`
                break
            default:
                style['--line-theme'] = `var(--my-dark-green)`
                break
            }

            style['--percent-width'] = `${this.percent}%`

            return style
        }
    }
}
</script>

<style scoped>
.ProgressBar {
    display: flex;
}
.ProgressBar.small {
    --bar-height: 1.5rem;
    --bar-font-size: 0.9rem;
    --bar-font-weight: 300;
}
.ProgressBar.medium {
    --bar-height: 2rem;
    --bar-font-size: 1rem;
    --bar-font-weight: 400;
}
.ProgressBar__name {
    flex: 2;
    height: var(--bar-height);
    font-size: var(--bar-font-size);
    font-weight: var(--bar-font-weight);
    text-align: center;
    position: relative;
}
.ProgressBar__name h4 {
    display: inline-block;
    color: #ffffff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.ProgressBar__line {
    flex-grow: 8;
    position: relative;

    height: var(--bar-height);
    margin: 0 auto;
    line-height: 25px;
    font-size: var(--bar-font-size);
    color: #ffffff;
    margin-bottom: 1rem;
}
.ProgressBar__line::before {
    content: '';
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    height: var(--bar-height);
    background: #d2d2d2;
    z-index: -2;
}
.ProgressBar__line::after {
    content: '';
    background: var(--line-theme);
    height: var(--bar-height);
    display: block;
    transition: 800ms;
    animation: animate 1.2s;
    width: var(--percent-width);
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

.ProgressBar__percent {
    color: var(--my-dark);
    padding-right: 0.5rem;
}
@keyframes animate {
    0% {
        width: 0;
    }
    100% {
        width: 100;
    }
}
</style>
