import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './slider.scss'
import logo from '../../img/carusel_foryou.png'
import { NavLink } from 'react-router-dom';


function Slider() {
  return (
    <>
    <Carousel className='first_carusel_bigdiv2'>
      <Carousel.Item className='first_carusel_bigdiv1'>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption className='first_carusel_bigdiv'>
        <div className='first_carusel'>
        <h1>Daha yaxşı <p>Gələcək üçün!</p></h1>
        <button><NavLink to='/quiz'>Gəl danışaq</NavLink></button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='first_carusel_bigdiv1'>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption className='first_carusel_bigdiv'>
        <div className='first_carusel'>
        <h1>Daha yaxşı <p>Gələcək üçün!</p></h1>
        <button><NavLink to='/quiz'>Gəl danışaq</NavLink></button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='first_carusel_bigdiv1'>
        <img
          className="d-block w-100"
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption className='first_carusel_bigdiv'>
        <div className='first_carusel'>
        <h1>Daha yaxşı <p>Gələcək üçün!</p></h1>
        <button><NavLink to='/quiz'>Gəl danışaq</NavLink></button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

    </>
  )
}

export default Slider