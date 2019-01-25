<template lang="html">
<div class="ProgressBar">
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
        percent: {
            type: Number,
            required: true
        },
        theme: {
            type: String,
            required: false,
            default: 'default'
        }
    },
    computed: {
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
    --bar-height: 2rem;
}
.ProgressBar__line {
    position: relative;

    height: var(--bar-height);
    margin: 0 auto;
    line-height: 25px;
    font-size: 14px;
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
