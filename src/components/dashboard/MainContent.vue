<template>
<div class="MainContent">
    <social-media-accounts/>
    <div class="MainContent__image">
        <div class="img-responsive"/>
    </div><div class="MainContent__text">
        <div class="center-absolute">
            <div class="MainContent__header shake-start shake-hover">
                <span>HELLO THERE!<br />PAOLO HERE</span>
            </div>
            <div class="MainContent__description">
                    Hi,  I am a software developer.
                    Aside from my job as a programmer which I most love to do, I also do a lot of things I consider as my hobbies such as playing computer games and basketball with friends, cooking good food from different cuisines that I definitely share with people close to me. I am passionate about music and that motivates me to sing and play musical instruments like guitar, piano, and flute and I think music gives life to everything we do. 
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'MainContent',
    components: {
        SocialMediaAccounts: () => import('./SocialMediaAccounts.vue')
    }
}
</script>

<style scoped>
/* MOBILE */
.MainContent {
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-color: #ffffff;
}
.MainContent__image {
    position: relative;
    height: calc(var(--my-display-height) * 0.45);
    width: 100%;
    background-color: #d3d3d3;
}
.MainContent__image div.img-responsive{
    position: absolute;
    bottom: 0;
    left: 40%;
    transform: translateX(-36%);
    background-image: url('../../assets/img/pipz.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: bottom center;
    height: 100%;
    width: 100%;
}
.MainContent__text {
    position: relative;
    letter-spacing: 0.05em;
    text-align: center;
    overflow-y: auto;

    height: calc(var(--my-display-height) * 0.55);
    width: 100%;
}
.MainContent__text div.center-absolute{
    width: 90%;
}
.MainContent__header,
.MainContent__description {
    margin-bottom: 1rem;
}
.MainContent__header {
    font-size: 1.5rem;
    font-weight: bold;
}
.MainContent__description {
    font-weight: 300;
    font-size: 0.8rem;
}
.MainContent__button {
    padding: 0.5rem 3rem;

    font-weight: 500;
    font-size: 1.2rem;

    color: #ffffff;
    background-color: var(--my-blue);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
}
/* TAB */
@media screen and (min-width: 600px){
    .MainContent__image div.img-responsive{
        left: 20%;
        transform: translateX(-20%);
    }
    .MainContent__text div.center-absolute div{
        margin-bottom: 1.5rem;
    }
    .MainContent__description {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
}
/* WEB */
@media screen and (min-width: 1000px){
    .MainContent__image {
        position: relative;
        display: inline-block;
        width: 50%;
        height: 100vh;
        background-color: unset;
    }
    .MainContent__image div.img-responsive{
        left: 5%;
        transform: none;
    }
    .MainContent__text {
        position: relative;
        display: inline-block;
        width: 50%;
        height: 100vh;
    }
    .MainContent__header {
        font-size: 2rem;
    }
    .MainContent__description {
        font-size: 1.2rem;
        margin: 0 auto;
        width: 80%;
    }
    .MainContent__button {
        cursor: pointer;

        transition: all 100ms ease-in-out;
    }
    .MainContent__button:hover{
        background-color: var(--my-dark-blue);
    }
}
</style>
