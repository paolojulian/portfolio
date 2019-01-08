/* src/router/children/hobbies.children.js */

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
    redirect: '/hobby/cooking/favorite',
    component: () => import('@/components/hobbies/HobbyCooking'),
    meta: { en_title: hobbiesHeader.en.cooking },
    beforeEnter (to, from, next) {
        registerStore($hobbies, hobbiesStore)
        next()
    },
    children: [
        {
            path: ':sortBy',
            name: 'HobbyCookingSort',
            component: () => import('@/components/hobbies/utils/CookingList'),
            meta: { en_title: hobbiesHeader.en.cooking }
        }
    ]
}

const hobbyMusic = {
    path: '/hobby/music',
    name: 'HobbyMusic',
    component: () => import('@/components/hobbies/HobbyMusic'),
    meta: { en_title: hobbiesHeader.en.music },
    beforeEnter (to, from, next) {
        registerStore($hobbies, hobbiesStore)
        next()
    }
}

const hobbyCoding = {
    path: '/hobby/coding',
    name: 'HobbyCoding',
    component: () => import('@/components/hobbies/HobbyCoding'),
    meta: { en_title: hobbiesHeader.en.coding },
    beforeEnter (to, from, next) {
        registerStore($hobbies, hobbiesStore)
        next()
    }
}

export default [
    hobbies,
    hobbyList,
    hobbyCooking,
    hobbyMusic,
    hobbyCoding
]
