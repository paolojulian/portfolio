import { $pageLoader } from '@/helpers/constants'
import { mapMutations } from 'vuex'
const GLOBAL_MIXINS = {
	data () {
		return {
			pageLoader: $pageLoader,
			IMAGES: {
				length: 0,
				counter: 0
			}
		}
	},

	computed: {
		'IMAGES.loaded': function () {
			if (this.IMAGES.counter !== this.IMAGES.length) return false;

			return true
		}
	},

	methods: {
		...mapMutations($pageLoader, [
			'pageLoading',
			'pagePost',
			'pageError'
		]),

		TEST (msg) {
			// eslint-disable-next-line
			console.log(msg)
		},

		/**
		 * PRELOAD IMAGES before entering
		 * @param { Array } images - images to preload
		 * @param { Function } func - callback if preloaded
		 */
		PRELOAD_IMAGES (images, func) {
			Promise.all(images)
				.then(() => func())
		},

		GET_RANDOM_INT(min, max) {
			return Math.round(Math.random() * (max - min) + min);
		},

		/**
		 * Gets the KEY from the given link
		 * @param { String } link 
		 */
		CONVERT_S3_LINK_TO_KEY (link) {
            // Get the key of the image
            const link_arr = link.split('/')
            return link_arr[link_arr.length - 1]
		},
        /**
         * SETS THE STATUS OF THE ACTION if[Success or Error]
         * @param { String } type - [success|error]
         * @param { String } msg - message of the status - to be displayed on screen
         */
        SET_STATUS (type, msg) {
			try {
				this.status[type] = true
				this.status.msg = msg
				setTimeout(() => {
					this.status[type] = false
					this.status.msg = ''
				}, 5000)
			} catch (err) {
				//eslint-disable-next-line
				console.error(err)
			}
        },
        /**
         * OPEN A MODAL based on the name
         * @param { String } modalName - modal property from data ()
         */
		OPEN_MODAL (modalName) {
			this.TOGGLE_MODAL(modalName, true)
		},
        /**
         * CLOSES A MODAL based on the name
         * @param { String } modalName - modal property from data ()
         */
		CLOSE_MODAL (modalName) {
			this.TOGGLE_MODAL(modalName, false)
		},
		/**
		 * TOGGLES A MODAL
		 * @param { Sting } modalName - modal property
		 * @param { Boolean } boolean - True = open modal, False = close modal
		 */
		TOGGLE_MODAL (modalName, boolean) {
            try {
                this.modal[modalName].toggle = boolean
            } catch (error) {
                // eslint-disable-next-line
                console.trace(err)
            }
		},

		waitImagesToLoad () {
			let images = document.images
			this.IMAGES.length = images.length;

			[].forEach.call(images, (img) => {
				img.addEventListener('load', () => this.incrementCounter(), false)
			});
		},

		incrementCounter () {
			this.IMAGES.counter ++
		}
	}
}

export default GLOBAL_MIXINS