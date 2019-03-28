<template lang="html">
<div id="Hiking">
    <div class="Hiking__img sports-img"/>
    <div class="Hiking__header">
        <div class="Hiking__header__text">
            <div class="hiking-header-bold text-shadow-light"
                data-aos="fade-right"
                data-aos-anchor-placement="top-center"
            >
                IT’S NOT THE CLIMB,
                <br />
                IT’S THE DISCIPLINE TO CLIMB
            </div>
            <div class="hiking-header-light"
                data-aos="fade-left"
                data-aos-delay="100"
                data-aos-anchor-placement="top-center"
            >
                I always like long hikes, the thrill of
sleeping in the cold, eating nuts, burritos,
that low amount of water, and the climb.
            </div>
        </div>
        <div class="Hiking__gallery"
            data-aos="zoom-in-left"
            data-aos-delay="100"
            data-aos-anchor-placement="top-center"
        >
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    name: 'Hiking'
}
</script>

<style scoped>
#Hiking {
    position: relative;
    height: 100vh;

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
    height: 60%;
    width: 100%;
    background-color: #ffffff;

    position: absolute;
    top: 0;
    left: 0;
}
.Hiking__header__text {
    position: absolute;
    top: 70%;
    left: 0;
    width: 100%;
    height: 30%;
    color: var(--my-dark);

    padding: 5% 0;
}
.hiking-header-bold {
    margin: auto;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
}
.hiking-header-light {
    margin: auto;
    font-weight: 300;
    font-size: 0.9rem;
}
.Hiking__gallery {
    position: absolute;
    top: 0;
    left: 0;
    height: 70%;
    width: 100%;
    background-image: url('../../../assets/img/sports/hiking/hike.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}
@media screen and (min-width: 600px) {
    #Hiking {
        height: 110vh;
    }
    .Hiking__header {
        height: 70%;
    }
    .Hiking__header__text {
        position: static;
        top: 0;
        left: 0;

        vertical-align: middle;
        display: inline-block;
        width: 40%;
        height: 100%;
    }
    .hiking-header-bold {
        font-size: 1.4rem;
    }
    .hiking-header-light {
        font-size: 1.1rem;
    }
    .Hiking__gallery {
        position: static;
        display: inline-block;
        height: 100%;
        width: 40%;
        background-image: url('../../../assets/img/sports/hiking/hike.png');
        background-size: cover;
        transform: scale(0.8);
    }
}
</style>
