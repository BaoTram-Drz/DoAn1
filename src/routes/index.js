import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Cube from '../pages/Component/TestThree/Testthree'
import SignUp from '../pages/SignUp/SignUp'
import Forgot from '../pages/Forgot/Forgot'
import VerifyCode from '../pages/VerifyCode/VerifyCode'
import Carousel from '../pages/Component/Carousel/Carousel'
import Game1 from '../pages/Game/Game1'
import CoursesInfo from '../pages/Component/CoursesCard/CoursesInfo'
import League from '../pages/League/League'
import LayoutLearn from '../pages/Game/LayoutLearn'
import BigTest from '../pages/Game/BigTest'
import Scores from '../pages/Scores/Scores'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/threejs', component: Cube},
    { path: '/signup', component: SignUp},
    { path: '/forgot', component: Forgot},
    { path: '/verify', component: VerifyCode},
    { path: '/slide', component: Carousel},
    { path: '/game1', component: Game1},
    { path: '/coursesinfo', component: CoursesInfo},
    { path: '/league', component: League},
    { path: '/layoutlearn', component: LayoutLearn},
    { path: '/bigtest', component: BigTest},
    { path: '/scores', component: Scores}
]

const privateRoutes = { 
    
}

export { publicRoutes, privateRoutes } 