import React from 'react'
import Instruments from './Instruments'
import Navbar from '../../Screen/Navbar'
import Instcarousel from './Instcarousel'

function Instrument() {
  return (
    <div>
        <Navbar></Navbar>
        <Instruments></Instruments>
        <Instcarousel/>
      
    </div>
  )
}

export default Instrument
