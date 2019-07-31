<template>
<div class="main"
    ref="main"
>
    <div class="carret-down"
        @click="scrollDown('main', 1000)">
        <img src="https://chefpipz-api-portfolio.s3-ap-southeast-1.amazonaws.com/images/static/carret_down.png"/>
    </div>
    <div class="profile-pic">
        <img :src="`${images.profile}`"/>
    </div>
    <div class="profile-description">
        <h3>I AM A PROGRAMMER</h3>
        <p>	Hi, I am a Software Application Developer.
 I also have a lot of hobbies. I love cooking good food from different cuisines. I also love playing computer games with my friends, I love singing and playing the guitar to my loved ones, I also love playing basketball and hiking and
more importantly, I LOVE programming.</p>
    </div>
</div>
</template>

<script>
export default {
    data () {
        return {
            images: {
                profile: 'https://chefpipz-api-portfolio.s3-ap-southeast-1.amazonaws.com/images/static/profile_300x300.png'
            }
        }
    },
    methods: {
        scrollDown(targetName, duration) {
            let targetPosition = this.$refs[targetName].getBoundingClientRect().bottom
            let startPosition = window.pageYOffset
            let distance = targetPosition - startPosition
            let startTime = null

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;

                let timeElapsed = currentTime - startTime;
                let run = ease(timeElapsed, startPosition, distance, duration)
                window.scrollTo(0, run)
                if (timeElapsed < duration) requestAnimationFrame(animation)
            }


            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation)
        }
    }
}
</script>

<style scoped>

.main {
    position: relative;
    height: 80vh;
    width: 100%;
    padding: 0 1rem;
    padding-top: 2rem;
    box-sizing: border-box;
    text-align: center;
    color: #f9f9f9;
    background-image: linear-gradient(transparent, transparent, #121013);
    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.25);
}
.carret-down {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 5rem;
    width: 100%;
    opacity: 0.75;
}
.carret-down img {
    height: 1.5rem;
    animation: upDownInfinite 2000ms ease-in-out infinite;
}
.profile-pic img {
    height: 20vh;
}
.profile-description h3 {
    font-size: 2rem;
}
.profile-description p {
    font-size: 1rem;
    letter-spacing: 1px;
    line-height: 1.3;
}

@media screen and (min-width: 600px){
    .main {
        display: flex;
        box-sizing: border-box;
        padding: 0 50px;
        padding-top: 150px;
    }
    .profile-pic {
        flex: 1;
    }
    .profile-pic img {
        height: unset;
    }
    .profile-description {
        flex: 1;
        text-align: center;
    }
    .carret-down {
        height: 100px;
    }
    .carret-down img {
        height: 30px;
    }
    .profile-description h3 {
        font-size: 40px;
        margin-bottom: 10px;
        letter-spacing: 5px;
        text-transform: uppercase;
    }
}
@media screen and (min-width: 1000px) {
    .carret-down {
        cursor: pointer;
    }
}

@keyframes upDownInfinite {
    0% {
        transform: translateY(20px);
    }
    50% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(20px);
    }
}

</style>
