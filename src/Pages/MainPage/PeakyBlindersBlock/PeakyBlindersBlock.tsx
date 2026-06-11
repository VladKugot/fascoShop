import "./PeakyBlindersBlock.scss";

export const PeakyBlindersBlock = () => {
  return (
    <div className="peaky-block">
      <div className="peaky-block__container">
        <div className="peaky-block__img"> </div>

        <div className="peaky-block__content">
          <p className="peaky-block__text">Women Collection</p>
          <h1 className="peaky-block__title main-page__title">
            Peaky Blinders
          </h1>
          <h2 className="peaky-block__description">Description</h2>

          <p className="peaky-block__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Scelerisque duis.
          </p>

          <div className="peaky-block__size">
            Size: <span className="peaky-block__size--btn">M</span>
          </div>

          <h2 className="peaky-block__price">$100</h2>

          <div className="peaky-block__button">Buy Now</div>
        </div>
      </div>
    </div>
  );
};
