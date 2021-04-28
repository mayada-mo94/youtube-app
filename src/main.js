import Vue from 'vue'
import App from './app.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch ,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router';
import ScrollLoader from 'vue-scroll-loader'

library.add(faSearch,faArrowRight)

Vue.use(ScrollLoader)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
