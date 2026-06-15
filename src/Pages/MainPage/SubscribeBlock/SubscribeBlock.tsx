import "./SubscribeBlock.scss";

export const SubscribeBlock = () => {
  return (
    <section className="subscribe-block">
      <div className="subscribe-block__container">
        <div className="subscribe-block__img"></div>
        <div className="subscribe-block__content">
          <div className="subscribe-block__text-content">
            <h1 className="subscribe-block__title">Subscribe To Our Newsletter</h1>
            <p className="main-page__text subscribe-block__text-content--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
              duis ultrices sollicitudin
            </p>

            <span className="subscribe-block__text-content--email">
              vladkygot@gmail.com
            </span>
          </div>
          <div className="subscribe-block__btn">Subscribe Now</div>
        </div>
        <div className="subscribe-block__img right"></div>
      </div>
    </section>
  );
};
