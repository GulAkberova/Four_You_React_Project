import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper";
import Card from "../../components/card/Card";
import { data } from "../../api/data";

function SwiperProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    data.getAll("product").then((res) => {
      console.log(res);
      setProducts(res);
      setLoading(false);
    });
  }, []);
  console.log(products);
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
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
      >
        {loading ? (
          <div className="loader_div">
            <span className="loader"></span>
          </div>
        ) : (
          products &&
          products.map((index, key) => (
            <SwiperSlide>
              <div className="mehsul_div">
                <Card index={index} key={key} />
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

export default SwiperProduct;
