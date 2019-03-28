<template lang="html">
<div id="ESports">
    <div class="ESports_header">
        <span class="text-shadow-dark"
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
        >
            E-SPORTS
        </span>
    </div>
    <div class="ESports_games">
        <EsportsCard
            :data-aos="animation"
            data-aos-delay="300"
            data-aos-anchor-placement="top-center"
            class="dota"
            :name="dota.name"
            :hero="dota.hero"
            :role="dota.role"
            :rank="dota.rank"
            :player="dota.player"
            :team="dota.team"
            image-name="dota-background.png"
            color="yellow"
        /><EsportsCard
            :data-aos="animation"
            data-aos-delay="600"
            data-aos-anchor-placement="center-bottom"
            class="csgo"
            :name="csgo.name"
            :gun="csgo.gun"
            :role="csgo.role"
            :rank="csgo.rank"
            :player="csgo.player"
            :team="csgo.team"
            image-name="csgo-background.png"
            color="yellow"
        /><EsportsCard
            :data-aos="animation"
            data-aos-delay="800"
            data-aos-anchor-placement="center-bottom"
            class="apex"
            :name="apex.name"
            :hero="apex.hero"
            :gun="apex.gun"
            :player="apex.player"
            image-name="apex-background.png"
            color="blue"
        />
    </div>
</div>
</template>

<script type="text/javascript">
import { Dota, Csgo, Apex } from '@/classes/esports.js'
export default {
    data () {
        return {
            dota: new Dota(
                'Dendi',
                'Na`Vi',
                'Invoker',
                'Offlaner/Core',
                '4500 - 5200'
            ),
            csgo: new Csgo(
                's1mple',
                'Na`Vi',
                'AK-47',
                'Entry Fragger/Lurker',
                'MG2 - DMG'
            ),
            apex: new Apex(
                'Shroud',
                'Mirage',
                'Wingman/R-301'
            )
        }
    },
    computed: {
        windowWidth () {
            return window.innerWidth
        },
        animation () {
            if (this.windowWidth < 600) {
                return 'slide-left'
            }
            return 'zoom-in-down'
        }
    },
    components: {
        EsportsCard: () => import('./EsportsCard.vue')
    }
}
</script>

<style scoped>
.ESports_header {
    height: 15vh;
    background-color: #111111;
    color: #d3d3d3;
    letter-spacing: 0.3rem;
    font-size: 2rem;
    font-style: italic;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ESports_games {
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(var(--my-display-height) - var(--my-header-height));
}
@media screen and (min-width: 800px){
    #ESports {
        height: 130vh;
    }
    .ESports_header {
        height: 37vh;
        background-color: #111111;
        color: #d3d3d3;
        letter-spacing: 0.3rem;
        font-size: 5rem;
        font-style: italic;
        font-weight: bold;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .ESports_games {
        position: relative;
        flex-direction: row;
        height: var(--my-display-height);
    }
}
</style>
