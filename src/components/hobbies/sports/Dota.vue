<template lang="html">
<div id="Dota">
    <div class="Dota__img sports-img">
        <div class="Dota__header">
            <span class="Dota__header__text">
                The bittersweet game
            </span>
        </div>
    </div>
    <div class="Dota__profile">
        <div class="Dota__profile__img"/>
        <div class="Dota__profile__link">
            <a href="https://steamcommunity.com/id/frenchKisss/">View Profile</a>
        </div>
        <div class="Dota__profile__playstyle">
            <ul>
                <li>Fighting</li>
                <li>Pushing</li>
                <li>Supporting</li>
                <li>Versatility</li>
            </ul>
        </div>
    </div>
    <!-- <section class="section section-light">
        <h2>Dota</h2>
        <p>
            is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
    </section> -->
</div>
</template>

<script type="text/javascript">
export default {

}
</script>

<style scoped>
#Dota {
    position: relative;
    height: 100vh;
}
.Dota__profile__img {
    background-image: url('../../../assets/img/sports/dota/shadow-fiend.gif');
}
.Dota__img {
    background-image: url('../../../assets/img/sports/dota-background.png');
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
.Dota__header__text {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);

    font-size: 2.5rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
}
.Dota__profile {
    position: absolute;
    top: 30%;
    left: 70%;
}
</style>
