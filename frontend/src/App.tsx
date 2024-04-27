// import { useState } from 'react'

import './App.css'
import AppBar from './components/AppBar'
import Card from './components/Card'

function App() {

  return (
    <div>
      <AppBar/>
      <div className='flex gap-6 m-2 flex-wrap'>
        <Card/>
        <Card/>
        <Card/> 
        <Card/>
        <Card/>
        <Card/> 
        <Card/>
        <Card/>
        <Card/> 
        <Card/>
        <Card/>
        <Card/> 
      </div>


    </div>
  )
}

export default App
