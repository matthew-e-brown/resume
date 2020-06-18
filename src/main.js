import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight, faPaperPlane, faMobile, faPhone } from "@fortawesome/pro-solid-svg-icons";
import { faGlobe } from "@fortawesome/pro-regular-svg-icons";

library.add(faGithub, faLinkedin, faStackOverflow);
library.add(faArrowRight, faPaperPlane, faMobile, faPhone, faGlobe);

Vue.component('fa-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
