import "./MainPage.scss";
import leftImage from "../../img/mainPage/left.png";
import topImage from "../../img/mainPage/top.png";
import bottomImage from "../../img/mainPage/bottom-removebg.png";
import rightImage from "../../img/mainPage/right.png";
import { TimeBlock } from "./TimeBlock/TimeBlock";
import { SwiperBlock } from "./SwiperBlock/SwiperBlock";
import { Cardblock } from "./CardBlock/CardBlock";
import { PeakyBlindersBlock } from "./PeakyBlindersBlock/PeakyBlindersBlock";
import { clsx as cn } from "clsx";
import photoInstagram1 from "../../img/mainPage/instagram/image_1.png";
import photoInstagram2 from "../../img/mainPage/instagram/image_2.png";
import photoInstagram3 from "../../img/mainPage/instagram/image_3.png";
import photoInstagram4 from "../../img/mainPage/instagram/image_4.png";
import photoInstagram5 from "../../img/mainPage/instagram/image_5.png";
import photoInstagram6 from "../../img/mainPage/instagram/image_6.png";
import photoInstagram7 from "../../img/mainPage/instagram/image_7.png";
import { ResponseBlock } from "./ResponseBlock/ResponseBlock";

export const instagramPhotos = [
  photoInstagram1,
  photoInstagram2,
  photoInstagram3,
  photoInstagram4,
  photoInstagram5,
  photoInstagram6,
  photoInstagram7,
];

export const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <section className="main-page__block">
          <div className="main-page__photo">
            <img src={leftImage} alt="left decoration" />
          </div>

          <div className="main-page__photo tablet--watch">
            <img src={rightImage} alt="right decoration" />
          </div>

          <div className="main-page__center">
            <img
              src={topImage}
              alt="main page top"
              className="main-page__center-image"
            />

            <div className="main-page__center__text">
              <h2 className="main-page__text">ULTIMATE</h2>
              <h1 className="main-page__text">SALE</h1>
              <h3 className="main-page__text">NEW COLLECTION</h3>

              <div className="main-page__center__button">SHOP NOW</div>
            </div>

            <img
              src={bottomImage}
              alt="main page bottom"
              className="main-page__center-image bottom"
            />
          </div>

          <div className="main-page__photo tablet--delete">
            <img src={rightImage} alt="right decoration" />
          </div>
        </section>

        <div className="main-page__partners">
          <div className="main-page__partners__item"></div>
          <div className="main-page__partners__item main-page__partners__item--2"></div>
          <div className="main-page__partners__item main-page__partners__item--3"></div>
          <div className="main-page__partners__item main-page__partners__item--4"></div>
          <div className="main-page__partners__item main-page__partners__item--5"></div>
        </div>
      </div>

      <section className="time-slider-block">
        <div className="time-slider-block__container">
          <TimeBlock />
          <SwiperBlock />
        </div>
      </section>

      <div className="main-page">
        <section className="main-page__content-block first">
          <h1 className="main-page__title">New Arrival</h1>
          <p className="main-page__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
          <Cardblock />
        </section>
      </div>

      <section className="main-page__content-block first">
        <PeakyBlindersBlock />
      </section>

      <section className="opportunity">
        <div className="opportunity__item">
          <div className="opportunity__img"></div>
          <div className="opportunity__content">
            <h2 className="opportunity__title">High Quality</h2>
            <span className="opportunity__text">
              Crafted from top materials
            </span>
          </div>
        </div>

        <div className="opportunity__item">
          <div className="opportunity__img opportunity__img--2"></div>
          <div className="opportunity__content">
            <h2 className="opportunity__title">Warrany Protection</h2>
            <span className="opportunity__text">Over 2 years</span>
          </div>
        </div>

        <div className="opportunity__item">
          <div className="opportunity__img opportunity__img--3"></div>
          <div className="opportunity__content">
            <h2 className="opportunity__title">Free Shipping</h2>
            <span className="opportunity__text">Order over 150 $</span>
          </div>
        </div>

        <div className="opportunity__item">
          <div className="opportunity__img opportunity__img--4"></div>
          <div className="opportunity__content">
            <h2 className="opportunity__title">24 / 7 Support</h2>
            <span className="opportunity__text">Dedicated support</span>
          </div>
        </div>
      </section>

      <section className="main-page__content-block first">
        <h1 className="main-page__title">Follow Us On Instagram</h1>
        <p className="main-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
          sollicitudin
        </p>

        <div className="main-page__block-pictures">
          {instagramPhotos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt="photo instagram"
              className={cn(
                "main-page__block-pictures--item",
                index % 2 === 0 && "main-page__block-pictures--small",
              )}
            />
          ))}
        </div>
      </section>

      <section className="main-page__content-block main-page__content-block--response">
        <h1 className="main-page__title">This Is What Our Customers Say</h1>
        <p className="main-page__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>

        <div className="">
          <ResponseBlock />
        </div>


        
      </section>
    </>
  );
};
