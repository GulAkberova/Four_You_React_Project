import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import PsxCard from "../../components/card/PsxCard";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper";
import { data } from "../../api/data";

function SwiperPsx() {
  const [psx, setPsx] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    data.getAll("doctor").then((res) => {
      setPsx(res);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        //  centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        // modules={
        //   [Navigation]
        // }
        //    pagination={{
        //    clickable: true,
        //    el:'.swiper-pagination '
        //  }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        className="mySwiper"
        //  freeMode={true}
        modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Autoplay]}
        spaceBetween={10}
        //  navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        //  pagination={{
        //    clickable: true,
        //    dynamicBullets: true,
        //  }}
        //  autoplay={{
        //    delay: 1500,
        //    disableOnInteraction: false,
        //  }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {loading ? (
          <div className="loader_div">
            <span className="loader"></span>
          </div>
        ) : (
          psx &&
          psx.map((index, key) => (
            <SwiperSlide>
              <div className="pscology_card_div">
                <PsxCard index={index} key={key} />
              </div>
            </SwiperSlide>
          ))
        )}

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}

export default SwiperPsx;
