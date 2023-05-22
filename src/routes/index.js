import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import Forgot from '../pages/Forgot/Forgot'
import VerifyCode from '../pages/VerifyCode/VerifyCode'
import Carousel from '../pages/Component/Carousel/Carousel'
import CoursesInfo from '../pages/Component/CoursesCard/CoursesInfo'
import League from '../pages/League/League'
import LayoutLearn from '../pages/Game/LayoutLearn'
import BigTest from '../pages/Game/BigTest/BigTest'
import Scores from '../pages/Scores/Scores'
import Vocab from '../pages/Game/Vocab'
import ChangeInfo from '../pages/ChangeInfo/ChangeInfo'
import Game1Test from '../pages/Game/Game1Test'

const publicRoutes = [
    { path: '/', component: Home},
    { path: '/login', component: Login},
    { path: '/signup', component: SignUp},
    { path: '/forgot', component: Forgot},
    { path: '/verify', component: VerifyCode},
    { path: '/slide', component: Carousel},
    { path: '/coursesinfo', component: CoursesInfo},
    { path: '/league', component: League},
    { path: '/layoutlearn', component: LayoutLearn},
    { path: '/bigtest', component: BigTest},
    { path: '/scores', component: Scores},
    { path: '/vocab', component: Vocab},
    { path: '/ChangeInfo', component: ChangeInfo},
    { path: '/game1test', component: Game1Test},
]

const privateRoutes = { 
    
}

export { publicRoutes, privateRoutes } 
