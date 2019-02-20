<template lang="html">
<div id="HobbyMusic">
    <PlayList/>
</div>
</template>

<script type="text/javascript">
import PlayList from './music/PlayList'
export default {
    name: 'HobbyMusic',
    components: {
        PlayList
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
