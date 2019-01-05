/* src/router/children/hobbies.children.js */

import { registerStore } from '@/helpers/store_helper'
import { $cv, headers } from '@/helpers/constants'
import cvStore from '@/components/cv/store/index.module'

const cv = {
    path: '/curriculum-vitae',
    name: 'CurriculumVitae',
    component: () => import('@/components/cv/CurriculumVitae'),
    meta: { en_title: headers.en.cv },
    beforeEnter (to, from, next) {
        registerStore($cv, cvStore)
        next()
    }
}

export default [
    cv
]
