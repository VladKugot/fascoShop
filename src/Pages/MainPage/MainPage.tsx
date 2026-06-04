import "./MainPage.scss";
import leftImage from "../../img/mainPage/left.png";
import topImage from "../../img/mainPage/top.png";
import bottomImage from "../../img/mainPage/bottom-removebg.png";
import rightImage from "../../img/mainPage/right.png";
import { TimeBlock } from "./TimeBlock/TimeBlock";
import { SliderBlock } from "./SliderBlock/SliderBlock";

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

      <section className="time-and-slider">
        <div className="time-and-slider__container">
          <TimeBlock />

          <SliderBlock />
        </div>
      </section>
    </>
  );
};
