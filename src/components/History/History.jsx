import React from 'react'

import Navbar from '../../Screen/Navbar'
import LandingHistory from './LandingHistory'
import Jaipur from './Jaipur'
import Archi from './Archi'

function History() {
  return (
    <div>
        <Navbar></Navbar>
        <LandingHistory/>
        <Jaipur/>
        <Archi></Archi>
      
    </div>
  )
}

export default History
