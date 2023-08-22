import React from 'react'
import {Link} from 'wouter'
import Icon from '../public/overlandEmbassyIcon.jpg'

function Home() {
  return (
    <div className='app-body'>
    <img src={Icon} className='header-icon'/>
    <h1>Welcome to Overland Embassy!</h1>
    <h3 className='msj-to-action'>Select an option...</h3>
    <div className="nav-container">
      <Link href="/registration">Registration</Link>
      <Link href="/laundry">Laundry</Link>
      <Link href="/fridge">Fridge</Link>
      <Link href="/review">Review</Link>
    </div>
    </div>
  )
}

export default Home