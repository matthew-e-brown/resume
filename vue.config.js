const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  publicPath: './',
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
      .end();

    if (process.env.NODE_ENV === 'production') {
      config.plugin('prerender-spa-plugin').use(new PrerenderSpaPlugin({
        staticDir: path.resolve(__dirname, 'dist'),
        routes: [ '/' ]
      }));
    }
  }
};