import Hobby from './hobbies.children'
import Auth from './auth.children'
import Main from './main.children'
import Cv from './cv.children'
import Portfolio from './portfolio.children'

const routes = [
    ...Main,
    ...Hobby,
    ...Auth,
    ...Cv,
    ...Portfolio,
    {
        path: '*',
        redirect: '/404'
    }
]

export default routes
