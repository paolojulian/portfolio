<template>
<div class="AddSkill"
    data-test="skills add"
>
    <div v-if="status.success">
        {{ status.msg }}
    </div>
    <div v-if="status.error">
        {{ status.msg }}
    </div>
    <br/>
    <form @submit.prevent="handleSubmit">
        <div class="skill_name">
            <label>Name: </label>
            <input
                type="text"
                v-model="form.name"
                data-test="skills form name"
                />
        </div>
        <div class="skill_level">
            <label>Level: </label>
            <input
                type="number"
                v-model="form.level"
                data-test="skills form level"
                />
        </div>
        <div class="skill_type">
            <label>Type: </label>
            <select
                v-model="form.type"
                data-test="skills form type">
                <option :value="null">Choose One</option>
                <option value="1">Programming Language</option>
                <option value="2">Framework / Others</option>
            </select>
        </div>
        <button
            type="button"
            @click="resetForm"
            data-test="skills form reset">
            Reset
        </button>
        <button
            type="submit"
            data-test="skills form submit">
            Submit
        </button>
    </form>
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapActions } from 'vuex';
export default {
    name: 'AddSkill',
    data () {
        return {
            status: {
                error: false,
                success: false,
                msg: ''
            },
            codes: {
                success: 321,
                error: 123,
                blankFields: 322
            },
            form: {
                name: '',
                level: 0,
                type: null
            }
        }
    },
    methods: {
        ...mapActions($hobbies, [
            'addSkill',
            'getSkillList'
        ]),
        resetForm () {
            this.form.name = ''
            this.form.level = 0
            this.form.type = null
        },
        /**
         * Handles the submit function for adding a skill
         */
        handleSubmit () {
            this.addSkill(this.form)
                .then(() => this.handleSuccess(this.codes.success))
                .catch(err => this.handleError(this.codes.error, err))
        },
        /**
         * Handles the success function for all actions
         */
        handleSuccess (statusCode) {
            switch (statusCode) {
                case this.codes.success:
                    this.SET_STATUS('success', `Successfully added ${this.form.name}`)
                    this.getSkillList()
                    this.resetForm()
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
