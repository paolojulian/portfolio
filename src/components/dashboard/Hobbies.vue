<template>
<div class="hobbies">
    <h3>hobbies</h3>
    <div class="hobby-list clearfix">
        <div class="hobby"
            v-for="(hobby, i) in hobbies"
            :key="i">
        </div>
    </div>
</div>
</template>

<script>
class Hobby {
    constructor (name, link=null) {
        this.name = name
        this.link = link
    }
}
export default {
    data () {
        return {
            hobbies: [
                new Hobby('programming'),
                new Hobby('cooking'),
                new Hobby('music'),
                new Hobby('e-sports'),
            ]
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
}

.hobby-list {
    width: 450px;
    margin: auto;
}

.hobby {
    width: 450px;
    height: 300px;
    float: left;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.50);
}
@media screen and (min-width: 600px) {
}
@media screen and (min-width: 1000px) {
    .hobby-list {
        width: 900px;
    }
}
</style>
