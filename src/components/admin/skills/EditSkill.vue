<template>
<VModal class="EditSkill"
    @close="$emit('close')"
    data-test="skills update modal"
>
    <div slot="header">
        Edit skill - ({{ name }})
    </div>
    <div slot="body">
        <form @submit.prevent="handleSubmit"
            ref="editSkillForm"
        >
            <div class="skill_name">
                <label>Name: </label>
                <input
                    type="text"
                    v-model="form.name"
                    data-test="skills update name"
                    />
            </div>
            <div class="skill_level">
                <label>Level: </label>
                <input
                    type="number"
                    v-model="form.level"
                    data-test="skills update level"
                    />
            </div>
            <div class="skill_type">
                <label>Type: </label>
                <select
                    v-model="form.type"
                    data-test="skills update type">
                    <option :value="null">Choose One</option>
                    <option value="1">Programming Language</option>
                    <option value="2">Framework / Others</option>
                </select>
            </div>
            <button
                type="submit"
                data-test="skills update submit">
                Submit
            </button>
        </form>
    </div>
</VModal>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex';
export default {
    name: 'EditSkill',
    props: {
        /** PK of the Skill */
        id: {
            type: Number,
            required: true
        },
        /** Name of the skill */
        name: {
            type: String,
            required: true
        },
        /** Level(Percent) of the skill */
        level: {
            type: Number,
            required: true
        },
        /** Type of the skill [1: Programming, 2: Framework / Others] */
        type: {
            type: Number,
            required: true
        }
    },
    data () {
        return {
            form: {
                name: this.name,
                level: this.level,
                type: this.type
            },
            codes: {
                success: 1,
                error: 2
            },
            status: {
                success: false,
                error: false
            }
        }
    },
    methods: {
        ...mapActions($hobbies, [
            'editSkill',
        ]),
        /**
         * Handles the form submition of edit skill
         */
        handleSubmit () {
            const payload = {
                skillID: this.id,
                data: this.form
            }
            this.editSkill(payload)
                .then(() => this.handleSuccess(this.codes.success))
                .catch(err => this.handleError(this.codes.error, err))
        },
        /**
         * Handles the success function for all actions
         */
        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.codes.success:
                    this.$emit('success')
                    break;
                default:
                    this.setStatus('error', 'Oops! Something went wrong. Please try again later')
                    break;
            }
        },
        /**
         * Handles the errors for all actions
         * @param { Number } statusCode - the code of the action
         * @param { Object }
         */
        handleError (statusCode = {}, err = {}) {
            if (err) {
                // eslint-disable-next-line
                console.error(err)
            }
            switch (statusCode) {
                default:
                    this.setStatus('error', 'Oops! Something went wrong. Please try again later')
                    break;
            }
        },
    }
}
</script>

<style scoped>

</style>
