<template lang="html">
<div class="EsportsCard">
    <div class="EsportsCard-img" v-if="imageLayout === 'top'"/>
    <div class="EsportsCard-text">
        <div class="EsportsCard-name">
            {{ name }}
        </div>
        <div class="EsportsCard-description">
            <div class="EsportsCard-description-hero" v-if="hero">
                <span class="EsportsCard_tag">Favorite Hero:</span>
                <span class="EsportsCard_thin">{{ hero }}</span>
            </div>
            <div class="EsportsCard-description-rank" v-if="gun">
                <span class="EsportsCard_tag">Favorite Gun: </span>
                <span class="EsportsCard_thin">{{ gun }}</span>
            </div>
            <div class="EsportsCard-description-role" v-if="role">
                <span class="EsportsCard_tag">Role: </span>
                <span class="EsportsCard_thin">{{ role }}</span>
            </div>
            <div class="EsportsCard-description-rank" v-if="rank">
                <span class="EsportsCard_tag">Rank: </span>
                <span class="EsportsCard_thin">{{ rank }}</span>
            </div>
        </div>
        <div class="EsportsCard-idols" :style="idolsStyle">
            <div class="EsportsCard-idols-player" v-if="player">
                <span class="EsportsCard_tag">Favorite Player: </span>
                <span class="EsportsCard_thin">{{ player }}</span>
            </div>
            <div class="EsportsCard-idols-team" v-if="team">
                <span class="EsportsCard_tag">Favorite Team: </span>
                <span class="EsportsCard_thin">{{ team }}</span>
            </div>
        </div>
    </div>
    <div class="EsportsCard-img" v-if="imageLayout === 'bottom'"/>
</div>
</template>

<script type="text/javascript">
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        hero: {
            type: String
        },
        gun: {
            type: String
        },
        role: {
            type: String
        },
        rank: {
            type: String
        },
        player: {
            type: String
        },
        team: {
            type: String
        },

        /**
         * IF BACKGROUND WILL BE TOP OR BOTTOM
         */
        imageLayout: {
            type: String, // top || bottom
            required: true
        },
        color: {
            type: String, // yellow || blue
            required: true
        }
    },

    computed: {
        idolsStyle () {
            let style = {}
            switch (this.color) {
            case 'yellow':
                style['backgroundColor'] = 'var(--my-yellow)'
                break
            case 'blue':
                style['backgroundColor'] = 'var(--my-blue)'
                break
            default:
                style['backgroundColor'] = 'var(--my-yellow)'
                break
            }
            return style
        }
    }
}
</script>

<style scoped>
.EsportsCard-name {
    font-weight: bold;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
}
.EsportsCard-text {
    display: flex;
    flex-direction: column;
    height: 50%;
}
.EsportsCard-name, .EsportsCard-description, .EsportsCard-idols {
    flex: 1;
    margin: auto auto;
}
.EsportsCard-name {
    vertical-align: bottom;
}
.EsportsCard-img {
    width: 100%;
    height: 50%;
    background-color: var(--my-yellow);
}
.EsportsCard_tag {
    font-weight: 500;
    font-size: 1.2rem;
    letter-spacing: 0.05rem;
}
.EsportsCard_thin {
    font-weight: 300;
    font-size: 1.1rem;
}
</style>
