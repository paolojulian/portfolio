<template>
	<div class="SocialMediaAccounts">
        <font-awesome-icon :icon="icons.github"/>
        <font-awesome-icon :icon="icons.linkedin"/>
        <font-awesome-icon :icon="icons.facebook"/>
        <font-awesome-icon :icon="icons.instagram"/>
	</div>
</template>
<script type="text/javascript">
import { FabIcon } from '../classes/classes.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add( faFacebook, faGithub, faLinkedin, faInstagram )
export default {
	name: 'SocialMediaAccounts',
	data () {
		return {
			icons: {
				github: new FabIcon('github'),
				linkedin: new FabIcon('linkedin'),
				facebook: new FabIcon('facebook'),
				instagram: new FabIcon('instagram'),
			}
		}
	}
}
</script>
<style>
.SocialMediaAccounts {
	position: relative;

	display: flex;
	flex-wrap: wrap;
	text-align: center;
	vertical-align: middle;
	font-size: 1.5rem;
	padding-top: 1.8rem;
}
.SocialMediaAccounts svg{
	margin: auto;
	flex: 1;
}
/* TAB */
@media screen and (min-width: 600px) {

}
/* WEB */
@media screen and (min-width: 1000px) {

}
</style>