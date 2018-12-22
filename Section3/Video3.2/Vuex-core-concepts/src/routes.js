import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//1- Define route components
const PageOne = { template: '<div><h1> Page One </h1></div>'}
const PageTwo = { template: '<div><h1> Page Two </h1></div>'}

//2- Define some routes
const routes = [
    { path: '/pageone', component: PageOne },
    { path: '/pagetwo', component: PageTwo }
]

//3- Create the router Instance and pass the 'routes' option
export const router = new VueRouter({
    routes
})