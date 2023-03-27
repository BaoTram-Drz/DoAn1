import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import About from '../pages/About/About'
import Contact from '../pages/Contact/Contact'
import Cube from '../pages/Component/TestThree/Testthree'


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/about', component: About},
    { path: '/contact', component: Contact},
    { path: '/threejs', component: Cube}
]

const privateRoutes = { 
    
}

export { publicRoutes, privateRoutes } 