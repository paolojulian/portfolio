<template lang="html">
 <transition name="modal">
    <div class="modal-mask"
    ref="modal">
        <div class="modal-wrapper">
            <div class="modal-container"
                :style="backgroundColor">
                <div class="modal-header">
                    <slot name="header">
                        Nya ngay?
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <p class="modal__body">
                            Ikatten ta atoyen?
                        </p>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        <div class="modal-action-buttons">
                            <VFab
                                class="modal-submit-button"
                                size="5vh"
                                backgroundColor="var(--my-parsley)"
                                color="#ffffff"
                                v-if="type === 'submit'"
                                @click="$emit('submit')"
                            >
                                <font-awesome-icon icon="check"/>
                            </VFab>

                            <VFab
                                class="modal-close-button"
                                size="5vh"
                                backgroundColor="var(--my-paprika)"
                                color="#ffffff"
                                @click="$emit('close')"
                                data-test="modal close"
                            >
                                <font-awesome-icon icon="times"/>
                            </VFab>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script type="text/javascript">
import { mangoTheme, theme } from '@/helpers/constants'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
library.add( faTimes, faCheck )
export default {
    name: 'VModal',
    props: {
        variant: {
            type: String,
            default: 'default'
        },
        /**
         * The type of modal to be used
         * [alert, submit]
         */
        type: {
            type: String,
            default: 'alert'
        }
    },
    data () {
        return {
            mango: mangoTheme,
            default: theme
        }
    },
    computed: {
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
.modal-header {
    padding: 10px;
    border-bottom: 2px solid #a3a3a3
}

.modal__body {
    text-align: center;
}
.modal-footer {
    height: 50px;
    width: 100%;
}

.modal-action-buttons {
    position: absolute;
    right: 5px;
    bottom: 5px;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
    position: relative;
    max-height: 80vh;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    transition: all .3s ease;

    width: 100%;
    height: 100vh;
    max-height: 100vh;
    margin-bottom: 7vh;
}

@media screen and (min-width: 600px){
    .modal-container {
        border-radius: 2px;
        width: 500px;
        max-height: 80vh;
        margin: 0px auto;
    }
}
@media screen and (min-width: 1000px){
    .modal-container {
        border-radius: 2px;
        width: 700px;
        max-height: 80vh;
        margin: 0px auto;
    }
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
.modal-body {
    overflow-y: auto;
    height: 90%;
}
</style>
