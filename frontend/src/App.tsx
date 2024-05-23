import { Route, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home'
import { RecoilRoot } from 'recoil'
import WishList from './pages/WishList'
import CartItems from './pages/CartItems'
import Profile from './pages/Profile'
import Skeleton from './components/ui/Skeleton'
import Test from './pages/Test'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RecoilRoot>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/wishlist' element={<WishList/>} />
            <Route path='/cart' element={<CartItems />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  )
}

export default App
