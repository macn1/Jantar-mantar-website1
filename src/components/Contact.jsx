import React from 'react'

import 'boxicons'

import './contact.css'

function Contact() {
  return (
    <div className='bg '>

      <div className='container'>

        <div className='row'>

            <div className='head col-12 text-white mb-5'>

                <h1 >Contact Details /  Bibiliography</h1>

            </div>


            <div className='col-12 col-md-4 p-3'>

                <div className='box p-4 text-white'>

                    <h5>Write to us</h5>

                    <div>
                    <i class='bx bx-mobile mt-3'> 93843874384734</i> 

                    </div>

                    <div>
                    <i class='bx bx-envelope mt-2 '> asdg@gmail.com</i>

                    </div>
                  
                  <p className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'</p>
                   
                </div>

            </div>
            
            <div className='col-12 col-md-4 p-3 text-white'>

                <div className='box p-4'>

                    <h5>Website and Other Details</h5>

                  <p className='mt-5'>Lorem Ipsum is simply dummy text of </p>

                  <p className='mt-4'>Lorem Ipsum is simply dummy text of </p>


                  <p className='mt-4'>Lorem Ipsum is simply dummy text of </p>




                </div>

            </div>
            
            <div className='col-12 col-md-4 p-3'>

                <div className='box p-4 text-white'>

                    <h5>Get Social</h5>

                    <div className='d-flex flex-row justify-content-evenly mt-5'>
                        <div className='' > 
                        <box-icon name='facebook-circle' type='logo' color='white' ></box-icon>
                        </div>
                        <div className=''>
                        <box-icon name='twitter' type='logo' color='white' ></box-icon>
                        </div>

                        <div className=''>
                        <box-icon name='instagram' type='logo' color='white'></box-icon>
                        </div>
                 
                    
                    </div>

                    <div className='mt-5  mb-4 butt text-white'>
                    <button>Tag us in your photos</button>
                    </div>
                
                

                    



                </div>

            </div>
             
        </div>

      </div>

      
    </div>
  )
}

export default Contact
