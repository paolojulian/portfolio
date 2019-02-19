<template lang="html">
<div id="ESports">
    <EsportsCard
        class="dota"
        :name="dota.name"
        :hero="dota.hero"
        :role="dota.role"
        :rank="dota.rank"
        :player="dota.player"
        :team="dota.team"
        image-layout="top"
        color="yellow"
    /><EsportsCard
        class="csgo"
        :name="csgo.name"
        :gun="csgo.gun"
        :role="csgo.role"
        :rank="csgo.rank"
        :player="csgo.player"
        :team="csgo.team"
        image-layout="bottom"
        color="yellow"
    /><EsportsCard
        class="apex"
        :name="apex.name"
        :hero="apex.hero"
        :gun="apex.gun"
        :player="apex.player"
        image-layout="top"
        color="blue"
    />
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
                'Bloodhound/Bangalore',
                'Wingman/R-99 SMG'
            )
        }
    },
    components: {
        EsportsCard: () => import('./EsportsCard.vue')
    }
}
</script>

<style scoped>
#ESports {
    position: relative;
    display: flex;
    height: 93vh;
}

.dota, .csgo, .apex {
    position: relative;
    flex: 1;
    height: 100%;
}
/* .dota {
    background-color: #333333;
}
.csgo {
    background-color: #d3d3d3;
}
.apex {
    background-color: #33aa11;
} */
</style>
