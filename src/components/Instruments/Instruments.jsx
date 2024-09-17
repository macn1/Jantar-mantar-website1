import React from 'react'


import './instruments.css'

import img2 from '../../folder/1.jpg'
import img3 from '../../folder/2.jpg'
import img4 from '../../folder/3.jpg'
import img5 from '../../folder/4.jpg'
import img6 from '../../folder/5.jpg'
import img7 from '../../folder/6.jpg'
import img8 from '../../folder/7.jpg'
import img9 from '../../folder/8.jpg'
import img10 from '../../folder/9.jpg'

function Instruments() {
  return (
    <div >
        <div className='inst'>

          <div className='container ' >

            <div className='row text-white'>

              <div className='col-12 text-white text-center'>
                  <h1>Discover the Astronomical Instruments of Jantar Mantar</h1>
              </div>

           

              
              <div className='col-12 col-md-4 p-1 mt-5'  >
                <img src={img2} alt=""  style={{width:'100%',height:'100%',border:'2px solid white'}}/>
                <h5 className='mt-3 text-center'>instrument 1</h5>
            
              </div>
              <div className='col-12 col-md-4 p-1 mt-5'  >
                <img src={img3} alt=""  style={{width:'100%',height:'100%',border:'2px solid white'}}/>
                <h5 className='mt-3 text-center'>instrument 2</h5>
            
              </div>
              <div className='col-12 col-md-4 p-1 mt-5'  >
                <img src={img4} alt=""  style={{width:'100%',height:'100%',border:'2px solid white'}}/>
                <h5 className='mt-3 text-center'>instrument 2</h5>
            
              </div>
              <div className='col-12 col-md-4 p-1 mt-5' >
                <img src={img5} alt=""  style={{width:'100%',height:'100%',border:'2px solid white'}}/>
                <h5 className='mt-3 text-center'>instrument 4</h5>
            
              </  div>
              <div className='col-12 col-md-4 p-1 mt-5'>
                <img src={img6} alt=""  style={{width:'100%',height:'100%',border:'2px solid white'}}/>
                <h5 className='mt-3 text-center'>instrument 5</h5>
            
              </div>
              <div className='col-12 col-md-4 p-1 mt-5'  >
                <img src={img7} alt=""  style={{width:'100%',height:'100%',border:'2px solid white'}}/>
                <h5 className='mt-3 text-center'>instrument 6</h5>
            
              </div>
              
              
              

            </div>

          </div>


        </div>
      
    </div>
  )
}

export default Instruments
