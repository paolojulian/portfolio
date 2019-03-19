<template lang="html">
<div class="EsportsGame"
    data-aos="slide-right"
    data-aos-delay="300"
>
    <div class="EsportsCard">
        <div class="EsportsCard-img" :style="imgStyle"/>
        <div class="EsportsCard-text">
            <div class="EsportsCard-name text-shadow-light">
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
    </div>
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
        imageName: {
            type: String,
            default: 'dota-background.png'
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
        },
        imgStyle () {
            let style = {}
            // let esportsPath = '../../../assets/img/sports/esports/'
            style['backgroundImage'] = `url(` + require('../../../assets/img/sports/esports/' + this.imageName) + `)`
            return style
        }
    }
}
</script>

<style scoped>
.EsportsGame {
    position: relative;
    height: calc(100% / 3);
    flex: 1;
    box-sizing: border-box;
}
.EsportsCard {
    height: 95%;
    position: relative;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.25);
}
.EsportsCard-img {
    float: left;
    width: 50%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.EsportsCard-text {
    float: right;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.EsportsCard-name, .EsportsCard-description, .EsportsCard-idols {
    flex: 1;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.EsportsCard-name {
    padding: 0.5rem;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    vertical-align: bottom;
}
.EsportsCard-description {
    background-color: #111111;
    color: #d3d3d3;
    font-size: 0.9rem;
}
.EsportsCard_tag {
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 0.05rem;
}
.EsportsCard_thin {
    font-weight: 300;
    font-size: 0.75rem;
}
@media screen and (min-width: 600px){
    .EsportsGame {
        height: 100%;
        padding: 10px;
    }
    .EsportsCard {
        height: 100%;
    }
    .EsportsCard-img {
        float: none;
        width: 100%;
        height: 50%;
    }
    .EsportsCard-text {
        float: none;
        height: 50%;
        width: 100%;
    }
    .EsportsCard-name {
        padding: 1rem;
        font-weight: bold;
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
        vertical-align: bottom;
    }
    .EsportsCard-description {
        background-color: #111111;
        color: #d3d3d3;
    }
    .EsportsCard_tag {
        font-weight: 500;
        font-size: 1.2rem;
        letter-spacing: 0.05rem;
    }
}
@media screen and (min-width: 800px){
    .EsportsGame {
        padding: 10px;
    }
}
@media screen and (min-width: 1000px){
    .EsportsGame {
        padding: 4rem;
    }
}
</style>
