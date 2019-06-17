<template>
    <div class="Practice">

        <div class="Practice__img">
            <img data-aos="fade-up"
                :src="imagePath"
                :alt="name"/>
        </div>

        <div class="Practice__text">
            <div class="Practice__name uppercase"
                data-aos="fade-left">
                {{ name }}
            </div>

            <div class="Practice__description"
                data-aos="fade-up">
                {{ description }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Practices',

    props: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imagePath: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.Practice {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    text-align: left;
}
.Practice__name {
    letter-spacing: 4px;
    font-weight: 200;
    font-size: 1.2rem;
    margin-bottom: 5px;
}
.Practice__text {
    padding: 20px;
    font-weight: 100;
}
</style>
