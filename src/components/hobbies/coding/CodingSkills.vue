<template lang="html">
<div id="CodingSkills">
    <div id="CodingSkills__languages">
        Programming Languages
        <ProgressBar
            v-for="(skill, i) in skills"
            :key="`programming_languages_${i}`"
            :name="skill.name"
            :percent="skill.percent"
            :theme="skill.theme"
        />
    </div>
    <div id="CodingSkills__frameworks">
        Others
        <ProgressBar
            v-for="(skill, i) in frameworks"
            :key="`frameworks_${i}`"
            :name="skill.name"
            :percent="skill.percent"
            :theme="skill.theme"
        />
    </div>
</div>
</template>

<script type="text/javascript">
class CodingSkill {
    theme = 'default'
    constructor (name, percent, theme) {
        this.name = name
        this.percent = percent
        if (theme) {
            this.theme = theme
        }
    }
}
class OtherSkill extends CodingSkill {
    constructor (name, percent) {
        super(name, percent, 'blue')
    }
}
export default {
    data () {
        return {
            skills: [
                new CodingSkill('HTML', 60),
                new CodingSkill('CSS', 50),
                new CodingSkill('Javascript', 80),
                new CodingSkill('PHP', 80),
                new CodingSkill('Python', 55),
                new CodingSkill('Java', 50)
            ],
            frameworks: [
                new OtherSkill('Node', 40),
                new OtherSkill('Vue', 85),
                new OtherSkill('Vuex', 70),
                new OtherSkill('React', 40),
                new OtherSkill('CodeIgniter', 80),
                new OtherSkill('Laravel', 40),
                new OtherSkill('Django', 40),
                new OtherSkill('Maven', 60)
            ]
        }
    },
    components: {
        ProgressBar: () => import('../../fragments/ProgressBar.vue')
    }
}
</script>

<style scoped>
#CodingSkills {
    padding-top: 2rem;
    width: 100%;
}
#CodingSkills__languages, #CodingSkills__frameworks {
    width: 100%;
    box-sizing: border-box;
}
#CodingSkills__languages {
    padding: 0 10px;
}
#CodingSkills__frameworks {
    padding: 0 10px;
}
@media screen and (min-width: 600px) {
    #CodingSkills__languages, #CodingSkills__frameworks {
        float: left;
        width: 44%;
        box-sizing: unset;
    }
    #CodingSkills__languages {
        padding-left: 4%;
        padding-right: 2%;
    }
    #CodingSkills__frameworks {
        padding-left: 2%;
        padding-right: 4%;
    }
}
</style>
