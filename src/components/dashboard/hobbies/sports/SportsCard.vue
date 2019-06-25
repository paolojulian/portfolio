<template>
<div class="SportsCard">
    <div class="sports-card-img">
        <img
            data-aos="flip-up"
            :data-aos-delay="(index+1) * 200"
            :src="imagePath"
            :alt="name"/>
    </div>
    <div class="sports-card-name"
        data-aos="fade-up"
        :data-aos-delay="(index+1) * 200">
        {{ name }}
    </div>
</div>
</template>

<script>
export default {
    name: "SportsCard",
    props: {
        name: {
            type: String,
            required: true
        },
        imagePath: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
.SportsCard {
    margin: 0 1rem;
}
.sports-card-name {
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 10px;
}
</style>
