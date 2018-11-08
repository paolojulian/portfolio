import { registerStore } from '@/helpers/store_helper'
import { $hobbies, headers, hobbiesHeader } from '@/helpers/constants'
import hobbiesStore from '@/components/hobbies/store/index.module'

const hobbies = {
    path: '/hobby',
    name: 'Hobby',
    component: () => import('@/components/hobbies/Hobby'),
    meta: { en_title: headers.en.hobbies },
    beforeEnter (to, from, next) {
        registerStore($hobbies, hobbiesStore)
        next()
    }
}

const hobbyList = {
    path: '/hobby/list',
    name: 'HobbyList',
    component: () => import('@/components/hobbies/HobbyList'),
    meta: { en_title: headers.en.hobbies },
    beforeEnter (to, from, next) {
        registerStore($hobbies, hobbiesStore)
        next()
    }
}

const hobbyCooking = {
    path: '/hobby/cooking',
    name: 'HobbyCooking',
    component: () => import('@/components/hobbies/HobbyCooking'),
    meta: { en_title: hobbiesHeader.en.cooking },
    beforeEnter (to, from, next) {
        registerStore($hobbies, hobbiesStore)
        next()
    }
}

export default [
    hobbies,
    hobbyList,
    hobbyCooking
]
