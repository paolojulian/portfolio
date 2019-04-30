<template>
<div class="AddProject">
    <div v-if="status.success">
        {{ status.msg }}
    </div>
    <div v-if="status.error">
        {{ status.msg }}
    </div>
    <br />
    <form @submit.prevent="handleSubmit">
        <div class="project_name">
            <label>Name: </label>
            <input
                type="text"
                v-model="form.name"
                data-test="project form name"
                />
        </div>

        <div class="project_description">
            <label>Description: </label>
            <textarea
                type="text"
                v-model="form.description"
                data-test="project form description"
            ></textarea>
        </div>

        <div class="project_tool">
            <label>Tool used: </label>
            <input
                type="text"
                v-model="form.tool"
                data-test="project form tool"
                />
        </div>
        <div class="project_existing">
            <label>Does exist: </label>
            <input type="checkbox"
                v-model="form.existing"
                data-test="project form existing"
            />
        </div>
        
        <button
            type="submit"
            data-test="project form submit"
        >
            SUBMIT
        </button>
    </form>
</div>
</template>

<script>
export default {
    name: 'AddProject',
    data () {
        return {
            status: {
                error: false,
                success: false,
                msg: '',
                codes: {
                    addProject: 3219
                }
            },
            form: {
                name: '',
                description: '',
                tool: '',
                existing: false
            }
        }
    },
    
    methods: {
        resetForm () {
            this.form.name = ''
            this.form.description = ''
            this.form.tool = ''
            this.form.existing = false
        },
        handleSubmit () {
            this.handleSuccess(this.status.codes.addProject)
        },
        /**
         * Handles the success function for all actions
         */
        handleSuccess (statusCode) {
            const setStatus = msg => {
                this.status.success = true
                this.status.msg = msg
                setTimeout(() => {
                    this.status.success = false
                }, 5000)
            }
            switch (statusCode) {
                case this.status.codes.addProject:
                    setStatus('Project Added Successfully')
                    this.resetForm()
                    break;
                default:

            }
        }
    }
}
</script>

<style scoped>
</style>
