<template lang="html">
<div id="Dota">
    <div class="Dota__img sports-img">
        <div class="Dota__header">
            <span class="Dota__header__text">
                The bittersweet game
            </span>
        </div>
    </div>
    <div class="Dota__favorite__player">
        <img :src="require('../../../assets/img/sports/dota/dendi2.png')" class="img-responsive" width="844" height="700"/>
    </div>
    <div class="Dota__profile shadow-light">
        <div class="Dota__profile__img"/>
        <div class="Dota__profile__link">
            <a target="_blank" href="https://steamcommunity.com/id/frenchKisss/">View Profile</a>
        </div>
        <div class="Dota__position">
            (3rd) Offlaner / (1st) Core
        </div>
        <div class="Dota__profile__playstyle">
            <ul>
                <ProgressBar
                    v-for="(style, i) in playingStyles"
                    :key="`DotaPlayingStyle_${i}`"
                    :name="style.name"
                    :percent="style.percent"
                    theme="alternate-green"
                    size="small"/>
            </ul>
        </div>
    </div>
    <!-- <section class="section section-light">
        <h2>Dota</h2>
        <p>
            is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
    </section> -->
</div>
</template>

<script type="text/javascript">
import { DotaPlayingStyle } from '@/classes/sports.js'
export default {
    data () {
        return {
            playingStyles: [
                new DotaPlayingStyle('Pushing', 50, 'default'),
                new DotaPlayingStyle('Fighting', 90, 'default'),
                new DotaPlayingStyle('Farming', 80, 'default'),
                new DotaPlayingStyle('Support', 30, 'default')
            ]
        }
    },
    components: {
        ProgressBar: () => import('../../fragments/ProgressBar.vue')
    }
}
</script>

<style scoped>
#Dota {
    color: #ffffff;
    position: relative;
    height: 100vh;
}
.Dota__profile__img {
    background-image: url('../../../assets/img/sports/dota/shadow-fiend.gif');
}
.Dota__img {
    background-image: url('../../../assets/img/sports/dota-background.png');
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.Dota__favorite__player {
    position: absolute;
    left: 5%;
    bottom: 0%;
}
.Dota__header__text {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);

    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
}
.Dota__profile {
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.10);
    width: 20vw;
    padding: 1rem;
    position: absolute;
    top: 30%;
    left: 70%;
}
</style>
