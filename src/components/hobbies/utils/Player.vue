<template lang="html">
<div id="Player">
    <div id="Player__thumbnail"/>

    <div id="Player__title">
        Title
    </div>

    <div id="Player__description">
        dksajd
    </div>

    <div id="Player__controls">
        <audio controls>
            <source :src="test" type="audio/mp3"/>
        </audio>
    </div>

    <div id="Player__controls">
        <button class="play">
            Prev
        </button>
        <button class="play" v-if=" ! playing">
            Play
        </button>
        <button class="pause" v-if="playing">
            Pause
        </button>
        <button class="play">
            Next
        </button>
    </div>

</div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            test: require('@/assets/audio/Dreamin - Pipz.mp3')
        }
    },

    computed: {
        playing () {
            return true
        }
    }
}
</script>

<style scoped>
#Player {
    padding: 2rem;
    padding-top: 4rem;
    width: 40%;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.70);
    font-size: 1rem;
}
#Player div{
    margin: auto;
    text-align: center;
}
#Player__thumbnail {
    height: 20rem;
    width: 20rem;

    background-color: #ffffff;
    border-radius: 5px; 
}
#Player__title {
    padding-top: 2rem;
    padding-bottom: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2rem;
}
#Player__description {
    padding-bottom: 1rem;
}
#Player__controls {
    bottom: 3rem;
}

#Player__controls audio {
    width: 90%;
}
</style>
