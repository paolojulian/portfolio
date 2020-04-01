<template>
<div class="cv-references">
    <div class="cv-section-header">
        References
    </div>
    <table class="cv-table">
        <tr v-for="(reference, i) in references"
            :key="i"
        >
            <td></td>
            <td>
                <div class="cv-reference-name">{{ reference.name }}</div>
                <div class="cv-reference-position">{{ reference.position }}</div>
                <div class="cv-reference-work-place">{{ reference.work_place}}</div>
                <div class="cv-reference-mobile">{{ reference.mobile }}</div>
                <div class="cv-reference-email">{{ reference.email }}</div>
            </td>
        </tr>
    </table>
</div>
</template>

<script>
class Reference {
    constructor (name, position, work_place, mobile=null, email=null) {
        this.name = name
        this.position = position
        this.work_place = work_place
        this.mobile = mobile
        this.email = email
    }
}
export default {
    name: 'CVReferences',
    data () {
        return {
            references: [
                new Reference(
                    'Kenny Lowell Ngaosi',
                    'Senior Back-end Developer',
                    'Koderos',
                    '+639205686989',
                    'kenjirofuma@gmail.com'
                ),
                new Reference(
                    'Earvin Canaveral',
                    'Senior Front-end Developer',
                    'Beijing Bangnishou',
                    '+639453129490',
                    'nivrae.ec@gmail.com'
                ),
                new Reference(
                    'Acey Rosete',
                    'Senior Software Developer',
                    'Beijing Bangnishou',
                    '+639068304106',
                    'Aceyclay@gmail.com'
                ),

            ]
        }
    }
}
</script>

<style scoped>
.cv-references {
    font-weight: 300;
    letter-spacing: 1px;
}
.cv-reference-name {
    font-weight: 600;
}
.cv-reference-position {
    font-style: italic;
}
</style>
