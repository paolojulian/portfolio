<template>
<div class="Footer">
    <div class="dashboard-title dashboard-title-light">
        CONTACT
    </div>
    <div class="social-media-accounts">
        <social-media-accounts/>
    </div>
</div>
</template>

<script>
export default {
    components: {
        SocialMediaAccounts: () => import('./SocialMediaAccounts.vue')
    },
}
</script>

<style>
.Footer {
    position: relative;
    background-color: var(--google-grey-primary);
    height: 70vh;
    width: 100%;
}
.social-media-accounts {
	position: absolute;
	top: 50%;
	left: 50%;
    transform: translate(-50%, -50%);
}
</style>
