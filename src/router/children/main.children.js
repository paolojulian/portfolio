import { headers } from '@/helpers/constants'

const NotFound = {
    path: '/404',
    name: '404',
    component: () => import('@/components/404'),
    meta: { en_title: '404' }
}

const Dashboard = {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/components/Dashboard'),
    meta: {
        en_title: headers.en.dashboard,
        navbarAnimate: true
    }
}

export default [
    NotFound,
    Dashboard
]
