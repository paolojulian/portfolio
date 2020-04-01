<template lang="html">
<div class="cv">
    <div class="cv-card clearfix">
        <div class="cv-header">
            <div class="cv-name">
                {{ strings.fullName }}
            </div>
            <div class="cv-title">
                {{ strings.jobTitle }}
            </div>
        </div>

        <div class="cv-informations">
            <CVPersonalInfo/>
            <CVSkills />
        </div><div class="cv-descriptions">
            <div class="cv-quote">
                {{ strings.quotePrimary }}
            </div>

            <CVWorkHistory/>
            <CVEducation/>
            <CVReferences/>
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
        CVPersonalInfo: () => import('./CVPersonalInfo.vue'),
        CVSkills: () => import('./CVSkills.vue'),

        CVWorkHistory: () => import('./CVWorkHistory.vue'),
        CVEducation: () => import('./CVEducation.vue'),
        CVReferences: () => import('./CVReferences.vue')
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
.cv {
    --dark: #17252A;
    --primary-dark: #2B7A78;
    --primary: #3AAFA9;
    --secondary: #DEF2F1;
    --secondary-light: #FEFFFF;
}

/* Styles */
.cv {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    width: 100%;
    margin-bottom: 7vh;
}
.cv-card {
    position: relative;
    width: 100%;
    height: auto;
    background: var(--secondary-light);
}
.cv-header {
    height: 60px;
    background-color: var(--dark);
    color: var(--secondary-light);
    padding: 10px;
    box-sizing: border-box;
}
.cv-name {
    font-size: 20px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
}
.cv-title {
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
}
.cv-quote {
    text-align: center;
    margin-bottom: 10px;
}
.cv-informations,
.cv-descriptions {
    padding: 10px;
    box-sizing: border-box;
}

.cv-informations {
    background-color: var(--primary-dark);
    color: var(--secondary-light);
    height: calc(100% - 100px);
}

.cv >>> .cv-section-header {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 2px;
    padding: 10px 0;
    border-bottom: 1px solid var(--primary-dark);
    margin: 10px 0;
}
.cv >>> .cv-section-header.cv-section-header-light {
    border-bottom: 1px solid var(--secondary);
}

.cv >>> table.cv-table tr td:first-child {
    vertical-align: top;
    width: 100px;
    padding-top: 5px;
    font-weight: 300;
}

.cv >>> table.cv-table {
    border-spacing: 0 10px;
}

@media print , screen and (min-width: 600px) {
    .cv-card {
        box-shadow: 0 5px 10px var(--dark);
    }
    .cv-header {
        height: 140px;
        padding: 20px;
    }
    .cv-name {
        font-size: 30px;
        margin-bottom: 5px;
    }
    .cv-title {
        font-size: 24px;
    }
    .cv-quote {
        margin-bottom: 30px;
    }
    .cv-informations,
    .cv-descriptions {
        float: left;
        padding: 20px;
    }
    .cv-descriptions {
        width: 70%;
    }
    .cv-informations {
        position: absolute;
        top: 140px;
        right: 0;
        height: calc(100% - 140px);
        width: 30%;
        font-weight: 300;
    }
    .cv >>> .cv-section-header {
        font-size: 20px;
    }
    .cv >>> table.cv-table {
        border-spacing: 0 15px;
    }
    .cv-personal-info {
        margin-top: -15px;
    }
}
@media screen and (min-width: 1000px) {
    .cv {
        padding: 50px 0;
    }
    .cv-card {
        margin: auto;
        width: 800px;
    }
    .cv-name {
        font-size: 40px;
    }
    .cv-title {
        font-size: 30px;
    }
    .cv >>> .cv-section-header {
        font-size: 23px
    }
}
@media print {
    .cv {
        background-color: #ffffff;
    }
    .cv-card {
        box-shadow: none;
    }
}
</style>
