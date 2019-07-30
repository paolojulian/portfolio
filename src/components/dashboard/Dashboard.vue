<template>
<div class="dashboard">
    <div class="dashboard-name">
        <!-- PIPZ -->
    </div>
    <div class="dashboard-card">
        <Main/>
        <Skills/>
        <Hobbies/>
    </div>
    <div class="dashboard-end">
        <img src="https://chefpipz-api-portfolio.s3-ap-southeast-1.amazonaws.com/images/static/puzzle.png"
        style="visibility: hidden;"/>
    </div>
    <div class="end-background"/>
    <Footer/>
</div>
</template>

<script>
export default {
    components: {
        Main: () => import('./Main.vue'),
        Skills: () => import('./Skills.vue'),
        Hobbies: () => import('./Hobbies.vue'),
        Footer: () => import('./Footer.vue')
    }
}
</script>

<style scoped>
.dashboard {
    position: relative;
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
    background-image: url('https://chefpipz-api-portfolio.s3-ap-southeast-1.amazonaws.com/images/static/gradient_background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}
.dashboard-name {
    box-sizing: border-box;
    padding: 50px;
    width: 0;
    margin: auto;
}
.dashboard::before {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;

    background-image: url('https://chefpipz-api-portfolio.s3-ap-southeast-1.amazonaws.com/images/static/Laptop_720p.jpg');
    background-attachment: fixed;
    background-size: cover;
    transform-origin: center center 0;
    mix-blend-mode: multiply;
    transform: translateZ(-1px) scale(1.1);
    /* z-index: -1; */
    min-height: 100vh;
}
.dashboard-end {
    position: relative;
    width: calc(100% - 2rem);
    margin-left: auto;
    margin-right: auto;

}
.dashboard-card {
    position: relative;

    width: calc(100% - 5rem);
    margin-left: auto;
    margin-right: auto;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.50);
    background-color: rgba(0, 0, 0, 0.35);
    z-index: 5;
}
.dashboard-end {
    background-image: url('https://chefpipz-api-portfolio.s3-ap-southeast-1.amazonaws.com/images/static/puzzle.png');
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    z-index: 6;
}
.end-background {
    position: absolute;
    bottom: 0;
    left: 0;
    height: calc(60vh + 200px);
    width: 100%;
    background-color: rgba(0, 0, 0, 0.35);
}

@media screen and (min-width: 600px) {
    .dashboard-card,
    .dashboard-end {
        width: calc(100% - 50px);
    }
}
@media screen and (min-width: 1000px) {
    .dashboard-card,
    .dashboard-end {
        width: 1000px;
    }
}
</style>
