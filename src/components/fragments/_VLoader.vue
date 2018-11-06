<template>
    <div id="VLoader">
        <font-awesome-icon
            icon="spinner"
            spin/>
    </div>
</template>
<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
library.add(faSpinner)
export default {
}
</script>


<style scoped>
#VLoader{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

</style>
