<template>
<div class="cv-skills">
    <div class="cv-section-header cv-section-header-light">
        Skills
    </div>
    <div class="cv-soft-skills">
        <div v-for="(skill, i) in softSkills"
            :key="`softskill_${i}`"
        >
            <div class="cv-skill-name">{{ skill.name }}</div>
            <CVSkillBar :level="skill.level" />
        </div>
    </div>
    <div class="cv-languages">
        <div v-for="(skill, i) in languages"
            :key="`language_${i}`"
        >
            <div class="cv-skill-name">{{ skill.name }}</div>
            <CVSkillBar :level="skill.level" />
        </div>
    </div>
    <div class="cv-others">
        <div v-for="(skill, i) in others"
            :key="`other_${i}`"
        >
            <div class="cv-skill-name">{{ skill.name }}</div>
            <CVSkillBar :level="skill.level" />
        </div>
    </div>
</div>
</template>

<script>
class Skill {
    constructor (name, level) {
        this.name = name
        this.level = level
    }
}
export default {
    data () {
        return {
            softSkills: [
                new Skill('Fast Learner', 90),
                new Skill('Friendly', 100),
                new Skill('Team Player', 85),
                new Skill('Passionate', 100),
            ],
            languages: [
                new Skill('HTML/CSS', 70),
                new Skill('Javascript', 80),
                new Skill('PHP', 80),
                new Skill('Java', 70),
            ],
            others: [
                new Skill('Node', 70),
                new Skill('Vue', 90),
                new Skill('React', 80),
                new Skill('Docker', 50),
                new Skill('Kubernetes', 20),
                new Skill('Laravel', 70),
                new Skill('Spring Boot', 50),
                new Skill('UI/UX', 60)
            ]
        }
    },
    components: {
        CVSkillBar: () => import('./CVSkillBar.vue')
    }
}
</script>

<style scoped>
.cv-skill-name {
    /* font-weight: 400; */
    letter-spacing: 1px;
}
</style>
