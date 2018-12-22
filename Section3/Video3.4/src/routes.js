import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Songs from './components/Songs.vue'
import AddSong from './components/AddSong.vue'

export default [
    { path:'/',component:Login },
    { path:'/login',component:Login },
    { path:'/home',component:Home },
    { path:'/signup',component:Signup },
    { path:'/songs',component:Songs },
    { path:'/create',component:AddSong }
]
