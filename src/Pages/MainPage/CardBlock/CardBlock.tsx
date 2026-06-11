import "./CardBlock.scss";
import Goods from "../../../../public/Goods.json";
import type { GoodsItem } from "../../../Components/utills/Goods";
import { NavLink, useSearchParams } from "react-router-dom";

export const Cardblock = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentCategory = searchParams.get("category") || "men-fashion";
  let filteredGoods: GoodsItem[] = [];

  if (currentCategory === "men-fashion") {
    filteredGoods = Goods.filter((item) => item.id.toString().startsWith("mf"));
  } else if (currentCategory === "women-fashion") {
    filteredGoods = Goods.filter((item) => item.id.toString().startsWith("wf"));
  } else if (currentCategory === "discount") {
    filteredGoods = Goods.filter(
      (item) => item.discountPrice && item.discountPrice < item.price,
    );
  } else {
    filteredGoods = Goods;
  }

  const handleTabClick = (categoryName: string) => {
    setSearchParams({ category: categoryName });
  };

  return (
    <div className="card-block">
      <div className="button-container">
        <h3
          className={`button-container__item ${currentCategory === "men-fashion" ? "active" : ""}`}
          onClick={() => handleTabClick("men-fashion")}
        >
          Men’s Fashion
        </h3>

        <h3
          className={`button-container__item ${currentCategory === "women-fashion" ? "active" : ""}`}
          onClick={() => handleTabClick("women-fashion")}
        >
          Women’s Fashion
        </h3>

        <h3
          className={`button-container__item ${currentCategory === "women-acces" ? "active" : ""}`}
          onClick={() => handleTabClick("women-acces")}
        >
          Women Accessories
        </h3>

        <h3
          className={`button-container__item ${currentCategory === "men-acces" ? "active" : ""}`}
          onClick={() => handleTabClick("men-acces")}
        >
          Men Accessories
        </h3>

        <h3
          className={`button-container__item ${currentCategory === "discount" ? "active" : ""}`}
          onClick={() => handleTabClick("discount")}
        >
          Discount Deals
        </h3>
      </div>

      <div className="card-container">
        {filteredGoods.slice(0, 6).map((good) => (
          <NavLink to={`/goods/${good.id}`} key={good.id} className="card">
            <img
              src={good.imageUrls?.[0]}
              alt={good.title}
              className="card__img"
            />
            <div className="card__content">
              <div className="card__content__block--main">
                <div className="card__content__block">
                  <h1 className="card__title">{good.title}</h1>
                  <h3 className="card__brand">{good.brand}</h3>
                </div>
                {good.rating && (
                  <div className="card__raiting">
                    {Array.from({ length: Math.round(good.rating) }).map(
                      (_, index) => (
                        <span className="card__raiting--item" key={index}>★</span>
                      ),
                    )}
                  </div>
                )}
              </div>

              <p className="card__text">{good.reviewCount} Customer Reviews</p>

              <div className="card__content__block--main">
                <h1 className="card__title">
                  ${good.discountPrice ? good.discountPrice : good.price}
                </h1>
                {good.inStock > 0 ? (
                  <p className="card__text" style={{ color: "green" }}>
                    Buy
                  </p>
                ) : (
                  <p className="card__text" style={{ color: "red" }}>
                    Nothing
                  </p>
                )}
              </div>
            </div>
          </NavLink>
        ))}
      </div>

      <div className="button-container" style={{ justifyContent: "center" }}>
        <NavLink
          style={{ textDecoration: "none" }}
          to="view-more"
          className="button-container__item button-container__item--more active"
        >
          View More
        </NavLink>
      </div>
    </div>
  );
};
