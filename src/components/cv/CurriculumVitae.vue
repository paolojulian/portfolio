<template lang="html">
<div id="CV">
    <div id="CV__card">
        <div id="CV__header">
            <div id="CV__photo">
            </div>
            <div id="CV__details">
                <div>
                    <div id="CV__details__fullname">{{ strings.fullName }}</div>
                    <div id="CV__details__address">{{ strings.address }}</div>
                    <div id="CV__details__mobile">{{ strings.mobile }}</div>
                    <div id="CV__details__email">{{ strings.emailPrimary }}</div>
                    <div id="CV__details__quote">{{ strings.quotePrimary }}</div>
                </div>
            </div>
            <div class="clearfix"/>
        </div>

        <div id="CV__skills">
            <div class="CV__section_header">
                {{ strings.skills }}
            </div>
            <div id="CV__skills_list">

                <label class="CV__skill_label">Personal</label>
                <ul>
                    <li>
                        Fast Learner -
                        My key to learning faster is to
                        understand the basics first and understand each
                        detail
                    </li>
                    <li>
                        Team Player -
                        I played a lot of computed games during my
                        college days and I developed chemistry and
                        communication with my teammates
                    </li>
                    <li>
                        Good Behavior -
                    </li>
                    <li>
                        Friendly -
                        I have been involved in a fight before,
                        I forgive others easily and don't hold grudges
                    </li>
                </ul>

                <label class="CV__skill_label">Programming Languages</label>
                <ul>
                    <li>PHP (8/10)</li>
                    <li>Python (6/10)</li>
                    <li>Java (6/10)</li>
                    <li>Javascript (8.5/10)</li>
                    <li>HTML && CSS (7/10)</li>
                </ul>

                <label class="CV__skill_label">Programming Frameworks</label>
                <ul>
                    <li>Vue JS (8.5/10)</li>
                    <li>JQuery (8/10)</li>
                    <li>Codeigniter (8.5/10)</li>
                    <li>Django REST (6/10)</li>
                    <li>Laravel (6/10)</li>
                    <li>Maven (5/10)</li>
                </ul>
            </div>
        </div>

        <div id="CV__work_experience">
            <div class="CV__section_header">
                {{ strings.workExp }}
            </div>
            <div class="CV__section_content">
                <table>
                    <tr>
                        <td>Junior Web Developer</td>
                        <td>
                            Primarily worked with the School System, Payroll System, and Teacher System,
                            mainly used VueJS for front-end and Codeigniter for Back-end.
                            usually worked on schedule management and the main back bone logics
                            of the school system.
                        </td>
                    </tr>
                </table>
            </div>
        </div>

        <div id="CV__educational_attainment">
            <div class="CV__section_header">
                {{ strings.educationalAttainment }}
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>{{ strings.tertiary }}</td>
                        <td>
                            <div>University of the Cordilleras</div>
                            <div>Baguio City</div>
                            <div>Information Technology - Major in Network and Communications</div>
                            <div>2014 - 2017</div>
                            <br />
                            <div>Saint Louis University</div>
                            <div>Baguio City</div>
                            <div>Electronics and Communications Engineering - Undergrad</div>
                            <div>2010 - 2014</div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{{ strings.secondary }}</td>
                        <td>
                            <div>Saint Louis University Laboratory High School</div>
                            <div>Navy Base, Baguio City</div>
                            <div>2006 - 2010</div>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>{{ strings.primary }}</td>
                        <td>
                            <div>John Hay Elementary School</div>
                            <div>Scout Barrio, Baguio City</div>
                            <div>2000 - 2006</div>
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <hr />

        <div id="CV__footer">
            Footer
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
import strings from './store/language.js'
export default {
    name: 'CV',
    computed: {
        strings () {
            return strings.en
        }
    }
}
</script>

<style scoped>
#CV {
    padding: 2rem;
    padding-left: 20rem;
    padding-right: 20rem;
    height: 100%;
    overflow: hidden;
}

/* #CV__header {
    display: flex;
} */

#CV__photo {
    float: right;
    width: 250px;
    height: 250px;
    background-color: rgba(0, 0, 0, 0.25);
}

#CV__details {
    position: relative;
}

#CV__details div {
    vertical-align: bottom;
}

#CV__details__fullname {
    font-weight: bold;
    font-size: 2.5rem;
}

#CV__details__quote {
    margin-top: 1rem;
    font-style: italic;
}

#CV__educational_attainment {

}

.CV__section_header {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.50);
    color: #ffffff;
}
#CV__skills_list {
}
.CV__skill_label {
    font-size: 1.2rem;
}
</style>
