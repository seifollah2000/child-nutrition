import Home from './page/Home'
import Add from './page/Add'
import NoMutch from './page/No-Mutch'
import Profile from './page/Profile'
import Login from './page/Login'
import Search from './page/Search'
import Signup from './page/Signup'
import SingleRecipe from './page/SingleRecipe'
const router = [
    { path: '/', element: <Home /> },
    { path: '/add', element: <Add /> },
    { path: '/login', element: <Login /> },
    { path: '/nomutch', element: <NoMutch /> },
    { path: '/profile', element: <Profile /> },
    { path: '/search', element: <Search /> },
    { path: '/signup', element: <Signup /> },
    { path: '/singleRecipe', element: <SingleRecipe /> },


]
export default router