import React from 'react'
import { Route, Router, BrowserRouter, Routes} from 'react-router-dom'
import Home from './pages/Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/home' element={<Home/>} />
          <Route path='/profile' element={<Home/>} />
          <Route path='/wishlist' element={<Home/>} />
          <Route path='/cart' element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
