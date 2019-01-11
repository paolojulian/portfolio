<template lang="html">
<div id="HobbyMusic">
    <PlayList/>
    <transition name="slide" mode="in-out">
        <Player/>
    </transition>
</div>
</template>

<script type="text/javascript">
import PlayList from './music/PlayList'
import Player from './music/Player'
export default {
    name: 'HobbyMusic',
    components: {
        PlayList,
        Player
    }
}
</script>

<style scoped>
#HobbyMusic {
    position: relative;
    height: 93vh;
    display: flex;
}
</style>
