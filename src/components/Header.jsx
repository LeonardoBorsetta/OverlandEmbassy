import React from 'react'
import Icon from '../public/overlandEmbassyIcon.jpg'

function Header({prop}) {

  return (
    <>
      <img src={Icon} className='header-icon'/>
      <h1>Overland Embassy {prop}</h1>
    </>
  )
}

export default Header