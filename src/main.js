// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
import 'styles/btn.css'
import 'styles/skin_color_package.css'
import './assets/js/fontFamily.js'
import axios from 'axios'
import md5 from 'js-md5';

Vue.prototype.$axios = axios
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$md5 = md5;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
})
