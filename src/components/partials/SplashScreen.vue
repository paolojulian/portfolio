<template lang="html">
<div class="LoadingScreen">
	<div class="LoadingScreen__logo">
		<span class="pipz">PIPZ</span>
	</div>
</div>
</template>

<script type="text/javascript">
window.addEventListener('load', () => {
	// setTimeout(() => {
	// 	document.querySelector('.LoadingScreen').style.opacity = '0'
	// }, 500)
	// setTimeout(() => {
	// 	document.querySelector('.LoadingScreen').style.display = 'none'
	// }, 800)
})
export default {

}
</script>

<style scoped>
.LoadingScreen {
	z-index: 1001;
	position: fixed;
	left: 0;
	top: 0;
	background: white;

	height: 100%;
	width: 100%;

	transition: all 300ms ease-in-out;
}
.LoadingScreen__logo {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
