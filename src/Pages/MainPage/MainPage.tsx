import "./MainPage.scss";
import leftImage from "../../img/mainPage/left.png";
import topImage from "../../img/mainPage/top.png";
import bottomImage from "../../img/mainPage/bottom-removebg.png";
import rightImage from "../../img/mainPage/right.png";
import { TimeBlock } from "./TimeBlock/TimeBlock";
import { SwiperBlock } from "./SwiperBlock/SwiperBlock";
import { Cardblock } from "./CardBlock/CardBlock";
import { PeakyBlindersBlock } from "./PeakyBlindersBlock/PeakyBlindersBlock";

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
      
      <div className="main-page">
        <section className="main-page__content-block first">
          <h1 className="main-page__title">Follow Us On Instagram</h1>
          <p className="main-page__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
        </section>

        <section className="main-page__content-block">
          <h1 className="main-page__title">This Is What Our Customers Say</h1>
          <p className="main-page__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
          </p>
        </section>
      </div>
    </>
  );
};
