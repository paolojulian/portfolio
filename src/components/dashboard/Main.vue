<template>
<div class="main">
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
    }
}
</script>

<style scoped>

.main {
    height: 60vh;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;
    color: #f9f9f9;
    background-image: linear-gradient(transparent, transparent, #121013);
}
.profile-description p {
    font-size: 1rem;
    letter-spacing: 1px;
}

@media screen and (min-width: 600px){
    .main {
        box-sizing: border-box;
        padding: 0 50px;
        padding-top: 50px;
    }
    .profile-pic {
        flex: 1;
    }
    .profile-description {
        flex: 1;
        text-align: center;
    }
    .profile-description h3 {
        font-size: 40px;
        margin-bottom: 10px;
        letter-spacing: 5px;
        text-transform: uppercase;
    }
}

</style>
