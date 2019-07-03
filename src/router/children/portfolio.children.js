/* src/router/children/portfolio.children.js */

import { headers } from '@/helpers/constants'

const portfolio = {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('@/components/portfolio/Portfolio.vue'),
    meta: { en_title: headers.en.portfolio },
}

export default [
    portfolio
]