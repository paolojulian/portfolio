<template lang="html">
<div id="Hiking">
    <div class="Hiking__img sports-img"/>
    <div class="Hiking__header">
        <div class="Hiking__header__text">
            <div class="hiking-header-bold text-shadow-light">
                IT’S NOT THE CLIMB,
                <br />
                IT’S THE DISCIPLINE TO CLIMB
            </div>
            <div class="hiking-header-light">
                I always like long hikes, the thrill of
sleeping in the cold, eating nuts, burritos,
that low amount of water, and the climb.
            </div>
        </div>
        <div class="Hiking__gallery">
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
}
</script>

<style scoped>
#Hiking {
    position: relative;
    height: 110vh;

    perspective: 1px;
    transform-style: preserve-3d;
}
.Hiking__img {
    height: 100%;
    background-image: url('../../../assets/img/sports/hiking-background.png');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
}
.Hiking__header {
    height: 70%;
    width: 100%;
    background-color: #ffffff;

    position: absolute;
    top: 0;
    left: 0;
}
.Hiking__header__text {
    vertical-align: middle;
    display: inline-block;
    width: 40%;
    height: 100%;
    color: var(--my-dark);
}
.hiking-header-bold {
    font-weight: bold;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
}
.hiking-header-light {
    font-weight: 300;
    font-size: 1.1rem;
}
.Hiking__gallery {
    display: inline-block;
    height: 100%;
    width: 40%;
    background-image: url('../../../assets/img/sports/hiking/hike.png');
    background-size: cover;
    background-position: center;
    transform: scale(0.8);
}
</style>
