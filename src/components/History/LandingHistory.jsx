import React from 'react'

import img1 from '../../folder/top.jpg'

import './historyland.css'

import img2 from '../../folder/1.jpg'
import img3 from '../../folder/1.jpg'
import img4 from '../../folder/1.jpg'
import img5 from '../../folder/1.jpg'
import img6 from '../../folder/1.jpg'
import img7 from '../../folder/1.jpg'
import img8 from '../../folder/1.jpg'
import img9 from '../../folder/1.jpg'




function LandingHistory() {
    return (
        <div>
            <div className='hist'>

                <div className='text-white text-center'>
                    <h2>The Royal Legacy Behind Jantar Mantar, Jaipur</h2>

                    <div className='container ' style={{ backgroundColor: 'red' }}>

                        <div className='row'>

                            <div className='col-12'>
                                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img class="d-block w-100" src={img2} alt="First slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={img3} alt="Second slide" />
                                        </div>
                                        <div class="carousel-item">
                                            <img class="d-block w-100" src={img4} alt="Third slide" />
                                        </div>
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
                                    </a>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default LandingHistory
