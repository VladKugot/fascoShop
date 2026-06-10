import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SwiperBlock.scss";
import { memo } from "react";
import prevIcon from "../../../img/mainPage/prev.svg";
import nextIcon from "../../../img/mainPage/next.svg";
import slidesData from '../../../../public/SwiperPhoto.json'

export const SwiperBlock = memo(() => {

  return (
    <div className="asymmetric-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        slidesPerView={"auto"}
        centeredSlides={false}
        spaceBetween={0}
        grabCursor={true}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {slidesData.map((el, index) => (
          <SwiperSlide key={index} className="asymmetric-slide">
            <div className="slide-inner">
              <img
                src={el.imgUrl}
                alt={`Slide ${index}`}
                className="asymmetric-img"
              />

              <div className="slide-inner__text-block">
                <p className="slider-inner__text-block--top">
                  {el.number} - {el.title}
                </p>
                <p className="slider-inner__text-block--bottom">
                  {el.discount}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-custom custom-prev">
          <img src={prevIcon} alt="Previous" />
        </div>

        <div className="swiper-button-custom custom-next">
          <img src={nextIcon} alt="Next" />
        </div>
      </Swiper>
    </div>
  );
});
