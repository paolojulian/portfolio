module.exports = {
  configureWebpack: {
    resolve: {
      alias: require('./aliases.config').webpack
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: true
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:8081',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
