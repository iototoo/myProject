import { createApp } from 'vue'
import App from './App.vue'

import Home from './views/Home.vue'
import About from './views/About.vue'
import UserDetail from './views/UserDetail.vue'
import Users from './views/Users.vue'

import { createRouter, createWebHistory } from 'vue-router'


// routes 정해줌 . 길을 정해줌 : path, component  매핑
const routes = [
    {path:'/', component : Home, name:'home'},
    {path:'/about', component : About, name:'about'},
    {path:'/user', component : Users, name:'users'},
    {path:'/user/:id', component : UserDetail, name:'user', props : true},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)     //분리하여 .use 추가 
app.mount('#app')
