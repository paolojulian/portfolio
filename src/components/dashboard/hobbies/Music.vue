<template>
<div class="Music">
    <div class="music-favorite">
        <div class="music-favorite-artist">
            <img/>
            <span>
                {{ favorite.artist }}
            </span>
        </div>
        <div class="music-favorite-song">
        </div>
    </div>
    <div class="music-quote">

    </div>
</div>
</template>

<script>
export default {
    name: 'Music-Dashboard',
    data () {
        return {
            favorite: {
                song: '',
                artist: 'John Mayer'
            }
        }
    }
}
</script>

<style scoped>
.Music {

}
</style>
