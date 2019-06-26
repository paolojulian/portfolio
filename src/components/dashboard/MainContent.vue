<template>
<div class="MainContent">
    <div class="MainContent__image">
        <div class="img-responsive"/>
    </div><div class="MainContent__text">
        <div class="MainContent__container">
            <div
                data-aos="fade-right"
                class="MainContent__header shake-start shake-hover main-content-text">
                <span>HELLO THERE!<br />PAOLO HERE</span>
            </div>
            <div class="MainContent__description main-content-text">
                <div data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-anchor-placement="top-bottom">
                    Hi, I am a fullstack web developer.
                </div>
                <div data-aos="fade-left"
                    data-aos-delay="600"
                    data-aos-anchor-placement="top-bottom">
                    Aside from my job as a programmer which I most love to do,
                </div>
                <div data-aos="fade-left"
                    data-aos-delay="100"
                    data-aos-anchor-placement="top-bottom">
                    I also do a lot of things I consider as my hobbies
                </div>
                <div data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-anchor-placement="top-bottom">
                    such as playing computer games and basketball with friends,
                </div>
                <div data-aos="fade-left"
                    data-aos-delay="700"
                    data-aos-anchor-placement="top-bottom">
                    cooking good food from different cuisines that I definitely share with people close to me.
                </div>
                <div data-aos="fade-left"
                    data-aos-delay="200"
                    data-aos-anchor-placement="top-bottom">
                    I am passionate about music and that motivates me to sing and play musical instruments
                </div>
                <div data-aos="fade-left"
                    data-aos-delay="500">
                    like guitar, piano, and flute and I think music gives life to everything we do. 
                </div>
            </div>
        </div>
    </div>
    <div class="MainContent__arrow"
        @click="handleScrollDown"
    >
        <i class="arrow arrow-down"/>
    </div>
</div>
</template>

<script>
export default {
    name: 'MainContent',
    methods: {
        handleScrollDown () {
            const element = document.getElementById('Programming__container')
            element.scrollIntoView({
                behavior: 'smooth'
            })
        }
    }
}
</script>

<style scoped>
/* MOBILE */
.MainContent {
    text-align: center;
    width: 100%;
    height: 91vh;
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
.MainContent__text div.MainContent__container{
    width: 90%;
    margin-top: 10%
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
.MainContent__arrow {
    cursor: pointer;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%);
    animation: moveCarret 1s infinite;
    z-index: 20; /* Should be greater than 11 */
}
i.arrow {
    border: solid var(--google-grey-primary);
    border-width: 0 6px 6px 0;
    display: inline-block;
    padding: 10px;
}
i.arrow.arrow-down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
}
/* TAB */
@media screen and (min-width: 600px){
    .MainContent__image div.img-responsive{
        left: 20%;
        transform: translateX(-20%);
    }
    .MainContent__text div.MainContent__container div.main-content-text {
        margin-bottom: 1.5rem;
    }
    .MainContent__description {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
}
/* WEB */
@media screen and (min-width: 1000px){
    .MainContent__text div.MainContent__container{
        margin-top: 20%
    }
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

@keyframes moveCarret {
    0% {
        transform: translateY(-10px);
    }
    50% {
        transform: translateY(10px);
    }
    100% {
        transform: translateY(-10px);
    }
}
</style>
