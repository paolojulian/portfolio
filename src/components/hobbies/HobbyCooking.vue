<template lang="html">
<div id="HobbyCooking">
</div>
</template>

<script type="text/javscript">
import { $hobbies, $pageLoader } from '@/helpers/constants'
import { mapGetters, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters($hobbies, [
            'hobbyCooking',
        ])
    },
    methods: {
        ...mapActions($hobbies, [
            'getHobbyCooking'
        ])
    },
    beforeCreate () {
        this.$store.commit($pageLoader + '/pageLoading')
    },
    created () {
        this.getHobbyCooking()
            .then(() => {
                this.$store.commit($pageLoader + '/pagePost')
            })
            .catch(message => {
                console.log(message)
                this.$store.commit($pageLoader + '/pageError')
            })
    }
}
</script>

<style scoped>

</style>
