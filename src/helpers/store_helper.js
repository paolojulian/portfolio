import store from '@/store/index'
import VLoader from '@/components/fragments/_VLoader'
import VError from '@/components/404'

/** use to load routes
 *
 * @param {object} component - your component
 */
export function loadComponent (component) {
    const asyncHandler = () => ({
        component: component,
        // A component to use while the component is loading.
        loading: VLoader,
        // A fallback component in case the timeout is exceeded
        // when loading the component.
        error: VError,
        // Delay before showing the loading component.
        // Default: 200 (milliseconds).
        delay: 200,
        // Time before giving up trying to load the component.
        // Default: Infinity (milliseconds).
        timeout: 10000
    })

    return Promise.resolve({
        functional: true,
        render (h, { data, children }) {
            // Transparently pass any props or children
            // to the view component.
            return h(asyncHandler, data, children)
        }
    })
}

/** register your module to the main store @/store/store
 *
 * @param {string} STORE_KEY - name of your module
 * @param {store} module - the vuex store you want to import
 *
 * @return void
 */
export function registerStore (STORE_KEY, module) {
    if (!(STORE_KEY in store._modules.root._children)) {
        store.registerModule(STORE_KEY, module)
    }
}
