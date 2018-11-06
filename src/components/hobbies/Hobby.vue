<template lang="html">
    <div id="Hobby">
        <div id="Hobby__cooking"
            class="Hobby__box"
            @click="toggleActive('cooking')"
        >
            <div id="Hobby__cooking__img" class="Hobby__card"/>
            <hobby-cooking :active="active.cooking" class="Hobby__content"/>
        </div>
        <div id="Hobby__music"
            class="Hobby__box"
            @click="toggleActive('music')"
        >
            <div id="Hobby__music__img" class="Hobby__card"/>
            <div class="Hobby__content">
                <hobby-music/>
            </div>
        </div>
        <div id="Hobby__sports"
            class="Hobby__box"
            @click="toggleActive('sports')"
        >
            <div id="Hobby__sports__img" class="Hobby__card"/>
            <div class="Hobby__content">
                <hobby-sports/>
            </div>
        </div>
        <div id="Hobby__coding"
            class="Hobby__box"
            @click="toggleActive('coding')"
        >
            <div id="Hobby__coding__img" class="Hobby__card"/>
            <div class="Hobby__content">
                <hobby-coding/>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    components: {
        HobbyCooking: () => import('./utils/HobbyCooking'),
        HobbyMusic: () => import('./utils/HobbyMusic'),
        HobbySports: () => import('./utils/HobbySports'),
        HobbyCoding: () => import('./utils/HobbyCoding')
    },
    data () {
        return {
            active: {
                cooking: false,
                music: false,
                sports: false,
                coding: false
            },
            cards: 4
        }
    },
    methods: {
        toggleActive (active) {
            let initialData = this.active[active]
            // this.resetActive()
            this.active[active] = !initialData
        },
        resetActive () {
            this.active = {
                cooking: false,
                music: false,
                sports: false,
                coding: false
            }
        }
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
.Hobby__box {
    overflow: hidden;
    position: relative;
    height: 50%;
    width: 50%;
    float: left;
}
.Hobby__card {
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 100%;
}
@media only screen and (min-width: 600px) {
    .Hobby__box:not(.active):hover .Hobby__card{
        opacity: 0.85;
        transform: scale(1.1);
        z-index: -1;
    }
}
.Hobby__content {
    box-shadow: inset 0 0 150px #000000;
    position: relative;
    height: 100%;
    width: 100%;
    color: #ffffff;
    text-align: center;
}
.Hobby__content >>> .HobbyContent__header{
    font-size: 5em;
}
.Hobby__content >>> .HobbyContent__body{
    font-size: 2em;
}

/* COOKING */
#Hobby__cooking .Hobby__card{
    background-color: #7bb71f;
}
#Hobby__cooking__img {
    background-image: url('../../assets/img/hobbies/hobby_cooking.png');
    background-size: cover;
    background-position: center;
}
#Hobby__cooking.active .Hobby__card{
    transform: translateX(-90%);
}
#Hobby__cooking .Hobby__card {
    transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;
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
#Hobby__sports .Hobby__card {
    transition: all 200ms ease-in-out
}
/* END SPORTS */

/* MUSIC */
#Hobby__music .Hobby__card{
    background-color: #fffb00;
}
#Hobby__music__img {
    background-image: url('../../assets/img/hobbies/hobby_music.png');
    background-size: cover;
    background-position: center;
}
#Hobby__music.active .Hobby__card{
    transform: translateX(90%);
}
#Hobby__music .Hobby__card {
    transition: all 400ms ease-in-out
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
#Hobby__coding .Hobby__card{
    background-color: #f37416;
}
#Hobby__coding .Hobby__card {
    transition: all 200ms ease-in-out
}
/* END CODING */
</style>
