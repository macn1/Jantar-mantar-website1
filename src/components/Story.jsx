import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import './stroy.css'

import img1 from '../../src/folder/story.png'

function Story() {
  return (
    <div >

      <div className='story d-flex flex-column justify-content-center  '>

       

        <div className='container'>

          <div className='row '>





            <div className='img col-12  col-md-6 text-center p-3 '>
              <img src={img1}  style={{width:'100%'}}/>



            </div>

            <div className='col-12  col-md-6  text-white '>

             
              <h1 className='font'>The Story of Jantar Mantar</h1>

              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              

             



            </div>







          </div>







        </div>

       




      </div>

    </div>
  )
}

export default Story
