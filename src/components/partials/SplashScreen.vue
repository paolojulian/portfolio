<template lang="html">
<div class="SplashScreen">
	Splash
</div>
</template>

<script type="text/javascript">
// document.querySelector('.SplashScreen').style.opacity = '100'
// document.querySelector('.SplashScreen').style.display = 'block'
// setTimeout(() => {
	window.addEventListener('load', () => {
		// setTimeout(() => {
			document.querySelector('.SplashScreen').style.opacity = '0'
		// }, 1500)
		// setTimeout(() => {
			document.querySelector('.SplashScreen').style.display = 'none'
		// }, 1800)
	})
// }, 2000)
export default {

}
</script>

<style scoped>
.SplashScreen {
	z-index: 1001;
	position: fixed;
	left: 0;
	top: 0;
	background: white;

	height: 100%;
	width: 100%;

	transition: all 300ms ease-in-out;
}
</style>
