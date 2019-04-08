<template lang="html">
<div id="CodingProjects">
    <div class="CodingProjects__background"/>
    <div class="CodingProjects__header">
        <span>Projects</span>
    </div>
    <br/>
    <div class="CodingProjects__list">
        <ProjectCard
            v-for="(project, i) in companyProjects"
            :key="`companyProjects_${i}`"
            :id="Number(project.id)"
            :name="project.name"
            :description="project.description"
            :tool="project.tool"
            :image-name="project.imageName"
            @openProject="openProject"
        /><ProjectCard
            v-for="(project, i) in personalProjects"
            :key="`personalProjects_${i}`"
            :id="Number(project.id)"
            :name="project.name"
            :description="project.description"
            :tool="project.tool"
            :image-name="project.imageName"
            @openProject="openProject"
        />
    </div>
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
                    this.companyProjects = projects[0];
                    this.personalProjects = projects[1];
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
    position: relative;
    width: 100%;
    padding: 5rem;
    text-align: center;
    margin: 0 auto;
    background-color: #d3d3d3;
    border-top: 1px solid #131313;
}

.CodingProjects__header {
    display: flex;
    width: 90%;

    text-transform: uppercase;
    color: #131313;
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    letter-spacing: 0.1rem;
    font-size: 2rem;
    font-weight: 300;
    font-family: 'Proxima Nova Soft', 'Helvetica Neue', sans-serif;
}
.CodingProjects__header span{
    margin: auto;
}

.CodingProjects__background {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    opacity: 0.3;
    /* background-image: url('../../../assets/img/coding/projects/background.png'); */
    /* background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; */
}
.CodingProjects__list {
    width: 90%;
}
@media screen and (min-width: 600px) {
    .CodingProjects__list:hover >>> .ProjectCard{
        opacity: 0.5;
    }
    .CodingProjects__list >>> .ProjectCard:hover{
        opacity: 1;
    }
}
</style>
