import React from 'react'
import './caro.css'
import img2 from '../../folder/1.jpg'
import img3 from '../../folder/2.jpg'
import img4 from '../../folder/3.jpg'
import img5 from '../../folder/4.jpg'
import img6 from '../../folder/5.jpg'
import img7 from '../../folder/6.jpg'
import img8 from '../../folder/7.jpg'
import img9 from '../../folder/8.jpg'
import img10 from '../../folder/9.jpg'
function Instcarousel() {
  return (
    <div>

        <div className='caro'>

            <div className='container pt-5'>
                <div className='col-12 text-center pt-5 d-felx flex-column flex-center'>
                <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{backgroundColor:'black',opacity:'70%'}}>    Instrument 1 slide label</h1>
        <p  style={{backgroundColor:'black',opacity:'70%'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{backgroundColor:'black',opacity:'70%'}}>  Instrument 2 slide label</h1>
        <p  style={{backgroundColor:'black',opacity:'70%'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src={img4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{backgroundColor:'black',opacity:'70%'}}>  Instrument 3 label</h1>
        <p  style={{backgroundColor:'black',opacity:'70%'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src={img5} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{backgroundColor:'black',opacity:'70%'}}>  Instrument 4 label</h1>
        <p  style={{backgroundColor:'black',opacity:'70%'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src={img6} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{backgroundColor:'black',opacity:'70%'}}>  Instrument 5 label</h1>
        <p  style={{backgroundColor:'black',opacity:'70%'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item ">
      <img src={img7} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{backgroundColor:'black',opacity:'70%'}}>  Instrument 6 label</h1>
        <p  style={{backgroundColor:'black',opacity:'70%'}}>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Instcarousel
