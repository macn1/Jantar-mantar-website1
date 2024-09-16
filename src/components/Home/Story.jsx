import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import './stroy.css'

import img1 from '../../folder/story.png'

function Story() {
  return (
    <div >

      <div className='story d-flex flex-column justify-content-center  '>



        <div className='container'>

          <div className='row '>





            <div className='img col-12  col-md-6 text-center p-3 '>
              <img src={img1} style={{ width: '100%' }} />



            </div>

            <div className='col-12  col-md-6  text-white '>


              <h1 className='font'>The Story of Jantar Mantar</h1>

              <p>Welcome to Jantar Mantar, Jaipur, a UNESCO World Heritage site and a testament to the brilliance of ancient Indian astronomy. Built in the 18th century by Maharaja Sawai Jai Singh II, Jantar Mantar houses the world's largest stone sundial and a collection of 19 astronomical instruments that track celestial bodies, time, and space with precision. Whether you're a history enthusiast, a lover of science, or a curious traveller, Jantar Mantar offers a unique glimpse into the confluence of science, art, and royal heritage. Begin your cosmic journey today and explore Jaipur's iconic monument</p>






            </div>







          </div>







        </div>






      </div>

    </div>
  )
}

export default Story
