import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './slider.scss'
import logo from '../../img/carusel_foryou.png'
import sliderImg1 from '../../assets/image/slider.png'
import sliderImg2 from '../../assets/image/slider2.png'
import sliderImg3 from '../../assets/image/slider3.png'
import simage1 from '../../assets/image/simage1.png'
import simage2 from '../../assets/image/simage2.png'
import { NavLink } from 'react-router-dom';


function Slider() {
  return (
    <>
    <Carousel className='first_carusel_bigdiv2'>
      <Carousel.Item className='first_carusel_bigdiv1'>
      <Carousel.Caption className='first_carusel_bigdiv'>
        <div className='first_carusel'>
        <h1>Daha yaxşı<br/> <a>Gələcək üçün!</a></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. </p>
        <button><NavLink to='/quiz'>Gəl danışaq</NavLink></button>
        </div>
        <img
        className='first_carusel_img'
          src={sliderImg1}
          alt="First slide"
        />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='first_carusel_bigdiv1'>
        <img
          className="d-block w-100"
          src={sliderImg2}
          alt="First slide"
        />
        <Carousel.Caption className='first_carusel_bigdiv_toys'>
        <div className='first_carusel1'>
        <img src={simage1} className='first_carusel_simg1'/>

          <span>New in February</span>
        <h3>Up to <span><b>40%</b> </span>off our Products! </h3>
        <p>When you've found the books you want we'll ship qualifying orders to your door for FREE in 100% recyclable packaging.</p>
        <button><NavLink to='/quiz'>Məhsullar</NavLink></button>
        <img src={simage2} className='first_carusel_simg2'/>

        </div>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='first_carusel_bigdiv1'>
        <img
          className="d-block w-100"
          src={sliderImg3}
          alt="First slide"
        />
        <Carousel.Caption className='first_carusel_bigdiv'>
        <div className='first_carusel'>
        <h1>Kid and Doctor Best Relation Lorem<br/> Impsum</h1>
        <button><NavLink to='/quiz'>Psixoloqlarımız</NavLink></button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

    </>
  )
}

export default Slider