<template>
<div class="Footer">
    <div class="dashboard-title dashboard-title-light">
        CONTACT
    </div>

    <social-media-accounts/>
    <mail/>
</div>
</template>

<script>
export default {
    components: {
        SocialMediaAccounts: () => import('./SocialMediaAccounts.vue'),
        Mail: () => import('./Mail.vue')
    },
}
</script>

<style>
.Footer {
    position: relative;
    background-color: var(--google-grey-primary);
    width: 100%;
}
</style>
