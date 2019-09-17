<template>
<div class="cv-work-history">
    <div class="cv-section-header">
        Work History
    </div>
    <table class="cv-table">
        <tr v-for="(work, i) in workExperiences"
            :key="i">
            <td>
                {{ work.date_from }} -
                <br />
                {{ work.date_to }}
            </td>
            <td>
                <div class="cv-work-name">{{ work.name }}</div>
                <div class="cv-work-title">{{ work.job_title }}</div>
                <div class="cv-work-tasks">
                    <ul>
                        <li v-for="(task, i) in work.tasks"
                            :key="`task_${i}`"
                        >
                            {{ task }}
                        </li>
                    </ul>
                </div>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
class Work {
    constructor (name, date_from, date_to, job_title, tasks) {
        this.name = name
        this.date_from = date_from
        this.date_to = date_to
        this.job_title = job_title
        this.tasks = tasks
    }
}
export default {
    name: 'CVWorkHistory',
    data () {
        return {
            workExperiences: [
                new Work(
                    'Beijing Bangnishou Internet Education Technology Limited',
                    'Oct-2017',
                    'Nov-2018',
                    'Software Developer',
                    [
                        'Led the development of School management systems using PHP frameworks such as Laravel and Codeigniter with Javascript frameworks like VueJS and JQuery.',
                        'Developed Booking systems and Schedule management.',
                        'Implements Unit Testing for Restful Services',
                        'Worked under pressure and heavy work load.'
                    ]),
                new Work(
                    'Koderos',
                    'Dec-2018',
                    'Present',
                    'Software Developer',
                    [
                        'Our own IT solutions',
                        'Made Fullstack jobs mainly using React, Redux, Node JS, Express and MongoDB',
                        'Developing services Inventory Systems, Blogsites, Personal Websites and others',
                        'Implements Unit Testing for Restful Services',
                        'Developing EMS services to be connected with the hospital system'
                    ]),

            ]
        }
    },
}
</script>

<style scoped>
.cv-work-history tr {
    margin-bottom: 10px;
}
.cv-work-history ul {
    list-style-type: circle;
}
.cv-work-title {
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 10px;
    font-style: italic;
}
.cv-work-tasks {
    font-weight: 300;
}
@media screen and (min-width: 600px){
    .cv-work-name {
        font-size: 20px;
    }
    .cv-work-title {
        font-size: 18px;
    }
}
@media screen and (min-width: 1000px){
    .cv-work-name {
        font-size: 22px;
    }
    .cv-work-title {
        font-size: 20px;
    }
}

</style>
