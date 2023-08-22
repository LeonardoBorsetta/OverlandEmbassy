import React, { useState } from 'react'
import './App.css'
import background from './public/overlandEmbassyBackground.jpg'
import {Route, Link} from 'wouter'
import Laundry from './pages/Laundry'
import Registration from './pages/Registration'
import Fridge from './pages/Fridge'
import Home from './pages/Home'
import Review from './pages/Review'

function App() {

  
  return (
    <>
      <img src={background} className='background-img'/>
        <Route path="/" component={Home}/>
        <Route path="/registration" component={Registration}/>
        <Route path="/laundry" component={Laundry}/>
        <Route path="/fridge" component={Fridge}/>
        <Route path='/review' component={Review}/>
    </>
  )
}

export default App
