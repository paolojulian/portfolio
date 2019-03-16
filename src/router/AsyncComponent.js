const AsyncComponent = (component) => ({
  component: component,
  // show this component during load
  loading: import('@/components/partials/SplashScreen.vue'),
  // show this component if it fails to load
  error: import('@/components/partials/ErrorComponent.vue'),
  // delay before showing the loading component
  delay: 200,
  // error if the component failed to loadin is allotted time in milliseconds default in Infinity
  timeout: 3000
})

export default AsyncComponent