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
                    <div id="CV__details__portfolio">
                        <a href="http://chefpipz.herokuapp.com" target="__blank">http://chefpipz.herokuapp.com</a>
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

                <label class="CV__skill_label">Personal</label>
                <ul>
                    <label>-Fast Learner</label>
                    <li>
                        My key to learning faster is to
                        master the basics and understand the
                        meaning.
                    </li>
                    <label>-Team Player</label>
                    <li>
                        A team should play as a team, not as individuals.
                        Communicate, and understand one another.
                    </li>
                    <label>-Eager to learn</label> 
                    <li>
                        I always want to continue developing myself and learning
                        new things because programming is my passion.
                    </li>
                    <label>-Friendly</label> 
                    <li>
                        Being friendly and kind will boost the morale of not only your
                        team but also to your clients.
                    </li>
                </ul>

                <label class="CV__skill_label">Programming Languages</label>
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
                        <td class="educational-header">{{ strings.tertiary }}</td>
                        <td>
                            <div>University of the Cordilleras</div>
                            <div>Baguio City</div>
                            <div>Information Technology - Major in Network and Communications</div>
                            <div>2014 - 2017</div>
                        </td>
                        <td></td>
                    </tr>
                    <br />
                    <tr>
                        <td class="educational-header">{{ strings.secondary }}</td>
                        <td>
                            <div>Saint Louis University Laboratory High School</div>
                            <div>Navy Base, Baguio City</div>
                            <div>2006 - 2010</div>
                        </td>
                        <td></td>
                    </tr>
                    <br />
                    <tr>
                        <td class="educational-header">{{ strings.primary }}</td>
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

        <!-- <hr /> -->

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
#CV {
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

#CV__details__fullname {
    font-weight: bold;
    font-size: 1.2rem;
}

#CV__details__quote {
    margin-top: 1rem;
    font-style: italic;
}

#CV__educational_attainment table tr{
    border-bottom: 1px solid #131313;
}

.CV__section_header {
    margin: 0.5rem -0.5rem;
    font-weight: 400;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    background-color: var(--my-dark);
    color: var(--my-yellow);
}
#CV__skills_list ul {
    padding: 1rem;
}

#CV__skills_list ul li{
    text-indent: 1rem;
    margin-bottom: 0.5rem;
}
.CV__skill_label {
    font-size: 1.2rem;
}

tr td:first-child {
    width: 10rem;
}
table label {
    font-size: 1.2rem;
    font-weight: 500;
}
.educational-header {
    vertical-align: top;
}
@media (min-width: 600px) {
    #CV {
        font-weight: 400;
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
    #CV__details__fullname {
        font-size: 2.5rem;
    }

    #CV__details__quote {
        margin-top: 1rem;
        font-style: italic;
    }
    .CV__section_header {
        margin: 0.5rem 0;
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
    #CV__details__fullname {
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
