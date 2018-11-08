<template lang="html">
    <div id="PageLoader">
        <transition name="fade" mode="out-in">
        <div id="PageLoader__loading" v-if="pageState.loading">
            <VLoader/>
        </div>
        </transition>

        <transition name="fade" mode="out-in">
        <div id="PageLoader__error" v-if="pageState.error">
            Error
        </div>
        </transition>

        <transition name="fade" mode="out-in">
        <div id="PageLoader__post" v-show="pageState.post">
            <transition name="fade" mode="out-in">
                <slot/>
            </transition>
        </div>
        </transition>
    </div>
</template>

<script type="text/javascript">
import { $pageLoader } from '@/helpers/constants'
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters($pageLoader, [
            'pageState'
        ])
    }
}
</script>


<style scoped>
#PageLoader__loading, #PageLoader__error{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

</style>
