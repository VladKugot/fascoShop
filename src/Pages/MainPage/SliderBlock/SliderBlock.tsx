import "./SliderBlock.scss";

export const SliderBlock = () => {
  return (
    <div className="slider-block">
      <div className="slider-block__button-block">
        <div className="slider-block__button-block--button">L</div>
        <div className="slider-block__button-block--button right">R</div>
      </div>

      <div className="slider-block__picture__block">
        <div className="slider-block__picture slider-block__picture--main">
          <div className="slider-block__picture__text-block">
            <p className="slider-block__picture__text-block--top">
              01 - Spring Sale
            </p>
            <p className="slider-block__picture__text-block--botton">30% OFF</p>
          </div>
        </div>
        <div className="slider-block__picture__container">
          <div className="slider-block__picture__block many">
            <div className="slider-block__picture"></div>
            <div className="slider-block__picture"></div>
          </div>

          <div className="slider-block__picture__slider">
            <p className="slider-block__picture__slider--item active"></p>
            <p className="slider-block__picture__slider--item"></p>
            <p className="slider-block__picture__slider--item"></p>
            <p className="slider-block__picture__slider--item"></p>
          </div>
        </div>
      </div>
    </div>
  );
};
