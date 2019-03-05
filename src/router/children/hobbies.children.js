/* src/router/children/hobbies.children.js */

import { headers, hobbiesHeader } from '@/helpers/constants'

const hobbies = {
    path: '/hobby',
    name: 'Hobby',
    component: () => import('@/components/hobbies/Hobby'),
    meta: { en_title: headers.en.hobbies },
}

const hobbyList = {
    path: '/hobby/list',
    name: 'HobbyList',
    component: () => import('@/components/hobbies/HobbyList'),
    meta: { en_title: headers.en.hobbies },
}

const hobbyCooking = {
    path: '/hobby/cooking',
    name: 'HobbyCooking',
    redirect: '/hobby/cooking/favorite',
    component: () => import('@/components/hobbies/HobbyCooking'),
    meta: {
        en_title: hobbiesHeader.en.cooking,
        back_link: 'Hobby',
        header: true,
        theme: 'dark'
    },
    children: [
        {
            path: ':sortBy',
            name: 'HobbyCookingSort',
            component: () => import('@/components/hobbies/cooking/CookingList'),
            meta: {
                en_title: hobbiesHeader.en.cooking,
                back_link: 'Hobby',
                header: true,
                theme: 'dark'
            }
        }
    ]
}

const hobbyMusic = {
    path: '/hobby/music',
    name: 'HobbyMusic',
    component: () => import('@/components/hobbies/HobbyMusic'),
    meta: {
        en_title: hobbiesHeader.en.music,
        back_link: 'Hobby',
        header: true,
        theme: 'dark'
    },
}

const hobbyCoding = {
    path: '/hobby/coding',
    name: 'HobbyCoding',
    component: () => import('@/components/hobbies/HobbyCoding'),
    meta: {
        en_title: hobbiesHeader.en.coding,
        back_link: 'Hobby',
        header: true,
        theme: 'light'
    },
}

const hobbySports = {
    path: '/hobby/sports',
    name: 'HobbySports',
    component: () => import('@/components/hobbies/HobbySports'),
    meta: {
        en_title: hobbiesHeader.en.sports,
        back_link: 'Hobby',
        header: true,
        theme: 'light'
    },
}

export default [
    hobbies,
    hobbyList,
    hobbyCooking,
    hobbyMusic,
    hobbyCoding,
    hobbySports
]
