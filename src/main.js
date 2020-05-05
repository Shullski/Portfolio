import Vue from 'vue'
import Router from 'vue-router'
import { routes } from './routes'
import App from './App.vue'
import 'vue-material-design-icons/styles.css'

Vue.config.productionTip = false
Vue.use(Router);

const router = new Router({
    routes,
})

new Vue({

    router,
    render: h => h(App),

}).$mount('#app')
