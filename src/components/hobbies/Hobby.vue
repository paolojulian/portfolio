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
            @click="toggleActive('music')"
        >
            <hobby-content
                :hobby-header="hobbyMusic.header"
                :hobby-categories="hobbyMusic.categories"
                hobby-image="hobby_music.png"
                class="Hobby__content"/>
        </div>
        <div id="Hobby__sports"
            class="Hobby__box"
            @click="toggleActive('sports')"
        >
            <hobby-content
                :hobby-header="hobbySports.header"
                :hobby-categories="hobbySports.categories"
                hobby-image="hobby_sports.png"
                class="Hobby__content"/>
        </div>
        <div id="Hobby__coding"
            class="Hobby__box"
            @click="toggleActive('coding')"
        >
            <hobby-content
                :hobby-header="hobbyCoding.header"
                :hobby-categories="hobbyCoding.categories"
                hobby-image="hobby_coding.png"
                class="Hobby__content"/>
        </div>
    </div>
</template>

<script type="text/javascript">
import { $hobbies, $pageLoader } from '@/helpers/constants'
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
        this.$store.commit($pageLoader + '/pageLoading')
        this.getHobbyList()
    },
    mounted () {
        this.$store.commit($pageLoader + '/pagePost')
    }
}
</script>
<style scoped>
#Hobby {
    position: relative;
    text-align: center;
    height: 93vh;
    /* overflow: hidden; */
}
.Hobby__box:not(.active) {
    overflow: hidden;
    position: relative;
    float: left;
}
@media only screen and (min-width: 600px){
    .Hobby__box {
        height: 50%;
        width: 50%;
        padding: 2rem;
    }
}
@media screen and (max-width: 600px){
    .Hobby__box {
        height: 25%;
        width: 100%;
    }
}
.Hobby__card {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
    transition: all 200ms ease-in-out
}

/* COOKING */
#Hobby__cooking__img {
    background-image: url('../../assets/img/hobbies/hobby_cooking.png');
    background-size: cover;
    background-position: center;
}
/* END COOKING */

/* SPORTS */
#Hobby__sports__img {
    background-image: url('../../assets/img/hobbies/hobby_sports.png');
    background-size: cover;
    background-position: center;
}
/* END SPORTS */

/* MUSIC */
#Hobby__music__img {
    background-image: url('../../assets/img/hobbies/hobby_music.png');
    background-size: cover;
    background-position: center;
}
/* END MUSIC */

/* CODING */
#Hobby__coding__img {
    background-image: url('../../assets/img/hobbies/hobby_coding.png');
    background-size: cover;
    background-position: center;
}

/* END CODING */
</style>
