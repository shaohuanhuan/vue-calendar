// main entry file
// var Vue = require('vue')
import Vue from 'vue'
// import { Dialog, Button, DatePicker} from 'element-ui'
// Vue.use(Dialog)
// Vue.use(Button)
// Vue.use(DatePicker)
// Vue.use(Icon)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './app'

// new Vue({
//   el : '#app',
//   components : {
//     'app' : require('./app')
//   }
// })

Vue.use(ElementUI)

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
    App
  }
});


