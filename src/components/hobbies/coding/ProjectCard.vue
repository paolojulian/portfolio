<template lang="html">
<div class="ProjectCard" @click="openProject">
    <div class="ProjectCard__img">
        IMG
    </div>
    <div class="ProjectCard__text">
        <div class="ProjectCard__name">
            {{ name }}
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
        tool: {
            type: String,
            required: true
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
    margin-right: 0.25rem;

    border-radius: 0.05rem;
    overflow: hidden;
    color: white;
    cursor: pointer;
}
.ProjectCard:hover .ProjectCard__text{
    height: 20rem;
    transform: translateY(-18rem);
}
.ProjectCard__img {
    height: 18rem;
    width: 100%;
    background: white;
}

.ProjectCard__text {
    padding: 0.25rem;
    height: 2rem;
    transition: all 400ms ease-in-out;
    background-color: var(--my-dark);
}

.ProjectCard__name {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
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
