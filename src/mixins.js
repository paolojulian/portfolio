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

		GET_RANDOM_INT(min, max) {
			return Math.round(Math.random() * (max - min) + min);
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