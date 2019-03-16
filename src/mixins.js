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
	methods: {
		...mapMutations($pageLoader, [
			'pageLoading',
			'pagePost',
			'pageError'
		]),

		TEST (msg) {
			console.log(msg)
		},

		waitImagesToLoad () {
			let images = document.images
			this.IMAGES.length = images.length;

			[].forEach.call(images, (img) => {
			    img.addEventListener('load', () => this.incrementCounter(), false);
			});
		},

		incrementCounter() {
		    counter++;
		    if (counter === this.IMAGES.length) {
		        console.log( 'All images loaded!' );
		    }
		}
	}
}

export default GLOBAL_MIXINS