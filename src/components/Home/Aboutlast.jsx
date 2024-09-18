import React from 'react'

import './about.css'

import img1 from '../../folder/rajin.jpg'
import img2 from '../../folder/ved.jpg'

function Aboutlast() {
  return (
    <div>
      <div className='about'>
        
        <div className='container'>

            <div className='row'>

                <div className='col-12 col-md-6 mt-5'>

                    <img src={img1} alt="" style={{width:'80%',height:'90%'}} />



                </div>

                <div className='col-12 col-md-6 mt-5'>

                    <img src={img2} alt="" style={{width:'80% ',height:'90%',marginLeft:'20px'}} />



                </div>

            </div>

        </div>

      </div>
    </div>
  )
}

export default Aboutlast
