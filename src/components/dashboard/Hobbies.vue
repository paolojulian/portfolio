<template>
<div class="hobbies">
    <h3>hobbies</h3>
    <div class="hobby-list clearfix">
        <div class="hobby"
            v-for="(hobby, i) in hobbies"
            :key="i">
            <img class="hobby-image"
                :src="hobby.image_path"
            />
            <div class="hobby-overlay">
                <router-link class="hobby-button"
                    :to="{name: hobby.link}">
                    {{ hobby.name }}
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { S3_IMG_STATIC_URL } from '@/helpers/constants';

class Hobby {
    constructor (name, image_name=null, link='/') {
        this.name = name
        this.image_path = S3_IMG_STATIC_URL + image_name
        this.link = link
    }
}
export default {
    data () {
        return {
            hobbies: [
                new Hobby('programming', 'programming_400p.jpg', 'Portfolio'),
                new Hobby('cooking', 'cooking_400p.jpg', 'HobbyCooking'),
                new Hobby('music', 'piano_400p.jpg', 'HobbyMusic'),
                new Hobby('e-sports', 'e-sports_400p.jpg', 'HobbySports'),
            ]
        }
    },

    methods: {
        getHobbyStyle (image_path) {
            let style = {}
            style['backgroundImage'] = `url('${image_path}')`
            return style
        }
    }
}
</script>

<style scoped>
.hobbies {
    position: relative;
    background-color: #F9F9F9;
}

.hobbies h3 {
    font-size: 30px;
    font-weight: 300;
    padding: 50px;
    letter-spacing: 5px;
    color: #121013;

    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);
}

.hobby-list {
    width: 400px;
    margin: auto;
}

.hobby {
    position: relative;
    width: 400px;
    height: 250px;
    float: left;
    margin: auto;
    overflow: hidden;
    cursor: pointer;
}
.hobby-image {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transition: transform 300ms ease-in-out;
}
.hobby-overlay {
    opacity: 0;
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 1000px) {

    .hobby:hover .hobby-image {
        transform: scale(1.1);
    }

    .hobby-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* background-color: rgba(0, 0, 0, 0.40); */
        background-image: radial-gradient(rgba(255, 255, 255, 0.10), rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.50));
        transition: transform 200ms ease-in-out;
    }

    .hobby:hover .hobby-overlay {
        opacity: 1;
    }

    .hobby-overlay .hobby-button {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 2px solid #f9f9f9;
        background-color: rgba(0, 0, 0, 0.50);
        padding: 15px;

        color: #ffffff;

        font-size: 20px;
        font-weight: 500;
        text-transform: capitalize;

        border-radius: 50%;
        cursor: pointer;
    }

    .hobby-list {
        width: 800px;
    }
}
</style>
