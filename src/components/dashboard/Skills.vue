<template>
<div class="skills">
    <div class="practices">
        <div v-for="(practice, i) in practices"
            :key="`practice_${i}`"
            class="practice">
            <div class="practice-name">{{ practice.name }}</div>
            <div class="practice-description">{{ practice.description }}</div>
        </div>
    </div>
    <div class="skill-list">
        <ProgressBar
            v-for="(skill, i) in skills"
            :key="`skill_${i}`"
            :name="skill.name"
            :percent="skill.level"/>
        <!-- <div v-for="(skill, i) in skills"
            :key="`skill_${i}`"
            class="skill">
            <div class="skill-name">{{ skill.name }}</div>
            <div class="skill-level">{{ skill.level }}</div>
        </div> -->
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
    constructor(name, level) {
        this.name = name
        this.level = level
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
        ProgressBar: () => import('../fragments/ProgressBar.vue')
    }
}
</script>

<style scoped>
.skills {
    display: flex;
    color: #f9f9f9;
    background-color: #121013;
    padding: 200px 100px;
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
