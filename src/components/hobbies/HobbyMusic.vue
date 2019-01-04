<template lang="html">
<div id="HobbyMusic">
    <PlayList/>
    <Player/>
</div>
</template>

<script type="text/javascript">
import PlayList from './utils/PlayList'
import Player from './utils/Player'
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
