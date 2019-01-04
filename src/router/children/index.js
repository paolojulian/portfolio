import Hobby from './hobbies.children'
import Auth from './auth.children'
import Main from './main.children'
import Cv from './cv.children'

const routes = [
    ...Main,
    ...Hobby,
    ...Auth,
    ...Cv,
    {
        path: '*',
        redirect: '/404'
    }
]

export default routes
