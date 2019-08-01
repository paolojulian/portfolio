import { MyAPI } from '@/api/API'
import URL from './APIRoutes.frontend'

export default class APIMail extends MyAPI {
    send (payload) {
        return super
                .xhrPost(
                    URL.mail,
                    payload
                )
    }
}
