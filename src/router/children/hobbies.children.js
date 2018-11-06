import { registerStore } from '@/helpers/store_helper'
import { $hobbies, headers } from '@/helpers/constants'
import hobbiesStore from '@/components/hobbies/store/index.module'

const hobbies = {
    path: '/hobby',
    name: 'Hobby',
    component: () => import('@/components/hobbies/Hobby'),
    meta: { en_title: headers.en.hobby },
    beforeEnter (to, from, next) {
        registerStore($hobbies, hobbiesStore)
        next()
    }
}

const hobbyList = {
    path: '/hobby/list',
    name: 'HobbyList',
    component: () => import('@/components/hobbies/HobbyList'),
    meta: { en_title: headers.en.hobbyList },
    beforeEnter (to, from, next) {
        registerStore($hobbies, hobbiesStore)
        next()
    }
}

export default [
    hobbies,
    hobbyList
]
