<template lang="html">
<div id="HobbyCooking">
    <div v-for="(cuisine, key) in cuisines"
        :id="'HobbyCooking__' + key"
        :style="'background-color: ' + cuisine.color"
    >
        {{ cuisine.name }}
    </div>
    <view-recipe v-if="hobbyModals.viewRecipe.toggle"/>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import { $hobby } from '@/helpers/constants'
export default {
    props: {
        // Checks if the hobby is opened
        active: {
            type: Boolean,
            required: true
        }
    },
    components: {
        ViewRecipe: () => import('./ViewRecipe')
    },
    data () {
        return {
            cuisines: {
                indian: {
                    name: 'INDIAN',
                    color: '#deab00'
                },
                filipino: {
                    name: 'FILIPINO',
                    color: '#7c3618'
                },
                asian: {
                    name: 'ASIAN',
                    color: '#dd1300'
                },
                american: {
                    name: 'AMERICAN',
                    color: '#4b8600'
                },
                italian: {
                    name: 'ITALIAN',
                    color: '#dd6b00'
                }
            }
        }
    },
    computed: {
        ...mapGetters($hobby, [
            'hobbyModals'
        ])
    },
    methods: {
        ...mapMutations($hobby, [
            'openHobbyModal'
        ])
    }
}
</script>

<style scoped>
#HobbyCooking {
    display: flex;
    width: 90%;
    margin-left: 5%;
    margin-top: 10%;
    color: #ffffff;
}
#HobbyCooking div {
    width: 13vh;
    padding: 20px;
    margin: 1vh;
    height: 8%;
    box-shadow: 0 10px 30px #000000;
    border-radius: .2rem .2rem 3rem  3rem;
    border-bottom: 0.3rem;
}
#HobbyCooking div:nth-child(2) {
    margin-top: 12%
}
#HobbyCooking div:nth-child(4) {
    margin-top: 12%;
}
/* #HobbyCooking {
    display: flex;
    height: 100%;
    width: 90%;
    margin-left: 5%;
    overflow-y: auto;
}
@media screen and (min-width: 600px){
    #HobbyCooking {
        flex-direction: row;
    }
}
@media only screen and (max-width: 600px){
    #HobbyCooking {
        flex-direction: column;
    }
}
#HobbyCooking div {
    flex: 1;
    text-align: center;
} */
</style>
