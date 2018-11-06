import Hobby from './hobbies.children'
import Auth from './auth.children'
import Main from './main.children'
const routes = [
    ...Main,
    ...Hobby,
    ...Auth,
    {
        path: '*',
        redirect: '/404'
    }
]

export default routes
