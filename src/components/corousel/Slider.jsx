import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./slider.scss";
import logo from "../../img/carusel_foryou.png";
import sliderImg1 from "../../assets/image/slider.png";
import sliderImg2 from "../../assets/image/slider2.png";
import sliderImg3 from "../../assets/image/slider3.png";
import simage1 from "../../assets/image/simage1.png";
import simage2 from "../../assets/image/simage2.png";
import { NavLink } from "react-router-dom";

function Slider() {
  return (
    <>
      <Carousel className="first_carusel_bigdiv2">
        {/* <Carousel.Item className="first_carusel_bigdiv1">
          <Carousel.Caption className="first_carusel_bigdiv">
            <div className="first_carusel">
              <h1>
                Daha yaxşı
                <br /> <a>Gələcək üçün!</a>
              </h1>
              <p>
                Salam, əziz dost, səni aramızda görməkdən çox məmnunuq. İlk öncə
                gəl, tanış olaq, görək sən kimsən?, nə işlə məşğul olursan?.
                Bunun üçün “Gəl danışaq” butonuna klikləmən kifayət edir..{" "}
              </p>
              <button>
                <NavLink to="/quiz">Gəl danışaq</NavLink>
              </button>
            </div>
            <img
              className="first_carusel_img"
              src={sliderImg1}
              alt="First slide"
            />
          </Carousel.Caption>
        </Carousel.Item> */}
        <Carousel.Item className="first_carusel_bigdiv1">
          <img className="d-block w-100" src={sliderImg2} alt="First slide" />
          <Carousel.Caption className="first_carusel_bigdiv_toys">
            <div className="first_carusel1">
              <img src={simage1} className="first_carusel_simg1" />

              <h3>
                Əl əməyi ilə hazırlanan <br />
                oyuncaqlar
              </h3>
              <p>
                Sən buradan onlarla oyuncaq əldə edə bilərsən. Bütün oyuncaqlar
                100 % ekoloji paketlərdə, ən qısa zamanda qapınıza qədər
                çatdırılır. Bu oyuncaqları görmək üçün üçün “Məhsullar” butonuna
                klikləmən kifayət edir.
              </p>
              <button>
                <NavLink to="/product">Məhsullar</NavLink>
              </button>
              <img src={simage2} className="first_carusel_simg2" />
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item className="first_carusel_bigdiv1">
          <img className="d-block w-100" src={sliderImg3} alt="First slide" />
          <Carousel.Caption className="first_carusel_bigdiv">
            <div className="first_carusel">
              <h1>Psixoloqlarımız</h1>
              <p>
                Və bizim biri-birindən şən, enerjili psixoloqlarımız səni
                gözləyir. “Psixoloqlarımız” butonuna klikləyərək onlar haqqında
                ətraflı məlumat ala və görüş vaxtı təyin edə bilərsiniz.
              </p>
              <button>
                <NavLink to="/psx">Psixoloqlarımız</NavLink>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export default Slider;
