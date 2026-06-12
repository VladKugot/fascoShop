import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/modules";

import "../SwiperBlock/SwiperBlock.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow"; // <--- ОБОВ'ЯЗКОВО ДЛЯ 3D
import "./ResponseBlock.scss";
import response from "../../../../public/responses.json";
import nextIcon from '../../../img/mainPage/next.svg';
import prevIcon from '../../../img/mainPage/prev.svg';

export const ResponseBlock = memo(() => {
  return (
    <div className="response-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        grabCursor={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 100,
          modifier: 1.8,
          slideShadows: false,
        }}
      >
        {response.map((el, index) => (
          <SwiperSlide key={index} className="response-slide">
            <div className="response-block__card">
              <img
                src={el.avatar}
                alt="person avatar"
                className="response-block__avatar"
              />
              <div className="response-block__text-content">
                <p className="response-block__review">{el.review}</p>

                <div className="response-block__raiting">
                  {Array.from({ length: Math.round(el.rating) }).map(
                    (_, idx) => (
                      <span className="response-block__raiting--item" key={idx}>
                        ★
                      </span>
                    ),
                  )}
                </div>

                <span className="response-block__line"></span>
                <h1 className="response-block__name">{el.name}</h1>
                <h2 className="response-block__role">{el.role}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
});
