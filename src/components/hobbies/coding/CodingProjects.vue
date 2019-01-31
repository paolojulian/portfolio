<template lang="html">
<div id="CodingProjects">
    <div>
        CodingProjects
    </div>
    <br/>
    <ProjectCard
        v-for="(project, i) in companyProjects"
        :key="`companyProjects_${i}`"
        :id="Number(project.id)"
        :name="project.name"
        :description="project.description"
        :tool="project.tool"
        @openProject="openProject"
    />
    <ProjectCard
        v-for="(project, i) in personalProjects"
        :key="`personalProjects_${i}`"
        :id="Number(project.id)"
        :name="project.name"
        :description="project.description"
        :tool="project.tool"
        @openProject="openProject"
    />
    <CodingProjectModal
        v-if="modal.projects.toggle"
        @close="modal.projects.setToggle(false)"
        :id="Number(modal.projects.data.projectID)"
        :description="modal.projects.data.projectDescription"
    />
</div>
</template>

<script type="text/javascript">
import { APIHobby } from '@/api/APIHobby'
import { Modal } from '@/classes/modal.js'

const apiHobby = new APIHobby()

export default {

    data () {
        return {
            companyProjects: [],
            personalProjects: [],
            modal: {
                projects: new Modal()
            }
        }
    },

    components: {
        ProjectCard: () => import('./ProjectCard.vue'),
        CodingProjectModal: () => import('./CodingProjectModal.vue')
    },

    methods: {
        getList () {
            apiHobby.getCodingProjects()
                .then((projects) => {
                    this.companyProjects = projects[0]
                    this.personalProjects = projects[1]
                })
        },
        openProject ({ projectID, projectDescription }) {
            this.modal.projects.setData({ projectID, projectDescription })
            this.modal.projects.setToggle(true)
        }
    },

    mounted () {
        this.getList()
    }
}
</script>

<style scoped>
#CodingProjects {
    width: 90%;
    text-align: center;
    margin: 0 auto;
}
</style>
