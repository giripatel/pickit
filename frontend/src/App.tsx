import React from 'react'
import { Route, Router, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home'
import { RecoilRoot } from 'recoil'
import WishList from './pages/WishList'
import CartItems from './pages/CartItems'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <RecoilRoot>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/home' element={<Home/>} />
            <Route path='/profile' element={<Home/>} />
            <Route path='/wishlist' element={<WishList/>} />
            <Route path='/cart' element={<CartItems />} />
          </Routes>
        </RecoilRoot>
      </BrowserRouter>
    </div>
  )
}

export default App
