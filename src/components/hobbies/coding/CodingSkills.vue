<template lang="html">
<div id="CodingSkills">
    <div id="CodingSkills__languages">
        <div class="coding-header">
            <div class="coding-title">
                My Coding Creed
            </div>
            <div class="coding-creed">
                This is my code.
                <br />There are many like it but this one is mine.
                <br />My code is my best friend.
                <br />It is my life.
                <br />I must master it as I must master my life.
                <br />Without me, my code is useless.
                <br />Without my code I am useless.
                <br />I must set my standards true.
                <br />I must be strict too avoid my bugs,
                <br />who is trying to kill me.
                <br />I must shoot him before he shoots me.
                <br />I will.
                <br />Before God I swear this creed:
                <br />my code and myself are defenders of my projects,
                <br />we are the masters of my enemy,
                <br />we are the saviors of my life.
                <br />So be it,
                <br />until there is no bugs,
                <br />but peace.
                <br />Amen.
            </div>
        </div>
        <div class="coding-bars">
            <ProgressBar
                v-for="(skill, i) in skills"
                :key="`programming_languages_${i}`"
                :name="skill.name"
                :percent="skill.percent"
                :theme="skill.theme"
            />
        </div>
    </div>
    <div id="CodingSkills__frameworks">
        <div class="coding-bars">
            <ProgressBar
                v-for="(skill, i) in frameworks"
                :key="`frameworks_${i}`"
                :name="skill.name"
                :percent="skill.percent"
                :theme="skill.theme"
            />
        </div>
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
    height: 100%;
}
#CodingSkills__languages,
#CodingSkills__frameworks {
    width: 100%;
    box-sizing: border-box;
    padding: 0 10px;
    position: relative;
}
.coding-header {
    text-align: center;
}
.coding-title,
.coding-creed {
    text-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
    font-family: 'Proxima Nova Soft', 'Helvetica Neue', sans-serif;
}
.coding-title {
    font-size: 1rem;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 1px;

    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    margin-bottom: 1rem;
}
.coding-creed {
    font-size: 0.95rem;
    margin-bottom: 1rem;
}
.coding-lg {
    display: none;
}
@media screen and (min-width: 600px) {
    #CodingSkills__languages, #CodingSkills__frameworks {
        float: left;
        padding: 0 40px;
    }
    .coding-bars {
        float: right;
        width: 60%;
    }
    .coding-header {
        position: absolute;
        top: 50%;
        left: 20%;
        transform: translateX(-50%);
        float: left;
        text-align: center;
    }
    .coding-title {
        font-size: 1.5rem;
        letter-spacing: 2px;
        border-bottom: unset;
    }
    .coding-creed {
        font-size: 1rem;
    }
    .coding-small {
        display: none;
    }
    .coding-lg {
        display: unset;
    }
}
</style>
