<template lang="html">
    <div id="Dashboard">
        <div class="Dashboard__image">
            <div class="img-responsive"/>
        </div><div class="Dashboard__text">
            <div class="center-absolute">
                <div class="Dashboard__header shake-start shake-hover">
                    <span>HELLO THERE!<br />PAOLO HERE</span>
                </div>
                <div class="Dashboard__description">Hi, I am a Software Application Developer. I also have
a lot of hobbies. I love cooking good (sometimes bad) food from different
cuisines, to sing with my best buddy (guitar), to play (and lose some) highly competitive games with my
friends, to train physically by playing basketball, hiking and
more importantly, to play with that keyboard God knows what bugs might come out (Programming).</div>
                <router-link to="/hobby" class="Dashboard__button">CHECK ME</router-link>
            </div>
        </div>
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
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #ffffff;
}
.Dashboard__image div{
    background-image: url('../assets/img/pipz.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 100%;
    width: 100%;
}
.Dashboard__text {
    position: relative;
    letter-spacing: 0.05em;
    text-align: center;
}
.Dashboard__text div.center-absolute{
    width: 90%;
}
.Dashboard__button {
    padding: 0.8rem;

    font-weight: 500;
    font-size: 1.2rem;

    color: #ffffff;
    background-color: var(--my-blue);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    cursor: pointer;

    transition: all 100ms ease-in-out;
}
.Dashboard__button:hover{
    background-color: var(--my-dark-blue);
}

@media screen and (min-width: 600px){
    .Dashboard__image {
        display: inline-block;
        width: 50%;
        height: 100vh;
    }
    .Dashboard__image div{
        position: absolute;
        bottom: 0;
        left: 5%;
    }
    .Dashboard__text {
        position: relative;
        display: inline-block;
        width: 50%;
        height: 100vh;
    }
    .Dashboard__text div.center-absolute div{
        margin-bottom: 2rem;
    }
    .Dashboard__header {
        font-size: 2rem;
        font-weight: bold;
    }
    .Dashboard__description {
        margin: 0 auto;
        width: 80%;
        font-weight: 300;
    }

}
@media screen and (max-width: 600px){
    .Dashboard__image {
        height: calc(var(--my-display-height) / 2);
        width: 100%;
        background-color: #d3d3d3;
    }
    .Dashboard__text {
        height: calc(var(--my-display-height) / 2);
        width: 100%;
    }
    .Dashboard__header {
        font-size: 1.5rem;
        font-weight: bold;
    }
    .Dashboard__description {
        font-weight: 300;
        font-size: 0.8rem;
    }
    .Dashboard__text div.center-absolute div{
        margin-bottom: 2rem;
    }
}
</style>
