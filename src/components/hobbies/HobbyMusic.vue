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
    min-height: var(--my-display-height);
    display: flex;
}
@media screen and (min-width: 600px){
    #HobbyMusic {
        margin-top: 7vh;
    }
}
</style>
