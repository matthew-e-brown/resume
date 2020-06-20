const PrerenderSpaPlugin = require('prerender-spa-plugin');
const path = require('path');

module.exports = {
  publicPath: './',
  configureWebpack: () => {
    if (process.env.NODE_ENV !== 'production') return;
    else return {
      plugins: [
        new PrerenderSpaPlugin({
          staticDir: path.resolve(__dirname, 'dist'),
          routes: [ '/' ]
        })
      ]
    };
  }
};