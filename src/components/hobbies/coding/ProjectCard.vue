<template lang="html">
<div class="ProjectCard" @click="openProject">
    <div class="ProjectCard__img" :style="imageStyle"/>
    <div class="ProjectCard__text">
        <div class="ProjectCard__name">
            <span>{{ name }}</span>
        </div>
        <div class="ProjectCard__description" @click="openProject">
            {{ description }}
        </div>
        <div class="ProjectCard__madewith">
            <div>
                Made with:
                <span class="ProjectCard__tool">
                    {{ tool }}
                </span>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imageName: {
            type: String,
            default: 'portfolio.png'
        },
        tool: {
            type: String,
            required: true
        }
    },
    computed: {
        imageStyle () {
            let style = {}
            let image = require(`../../../assets/img/coding/projects/${this.imageName}`)
            style['backgroundImage'] = `url('${image}')`
            return style
        }
    },
    methods: {
        openProject () {
            let load = {
                projectID: this.id,
                projectDescription: this.description
            }
            this.$emit('openProject', load)
        }
    }
}
</script>

<style scoped>
.ProjectCard {
    position: relative;
    display: inline-block;
    background-color: var(--my-dark);

    width: 17rem;
    height: 20rem;

    margin-bottom: 1rem;
    margin-left: 0.25rem;
    /* margin-right: 0.25rem; */

    border-radius: 0.05rem;
    overflow: hidden;
    color: white;
    cursor: pointer;
    transition: all 200ms ease-in-out;
}
/* .ProjectCard:hover{
    opacity: 1;
} */
/* .ProjectCard:hover .ProjectCard__text{
    height: 100%;
} */
/* .ProjectCard:hover .ProjectCard__img{
    transform: scale(1.2);
} */
.ProjectCard__img {
    position: absolute;
    left: 0;
    top: 0;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    
    transition: all 300ms ease-in-out;
}

.ProjectCard__text {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2rem;
    padding: 0.25rem;

    transition: all 100ms ease-in-out;
    background-color: rgba(0, 0, 0, 0.50);
}

.ProjectCard__name {
    display: flex;
    height: 2rem;
    font-weight: 300;
    margin-bottom: 0.25rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    text-align: center;
}
.ProjectCard__name span{
    margin: auto;
}
.ProjectCard__description, .ProjectCard__madewith {
    font-size: 0.9rem;
    font-weight: 300;
}
.ProjectCard__description {
    height: 16rem;
    overflow-y: auto;
}
.ProjectCard__madewith {
    display: flex;
    background-color: black;
    width: 17rem;
    height: 2rem;
    margin: auto;
    margin-left: -0.25rem;
    margin-right: -0.25rem;
}
.ProjectCard__madewith div{
    margin: auto;
    text-align: center;
}
.ProjectCard__tool {
    font-weight: 400;
    color: var(--my-yellow);
}
</style>
