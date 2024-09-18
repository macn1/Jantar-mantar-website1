import React from 'react'

import './visit.css'

import img from '../../folder/img.png'

import img1 from '../../folder/map.png'

function Visithome() {
  return (
    <div>
      <div className='visit'>

        <div className='container'>

          <div className='row'>

            <div className='col-12 col-md-6 text-center'>

              <div className='col-12 col-md-6 text- mt-5' style={{ backgroundColor: 'white', opacity: '70%' }}>
                <h2 className='text-center'>Visiting Hours</h2>
                <p className='p-2'>Jantar Mantar is open from 9:00 AM to 5:00 PM seven days a week making it convenient for visitors to explore the monument throughout the day.</p>

              </div>
              <div className='col-12 col-md-6 mt-3' style={{ backgroundColor: 'white', opacity: '70%', }}>
                <h3 className='text-center p-1'>Ticket Information</h3>
                <p className='p-1'>Tickets can be purchased at the entrance or online. For international visitors, the ticket price is ₹200, while for Indian visitors, the price is ₹50. A guided tour or an audio guide is highly recommended to fully understand the scientific and historical significance of the site.</p>

              </div>


            </div>
            <div className='col-12 col-md-6 mt-4'>

              <img src={img} alt="" style={{ width: "100%" }} />




            </div>
            <div className='col-12 col-md-6 mt-5'>

              <a href="https://www.google.com/maps/place/Jantar+Mantar/@28.6270594,77.2140464,770m/data=!3m1!1e3!4m14!1m7!3m6!1s0x390cfd4a694fc49b:0xa24a6ec962781b0c!2sJantar+Mantar!8m2!3d28.6270547!4d77.2166267!16zL20vMDdyNmQ3!3m5!1s0x390cfd4a694fc49b:0xa24a6ec962781b0c!8m2!3d28.6270547!4d77.2166267!16zL20vMDdyNmQ3?entry=ttu&g_ep=EgoyMDI0MDkxNS4wIKXMDSoASAFQAw%3D%3D">  <img src={img1} alt="" className='mt-5' style={{ width: "70%", height: '80%' }} /></a>

         




            </div>

            <div className='col-12 col-md-6 mt-5'>

             <h1 className='mt-5 text-white '>Maps</h1>

             <p className='text-white fs-3'> Located in the heart of Jaipur, Jantar Mantar is easily accessible by car, taxi, or public transport. The monument is close to other attractions such as the City Palace and Hawa Mahal, making it part of a perfect day of exploration.</p>




            </div>


          </div>

        </div>


      </div>

    </div>
  )
}

export default Visithome
