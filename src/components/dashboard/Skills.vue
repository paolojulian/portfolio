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
    <div class="skill-list"
        ref="skillList"
        :class="{ 'scrolled': isScrolled }"
        >
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
            ],

            /* Turns true if user scrolled to this component */
            isScrolled: false
        }
    },
    components: {
        SkillsBar: () => import('./SkillsBar.vue')
    },
    methods: {
        handleScroll () {
            let targetPosition = this.$refs.skillList.getBoundingClientRect().top
            let startPosition = window.pageYOffset
            let distance = targetPosition - startPosition

            if (distance < 0) {
                this.triggerAnimation()
            }
        },
        triggerAnimation () {
            this.isScrolled = true
            window.removeEventListener('scroll', this.handleScroll)
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
}
</script>

<style scoped>
.skills {
    padding: 5rem 1rem 2rem 1rem;
    color: #f9f9f9;
    background-color: #121013;
    text-shadow: 0 2px 5px rgba(255, 255, 255, 0.25);
}
.skill-list {
    margin-top: 2rem;
}
.skill-list .skill {
    opacity: 0;
    transition: all 800ms ease-in-out;
}
.skill-list.scrolled .skill {
    opacity: 1;
}
.skill-list.scrolled >>> .bar-line::after {
    animation: animate 1.2s;
    opacity: 1;
}
.skill-list.scrolled >>> .skill:nth-child(1) .bar-line::after { animation-delay: 100ms; transition-delay: 100ms }
.skill-list.scrolled >>> .skill:nth-child(2) .bar-line::after { animation-delay: 200ms; transition-delay: 200ms }
.skill-list.scrolled >>> .skill:nth-child(3) .bar-line::after { animation-delay: 300ms; transition-delay: 300ms }
.skill-list.scrolled >>> .skill:nth-child(4) .bar-line::after { animation-delay: 400ms; transition-delay: 400ms }
.skill-list.scrolled >>> .skill:nth-child(5) .bar-line::after { animation-delay: 500ms; transition-delay: 500ms }
.skill-list.scrolled >>> .skill:nth-child(6) .bar-line::after { animation-delay: 600ms; transition-delay: 600ms }
.skill-list.scrolled >>> .skill:nth-child(7) .bar-line::after { animation-delay: 700ms; transition-delay: 700ms }
.skill-list.scrolled >>> .skill:nth-child(8) .bar-line::after { animation-delay: 800ms; transition-delay: 800ms }
.skill-list.scrolled >>> .skill:nth-child(9) .bar-line::after { animation-delay: 900ms; transition-delay: 900ms }
.skill-list.scrolled >>> .skill:nth-child(10) .bar-line::after { animation-delay: 1000ms; transition-delay: 1000ms }

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
@media screen and (min-width: 600px){
    .skills {
        display: flex;
        padding: 200px 100px;
    }
    .skill-list {
        flex: 1;
        padding-left: 50px;
        margin-top: 0;
    }
}
@media screen and (min-width: 1000px){
    
}
@keyframes animate {
    0% {
        width: 0;
    }
    100% {
        width: 100;
    }
}
</style>
