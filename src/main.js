import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch ,faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router';
import ScrollLoader from 'vue-scroll-loader'
import UUID from 'vue-uuid'

library.add(faSearch,faArrowRight)

Vue.use(ScrollLoader,UUID)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
