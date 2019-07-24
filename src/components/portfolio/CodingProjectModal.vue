<template lang="html">
    <VModal
        @close="$emit('close')"
        >
        <div slot="header">
            <!-- {{ name }} -->
        </div>
        <div slot="body" class="CodingProject">
            <div v-if="state.post" class="CodingProject__body">
                <!-- <Carousel class="CodingProjectModal__carousel">
                    <slide>
                        <img/>
                    </slide>
                </Carousel> -->
                <!-- <div class="CodingProjectModal__carousel">
                    <div v-for="(imagePath, i) in [project.imagePath]"
                        :key="i">
                    </div>
                </div> -->
                <div class="project-text">
                    <div class="project-header">
                        <div class="project-title">
                            {{ project.name }}
                        </div>
                        <div class="project-tool">
                            {{ project.tool }}
                        </div>
                        <div class="project-sourceCode"
                            v-if="project.sourceCode">
                            {{ project.sourceCode }}
                        </div>
                    </div>
                    <div class="project-description">
                        {{ project.description }}
                    </div>
                </div>
                <div class="project-link"
                    v-if="project.link">
                    <a
                        :href="project.link"
                        target="__blank"
                    >
                        VISIT SITE
                    </a>
                </div>
            </div>
            <div v-if="state.loading">
                <VLoader/>
            </div>
            <div v-if="state.error">
                Oops! Something went wrong, please try again later
            </div>
        </div>
    </VModal>
</template>

<script type="text/javascript">
// import { Carousel, Slide } from 'vue-carousel'
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex'
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    },
    // components: {
    //     Carousel,
    //     Slide,
    //     ProjectCarousel: () => import('./ProjectCarousel.vue')
    // },
    
    data () {
        return {

            state: {
                post: false,
                loading: true,
                error: false
            },

            project: {
                name: '',
                description: '',
                tool: '',
                existing: false,
                link: '',
                sourceCode: '',
                projectType: 1
            }
        }
    },

    methods: {
        ...mapActions($hobbies, [
            'getProject'
        ]),

        /**
         * Runs onCREATED(), Gets the files needed for this template
         */
        initialData () {
            this.getProject(this.id)
                .then(({ name, description, imagePath, tool, existing, link, sourceCode, projectType }) => {
                    this.project.name = name
                    this.project.description = description
                    this.project.imagePath = imagePath
                    this.project.tool = tool
                    this.project.existing = existing
                    this.project.link = link
                    this.project.sourceCode = sourceCode
                    this.project.projectType = projectType

                    this.statePost()
                })
                .catch(err => this.stateError(err))
        },

        statePost () {
            this.state.post = true
            this.state.loading = false
            this.state.error = false
        },

        stateError (err) {
            if (err) {
                // eslint-disable-next-line
                console.error(err)
            }

            this.state.post = false
            this.state.loading = false
            this.state.error = true
        }
    },

    created () {
        this.initialData()
    }
}
</script>

<style scoped>
.CodingProject {
    width: 100%;
    height: 100%;
}
.CodingProject__body {
    width: 100%;
    height: 100%;
}
.CodingProjectModal__carousel {
    background-color: #f3f3f3;
    height: 70%;
    width: 100%;
}
.CodingProjectModal__carousel img{
    height: 18rem;
    width: 100%;
}
.project-text {
    font-weight: 300;
    overflow-y: auto;
    text-align: left;
}
.project-title {
    font-weight: bold;
    color: var(--my-paprika);
}
.project-header {
    margin-bottom: 10px;
}
.project-header::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background-color: #a3a3a3;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
    margin-top: 10px;
}
.project-description {
    padding-top: 10px;
}
/* TABLET */
@media screen and (min-width: 600px) {
    .project-title {
        font-size: 24px;
    }
    .project-text {
        padding: 10px;
        height: 30%;
    }
}
/* WEB */
@media screen and (min-width: 1000px) {
    .project-text {
        padding: 10px 30px;
    }
    .project-description {
        font-size: 15px;
    }
}
</style>
