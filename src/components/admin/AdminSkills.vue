<template>
<div class="AdminSkills"
    data-test="skills"
>
    AdminSkills
    <br />
    <AddSkill/>
    <br />
    <div class="status_success"
        v-if="adminStatus.success"
    >
        {{ adminStatus.msg }}
    </div>
    <div class="status_error"
        v-if="adminStatus.error"
    >
        {{ adminStatus.msg }}
    </div>
    <hr />
    <br />
    <AdminSkillList/>
</div>
</template>

<script>
import { $hobbies } from '@/helpers/constants'
import { mapGetters } from 'vuex';
export default {
    name: 'AdminSkills',
    components: {
        AddSkill: () => import('./skills/AddSkill.vue'),
        AdminSkillList: () => import('./skills/AdminSkillList')
    },
    computed: {
        ...mapGetters($hobbies, [
            'adminStatus'
        ])
    }
}
</script>

<style scoped>
.AdminSkills {
    padding: 2rem;
}
</style>
