<template lang="html">
    <div id="Hobby">
        <div id="Hobby__cooking"
            class="Hobby__box"
        >
            <div id="Hobby__cooking__img" class="Hobby__card"/>
            <hobby-content
                :hobby-header="hobbyCooking.header"
                :hobby-categories="hobbyCooking.categories"
                @click.native="toggleActive('cooking')"
                class="Hobby__content"/>
        </div>
        <div id="Hobby__music"
            class="Hobby__box"
            @click="toggleActive('music')"
        >
            <div id="Hobby__music__img" class="Hobby__card"/>
            <hobby-content
                :hobby-header="hobbyMusic.header"
                :hobby-categories="hobbyMusic.categories"
                class="Hobby__content"/>
        </div>
        <div id="Hobby__sports"
            class="Hobby__box"
            @click="toggleActive('sports')"
        >
            <div id="Hobby__sports__img" class="Hobby__card"/>
            <hobby-content
                :hobby-header="hobbySports.header"
                :hobby-categories="hobbySports.categories"
                class="Hobby__content"/>
        </div>
        <div id="Hobby__coding"
            class="Hobby__box"
            @click="toggleActive('coding')"
        >
            <div id="Hobby__coding__img" class="Hobby__card"/>
            <hobby-content
                :hobby-header="hobbyCoding.header"
                :hobby-categories="hobbyCoding.categories"
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
                music: false,
                sports: false,
                coding: false
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
    overflow: hidden;
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

.Hobby__box:not(.active):hover .Hobby__card{
    transform: scale(1.1);
    z-index: -1;
}
.Hobby__content {
    cursor: pointer;
    height: 100%;
    width: 100%;

    box-shadow: inset 0 0 150px #000000;
    background-color: rgba(100, 100, 100, 0.6);
    color: rgba(255, 255, 255, 1);
}
.Hobby__content >>> .HobbyContent__header{
    background-color: rgba(100, 100, 100, 0.8);
    font-size: 5em;
    font-weight: 500;
    color: #fffb00;
}
.Hobby__content >>> .HobbyContent__body{
    overflow-y: auto;
    font-size: 2em;
    font-weight: 400;
}
@media screen and (max-width: 600px){
    .Hobby__content >>> .HobbyContent__body{
        font-size: 1em;
    }
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
#Hobby__sports.active .Hobby__card{
    transform: translateX(-90%);
}
/* END SPORTS */

/* MUSIC */
#Hobby__music__img {
    background-image: url('../../assets/img/hobbies/hobby_music.png');
    background-size: cover;
    background-position: center;
}
#Hobby__music.active .Hobby__card{
    transform: translateX(90%);
}
/* END MUSIC */

/* CODING */
#Hobby__coding__img {
    background-image: url('../../assets/img/hobbies/hobby_coding.png');
    background-size: cover;
    background-position: center;
}
#Hobby__coding.active .Hobby__card{
    transform: translateX(90%);
}
/* END CODING */
</style>
