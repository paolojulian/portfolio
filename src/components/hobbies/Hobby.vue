<template lang="html">
    <div id="Hobby">
        <div id="Hobby__cooking"
            class="Hobby__box"
        >
            <hobby-content
                :hobby-header="hobbyCooking.header"
                :hobby-categories="hobbyCooking.categories"
                hobby-image="hobby_cooking.png"
                @click.native="toggleActive('cooking')"
                class="Hobby__content"/>
        </div>
        <div id="Hobby__music"
            class="Hobby__box"
        >
            <hobby-content
                :hobby-header="hobbyMusic.header"
                :hobby-categories="hobbyMusic.categories"
                hobby-image="hobby_music.png"
                @click.native="toggleActive('music')"
                class="Hobby__content"/>
        </div>
        <div id="Hobby__sports"
            class="Hobby__box"
        >
            <hobby-content
                :hobby-header="hobbySports.header"
                :hobby-categories="hobbySports.categories"
                hobby-image="hobby_sports.png"
                @click.native="toggleActive('sports')"
                class="Hobby__content"/>
        </div>
        <div id="Hobby__coding"
            class="Hobby__box"
        >
            <hobby-content
                :hobby-header="hobbyCoding.header"
                :hobby-categories="hobbyCoding.categories"
                hobby-image="hobby_coding.png"
                @click.native="toggleActive('coding')"
                class="Hobby__content"/>
        </div>
    </div>
</template>

<script type="text/javascript">
import { $hobbies } from '@/helpers/constants'
import { mapActions, mapGetters } from 'vuex'
export default {
    components: {
        HobbyContent: () => import('./utils/HobbyContent')
    },
    data () {
        return {
            links: {
                cooking: 'HobbyCooking',
                music: 'HobbyMusic',
                sports: 'HobbySports',
                coding: 'HobbyCoding'
            },
            cards: 4
        }
    },
    computed: {
        ...mapGetters($hobbies, [
            'hobbyCooking',
            'hobbyMusic',
            'hobbySports',
            'hobbyCoding'
        ])
    },
    methods: {
        ...mapActions($hobbies, [
            'getHobbyList'
        ]),
        toggleActive (active) {
            if (!this.links.hasOwnProperty(active)) return

            let link = this.links[active]
            this.$router.push({ name: link })
        }
    },
    created () {
        this.pageLoading()
        this.getHobbyList()
    },
    mounted () {
        this.pagePost()
    }
}
</script>
<style scoped>
/* MOBILE */
#Hobby {
    position: relative;
    text-align: center;
    height: calc(var(--my-display-height) - 1.5vh);
}
.Hobby__box {
    position: relative;
    overflow: hidden;

    height: 25%;
    width: 100%;
    margin-bottom: 0.5vh;
}
@media only screen and (min-width: 600px){
    #Hobby {
        height: var(--my-display-height);
    }
    .Hobby__box {
        height: 50%;
        width: 40vw;
        margin-bottom: 0;

        padding: 2vw;
        display: inline-table;
    }
}
/* WEB */
</style>
