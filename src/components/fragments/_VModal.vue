<template lang="html">
 <transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container"
                :style="backgroundColor">
                <div class="modal-header"
                    :style="headerColor">
                    <slot name="header">
                        Nya ngay?
                    </slot>
                </div>

                <div>
                    <slot name="body">
                        <p class="modal__body">
                            Ikatten ta atoyen?
                        </p>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <VButton
                            class="modal-default-button"
                            variant="primary"
                            text-color="#000000"
                            @click="$emit('close')">
                            Kwa
                        </VButton>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script type="text/javascript">
import { mangoTheme, theme } from '@/helpers/constants'
export default {
    name: 'VModal',
    props: {
        variant: {
            type: String,
            default: 'default'
        }
    },
    data () {
        return {
            mango: mangoTheme,
            default: theme
        }
    },
    computed: {
        headerColor () {
            return this.setBackgroundColor('dark')
        },
        backgroundColor () {
            return this.setBackgroundColor('light')
        }
    },
    methods: {
        setBackgroundColor (type) {
            let backgroundColor = 'background-color'
            if (!this.hasOwnProperty(this.variant)) {
                return `${backgroundColor}: ${this[this.variant][type]}`
            }

            return `${backgroundColor}: ${this[this.variant][type]}`
        }
    }
}
</script>

<style scoped>

.close-modal {
    cursor: pointer;
    float: right;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .80);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

@media screen and (min-width: 600px){
    .modal-container {
        width: 500px;
    }
}
@media screen and (max-width: 600px){
    .modal-container {
        width: 100%;
        height: 100vh;
        max-height: 100vh;
        margin-bottom: 7vh;
    }
}
.modal-container {
    position: relative;
    max-height: 80vh;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-header {
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.75);
    color: #ffffff;
}

.modal__body {
    text-align: center;
    overflow-y: auto;
}

.modal-default-button {
    position: absolute;
    right: 5px;
    bottom: 5px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    transform: translateY(-5%);
    /* -webkit-transform: scale(1.1);
    transform: scale(1.1); */
}
</style>
