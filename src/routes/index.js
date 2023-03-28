import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cube from '../pages/Component/TestThree/Testthree'
import SignUp from '../pages/SignUp/SignUp'
import Forgot from '../pages/Forgot/Forgot'
import VerifyCode from '../pages/VerifyCode/VerifyCode'
import Carousel from '../pages/Component/Carousel/Carousel'


const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/threejs', component: Cube},
    { path: '/signup', component: SignUp},
    { path: '/forgot', component: Forgot},
    { path: '/verify', component: VerifyCode},
    { path: '/slide', component: Carousel}
]

const privateRoutes = { 
    
}

export { publicRoutes, privateRoutes } 