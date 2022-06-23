import {
  createApp
} from 'vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'

const routes = [{
  path: '/',
  name: 'login', //localhost:8080
  component: LoginComponent
},
{
  path: '/home',
  name: 'home', //localhost:8080/home
  component: HomeComponent
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes // short for 'routes: routes'
})

/* eslint-disable no-new */

const Vue = createApp(App)
Vue.use(router) //Adicionando as configurações 
//de rotas a instância do Vue
Vue.mount('#app')


