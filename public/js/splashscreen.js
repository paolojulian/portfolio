window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.SplashScreen').style.opacity = '0'
    }, 500)
    //display none is set because it will overlay everything
    //the delay should match the transition
    setTimeout(() => {
        document.querySelector('.SplashScreen').style.display = 'none'
    }, 800)
})