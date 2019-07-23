<template>
<div class="cv-education">
    <div class="cv-section-header">
        Education
    </div>
    <table class="cv-table">
        <tr v-for="(education, i) in educationList"
            :key="i">
            <td>
                {{ education.date_from }} -
                <br />
                {{ education.date_to }}
            </td>
            <td>
                <div class="cv-education-course">{{ education.course }}</div>
                <div class="cv-education-school-name">{{ education.school_name }}</div>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
class Education {
    constructor (course, school_name, date_from, date_to) {
        this.course = course
        this.school_name = school_name
        this.date_from = date_from
        this.date_to = date_to
    }
}
export default {
    name: 'CVEducation',
    data () {
        return {
            educationList: [
                new Education(
                    'Bachelor of Science: Information Technology',
                    'University of the Cordilleras - Philippines',
                    '2014',
                    '2017'
                )
            ]
        }
    }
}
</script>

<style scoped>
.cv-education-school-name {
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 10px;
    font-style: italic;
}
@media screen and (min-width: 600px){
    .cv-education-course {
        font-size: 20px;
    }
    .cv-education-school-name {
        font-size: 18px;
    }
}
@media screen and (min-width: 1000px){
    .cv-education-course {
        font-size: 22px;
    }
    .cv-education-school-name {
        font-size: 20px;
    }
}
</style>
