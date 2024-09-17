import React from 'react'

import img1 from '../../folder/top.jpg'

import './historyland.css'

import img2 from '../../folder/1.jpg'
import img3 from '../../folder/2.jpg'
import img4 from '../../folder/3.jpg'
import img5 from '../../folder/4.jpg'
import img6 from '../../folder/5.jpg'
import img7 from '../../folder/6.jpg'
import img8 from '../../folder/7.jpg'
import img9 from '../../folder/8.jpg'
import img10 from '../../folder/9.jpg'




function LandingHistory() {
    return (
        <div>
            <div className='hist pb-5 pt-5'>

                <div className='text-white text-center '>
                    <h2>The Royal Legacy Behind Jantar Mantar, Jaipur</h2>

                    <div className='container ' >

                        <div className='row'>

                            <div className='col-12 pt-5'>
                                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={img2} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={img3} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={img4} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={img5} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={img6} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={img7} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item ">
                                            <img src={img8} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={img9} class="d-block w-100" alt="..." />
                                        </div>
                                        <div class="carousel-item">
                                            <img src={img10} class="d-block w-100" alt="..." />
                                        </div>
                                    </div>
                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Previous</span>
                                    </button>
                                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="visually-hidden">Next</span>
                                    </button>
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
