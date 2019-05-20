<template>
<div class="Sports">
    <div class="dashboard-title">
        Sportsmanship
    </div>
    <div class="sports-vector">

    </div>
    <div class="sports-content">
        <span v-for="(sport, i) in sports"
            :key="`sports_${i}`"
        >
            <span class="sports-name">{{ sport.name }}</span>
        </span>
    </div>
</div>
</template>

<script>
class Sport {
    constructor (name, image_path = null) {
        this.name = name
        this.image_path = image_path
    }
}
export default {
    name: 'Sports-Dashboard',
    data () {
        return {
            sports: [
                new Sport('hiking'),
                new Sport('basketball'),
                new Sport('dota'),
                new Sport('csgo'),
                new Sport('apex'),
            ]
        }
    }
}
</script>

<style scoped>
.Sports {
    position: relative;
    height: 91.5vh;
    width: 100%;
    color: var(--google-font-white-primary);
}
.sports-content {
    height: calc(100% - 132px);
    width: 100%;
    background-color: var(--google-grey-primary);
}
.sports-name {
    text-transform: uppercase;
    font-size: 24px;
    letter-spacing: 1px;
}
</style>
