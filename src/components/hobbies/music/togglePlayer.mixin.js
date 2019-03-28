const togglePlayerMixin = {
    data () {
        return {
            TOGGLEPLAYER: null
        }
    },
    methods: {
        SHOW_PLAYER () {
            clearTimeout(this.TOGGLEPLAYER)
            document
                .querySelector('#Player:not(.in-hobby-music) .Player__relative')
                .style
                .transform = 'translateX(-100%)'
        },

        HIDE_PLAYER () {
            this.TOGGLEPLAYER = setTimeout(() => {
                document
                    .querySelector('#Player:not(.in-hobby-music) .Player__relative')
                    .style
                    .transform = 'translateX(0)'
            }, 1000)
        }
    }
}

export default togglePlayerMixin
