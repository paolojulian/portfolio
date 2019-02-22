<template lang="html">
<div id="Basketball">
    <div class="Basketball__img sports-img"/>
    <div class="Basketball__header">
        <div class="basketball-header-bold text-shadow-light">
            The moment you give up
            <br />
            is the moment you let someone else win
        </div>
        <div class="basketball-header-light">
            Nash, Melo, Birdman, KG and Kobe are my favorite players
            to play the game of basketball, they have inspired me in many ways
            not just in the game but also in everyday life.
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
    box-sizing: border-box;
    background-color: #ffffff;
    position: absolute;
    top: 0%;
    left: 50vw;
    height: 100%;
    width: 50vw;

    padding: 3rem;
    padding-top: 20vh;

}
.basketball-header-bold {
    font-weight: bold;
    font-size: 1.4rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
}
.basketball-header-light {
    font-weight: 300;
    font-size: 1.1rem;
}
.Basketball__favorites {
    position: absolute;
    top: 40vh;
    left: 0;
    width: 100vw;
    height: 60vh;

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
    left: 25%;
    z-index: 8;
    background-image: url('../../../assets/img/sports/basketball/nash.png');
    animation-name: slideInFromLeft;
    animation-duration: 1200ms;
}
.Basketball__favorites__img.sf{
    left: 33%;
    z-index: 9;
    background-image: url('../../../assets/img/sports/basketball/melo.png');
    animation-name: slideInFromLeft;
    animation-duration: 700ms;
}
.Basketball__favorites__img.c{
    left: 41%;
    background-image: url('../../../assets/img/sports/basketball/birdman.png');
    z-index: 10;
    animation-name: slideInFromBottom;
    animation-duration: 600ms;
}
.Basketball__favorites__img.pf{
    background-image: url('../../../assets/img/sports/basketball/garnett.png');
    left: 48%;
    z-index: 9;
    animation-name: slideInFromRight;
    animation-duration: 900ms;
}
.Basketball__favorites__img.sg{
    left: 55%;
    background-image: url('../../../assets/img/sports/basketball/kobe.png');
    z-index: 8;
    animation-name: slideInFromRight;
    animation-duration: 1500ms;
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
