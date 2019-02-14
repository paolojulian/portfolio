<template lang="html">
<div id="Hiking">
    <div class="Hiking__img sports-img">
        <div class="Hiking__header">
            <span class="Hiking__header__text">
                The climb is not the hardest part
                <br />
                It is your discipline
            </span>
        </div>
    </div>
    <div class="Hiking__gallery">
        <div v-for="(img, i) in gallery">
            <img class="hiking-img" v-bind:src="img"/>
        </div>
    </div>
    <!-- <section class="section section-dark">
        <h2>Hiking</h2>
        <p>
            Hiking for me is like the definition of life.
            Every step, it gets harder and harder. Every climb it gets rougher and steeper.
            You only keep going forward.
            There will be ups and downs along the way until you reach the top.
            Satisfied and tired, you look back, and know that it was a very hard challenge you have gone through.
            It's like life, it gets tough along the way, but when you reach your goal,
            you will be satisfied on what you have achieved, and when you reach your goal.
        </p>
    </section> -->
</div>
</template>

<script type="text/javascript">
export default {
    data () {
        return {
            gallery: [
                require('@/assets/img/sports/hiking/1.png'),
                require('@/assets/img/sports/hiking/2.png'),
                require('@/assets/img/sports/hiking/3.png'),
                require('@/assets/img/sports/hiking/4.png'),
                require('@/assets/img/sports/hiking/5.png'),
                require('@/assets/img/sports/hiking/6.png')
            ]
        }
    }
}
</script>

<style scoped>
#Hiking {
    position: relative;
    height: 100vh;
}
.Hiking__img {
    height: 100%;
    background-image: url('../../../assets/img/sports/hiking-background.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.Hiking__header {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
}
.Hiking__header__text {
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    font-size: 3rem;
    color: var(--my-dark);
}
.Hiking__gallery {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 75vw;
    display: -webkit-box;
    display: flex;

    flex-wrap: wrap;
    flex-direction: column;
    flex-flow: row wrap;
    padding: .2vw;
}
.Hiking__gallery div {
    -webkit-box-flex: auto;
    -ms-flex: auto;
    flex: auto;
    width: 100px;
    margin: .2vw;
}
.Hiking__gallery div img{
    width: 100%;
    height: auto;

    transition: all 100ms ease-in;
    cursor: pointer;
}

.Hiking__gallery div img:hover{
    transform: scale(1.2);
}
@media screen and (max-width: 400px) {
    .Hiking__gallery {
        padding: 0;
    }
    .Hiking__gallery div {
        margin: 0;
    }
}
</style>
