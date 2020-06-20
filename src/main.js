import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  data: { production: (process.env.NODE_ENV === 'production') },
  render: h => h(App)
}).$mount('#app');
