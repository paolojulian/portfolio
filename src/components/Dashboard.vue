<template lang="html">
    <div id="Dashboard"
        :style="'background-image: url(' + require('@/assets/img/main3.jpg') + ');'"
    >
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'Dashboard'
}
</script>

<style scoped>
#Dashboard {
    text-align: center;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-size: cover;
}
</style>
