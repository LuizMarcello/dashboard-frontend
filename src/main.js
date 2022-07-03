import {
  createApp
} from 'vue'

import App from './App.vue'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

import {
  createRouter,
  createWebHashHistory
} from 'vue-router'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/Home/HomeComponent'
import ProductsComponent from './pages/Products/ProductsComponent'
import ClientsComponent from './pages/Clients/ClientsComponent'

/* Criando uma url padrão para uma das apis */
axios.defaults.baseURL = "http://localhost:8000/api"

/* Inicio das rotas */
/* Geralmente se cria um "arquivo de rotas" */
/* Constante das rotas */
const routes = [{
    path: '/',
    name: 'login', //localhost:8080
    component: LoginComponent
  },
  {
    path: '/home',
    name: 'home', //localhost:8080/home
    component: HomeComponent
  },
  {
    path: '/clients',
    name: 'clients', //localhost:8080/clients
    component: ClientsComponent
  },
  {
    path: '/produtos',
    name: 'products', //localhost:8080/produtos
    component: ProductsComponent
  }
]
/* Fim das rotas */

const router = createRouter({
  history: createWebHashHistory(),
  routes // short for 'routes: routes'
})

/* eslint-disable no-new */

const Vue = createApp(App)
Vue.use(router) //Adicionando as configurações 
//de rotas a instância do Vue
Vue.mount('#app')