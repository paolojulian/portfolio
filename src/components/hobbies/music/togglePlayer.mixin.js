import { $hobbies } from '@/helpers/constants'
import { mapGetters, mapMutations } from "vuex";

const togglePlayerMixin = {
    computed: {
        ...mapGetters($hobbies, [
            'togglePlayer'
        ])
    },
    methods: {
        ...mapMutations($hobbies, [
            'setTogglePlayer',
            'clearTogglePlayer'
        ]),
        SHOW_PLAYER () {
            this.clearTogglePlayer()
            document
                .querySelector('#Player:not(.in-hobby-music) .Player__relative')
                .style
                .transform = 'translateX(-100%)'
        },

        HIDE_PLAYER () {
            this.setTogglePlayer(setTimeout(() => {
                document
                    .querySelector('#Player:not(.in-hobby-music) .Player__relative')
                    .style
                    .transform = 'translateX(0)'
            }, 1000))
        }
    }
}

export default togglePlayerMixin
