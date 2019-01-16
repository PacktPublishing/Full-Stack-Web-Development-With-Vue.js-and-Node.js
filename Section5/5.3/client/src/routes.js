import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Songs from './components/Songs.vue'
import AddSong from './components/AddSong.vue'
import ViewSong from './components/ViewSong.vue'
import EditSong from './components/EditSong.vue'

import store from '@/store/store'

const checkAuthentication = (to, from, next) => {
    if(store.state.isUserLoggedIn){
        next()
        return
    }
    next('/login')
}

export default [
    { path:'/',name:'root', component:Login, redirect: { name: 'home'} },
    { path:'/login',name:'login', component:Login },
    { path:'/home',name:'home', component:Home },
    { path:'/signup',name:'signup',component:Signup },
    { path:'/songs',name:'songs',component:Songs, beforeEnter: checkAuthentication },
    { path:'/songs/:songId',name:'songs-view',component:ViewSong, beforeEnter: checkAuthentication },
    { path:'/songs/:songId/edit',name:'songs-edit',component:EditSong, beforeEnter: checkAuthentication }
]
