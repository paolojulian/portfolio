<template lang="html">
<div class="ProgressBar" :class="{ 'small': size === 'small', 'medium': size === 'medium' }">
    <div class="ProgressBar__name" :style="nameStyle">
        <h4>{{ name }}</h4>
    </div>
    <div class="ProgressBar__line"
        :style="progressStyle"
    >
        <div class="ProgressBar__percent" :style="percentStyle">
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
            case 'alternate-green':
                return {background: `var(--my-dark-green)`}
            case 'blue':
                return {background: `var(--my-light-blue)`}
            default:
                return {background: `var(--my-semidark-green)`}
            }
        },
        progressStyle () {
            let style = {}
            switch (this.theme) {
            case 'alternate-green':
                style['--line-theme'] = `var(--my-semidark-green)`
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
        },

        percentStyle () {
            let style = {}
            // style['left'] = `${this.percent - 10}%`
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

    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
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
    flex-grow: 4;
    position: relative;

    height: var(--bar-height);
    margin: 0 auto;
    line-height: 32px;
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
    z-index: 1;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
}
.ProgressBar__line::after {
    content: '';
    background: var(--line-theme);
    height: var(--bar-height);
    display: block;
    transition: 800ms;
    animation: animate 1.2s;
    width: var(--percent-width);
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
}

.ProgressBar__percent {
    position: absolute;
    top: 50%;
    left: calc(var(--percent-width) - 50px);
    transform: translateY(-50%);

    transition: 800ms;
    animation: leftToRight 1.2s;

    color: var(--my-light);
    padding-right: 0.5rem;
    z-index: 2;
}
@media screen and (min-width: 600px) {
    .ProgressBar__percent {
        left: calc(var(--percent-width) - 10%);
    }
    .ProgressBar__line {
        flex-grow: 8;
    }
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
