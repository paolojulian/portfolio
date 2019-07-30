<template>
<div class="skills">
    <div class="practices">
        <div v-for="(practice, i) in practices"
            :key="`practice_${i}`"
            class="practice">
            <div class="practice-name"
                data-aos="fade-up"
                :data-aos-duration="400"
                :data-aos-delay="(i + 1) * 150"
                >
                {{ practice.name }}
            </div>
            <div class="practice-description"
                data-aos="fade-up"
                :data-aos-duration="400"
                :data-aos-delay="(i + 1) * 150"
                >
                {{ practice.description }}
            </div>
        </div>
    </div>
    <div class="skill-list">
        <SkillsBar
            v-for="(skill, i) in skills"
            :key="`skill_${i}`"
            :percent="skill.percent"
            class="skill"
        >
            {{ skill.name }}
        </SkillsBar>
    </div>
</div>
</template>

<script>
class Practice {
    constructor(name, description) {
        this.name = name,
        this.description = description
    }
}

class Skill {
    constructor(name, percent) {
        this.name = name
        this.percent = percent
    }
}

export default {
    data () {
        return {
            practices: [
                new Practice('simple', 'Keeping my functions and designs as simple as possible'),
                new Practice('organized', "One step at a time, don't overthink yourself thinking about other things"),
                new Practice('clean', 'I’ve always like to make my codes as clean as possible for a better debugging process.'),
                new Practice('kind', 'Kindness always paves off. Keeps your team intact, and also with your clients.'),
            ],
            skills: [
                new Skill('HTML/CSS', 65),
                new Skill('Javascript', 80),
                new Skill('PHP', 80),

                new Skill('Python', 65),
                new Skill('Vue', 85),
                new Skill('Vuex', 70),

                new Skill('CodeIgniter', 75),
                new Skill('Laravel', 70),

                new Skill('DjangoREST', 60),
                new Skill('UI/UX', 70),
            ]
        }
    },
    components: {
        SkillsBar: () => import('./SkillsBar.vue')
    }
}
</script>

<style scoped>
.skills {
    display: flex;
    color: #f9f9f9;
    background-color: #121013;
    padding: 200px 100px;
    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.25);
}
.practices {
    flex: 1;
    text-align: right;
}
.practice {
    margin-bottom: 50px;
}
.practice-name {
    font-size: 30px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 5px;
}
.skill-list {
    flex: 1;
    padding-left: 50px;
}
</style>
