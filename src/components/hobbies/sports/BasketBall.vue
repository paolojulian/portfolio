<template lang="html">
<div id="Basketball">
    <div class="Basketball__img sports-img">
        <div class="Basketball__header">
            <span class="Basketball__header__text">
                The moment you give up
                <br />
                is the moment
                <br />
                you let someone else win
            </span>
        </div>
    </div>
    <div class="Basketball__favorites">
        <div class="Basketball__images">
            <div class="Basketball__favorites__img pg"/>
            <div class="Basketball__favorites__img sg"/>
            <div class="Basketball__favorites__img sf"/>
            <div class="Basketball__favorites__img pf"/>
            <div class="Basketball__favorites__img c"/>
        </div>
    </div>
    <!-- <section class="section section-dark">
        <h2>Basketball</h2>
        <p>I loved basketball ever since i saw the duo of Steve Nash and Amare Stoudemire, those beautiful execution of pick and rolls were just amazing.
            Back in highschool, they use to call me "Birdman" because before, I loved blocking shots, defending the low post, similar to the playstyle of the infamous Chris "Birdman" Andersen.
            Today, I use to play basketball once a week with my highschool friends and I still enjoy playing it even though
            the stamina is not there.
        </p>
    </section> -->
</div>
</template>

<script type="text/javascript">
import { Carousel, Slide } from 'vue-carousel'
export default {
    components: {
        Carousel,
        Slide
    }
}
</script>

<style scoped>
#Basketball {
    position: relative;
    height: 93vh;
    overflow: hidden;
}
.Basketball__img {
    background-image: url('../../../assets/img/sports/basketball-background.png');
    overflow: hidden;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
}
.Basketball__header {
    position: absolute;
    top: 20%;
    left: 40vw;

    letter-spacing: 0.5rem;
    text-transform: uppercase;
}
.Basketball__header__text {
    font-size: 2.5rem;
}
.Basketball__favorites {
    position: absolute;
    top: 30%;
    left: 35vw;
    width: 65vw;
    height: 70%;

    letter-spacing: 0.5rem;
    text-transform: uppercase;
}
.Basketball__images {
    display: flex;
}
.Basketball__favorites__img{
    display: inline-block;
    position: absolute;
    bottom: 0%;


    width: 25vw;
    height: 25vw;

    background-repeat: no-repeat;
    background-size: contain;
}
/* .Basketball__favorites__img.pg:hover{
    z-index: 20;
} */
.Basketball__favorites__img.pg{
    left: 13%;
    z-index: 8;
    background-image: url('../../../assets/img/sports/basketball/nash.png');
    animation-name: slideInFromLeft;
    animation-duration: 1200ms;
}
.Basketball__favorites__img.sf{
    left: 22%;
    z-index: 9;
    background-image: url('../../../assets/img/sports/basketball/melo.png');
    animation-name: slideInFromLeft;
    animation-duration: 700ms;
}
.Basketball__favorites__img.c{
    left: 30%;
    background-image: url('../../../assets/img/sports/basketball/birdman.png');
    z-index: 10;
    animation-name: slideInFromBottom;
    animation-duration: 600ms;
}
.Basketball__favorites__img.sg{
    left: 38%;
    background-image: url('../../../assets/img/sports/basketball/kobe.png');
    z-index: 9;
    animation-name: slideInFromRight;
    animation-duration: 900ms;
}
.Basketball__favorites__img.pf{
    background-image: url('../../../assets/img/sports/basketball/garnett.png');
    left: 48%;
    z-index: 8;
    animation-name: slideInFromRight;
    animation-duration: 1500ms;
}
.Basketball__favorites {
    margin-top: 2rem;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes slideInFromBottom {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes slideInFromRight {
  0% {
    transform: translateX(200%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
