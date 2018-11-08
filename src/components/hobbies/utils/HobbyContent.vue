<template lang="html">
<div id="HobbyList">
    <div class="HobbyContent__header">
        {{ hobbyHeader }}
    </div>
    <div class="HobbyContent__body">
        <span v-for="type in hobbyCategories">
            {{ type }}
        </span>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    props: {
        hobbyHeader: {
            type: String,
            required: true
        },
        hobbyCategories: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
</style>
