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
    <section class="section section-dark">
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
    </section>
</div>
</template>

<script type="text/javascript">
export default {

}
</script>

<style scoped>
.Hiking__img {
    background-image: url('../../../assets/img/sports/hiking-background.png');
    height: 75vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.Hiking__header {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
}
.Hiking__header__text {
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    font-size: 2rem;
    color: var(--my-dark);
}
</style>
