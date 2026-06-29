import { useParams } from "react-router-dom";
import goods from "../../../public/Goods.json";
import { useEffect, useState } from "react";
import './GoodsPage.scss';

const dateFinal = new Date("2026-06-21T10:00:00");

export const GoodsPage = () => {
  const { id } = useParams<{ id: string }>();
  const goodsItem = goods.find((item) => item.id.toString() === id);

  const [nowTime, setNowTime] = useState<string>("Loading...");

  const timeDelivery = [new Date(), new Date()];
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "short",
  };
  timeDelivery[0].setDate(timeDelivery[0].getDate() + 14);
  timeDelivery[1].setDate(timeDelivery[1].getDate() + 21);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const endTime = dateFinal.getTime() - now.getTime();

      if (endTime <= 0) {
        setNowTime("00 : 00 : 00 : 00");
        return;
      }

      const days = Math.floor(endTime / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (endTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const mins = Math.floor((endTime % (1000 * 60 * 60)) / (1000 * 60));
      const sec = Math.floor((endTime % (1000 * 60)) / 1000);
      const formattedDays = String(days).padStart(2, "0");
      const formattedHours = String(hours).padStart(2, "0");
      const formattedMins = String(mins).padStart(2, "0");
      const formattedSec = String(sec).padStart(2, "0");

      const TimeForPage = `${formattedDays} : ${formattedHours} : ${formattedMins} : ${formattedSec}`;
      setNowTime(TimeForPage);
    };
    updateTimer();

    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="goods-page">
      <div className="goods-page__img-block"></div>
      <div className="goods-page__content-block">
        <div className="">
          <h3 className="goods-page__logo">FASCO</h3>
          <div className="goods-page__title-block">
            <h1 className="goods-page__title">{goodsItem?.title}</h1>
            <p className="goods-page__favourite">★</p>
          </div>

          <div className="goods-page__rating__block">
            {goodsItem && (
              <div className="card__raiting">
                {Array.from({ length: Math.round(goodsItem.rating) }).map(
                  (_, index) => (
                    <span className="card__raiting--item" key={index}>
                      ★
                    </span>
                  ),
                )}
              </div>
            )}
            <p className="goods-page__rating__review">
              ({goodsItem?.reviewCount})
            </p>
          </div>
          <div className="goods-page__price">
            ${goodsItem?.price}{" "}
            <span className="goods-page__price--old">$oldPrice</span>{" "}
            <span className="goods-page__price--persents">SAVE !!%</span>
          </div>
        </div>

        <div className="goods-page__time">
          <h3 className="goods-page__time--title">Hurry up! Sale ends in:</h3>
          <p className="goods-page__time--date">{nowTime}</p>
        </div>

        <div className="goods-page__storage">
          <p className="goods-page__storage--title">
            Only <span>{9}</span> item(s) left in stock!
          </p>
          <div className="goods-page__storage--line"></div>
        </div>
        <div className="">
          <div className="goods-page__elements">
            <h2 className="goods-page__elements--title">
              Size: {goodsItem?.sizes[0]}
            </h2>

            <div className="goods-page__elements--block">
              {goodsItem?.sizes.map((element, index) => {
                return (
                  <span className="goods-page__elements--item">{element}</span>
                );
              })}
            </div>
          </div>

          <div className="goods-page__elements">
            <h2 className="goods-page__elements--title">
              Color: <strong>{goodsItem?.colors[0]}</strong>
            </h2>

            <div className="goods-page__elements--block">
              {goodsItem?.colors.map((element, index) => {
                return (
                  <span className="goods-page__elements--item">{element}</span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="goods-page__cart">
          <h2 className="goods-page__title">Quantity</h2>
          <div className="goods-page__cart__block">
            <div className="goods-page__cart__btn-block">
              <div className="goods-page__cart__btn-small">-</div>
              <span className="goods-page__cart__number">0</span>
              <div className="goods-page__cart__btn-small">+</div>
            </div>
          </div>

          <div className="goods-page__some-link">
            <p className="goods-page__some-link--item">Compare</p>
            <p className="goods-page__some-link--item">Ask a question</p>
            <p className="goods-page__some-link--item">Share</p>
          </div>
        </div>

        <div className="goods-page__delivery">
          <div className="delivery-block">
            <div className="delivery-block__img"></div>
            <h2 className="delivery-block__title">Estimated Delivery:</h2>
            <h3 className="delivery-block__date">
              {timeDelivery[0].toLocaleDateString("en-EN", options)} -{" "}
              {timeDelivery[1].toLocaleDateString("en-EN", options)}
            </h3>
          </div>

          <div className="delivery-block">
            <div className="delivery-block__img"></div>
            <h2 className="delivery-block__title">Free Shipping & Returns:</h2>
            <h3 className="delivery-block__date"> On all orders over $75</h3>
          </div>
        </div>

        <div className="goods-page__pay">
          <div className="goods-page__pay--img"></div>
          <div className="goods-page__pay--title">
            Guarantee safe & secure checkout
          </div>
        </div>
      </div>
    </div>
  );
};
