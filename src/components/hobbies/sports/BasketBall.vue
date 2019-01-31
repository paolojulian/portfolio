<template lang="html">
<div id="Basketball">
    <div id="Basketball__header">
        <div id="Basketball__header__text">
            <div>
                <h1>BASKETBALL</h1>
                <h3>NEVER</h3>
                <h3>STOPS</h3>
            </div>

            <div>
                <h3>
                    <p>Every second</p>
                    <p>Every minute</p>
                    <p>Every quarter</p>
                    <p>Every game</p>
                    <p>There's a winner</p>
                </h3>
            </div>

            <div>
                <h3>
                    <p>Where the moment</p>
                    <p>you give up</p>
                    <p>is the moment</p>
                    <p>you let</p>
                    <p>"SOMEONE" win</p>
                </h3>
            </div>
        </div>
    </div>
    <!-- <div id="Basketball__gallery">
        Gallery
    </div> -->
</div>
</template>

<script type="text/javascript">
export default {

}
</script>

<style scoped>
#Basketball__header {
    perspective: 1px;
    transform-style: preserve-3d;
    overflow-y: auto;
    overflow-x: hidden;
}
#Basketball__header__text h1{
    letter-spacing: 1rem;
}
#Basketball__header__text h3 {
    letter-spacing: 0.5rem;
}
#Basketball__header__text div{
    margin-bottom: 20rem;
}
#Basketball__header__text {
    color: #cccccb;
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;

    position: relative;
    transform-style: inherit;
    box-sizing: border-box;
    padding: 20vw 2vw 5vw;
    min-height: 93vh;
    width: 100vw;
}
#Basketball__header__text, #Basketball__header__text::before {
    background: 50% 50% / cover;
}
#Basketball__header__text::before {
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    background-image: url('../../../assets/img/hobbies/basketball_wallpaper.png');
    background-size: cover;
    transform-origin: center center 0;
    transform: translateZ(-3px) scale(4);
    z-index: -1;
    min-height: 100vh;
}
#Basketball__gallery {
}
</style>
