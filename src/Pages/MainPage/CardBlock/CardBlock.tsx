import { useEffect, useState } from "react";
import "./CardBlock.scss";

import womenFashion from "../../../../public/WomenGoods.json";
import menFashion from "../../../../public/MenGoods.json";

export interface Goods {
  id: string | number;
  title: string;
  description?: string;
  price: number;
  image: string;
  category?: string;
  inStock: boolean;
}

export const Cardblock = () => {
  const [isTypePage, setTypePage] = useState("men-fashion");
  const [isGoodsList, setGoodsList] = useState(womenFashion);

  useEffect(() => {
    if (isTypePage === "men-fashion") {
      setGoodsList(menFashion);
    } else if (isTypePage === "women-fashion") {
      setGoodsList(womenFashion);
    }
  }, [isTypePage]);

  return (
    <div className="card-block">
      <div className="button-container">
        <h3
          className={`button-container__item ${isTypePage === "men-fashion" ? "active" : ""}`}
          onClick={() => setTypePage("men-fashion")}
        >
          Men’s Fashion
        </h3>

        <h3
          className={`button-container__item ${isTypePage === "women-fashion" ? "active" : ""}`}
          onClick={() => setTypePage("women-fashion")}
        >
          Women’s Fashion
        </h3>

        <h3
          className={`button-container__item ${isTypePage === "women-acces" ? "active" : ""}`}
          onClick={() => setTypePage("women-acces")}
        >
          Women Accessories
        </h3>

        <h3
          className={`button-container__item ${isTypePage === "men-acces" ? "active" : ""}`}
          onClick={() => setTypePage("men-acces")}
        >
          Men Accessories
        </h3>

        <h3
          className={`button-container__item ${isTypePage === "discount" ? "active" : ""}`}
          onClick={() => setTypePage("discount")}
        >
          Discount Deals
        </h3>
      </div>

      <div className="card-container">
        {isGoodsList.slice(0, 6).map((good) => (
          <div className="card">
            <img src={good.imageUrl} alt="" className="card__img" />
            <div className="card__content">
              <div className="card__content__block--main">
                <div className="card__content__block">
                  <h1 className="card__title">{good.title}</h1>
                  <h3 className="card__brand">{good.brand}</h3>
                </div>
                <div className="card__raiting">★{good.rating}</div>
              </div>

              <p className="card__text">{good.reviewCount} Customer Reviews</p>

              <div className="card__content__block--main">
                <h1 className="card__title">${good.price}</h1>
                {good.inStock ? (
                  <p className="card__text">Buy</p>
                ) : (
                  <p className="card__text">Nothing</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
