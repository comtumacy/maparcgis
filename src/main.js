import Vue from 'vue'
import App from './App.vue'
import router from '../route'
import axios from 'axios'
import md5 from 'js-md5'
import './assets/style.css'
import './assets/animate/animate.css'
import store from './store/store'
import AtComponents from 'at-ui'
import 'at-ui-style'
import echarts from 'echarts'
import QS from 'qs'
import { Carousel, CarouselItem, Button, Divider, Message, Input, Icon, Row, Col, Checkbox, CheckboxGroup, Tooltip, Submenu, MenuItem, MenuItemGroup, Menu, DropdownMenu, Dropdown, DropdownItem, Table, TableColumn, Loading, MessageBox, Form, FormItem, Select, Option, OptionGroup, Pagination, Upload } from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$QS = QS
Vue.prototype.$echarts = echarts
Vue.prototype.$message = Message
Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$md5 = md5
Vue.use(AtComponents)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Button)
Vue.use(Divider)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Tooltip)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Menu)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Loading.directive)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(OptionGroup)
Vue.use(Pagination)
Vue.use(Upload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
