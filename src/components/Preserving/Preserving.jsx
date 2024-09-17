import React from 'react'

import './preserv.css'

import img1 from '../../folder/100.jpg'

function Preserving() {
    return (
        <div>
            <div className='heri'>

                <div className='container hell'>

                    <div className='row'>

                        <div className='col-12  ' >
                            <h1 className='text-white text-center' >Preserving the Legacy of Jantar Mantar</h1>

                        </div>
                        <div className='video col-12 mt-5'>
                            <h5 className='text-white text-center'>Heritage Video</h5>
                            <div className="video-container " >

                                <video controls style={{ width: '100%', }}>
                                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        <div className='col-12 col-md-4 mt-5 mb-5' >

                            <div className='container' style={{ backgroundColor: 'white', height: '300px', opacity: '60%' }}>
                                <h2>Expert 1</h2>
                                <p className='mt-4'>As a UNESCO World Heritage site, Jantar Mantar is not only an architectural wonder but also a priceless repository of scientific knowledge. The conservation of this monument involves a multi-faceted approach, combining modern restoration techniques with traditional craftsmanship. The preservation efforts are crucial to maintaining the structural integrity of the instruments while ensuring they remain functional for future generations of scholars and astronomers</p>

                            </div>


                        </div>
                        <div className='col-12 col-md-4 mt-5 mb-5' >

                            <div className='container' style={{ backgroundColor: 'white', height: '300px', opacity: '60%' }}>
                                <h2>Expert 2</h2>
                                <p className='mt-4'>Various initiatives by the Archaeological Survey of India (ASI) and local authorities have been put in place to protect Jantar Mantar from environmental damage and urban encroachment. Restoration projects focus on the wear and tear caused by time and weather, using authentic materials that retain the original look and feel of the monument.</p>
                            </div>


                        </div>
                        <div className='col-12 col-md-4 mt-5 mb-5' >

                            <div className='container' style={{ backgroundColor: 'white', height: '300px', opacity: '60%' }}>
                                <h2>Expert 1</h2>
                                <p className='mt-4'>Educational programs and heritage walks are also regularly conducted to raise awareness about the significance of Jantar Mantar and promote cultural tourism, ensuring that this astronomical marvel continues to inspire curiosity and reverence among visitors.</p>
                            </div>


                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Preserving
