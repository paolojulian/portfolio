<template lang="html">
<div id="CV">
    <div id="CV__card">
        <div id="CV__header">
            <!-- <div id="CV__photo"> </div> -->
            <div id="CV__details">
                <div id="CV__name">{{ strings.fullName }}</div>
                <div class="details">
                    <div id="CV__details__address">{{ strings.address }}</div>
                    <div id="CV__details__mobile">{{ strings.mobile }}</div>
                    <div id="CV__details__email">{{ strings.emailPrimary }}</div>
                    <div id="CV__details__portfolio">
                        <a href="http://chefpipz.herokuapp.com" target="__blank">{{ strings.website }}</a>
                    </div>
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

                <label class="CV__skill_label">Soft skills</label>
                <ul>
                    <li>
                        <label>Fast Learner</label>
                    <li/>
                    <li>
                        <label>Team Player</label>
                    <li/>
                    <li>
                        <label>Friendly</label>
                    <li/>
                    <li>
                        <label>Passionate</label>
                    <li/>
                </ul>

                <label class="CV__skill_label">Languages</label>
                <ul>
                    <ProgressBar
                        v-for="(skill, i) in skills.languages"
                        :key="`languages_${i}`"
                        :name="skill.name"
                        :percent="skill.percent"
                        :theme="skill.theme"
                        size="small"/>
                </ul>

                <label class="CV__skill_label">Others</label>
                <ul>
                    <ProgressBar
                        v-for="(skill, i) in skills.frameworks"
                        :key="`frameworks_${i}`"
                        :name="skill.name"
                        :percent="skill.percent"
                        :theme="skill.theme"
                        size="small"/>
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
                        <td>
                            <label>
                                Beijing Bangnishou
                            </label>
                            <br />
                            Junior Web Developer
                        </td>
                        <td>Primarily worked with the <b>School System</b>, <b>Payroll System</b>, and <b>Teacher System</b>,
                            mainly used <b>HTML</b>, <b>CSS</b>, <b>VueJS</b> and <b>JQuery</b> for front-end and <b>Codeigniter</b> for Back-end.
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
                            <div>Information Technology</div>
                            <div>2014 - 2017</div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="CV__references">
            <div class="CV__section_header">
                {{ strings.characterReferences }}
            </div>
            <table>
                <tbody>
                    <tr>
                        <td>Kenny Lowell Ngaosi</td>
                        <td>
                            Senior Back-end Developer
                            <br />
                            Beijing Bangnishou Internet Education Technology Limited Philippines
                        </td>
                    </tr>
                    <tr>
                        <td>Earvin Canaveral</td>
                        <td>
                            Senior Front-end Developer
                            <br />
                            Beijing Bangnishou Internet Education Technology Limited Philippines
                            <br />
                            +639453129490
                            <br />
                            nivrae.ec@gmail.com
                        </td>
                    </tr>
                    <tr>
                        <td>Acey Rosete</td>
                        <td>
                            Senior Devops
                            <br />
                            Beijing Bangnishou Internet Education Technology Limited Philippines
                            <br />
                            Aceyclay@gmail.com
                            <br />
                            09068304106
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div id="CV__footer">
            <!-- Footer -->
        </div>
    </div>
</div>
</template>

<script type="text/javascript">
import strings from './store/language.js'

import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex'
export default {
    name: 'CV',
    data () {
        return {
            skills: {
                languages: [],
                frameworks: []
            }
        }
    },
    computed: {
        strings () {
            return strings.en
        }
    },
    components: {
        ProgressBar: () => import('../fragments/ProgressBar.vue')
    },
    methods: {
        ...mapActions($hobbies, [
            'getCodingSkills',
            'getCodingProjects'
        ]),

        initData () {
            this.getCodingSkills()
                .then(skills => {
                    this.skills.languages = skills[0]
                    this.skills.frameworks = skills[1]
                })
        }
    },
    created () {
        this.initData()
    }
}
</script>

<style scoped>
/* Color Palettes */
#CV {
    --dark: #17252A;
    --primary-dark: #2B7A78;
    --primary: #3AAFA9;
    --secondary: #DEF2F1;
    --secondary-light: #FEFFFF;
}

/* Styles */
#CV {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 100vw;
    min-height: 100vh;
    position: relative;
    font-weight: 300;
}
#CV__card {
    box-sizing: border-box;
    width: 100%;
    background-color: white;

    padding: 0.5rem;
}

#CV__photo {
    float: right;
    width: calc(50vw - 2rem);
    height: calc(50vw - 2rem);
    border-radius: 50%;
    background-image: url('/img/profile1.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

#CV__details {
    position: relative;
    width: calc(50vw - 1rem);
    font-size: 0.9rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
}

#CV__details div {
    vertical-align: bottom;
}

#CV__details .details{
    padding: 10px 5px;
}

#CV__name {
    font-weight: 600;
    font-size: 1.2rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--primary-dark);
}

#CV__details__quote {
    margin-top: 1rem;
    font-style: italic;
}

#CV__details__portfolio {
    color: var(--primary-dark);
}

#CV__educational_attainment table tr{
    border-bottom: 1px solid #131313;
}

.CV__section_header {
    margin: 0.5rem -0.5rem;
    font-weight: 600;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    letter-spacing: 5px;
    text-transform: uppercase;
    text-align: center;
    /* background-color: var(--my-dark); */
    background-color: var(--dark);
    /* color: var(--my-yellow); */
    color: var(--secondary-light);
}
#CV__skills_list ul {
    padding: 30px 10px;
}

#CV__skills_list ul li{
    text-indent: 1rem;
    margin-bottom: 0.5rem;
}
.CV__skill_label {
    font-size: 1.2rem;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--primary-dark);
}

tr td:first-child {
    width: 10rem;
    vertical-align: top;
}
table label {
    font-size: 1.2rem;
    font-weight: 500;
}
#CV td {
    /* border: 1px solid #ddd; */
    padding: 10px;
}
@media (min-width: 600px) {
    #CV {
        font-weight: 400;
    }
    #CV__card {

    }
    #CV__photo {
        width: 15rem;
        height: 15rem;
    }
    #CV__details {
        position: relative;
        width: calc(50vw - 1rem);
        font-size: 1rem;
        font-weight: unset;
        padding-right: unset;
        padding-bottom: unset;
    }
    #CV__name {
        font-size: 2.5rem;
    }

    #CV__details__quote {
        margin-top: 1rem;
        font-style: italic;
    }
    .CV__section_header {
        margin: 30px 0;
        font-size: 1.5rem;
    }
    tr td:first-child {
        width: 15rem;
    }
}
@media (min-width: 1000px) {
    #CV {
        margin-top: 5rem;
    }
    #CV__card {
        width: 210mm;
        padding: 1rem 2rem;

        margin-bottom: 10rem;
        padding-bottom: 200px;

        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        box-shadow: 0 5px 10px #131313;
    }
}
@media print {
    #CV__photo {
        width: 250px;
        height: 250px;
        margin-right: 10px;
    }
    #CV__name {
        font-size: 2rem;
    }
    #CV__details {
        width: 100%;
    }
    #CV__header {
        margin-bottom: 20px;
    }
    #CV__skills {
        margin-top: 50px;
    }
    #CV__skills_list {
        padding-top: 30px;
    }
    tr td:first-child {
        width: 15rem;
    }
}
</style>
